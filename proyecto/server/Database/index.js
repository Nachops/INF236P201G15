const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://cristobalguerrero:Macaco023@bd-proyecto.ueutsjl.mongodb.net/?retryWrites=true&w=majority";


const db = async()=>{
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("BD Conectada",conn.connection.host);
    } catch(error){
        console.log(error);
    }
}

module.exports = db;
