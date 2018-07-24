FROM node:8-slim

WORKDIR /app
ENV NODE_ENV development

COPY package.json /app/package.json

RUN apt-get update && apt-get install -y --no-install-recommends libpng12-0 vim python make build-essential g++
RUN npm install -g -s --no-progress yarn
#    npm install -g pngquant && \
#    npm install -g pngquant-bin && \

COPY .env.example /app/.env.example
COPY . /app

RUN yarn install
RUN yarn cache clean

CMD ["npm","start"]

EXPOSE 3000
