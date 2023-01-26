#!/bin/bash
/usr/bin/docker-compose -f ./docker-compose.yml build
docker run -it -p 80:80/tcp pronetpocfe