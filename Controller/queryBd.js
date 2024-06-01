client = require('../Model/conectarBd');


client.connect()
    
  .then(() => {
    console.log('Conectado ao PostgreSQL');
    
    // Defina o schema padrão para imobiliaria
    return client.query('SET search_path TO imobiliaria')  
  })
  
  .finally(() => {
    // Encerra a conexão
    client.end();
  });

// as querys em si 
client.query('SET search_path TO imobiliaria')
client.query('select telefone from locatario' )


.then((res) => {

    // jogando o resultado no console log 
    // exemplo para pegar somente um dado  e assim poder substituir em uma caixa de texto, podendo ser armazenado em uma variavel
    console.log(res.rows[1].telefone);
    
  })

