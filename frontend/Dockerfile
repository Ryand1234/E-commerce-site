FROM node:10.19.0-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json .
COPY angular.json .
RUN npm install 
RUN npm install @angular/cli
COPY . .
EXPOSE 4200
RUN ng serve