FROM node

WORKDIR /home/app

COPY . .

RUN yarn install

CMD ["yarn", "run", "start"]