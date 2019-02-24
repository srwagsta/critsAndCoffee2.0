#!/usr/bin/env bash
cd ../../compose/

docker-compose -f ./local.yml build pull

docker-compose -f ./production.yml pull

docker-compose -f ./local.yml build --force-rm --pull

docker-compose -f ./production.yml build --force-rm --pull

docker-compose -f ./local.yml push

docker-compose -f ./production.yml push
