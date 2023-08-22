FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i
RUN npm run build
COPY . .
RUN npm run preview