from flask_restx import Resource, Namespace, fields
from models import Usuario
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import JWTManager,create_access_token,create_refresh_token,jwt_required
from flask import Flask,request,jsonify


auth_ns=Namespace('auth', description="namespace para autenticação")


cadastro_model=auth_ns.model(
    "Cadastro",
    {
        "email":fields.String(),
        "senha":fields.String(),
        "cep":fields.String(),
        "respondeu":fields.Boolean(),
        "cepvalido":fields.Boolean(),
        "ehadmin":fields.Boolean()

    }
)
login_model=auth_ns.model(
    "Login",
    {
        "email":fields.String(),
        "senha":fields.String()
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
            return jsonify({"mensagem": f"Este email {email} já está vinculado a uma conta"})

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
        return jsonify({"Mensagem": "Usuário cadastrado com sucesso"})


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

            return jsonify(
                {"access_token":access_token, "refresh_token":refresh_token}
                )