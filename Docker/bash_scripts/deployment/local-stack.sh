#!/usr/bin/env bash
cd ../../compose

docker swarm init

docker stack deploy -c <(docker-compose -f local.yml config) crits-stack
