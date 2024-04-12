const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.post('/api/pets', petController.createPet);
router.get('/api/pets', petController.getPets);
router.get('/api/pets/:id', petController.getPetById);
router.put('/api/pets/:id', petController.updatePet);
router.delete('/api/pets/:id', petController.deletePet);

module.exports = router;
