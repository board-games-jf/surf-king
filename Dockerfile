FROM node:14

RUN apt-get update -y
RUN apt-get install -y git curl vim

WORKDIR /app

COPY . .

RUN git config core.autocrlf true

RUN npm i @types/node boardgame.io

EXPOSE 3000, 8000