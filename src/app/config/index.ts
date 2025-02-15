import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: 3000,
  database_url: process.env.DATABASE_URL,
};
