const mysql = require('mysql');

const dotenv = require('dotenv');
const result = dotenv.config();
 
if (result.error) {
  throw result.error
}
 
console.log( result.parsed);


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
    // host: 'localhost',
    // user: 'root',
    // password: 'rocky2020',
    // database: 'crud-app-db',
    // port: '3306'
});

connection.connect((err) =>{
    if(err){
        console.log(err.message);
    }
    console.log('db ' + connection.state);
})