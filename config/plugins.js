module.exports = ({ env }) => ({	
  email: {	
    provider: 'amazon-ses',	
    providerOptions: {	
      key: env('AWS_USER'),	
      secret: env('AWS_PASSWORD'),	
      amazon: 'https://email.eu-central-1.amazonaws.com',	
    },	
    settings: {	
      defaultFrom: 'api@digitalleman.com',	
      defaultReplyTo: 'contact@digitalleman.com',	
    },	
  },	
  upload: {	
    provider: 'aws-s3',	
    providerOptions: {	
      accessKeyId: env('AWS_USER'),	
      secretAccessKey: env('AWS_PASSWORD'),	
      region: 'eu-central-1',	
      params: {	
        Bucket: 'api.quentinburgniard.com',	
      },	
    },	
  }	
});