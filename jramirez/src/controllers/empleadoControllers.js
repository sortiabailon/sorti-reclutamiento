const controller = {};
const pool = require('../database/connection')

controller.getAll = (req, res) => {    
    pool.query('SELECT * FROM empleados', (err, empleado) => {
        if (err) {
            res.json(err);
        }
        res.render('empleado', {
            data: empleado
        })
    })
};

controller.save = (req, res) => {
    const data = req.body;
    pool.query('INSERT INTO empleados set ?', data, (err, empleado) => {
        console.log(empleado)
        res.redirect('/');
    })

};

controller.edit = (req, res) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM roldepago as rp
        INNER JOIN empleados as em on em.id = rp.idempleado
        INNER JOIN prestamos as p on p.id = rp.idprestamos
        INNER JOIN horasextras as he on he.id = rp.idhorasextras 
        WHERE rp.idempleado = ?`, [id], (err, rows) => {

        res.render('empleado_edit', {
            data: rows[0]
        })
    });

};


controller.update = (req, res) => {
    const { id } = req.params;
    const data = req.body;
  
    pool.query('UPDATE roldepago set ? where id = ?', [data, id], (err, rows) => {
        console.log("err",err)
        res.redirect('/');
    });
};


controller.getRol = (req, res) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM roldepago as rp
        INNER JOIN empleados as em on em.id = rp.idempleado
        INNER JOIN prestamos as p on p.id = rp.idprestamos
        INNER JOIN horasextras as he on he.id = rp.idhorasextras 
        WHERE rp.idempleado = ?`, [id], (err, rows) => {
        res.render('rolpago_edit', {
            data: rows,
            title:'Edit Rol'
        })
    });

};




module.exports = controller;