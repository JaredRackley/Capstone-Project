#!/bin/bash

# Build and run frontend docker image (dev version)
docker build -t bragi:dev -f ./Dockerfile-bragi .
# Here's how to run the docker container
# docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm bragi:dev
