import mysql from 'mysql'

const  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "TCPUSERS"
  });
  
  connection.connect((err: any) => {
    if (err) console.log("----------------->", err);
    console.log("Connected!");
  });


  export default connection

