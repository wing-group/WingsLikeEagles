#!/bin/sh
# this is only necessary if you didn't gracefully exit from start.sh
CONTAINER=wle_db

docker stop $CONTAINER && docker rm $CONTAINER
