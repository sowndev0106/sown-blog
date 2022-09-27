FROM node:12.18.3-alpine3.12

RUN apk add git

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build


EXPOSE 3000
CMD ["npm", "run", "deploy"]
