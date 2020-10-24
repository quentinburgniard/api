module.exports = ({ env }) => ({	
  email: {	
    provider: 'sendgrid',	
    providerOptions: {	
      apiKey: env('SENDGRID_TOKEN')
    },	
    settings: {	
      defaultFrom: 'bot@digitalleman.com',	
      defaultReplyTo: 'hello@digitalleman.com'
    }
  },
  upload: {	
    provider: 'aws-s3',	
    providerOptions: {	
      accessKeyId: env('DIGITALOCEAN_USER'),
      endpoint: 'https://fra1.digitaloceanspaces.com',
      region: 'fra1',
      secretAccessKey: env('DIGITALOCEAN_PASSWORD'),	
      params: {	
        Bucket: 'digitalleman'
      }
    }	
  }	
});