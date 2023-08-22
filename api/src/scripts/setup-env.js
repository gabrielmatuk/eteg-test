const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o Banco de dados: (eteg-exam)', (dbPostgres) => {
  dbPostgres = dbPostgres || 'eteg-exam'
  rl.question('Informe o DB USER: (root)', (dbUser) => {
    dbUser = dbUser || 'root'
    rl.question('Informe o DB PSWD: (123456)', (dbPswd) => {
      dbPswd = dbPswd || '123456'
      rl.question('Informe o DB HOST: (localhost)', (dbHost) => {
        dbHost = dbHost || 'localhost'
        rl.question('Informe o DB PORT: (5432)', (dbPort) => {
          dbPort = dbPort || '5432'
          const databaseUrl = `DATABASE_URL=postgres://${dbUser}:${dbPswd}@${dbHost}:${dbPort}/${dbPostgres}`;

          if (fs.existsSync('.env')) {
            // Ler o conteúdo atual do arquivo
            const envContent = fs.readFileSync('.env', 'utf8');
            // Substituir a linha com DATABASE_URL ou adicionar se não existir
            const updatedEnvContent = envContent.replace(/DATABASE_URL=.*/, databaseUrl);
            fs.writeFileSync('.env', updatedEnvContent);
          } else {
            fs.writeFileSync('.env', databaseUrl)
          }
          console.log('Arquivo .env atualizado com sucesso!')
          rl.close();
        })
      });
    });
  });
});