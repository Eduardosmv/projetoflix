async function connect(){

    const {pool} = require("pg");

    const pool = new PoolCluster({
        connectionString: process.env.CONNECTION_STRING
    });

}