import postgres from 'postgres';

const db = postgres({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'Usuarios',
});

export default db;
