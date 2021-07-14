var server = {
  host: '0.0.0.0',
  proxy: true,
  port: 1337,
  url: process.env.URL ? process.env.URL : '',
  admin: {
    auth: {
      secret: process.env.ADMIN_TOKEN || 'f6adc15b-3896-445e-ba1a-2dc4227e5115'
    },
  }
};

if (process.env.NODE_ENV === 'production') {
  server.hsts = {
    enabled: true,
  }
} else {

};

module.exports = server;