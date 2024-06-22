from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from models import Usuario,Questionario
from exts import db
from flask_jwt_extended import JWTManager
from questionario import questionario_ns
from auth import auth_ns


def create_app(config): 
    app = Flask(__name__)

    app.config.from_object(config)
    CORS(app)

    db.init_app(app)

    JWTManager(app)

    api = Api(app,doc='/')

    api.add_namespace(questionario_ns)
    api.add_namespace(auth_ns)

            
            
        
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db":db,
            "questionario":Questionario,
            "usuario":Usuario
            
        }


    return app
