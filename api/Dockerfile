FROM node:16-alpine

WORKDIR /app

COPY yarn*.lock ./
COPY ./package.json ./
COPY ./prisma ./prisma

RUN yarn install

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 3000
CMD  /wait && yarn start