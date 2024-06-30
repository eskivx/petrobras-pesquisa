from flask_restx import Namespace, Resource, fields
from flask import Flask, request, jsonify
from models import Questionario, db
from flask_jwt_extended import jwt_required
from sqlalchemy import func



questionario_ns=Namespace('questionario', description="um namespace para questionario")

questionario_model=questionario_ns.model(
    "Questionario",
    {
        "q1":fields.String(),
        "q2":fields.String(),
        "q3":fields.String(),
        "q4":fields.String(),
        "q5":fields.String(),
        "q6":fields.String(),
        "q7":fields.String(),
        "q8":fields.String(),
        "q9":fields.String(),
        "q10":fields.String()
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
        return  new_questionario, 201
    


#JESUS AMADO
@questionario_ns.route('/questionario/q1')
class MaisQ1Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q1,
            func.count(Questionario.q1).label('frequencia')
        ).group_by(Questionario.q1).order_by(func.count(Questionario.q1).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q1, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404
        
@questionario_ns.route('/questionario/q2')
class MaisQ2Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q2,
            func.count(Questionario.q2).label('frequencia')
        ).group_by(Questionario.q2).order_by(func.count(Questionario.q2).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q2, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404
        

@questionario_ns.route('/questionario/q3')
class MaisQ3Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q3,
            func.count(Questionario.q3).label('frequencia')
        ).group_by(Questionario.q3).order_by(func.count(Questionario.q3).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q3, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404
        
@questionario_ns.route('/questionario/q4')
class MaisQ4Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q4,
            func.count(Questionario.q4).label('frequencia')
        ).group_by(Questionario.q4).order_by(func.count(Questionario.q4).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q4, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404

@questionario_ns.route('/questionario/q5')
class MaisQ5Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q5,
            func.count(Questionario.q5).label('frequencia')
        ).group_by(Questionario.q5).order_by(func.count(Questionario.q5).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q5, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404

@questionario_ns.route('/questionario/q6')
class MaisQ6Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q6,
            func.count(Questionario.q6).label('frequencia')
        ).group_by(Questionario.q6).order_by(func.count(Questionario.q6).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q6, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404
        
@questionario_ns.route('/questionario/q7')
class MaisQ7Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q7,
            func.count(Questionario.q7).label('frequencia')
        ).group_by(Questionario.q7).order_by(func.count(Questionario.q7).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q7, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404
        
@questionario_ns.route('/questionario/q8')
class MaisQ8Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q8,
            func.count(Questionario.q8).label('frequencia')
        ).group_by(Questionario.q8).order_by(func.count(Questionario.q8).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q8, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404
        
@questionario_ns.route('/questionario/q9')
class MaisQ9Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q9,
            func.count(Questionario.q9).label('frequencia')
        ).group_by(Questionario.q9).order_by(func.count(Questionario.q9).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q9, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404

@questionario_ns.route('/questionario/q10')
class MaisQ10Resource(Resource):
    def get(self):
        results = db.session.query(
            Questionario.q10,
            func.count(Questionario.q10).label('frequencia')
        ).group_by(Questionario.q10).order_by(func.count(Questionario.q10).desc()).all()
        
        if results:
            return jsonify([{'valor': result.q10, 'frequencia': result.frequencia} for result in results])
        else:
            return jsonify({'mensagem': 'nenhum dado encontrado'}), 404