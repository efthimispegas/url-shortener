FROM node:15.12.0

WORKDIR /client

COPY package.json /client
COPY yarn.lock /client
RUN yarn

COPY . /client

EXPOSE 3000

CMD [ "yarn", "start" ]
