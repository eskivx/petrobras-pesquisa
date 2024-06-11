from exts import db

class User(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    email=db.Column(db.String(100), nullable=False, unique=True)
    senha=db.Column(db.Text(), nullable=False)
    cep=db.Column(db.String(10), nullable=False)

    def __repr__(self):
        return f"<User {self.email}>"
    
    def save(self):
        db.session.add(self)
        db.session.commit()

class Questionario(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    q1=db.Column(db.Integer(),nullable=False)
    q2=db.Column(db.Integer(),nullable=False)
    q3=db.Column(db.Integer(),nullable=False)
    q4=db.Column(db.Integer(),nullable=False)
    q5=db.Column(db.Integer(),nullable=False)
    q6=db.Column(db.Integer(),nullable=False)
    q7=db.Column(db.Integer(),nullable=False)
    q8=db.Column(db.Integer(),nullable=False)
    q9=db.Column(db.Integer(),nullable=False)
    q10=db.Column(db.Integer(),nullable=False)


  
    def save(self):
        db.session.add(self)
        db.session.commit()