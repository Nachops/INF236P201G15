const horaCtrl = {};
const Hora = require("../Models/Hora");

horaCtrl.getHoras = async (req, res) => {
    const hora = await Hora.find();
    res.json(hora);
}

module.exports = horaCtrl;