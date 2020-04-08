FROM node:10.19.0-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json .
RUN npm install 
COPY /src .
RUN ls
EXPOSE 3000
CMD ["node", "bin/www"]
