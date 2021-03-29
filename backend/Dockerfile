FROM node:14.16-alpine

ENV NODE_ENV=production
WORKDIR "/app"

RUN yarn global add typescript

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]