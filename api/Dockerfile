FROM node:16-alpine

WORKDIR /app

COPY yarn*.lock ./
COPY ./package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]