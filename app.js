// Express construye el backend
const express = require('express');
// Llamado de express
const app = express();
// Cors permite comunicar el frontend con el backend, permite hacer apis
const cors = require('cors');
// Permite cargar las variables del entorno en un archivo .env
const dotenv = require('dotenv');
// Permite usar dotenv
dotenv.config();
// permite usar cors
app.use(cors());
// Permite enviar los datos entre el backend y el frontend en formato json
app.use(express.json());
// No permite enviar formularios
app.use(express.urlencoded({extended:false}));


//Create

app.post('/insert', (request, response)=>{

});

//Read
app.get('/getAll', (request, response)=>{
response.json({
    success: true 
})
});

//Update 


// Delete



app.listen(process.env.PORT, () => console.log('app is running'));

