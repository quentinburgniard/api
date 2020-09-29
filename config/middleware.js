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
      enabled: false
    },
    responseTime: {
      enabled: false
    },
    xframe: {
      enabled: false
    }
  }
};

if (process.env.NODE_ENV === 'production') {
  middleware.settings.logger = {
    level: 'warn'
  };
} else {

};

module.exports = middleware;