FROM node:10.19.0-alpine
USER root
RUN mkdir -p /usr/app/backend
WORKDIR /usr/app/backend
COPY package.json .
RUN npm install 
COPY src/ .
EXPOSE 3000
CMD ["node", "bin/www"]
