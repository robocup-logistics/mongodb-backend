FROM node:21.1.0

WORKDIR /home/app

COPY . .

RUN yarn install

CMD ["yarn", "run", "start"]
