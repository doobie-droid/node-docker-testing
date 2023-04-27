FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install
RUN npm install jest -–save-dev

RUN npm i -g nodemon

COPY . .


CMD ["npm","start"]