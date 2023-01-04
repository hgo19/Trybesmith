import fs from 'fs';
import path from 'path';

import { Pool } from 'mysql2/promise';
import connection from '../src/models/connection';

export default async function createDatabase(conn: Pool) {
  try {
    const importPath = path.resolve(__dirname, 'Trybesmith.sql');
    const seedDBContent = fs.readFileSync(importPath).toString();
    const queries = seedDBContent.split(';').filter((p) => p.trim());
    for (let i = 0; i < queries.length; i += 1) { 
      const query = queries[i];
      await conn.query(query);
    }
  } catch (error) {
    console.log('Banco Falha em restaurar o Banco', error);
  }
}

if (require.main === module) {
  createDatabase(connection)
    .then(async () => {
      console.log('Banco de Dados Criado com sucesso');
      await connection.end();
      process.exit(0);
    });
}