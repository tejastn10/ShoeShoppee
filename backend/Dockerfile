FROM node:alpine

WORKDIR "/app"

RUN yarn global add typescript

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]