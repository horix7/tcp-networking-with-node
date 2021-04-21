import mysql from 'mysql'

const  con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "horix"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  