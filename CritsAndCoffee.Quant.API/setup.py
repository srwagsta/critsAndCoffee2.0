from setuptools import setup, find_packages

__version__ = '0.1'


setup(
    name='API_Quant',
    version=__version__,
    packages=find_packages(exclude=['tests']),
    install_requires=[
        'flask',
        'flask-sqlalchemy',
        'flask-restful',
        'flask-migrate',
        'flask-marshmallow',
        'marshmallow-sqlalchemy',
        'python-dotenv',
        'passlib',
        'psycopg2'
    ],
    entry_points={
        'console_scripts': [
            'API_Quant = API_Quant.manage:cli'
        ]
    }
)
