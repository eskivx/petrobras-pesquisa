from flask_restx import Namespace, Resource, fields
from flask import Flask, request, jsonify
from models import Questionario
from flask_jwt_extended import jwt_required



questionario_ns=Namespace('questionario', description="um namespace para questionario")

questionario_model=questionario_ns.model(
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



        
@questionario_ns.route('/questionario')
class QuestionarioResource(Resource):
    @questionario_ns.marshal_list_with(questionario_model)
    def get(self):
        questionario=Questionario.query.all()
        return questionario
    @questionario_ns.marshal_list_with(questionario_model)
    @questionario_ns.expect(questionario_model)
    @jwt_required()
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
            q7=data.get('q7'),          
            q8=data.get('q8'),
            q9=data.get('q9'),
            q10=data.get('q10')
        )
        new_questionario.save()
        return  jsonify(
            {"mensagem":"teste" }
        )