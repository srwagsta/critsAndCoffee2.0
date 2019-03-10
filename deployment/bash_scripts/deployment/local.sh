#!/usr/bin/env bash
cd ../../compose

docker-compose -f ./local.yml pull

docker-compose -f ./local.yml build --force-rm

docker-compose -f ./local.yml up
