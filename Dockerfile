FROM node:16-alpine3.13

WORKDIR /app

RUN npm install -g create-react-app
RUN npm install --save react-router-dom
RUN npm install --save prop-types
