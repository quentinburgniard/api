FROM strapi/base
WORKDIR /srv/app
COPY package.json .
COPY yarn.lock .
#RUN yarn install --frozen-lockfile --network-timeout 1000000 --production
RUN yarn install
COPY . .
ENV ENV production
RUN yarn build
EXPOSE 1337
CMD yarn start