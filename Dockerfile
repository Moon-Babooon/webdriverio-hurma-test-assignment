FROM node:18.18-buster

RUN npm install -g npm@latest
ENV npm_config_loglevel warn
ENV npm_config_unsafe_perm true
 
WORKDIR /usr/wdio/
COPY package*.json ./
COPY . .
RUN npm install

CMD npx wdio