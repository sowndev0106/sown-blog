FROM node:18 as build
WORKDIR /app
COPY package.json .
COPY yarn.lock . /app/

ARG BUILD_ENV
COPY . .
RUN yarn
RUN yarn build

# production stage
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d

COPY conf /etc/nginx

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]