Crits And Coffee
================

The updated version of the crits and coffe website with Angular front end, Selenuim testing, and Docker containers.

.. image:: https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg
     :target: https://github.com/pydanny/cookiecutter-django/
     :alt: Built with Cookiecutter Django


:License: Apache Software License 2.0

----

Overview
--------

This project is built as a constantly evolving test of microservices! \
It contains a completely dockerized environment with an Angular 7 client app hosted with .Net Core, Django ReST API for \
to demonstrate geoDjango and consuming outside ReSTful services (Instagram), Porstgresql DB with gis extensions for storing geo data, \
Celery task runner, and a Caddy HTTP proxy for keeping everything tied up. All of this was built on a Jenkins pipeline!

----

TODO
----

This is a constantly evolving project! I plan to slowly add new functionality and ties it all into the Angular front end \
with ReST services. I later plan to incorporate Jasmine, Protractor, PyTest, and Selenium for automated testing within the pipeline. \
I also plan on making use of the Intel Python distribution to demonstrate data modeling and visualisation within capital markets! \
Feel free to pull and build the project on your own to see the power of Docker!