from flask import Flask
from flask_restx import Api,Resource
from config import Config

app = Flask("__main__")

@app.route("/")
def index():
    pass
if __name__ == '__main__':
    app.run(debug=True)
