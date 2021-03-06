# Dockerfile
FROM public.ecr.aws/docker/library/node:16-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

COPY package.json /usr/src/nuxt-app/

EXPOSE 8080

ENV NUXT_HOST=0.0.0.0
<<<<<<< HEAD
ENV NUXT_PORT=3000
=======
ENV NUXT_PORT=8080
>>>>>>> 4fc8b77d8cc95f23814afcf6ac2c7dd847b99445

CMD [ "npm", "start" ]