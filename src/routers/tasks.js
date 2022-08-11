const express = require('express');
const TaskControllers = require('../controllers/taskscontroller');


const router = express.Router();

router.get('/tasks', TaskControllers.index);
router.get('/crearUser', TaskControllers.crearUser);
router.get('/home', TaskControllers.home);
router.get('/infoPropietario/contacto', TaskControllers.datosPersonal);

router.post('/crearUser', TaskControllers.addUsuario);
router.post('/tasks/delete', TaskControllers.eliminar);
router.get('/tasks/editar/:id_usuario', TaskControllers.edit);
router.post('/tasks/editar/:id_usuario', TaskControllers.update);

module.exports = router;