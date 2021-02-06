// Express construye el backend
const express = require("express");
// Llamado de express
const app = express();
// Cors permite comunicar el frontend con el backend, permite hacer apis
const cors = require("cors");
// Permite cargar las variables del entorno en un archivo .env
const dotenv = require("dotenv");

// Permite usar dotenv
dotenv.config();

//Llamado del dbService en app
const dbService = require("./dbService");

// permite usar cors
app.use(cors());
// Permite enviar los datos entre el backend y el frontend en formato json
app.use(express.json());
// No permite enviar formularios
app.use(express.urlencoded({ extended: false }));

//Create

app.post("/insert", (request, response) => {
  const {name} = request.body;
  const db = dbService.getDbServiceInstance();
  const result = db.insertNewName(name);

  result
  .then(data => response.json({data:data}))
  .catch(err => console.log(err));
});

//Read
app.get("/getAll", (request, response) => {
  const db = dbService.getDbServiceInstance();

  const result = db.getAllData();

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Update

app.patch('/update', (request, response)=>{
  const {id, name} = request.body;
  console.log("id: " + id);
  console.log("name: " + name);
  const db = dbService.getDbServiceInstance();

  const result = db.updateNameInput(id, name);

  result
  .then(data => response.json({success: data}))
  .catch(err => console.log("Error en app: " + err));
});

// Delete
app.delete('/delete/:id', (request, response)=>{
  const {id} = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.deleteRowById(id);
  result
  .then(data => response.json({success:data}))
  .catch(err => console.log(err));
})

// Search
app.get('/search/:name', (request, response) =>{
  const {name} = request.params;
  console.log("name in app: " + name)
  const db = dbService.getDbServiceInstance();

  const result = db.searchByName(name);

  result 
  .then(data => response.json({data: data}))
  .catch(err => console.log(err));
})

app.listen(process.env.PORT, () => console.log("app is running"));
