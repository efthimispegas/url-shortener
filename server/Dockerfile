FROM node:15.12.0

WORKDIR /server

COPY package.json /server
COPY yarn.lock /server
RUN yarn

COPY . /server

EXPOSE 3000

CMD [ "yarn", "start" ]
