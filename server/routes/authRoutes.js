const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.get('/api/user/:userId/pets', authController.getUserPets);

module.exports = router;