from flask_restful import Resource
from flask import request, jsonify
import logging
from logging.handlers import RotatingFileHandler
from API_Logger.decorators.jwt_validation import jwt_required

logger = logging.getLogger('LOG API')
file_handler = RotatingFileHandler('/crits-logs/critsAndcoffee.log', maxBytes=1024 * 1024 * 15, backupCount=10)\
    .setLevel(logging.INFO)

logger.addHandler(file_handler)


class CriticalLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.critical(request.remote_addr)
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class ErrorLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.error(request.json)
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class WarningLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.warning(request.json)
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class InfoLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.info(request.json)
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class DebugLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.debug(request.json)
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422
