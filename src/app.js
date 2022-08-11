const express = require('express');
const { engine } = require('express-handlebars');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');

//PASO 5 PUERTO SERVIDOR PARA PAGINA WEB
const taskRouters = require('./routers/tasks');

const app = express();
app.set('port',4000);

//PASO 6 VER DATOS JSON
app.use(bodyParser.urlencoded({
    extended: true
  }));

//permiso a paginas
app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


//servidor 
app.use(myConnection(mysql, {
    host: '147.135.71.233',
    user: 'sorticom_echoez',
    password: '7AqzFxYB6ejW',
    port: 3306,
    database: 'sorticom_echoez'
  },'single'));
  

app.listen(app.get('port'), ()=>{
  console.log("Escuchando en el puerto", app.get('port'));
})

//PASO 5 PUERTO SERVIDOR PARA PAGINA WEB
app.use('/', taskRouters);

app.get('/', (req,res)=>{
    res.render('home');
  
  });