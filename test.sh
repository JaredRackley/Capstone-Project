#!/bin/bash

# Frontend tests are run automagically when the bragi docker container is built with the build.sh script
# The frontend tests here are merely for quickly running tests locally, 
#   but this step is unnecessary if you are planning on building the image anyway

# Frontend tests
cd ./src/bragi/

echo "Running Angular tests"
ng test --watch=false
ng e2e --port 4202

cd ../oshun/

# Backend tests
echo "Running Go tests"
go test -v ./...
exit 0
