import dotenv from 'dotenv';

if (process.env.LOCAL === 'true') {
    dotenv.config({ path: `./.env.${process.env.ENV}` });
  }
export default {
        PORT: process.env.PORT || 3000,
        ENV: process.env.ENV,
}