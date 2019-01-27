FROM node:8-slim

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .babelrc .
COPY src ./src

RUN npm set audit false && npm install && npm run build && rm -rf src

EXPOSE 3000

CMD ["npm","run","prod"]
