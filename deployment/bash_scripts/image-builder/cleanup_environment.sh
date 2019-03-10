#!/usr/bin/env bash

docker stop $(docker ps -a | grep -v "jenkins_master" | awk 'NR>1 {print $1}')

docker rm $(docker ps -a | grep -v "jenkins_master" | awk 'NR>1 {print $1}')

docker image rm $(docker image ls -qa) --force

exit 0
