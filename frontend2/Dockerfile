# pull official base image for builder
FROM node:17.4

# create and set build directory
RUN mkdir /app
WORKDIR /app

# copy dependencies
COPY package.json ./
COPY yarn.lock ./

# install dependencies
RUN yarn install

# run next app
CMD ["yarn", "dev"]