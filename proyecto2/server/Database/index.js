const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://gonzalo_gc:usm123@bd-hospital.qkbvddn.mongodb.net/proyecto?retryWrites=true&w=majority"

const db = async() =>{
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("Conexion exitosa", conn.connection.host)
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = db;