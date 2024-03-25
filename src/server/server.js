import express from 'express';
import bcrypt from 'bcrypt'
const app = express();
const PORT = process.env.PORT || 5431;

import cors from 'cors'
app.use(cors());
app.use(express.json())

import pg from 'pg';
const { Pool } = pg;

////////////////////DO THIS /////////////////////////
const pool = new Pool({
  user: 'cas',
  host: 'localhost',
  database: 'kinder_compass',
  password: 'Codemachine', 
  port: 8080,
});
/////////////////////////////////////////////////////

// app.get('/', (req, res) => {
//   res.send('Server up and running!');
// });