FROM node:20

WORKDIR /usr/src/app

COPY . .

COPY .env .env

RUN npm ci

RUN npm run test

RUN npm run build


RUN npm install -g serve


CMD ["serve", "dist"]