
    async function connect(){
        if(global.connection)

        return global.connection.connect();

    const { Pool } = require("pg");

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();
    console.log("Criou o pool de conexão");

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;

    return pool.connect();  


}
connect();

//LISTANDO DADOS DO BANCO DE DADOS

async function selectCustomers(){

   const modulo = await connect();  //conectando ao banco de dados
   const res = await modulo.query("SELECT * FROM Modulos"); //enviando comando para o banco de dados via client.query e dentro de ("o comando SQL para buscar os dados")
   return res.rows;
}

async function insertCustomer(customer){

    const modulo = await connect();  //conectando ao banco de dados
    const sql = "INSERT INTO modulos(MODULO, PULSOS, LOCALIZACAO, INICIAL, FINAL, ATUALIZACAO) VALUES ($1, $2, $3, $4, $5, $6)" ;
    const values = [customer.MODULO, customer.PULSOS, customer.LOCALIZACAO, customer.INICIAL, customer.FINAL, customer.ATUALIZACAO ]
    await modulo.query(sql, values);
  
}
module.exports = {
   // selectCustomers,
    insertCustomer
}