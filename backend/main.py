from flask import Flask,request,jsonify
from flask_restx import Api,Resource,fields
from config import DevConfig
from models import User,Questionario
from exts import db
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import JWTManager,create_access_token,create_refresh_token,jwt_required


app = Flask("__main__")
api = Api(app,doc='/')
app.config.from_object(DevConfig)

db.init_app(app)

JWTManager(app)


cadastro_model=api.model(
    "Cadastro",
    {
        "email":fields.String(),
        "senha":fields.String(),
        "cep":fields.String()
    }
)
login_model=api.model(
    "Login",
    {
        "email":fields.String(),
        "senha":fields.String()
    }
)
questionario_model=api.model(
    "Questionario",
    {
        "q1":fields.Integer(),
        "q2":fields.Integer(),
        "q3":fields.Integer(),
        "q4":fields.Integer(),
        "q5":fields.Integer(),
        "q6":fields.Integer(),
        "q7":fields.Integer(),
        "q8":fields.Integer(),
        "q9":fields.Integer(),
        "q10":fields.Integer()
    }
)

@api.route('/cadastro')
class Cadastro(Resource):
    @api.expect(cadastro_model)
    def post(self):
        data=request.get_json()

        email=data.get('email')
        db_user=User.query.filter_by(email=email).first()

        if db_user is not None:
            return jsonify({"mensagem":f"Este email {email} já esta vinculado a uma conta"})
        new_user=User(
            email=data.get('email'),
            senha=generate_password_hash(data.get('senha')),
            cep=data.get('cep')
        )

        new_user.save()
        return jsonify({"Mensagem":"Usuário cadastrado com sucesso"})

@api.route('/login')
class Login(Resource):
    @api.expect(login_model)
    def post(self):
        data=request.get_json()
        
        email=data.get('email')
        senha=data.get('senha')

        db_user=User.query.filter_by(email=email).first()

        if db_user and check_password_hash(db_user.senha, senha):
            access_token=create_access_token(identity=db_user.email)
            refresh_token=create_refresh_token(identity=db_user.email)

            return jsonify(
                {"access_token":access_token, "refresh_token":refresh_token}
                )
        
@api.route('/questionario')
class QuestionarioResource(Resource):
    
    def get(self):
        questionario=Questionario.query.all()
        pass
    def post(self):
        data=request.get_json()
        #respostas que irão ser armazenadas no DB
        new_questionario=Questionario(
            q1=data.get('q1'),
            q2=data.get('q2'),
            q3=data.get('q3'),
            q4=data.get('q4'),
            q5=data.get('q5'),
            q6=data.get('q6'),
            q7=data.get('q7'),          #confuso e feio
            q8=data.get('q8'),
            q9=data.get('q9'),
            q10=data.get('q10')
        )
        new_questionario.save()
        pass
        
        
    
@app.shell_context_processor
def make_shell_context():
    return {
        "db":db
        
    }

if __name__ == '__main__':
    app.run(debug=True)

