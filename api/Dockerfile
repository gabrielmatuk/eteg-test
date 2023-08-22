FROM node:16-alpine

WORKDIR /app

COPY yarn*.lock ./
COPY ./package.json ./
COPY ./prisma ./prisma

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]