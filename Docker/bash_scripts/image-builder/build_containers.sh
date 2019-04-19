#!/usr/bin/env bash
cd ../../compose/

docker-compose -f ./local.yml pull

docker-compose -f ./production.deploy.yml pull

docker-compose -f ./local.yml build --force-rm --pull

docker-compose -f ./production.build.yml build --force-rm --pull

docker-compose -f ./local.yml push

docker-compose -f ./production.build.yml push
