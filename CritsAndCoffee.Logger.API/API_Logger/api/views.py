from flask import Blueprint
from flask_restful import Api
from API_Logger.api.resources.log import WarningLogger, DebugLogger, ErrorLogger, InfoLogger, CriticalLogger

blueprint = Blueprint('api', __name__, url_prefix='/api/v1/logger')
api = Api(blueprint)


api.add_resource(DebugLogger, '/debug')
api.add_resource(InfoLogger, '/info')
api.add_resource(WarningLogger, '/warning')
api.add_resource(ErrorLogger, '/error')
api.add_resource(CriticalLogger, '/critical')
