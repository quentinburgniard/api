var middleware = {
  settings: {
    cron: {
      enabled: true
    },
    favicon: {
      path: 'favicon.png'
    },
    gzip: {
      enabled: true
    },
    poweredBy: {
      enabled: true
    }
  }
};

if (process.env.ENV === 'production') {
  middleware.settings.cors = {
    enabled: true,
    origin: 'https://quentinburgniard.com'
  };
  middleware.settings.logger = {
    level: 'warn'
  };
  middleware.settings.hsts = {
    enabled: true
  };
} else {

};

module.exports = middleware;