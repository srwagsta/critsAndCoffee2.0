from setuptools import setup, find_packages

__version__ = '0.1'


setup(
    name='API_Logger',
    version=__version__,
    packages=find_packages(exclude=['tests']),
    install_requires=[
        'flask',
        'flask-restful',
        'python-dotenv'
    ],
    entry_points={
        'console_scripts': [
            'API_Logger = API_Logger.manage:cli'
        ]
    }
)
