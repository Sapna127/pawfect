const Pet = require('../models/pet.model');

async function createPet(req, res) {
    try {
        const pet = await Pet.create(req.body);
        res.status(201).send(pet);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getPetById(req, res) {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).send('Pet not found');
        }
        res.status(200).send(pet);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function updatePet(req, res) {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pet) {
            return res.status(404).send('Pet not found');
        }
        res.status(200).send(pet);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function deletePet(req, res) {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);
        if (!pet) {
            return res.status(404).send('Pet not found');
        }
        res.status(200).send(pet);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet
};
