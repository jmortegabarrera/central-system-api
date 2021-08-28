export const config = {
  port: process.env.EXPRESS_PORT || 3000,
  host: process.env.DATABASE_HOST || 'localhost',
  dbport: parseInt(process.env.DATABASE_PORT) || 3306,
  dbuser: process.env.DATABASE_USERNAME || 'root',
  dbpass: process.env.DATABASE_PASSWORD || 'central-system-db-pwd',
  entities: process.env.DATABASE_ENTITIES || __dirname + '/models/entities/*',
  database: process.env.DATABASE_NAME || 'central-system-db',  
};