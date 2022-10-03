const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const userController = new UserController();

router.get('', userController.getUsers);
router.get('/companies', userController.getCompanies);
router.get('/getCompanyUsers', userController.getCompanywithUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);

router.post('', userController.createUser);
router.post('/companies', userController.createCompany);
router.delete('/:id', userController.deleteUser);

module.exports = router;
