var database = {
  defaultConnection: 'default',
  connections: {}
};

if (process.env.ENV === 'production') {
  database.connections.default = {
    connector: 'mongoose',
    settings: {
      database: 'api',
      username: process.env.API_DATA_USER,
      password: process.env.API_DATA_PASSWORD,
      port: 27017,
      host: 'api-data'
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