#!/usr/bin/env bash

docker build -f ../compose/build_only/Dockerfile -t srwagsta/crits_and_coffee_accessories:geo-django ..

docker push srwagsta/crits_and_coffee_accessories:geo-django