#!/usr/bin/env bash
cd ../../compose

docker-compose -f ./local.yml build

docker swarm init

docker stack deploy --compose-file ./local.yml crits-stack
