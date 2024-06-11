from decouple import config
import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
    SECRET_KEY = config('SECRET_KEY', default='you-will-never-guess')

class DevConfig(Config):
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', default=False, cast=bool)
    SQLALCHEMY_DATABASE_URI = config('DEV_DATABASE_URL', default="postgresql://localhost:5432/postgres")
    DEBUG = True
    SQLALCHEMY_ECHO = True

