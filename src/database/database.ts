import mysql from 'mysql'

const  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "horix",
    database: "TCPUSERS"
  });
  
  export default connection

