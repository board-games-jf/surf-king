FROM node:14

RUN apt-get update -y
RUN apt-get install -y git curl vim

WORKDIR /app

COPY . .

RUN git config core.autocrlf true

EXPOSE 3000