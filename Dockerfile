FROM node:lts

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build
ENTRYPOINT [ "npm", "run", "preview" ]