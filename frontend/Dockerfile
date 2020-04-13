FROM node:10.19.0-alpine
USER root
RUN mkdir -p /usr/app/frontend
WORKDIR /usr/app/frontend
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 4200
RUN npm start
