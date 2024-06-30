from exts import db

class Usuario(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    email=db.Column(db.String(100), nullable=False, unique=True)
    senha=db.Column(db.Text(), nullable=False)
    cep=db.Column(db.String(10), nullable=False)
    respondeu=db.Column(db.Boolean())
    cepvalido=db.Column(db.Boolean())
    ehadmin=db.Column(db.Boolean())

    

    def __repr__(self):
        return f"<Usuario {self.email}>"
    
    def save(self):
        db.session.add(self)
        db.session.commit()

class Questionario(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    q1=db.Column(db.Text())
    q2=db.Column(db.Text())
    q3=db.Column(db.Text())
    q4=db.Column(db.Text())
    q5=db.Column(db.Text())
    q6=db.Column(db.Text())
    q7=db.Column(db.Text())
    q8=db.Column(db.Text())
    q9=db.Column(db.Text())
    q10=db.Column(db.Text())

    def __repr__(self):
        return f"<id do questionário{self.id}>"
  
    def save(self):
        db.session.add(self)
        db.session.commit()