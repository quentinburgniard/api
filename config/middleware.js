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
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024
      }
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