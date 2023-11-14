const { Router } = require("express");
const router = Router();

const { getFichas, createFicha, getFichaByRut } = require("../Controllers/fichas.controllers");

router.route('/')
    .get(getFichas)
    .post(createFicha);

router.route('/:id')
    .get(getFichaByRut)

module.exports = router;