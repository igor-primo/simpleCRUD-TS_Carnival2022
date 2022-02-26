import {Pool} from 'pg';

const connectionString = process.env.SQL_CERTIFICATES;
const db = new Pool({ connectionString });

export default db;
