from functools import wraps
from flask import jsonify
from flask_jwt_extended import (
    verify_jwt_in_request,
    get_jwt_claims
)


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