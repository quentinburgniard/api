FROM strapi/base
WORKDIR /srv/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY . .
ENV NODE_ENV production
RUN yarn build
EXPOSE 1337
CMD yarn start