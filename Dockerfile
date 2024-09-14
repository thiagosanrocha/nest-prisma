FROM node:16-slim

RUN apt-get update

RUN apt-get install -y openssl

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
