const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

console.log(process.env.USER);

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  // host: 'localhost',
  // user: 'root',
  // password: 'rocky2020',
  // database: 'crud-app-db',
  // port: '3306'
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM names;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });

      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DbService;
