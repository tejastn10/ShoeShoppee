FROM node:alpine

WORKDIR "/app/frontend"

RUN yarn global add typescript
RUN yarn global add less

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

RUN lessc --js ./src/styles/theme.less ./src/styles/theme.css

CMD [ "yarn", "start" ]