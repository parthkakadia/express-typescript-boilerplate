
import { SwaggerDefinition } from 'swagger-jsdoc';

import { userApi, userDefinition } from './user.swagger';

export const swaggerDocument: SwaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Express-Typescript-Project-boilerplate',
    version: '0.1.0',
    description: 'Backend application',
  },
  servers: [
      { 
          url: 'http://localhost:{port}/{basePath}',
          variables:{
              port:{
                  enum:['3000','5000'],
                  default:'5000'
              },
              basePath:{
                  default:'api'
              }
          } 
        }
    ],
  paths: {
    '/user': userApi['/user'],
  },
  components:{
      schemas:{
          User:userDefinition['User']
      }
  }
};
