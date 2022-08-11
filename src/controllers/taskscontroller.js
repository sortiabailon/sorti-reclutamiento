function index(req, res) {
  req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM `Empleados`', (err, usuarios)=>{
      if (err) {
        res.json(err);
      }
      //console.log(usuarios);
      res.render('tasks/index', {usuarios});
    });
  });
  }
   
  function crearUser(req, res) {
    res.render('tasks/crearUser');  
  }

  function home(req, res) {
    res.render('home');
  }

  function datosPersonales(req, res) {
    res.render('infoPropietario/contacto');
  }


  function addUsuario(req, res) {
    //console.log(req.body);
    const data = req.body;
    //console.log(data);
    req.getConnection((err, conn)=>{
      conn.query('INSERT INTO usuarios SET ?', [data], (err, rows)=>{
        console.log(err);
        //console.log(rows);
        res.redirect('/tasks');
      });
    });  
  }

  
  //ELIMINAR DATO DE LA TABLA
  function eliminar(req, res) {
    const id = req.body.id_usuario; 
    //console.log(id);
   req.getConnection((err, conn)=>{
      conn.query('DELETE FROM usuarios WHERE id_usuario =?', [id], (err, rows)=>{
        //console.log(err);
        res.redirect('/tasks');
      });
    }); 
  }

  // Editar 
  function edit(req, res) {
    const id = req.params.id_usuario;
    //console.log(id);
    req.getConnection((err, conn)=>{
      conn.query('SELECT * FROM `usuarios` WHERE id_usuario = ?',[id], (err,tasks)=>{
        if (err) {
          res.json(err);
        }
      // console.log(tasks);
       res.render('tasks/editar', {tasks});
      });
  
    }); 
  }

  function update(req, res) {
    const id = req.params.id_usuario;
    const data = req.body;
    //console.log(data);
    //console.log(id);
    req.getConnection((err, conn)=>{
      conn.query('UPDATE usuarios SET ? WHERE id_usuario = ?',[data, id], (err, rows)=>{
        res.redirect('/tasks');
      });
    }); 
  
  }



  
  module.exports = {
    index: index,
    crearUser: crearUser,
    home: home,
    addUsuario: addUsuario,
    eliminar: eliminar,
    edit: edit,
    update: update,
    datosPersonal: datosPersonales,

  } 
  