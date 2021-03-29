# Initial Stage
FROM node:14.16-alpine as builder

ENV NODE_ENV=production
WORKDIR "/app"

RUN yarn global add typescript
RUN yarn global add less

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

RUN lessc --js ./src/styles/theme.less ./src/styles/theme.css

CMD [ "yarn", "build" ]



# Final Stage
FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html