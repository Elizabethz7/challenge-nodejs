FROM node:12.18.3
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install nodemon express cors -y
EXPOSE 3000
CMD [ "npm", "start" ]