const express = require('express'),
      path = require('path')


const app = express();

const empleadoRoutes = require('./routes/empleado');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.use('/', empleadoRoutes);


app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
