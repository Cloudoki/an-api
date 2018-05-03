FROM node:8.9.1-alpine

WORKDIR /anapi

COPY src/ src/
COPY knexfile.js package.json yarn.lock ./

RUN yarn

EXPOSE 3000

ENV AN_API_NODE_ENV production

CMD yarn start
