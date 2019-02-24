#!/usr/bin/env bash

docker-compose -f ../../compose/production.yml build --force-rm --pull

docker-compose -f ../../compose/production.yml push
