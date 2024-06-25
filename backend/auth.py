from flask_restx import Resource, Namespace, fields
from models import Usuario
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import JWTManager,create_access_token,create_refresh_token,jwt_required, get_jwt_identity
from flask import Flask,request,jsonify,make_response


auth_ns=Namespace('auth', description="namespace para autenticação")


cadastro_model=auth_ns.model(
    "Cadastro",
    {
        "email":fields.String(required=True),
        "senha":fields.String(required=True),
        "cep":fields.String(required=True),
        "respondeu":fields.Boolean(),
        "cepvalido":fields.Boolean(required=True),
        "ehadmin":fields.Boolean()

    }
)
login_model=auth_ns.model(
    "Login",
    {
        "email":fields.String(required=True),
        "senha":fields.String(required=True)
    }
)

@auth_ns.route('/cadastro')
class Cadastro(Resource):
    @auth_ns.expect(cadastro_model)
    def post(self):
        data = request.get_json()

        email = data.get('email')
        db_user = Usuario.query.filter_by(email=email).first()

        if db_user is not None:
            return make_response(jsonify({"mensagem": f"Este email: {email} já está vinculado a uma conta."}), 400)

        ehadmin = 0
        if email.endswith("@petrobras.com"):
            ehadmin = 1

        new_user = Usuario(
            email=email,
            senha=generate_password_hash(data.get('senha')),
            cep=data.get('cep'),
            respondeu=data.get('respondeu'),
            cepvalido=data.get('cepvalido'),
            ehadmin=ehadmin

        )

        new_user.save()
        return make_response(jsonify({"mensagem": "Usuário cadastrado com sucesso!"}), 201)


@auth_ns.route('/check/<string:email>')
class ChecarFlags(Resource):
    def get(self, email):
        user = Usuario.query.filter_by(email=email).first()

        if user is None:
            return make_response(jsonify({"mensagem": f"Usuário com email: {email} não encontrado."}), 404)

        user_data = {
            "email": user.email,
            "respondeu": user.respondeu,
            "cepvalido": user.cepvalido,
            "ehadmin": user.ehadmin
        }

        return make_response(jsonify(user_data), 200)


@auth_ns.route('/cadastro/<string:email>')
class CadastroAlterar(Resource):
    @auth_ns.expect(cadastro_model)
    @jwt_required()
    def put(self, email):
        data = request.get_json()

        cadastro_a_alterar = Usuario.query.filter_by(email=email).first()
        if cadastro_a_alterar is None:
            return make_response(jsonify({"mensagem": "Usuário não encontrado"}), 404)

        if 'senha' in data:
            cadastro_a_alterar.senha = generate_password_hash(data['senha'])
        if 'cep' in data:
            cadastro_a_alterar.cep = data['cep']
        if 'respondeu' in data:
            cadastro_a_alterar.respondeu = data['respondeu']
        if 'cepvalido' in data:
            cadastro_a_alterar.cepvalido = data['cepvalido']
        
        cadastro_a_alterar.save()
        return make_response(jsonify({"mensagem": "Cadastro atualizado com sucesso"}), 200)



@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data=request.get_json()
        
        email=data.get('email')
        senha=data.get('senha')

        db_user=Usuario.query.filter_by(email=email).first()

        if db_user and check_password_hash(db_user.senha, senha):
            access_token=create_access_token(identity=db_user.email)
            refresh_token=create_refresh_token(identity=db_user.email)

            return make_response(jsonify({"access_token":access_token, "refresh_token":refresh_token}), 200)
        return make_response(jsonify({"mensagem": "Credenciais inválidas"}), 401)
    

    @auth_ns.route('/refresh')
    class RefreshResource(Resource):
        @jwt_required(refresh=True)
        def post(self):
            
            current_user = get_jwt_identity()
            new_access_token = create_access_token(identity=current_user)


            return make_response(jsonify({"access_token": new_access_token}), 200)