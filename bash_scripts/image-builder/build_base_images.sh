#!/usr/bin/env bash

docker build -f ../../compose/base_images/Dockerfile.geo-django -t srwagsta/crits_and_coffee_accessories:geo-django ..

docker push srwagsta/crits_and_coffee_accessories:geo-django
