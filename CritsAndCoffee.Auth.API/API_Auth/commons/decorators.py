from functools import wraps
from flask import jsonify, request
from flask_jwt_extended import (
    verify_jwt_in_request,
    get_jwt_claims
)
from API_Auth.models import User


def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        claims = get_jwt_claims()
        if len(set(claims['scopes']).intersection(set('admin'))) > 0:
            return jsonify(errors='Admins only!'), 403
        else:
            return fn(*args, **kwargs)
    return wrapper


def root_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        claims = get_jwt_claims()
        if len(set(claims['scopes']).intersection(set('root'))) > 0:
            return jsonify(errors='Root only!'), 403
        else:
            return fn(*args, **kwargs)
    return wrapper


def registration_validation(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        required_fields = ['first_name', 'last_name', 'username', 'email', 'password']
        request_fields = {field: request.json.get(field, None) for field in required_fields}
        # Validate all the fields are present
        missing_fields = []
        for key, value in request_fields.items():
            if value is None:
                missing_fields.append(key)
        if missing_fields:
            return jsonify({'errors': f'Missing value for {missing_fields}'}), 400
        # Validate for unique fields
        unique_validation = User.query.filter_by(username=request_fields.get('username')).first()
        if unique_validation:
            return jsonify({"errors": f"Username {request_fields.get('username')} already exists"}), 422
        unique_validation = User.query.filter_by(email=request_fields.get('email')).first()
        if unique_validation:
            return jsonify({"errors": f"Email {request_fields.get('email')} already exists"}), 422
        # Validate for a strong password
        # TODO: Strong password validation and defination
        kwargs['request_fields'] = request_fields
        return fn(*args, **kwargs)
    return wrapper
