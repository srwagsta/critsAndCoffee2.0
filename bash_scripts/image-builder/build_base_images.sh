#!/usr/bin/env bash
cd ../../compose/

docker pull srwagsta/crits_and_coffee_accessories:geo-django

docker build -f ./base_images/Dockerfile.geo-django -t srwagsta/crits_and_coffee_accessories:geo-django ..

docker push srwagsta/crits_and_coffee_accessories:geo-django
