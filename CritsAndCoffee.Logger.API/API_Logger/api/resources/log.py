from flask_restful import Resource
from flask import request, jsonify
import logging
from logging.handlers import RotatingFileHandler
from datetime import datetime
from API_Logger.decorators.jwt_validation import jwt_required

logger = logging.getLogger('LOG API')
file_handler = RotatingFileHandler('/crits-logs/critsAndcoffee.log', maxBytes=1024 * 1024 * 15, backupCount=10)
file_handler.setLevel(logging.INFO)
logger.addHandler(file_handler)


class CriticalLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.critical(f'{datetime.utcnow()} CRITICAL => Source:({request.remote_addr}) {request.values.to_dict()}')
            # Testing the logging format
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class ErrorLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.error(f'{datetime.utcnow()} ERROR => Source:({request.remote_addr}) {request.values.to_dict()}')
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class WarningLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.warning(f'{datetime.utcnow()} WARNING => Source:({request.remote_addr}) {request.values.to_dict()}')
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class InfoLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.info(f'{datetime.utcnow()} INFO => Source:({request.remote_addr}) {request.values.to_dict()}')
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422


class DebugLogger(Resource):
    method_decorators = []

    def post(self):
        try:
            logger.debug(f'{datetime.utcnow()} DEBUG => Source:({request.remote_addr}) {request.values.to_dict()}')
            return {}, 201
        except Exception as e:
            logger.error(f'API failed to parse logging request => {e}')
            return jsonify({'error': e}), 422
