var server = {
  host: '0.0.0.0',
  proxy: true,
  port: 1337,
  url: process.env.URL ? process.env.URL : '',
  admin: {
    auth: {
      secret: process.env.ADMIN_TOKEN
    },
  }
};

if (process.env.ENV === 'production') {
  server.hsts = {
    enabled: true,
  }
} else {

};

module.exports = server;