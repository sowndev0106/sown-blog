FROM node:18 as build
WORKDIR /app
COPY package.json . /app/
COPY yarn.lock . /app/

ARG BUILD_ENV
COPY . .
RUN yarn
RUN yarn build

RUN npm i -g serve
CMD ["serve", "-s", "build", "-l", "80"]