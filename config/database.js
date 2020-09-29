var database = {
  defaultConnection: 'default',
  connections: {}
};

if (process.env.NODE_ENV === 'production') {
  database.connections.default = {
    connector: 'mongoose',
    settings: {
      database: 'api',
      username: process.env.DATA_USER,
      password: process.env.DATA_PASSWORD,
      port: 27017,
      host: process.env.DATA_SERVICE
    },
    options: {}
  };
} else {
  database.connections.default = {
    connector: 'bookshelf',
    settings: {
      client: 'sqlite',
      filename: '.tmp/data.db'
    },
    options: {
      useNullAsDefault: true
    }
  };
};

module.exports = database;