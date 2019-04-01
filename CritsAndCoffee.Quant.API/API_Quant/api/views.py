from flask import Blueprint
from flask_restful import Api

from API_Quant.api.resources import UserResource, UserList


blueprint = Blueprint('api', __name__, url_prefix='/api/v1/quant')
api = Api(blueprint)


api.add_resource(DataList, '/data')

