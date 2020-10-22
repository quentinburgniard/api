FROM strapi/base
ENV NODE_ENV production
WORKDIR /srv/app
EXPOSE 1337
RUN yarn global add pm2
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY . .
RUN yarn build
CMD pm2-runtime index.js