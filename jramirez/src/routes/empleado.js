const express = require('express');
const router = express.Router();


const empleadoController = require('../controllers/empleadoControllers');

router.get('/', empleadoController.getAll);
router.post('/add', empleadoController.save);
router.get('/update/:id', empleadoController.edit);
router.get('/user/rol/:id', empleadoController.getRol);

router.post('/update/:id', empleadoController.update);


module.exports = router;