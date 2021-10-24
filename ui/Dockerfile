# pull official base image
FROM node:13.12.0-alpine

# set working directory
RUN mkdir -p /app/ui
WORKDIR /app/ui

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/ui/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]