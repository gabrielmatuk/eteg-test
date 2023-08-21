FROM node:16-alpine

WORKDIR /app

COPY yarn*.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]