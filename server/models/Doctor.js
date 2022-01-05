const mongoose = require("mongoose")
const doctorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Nume: {
        type: String,
    },
    Prenume: {
        type: String,
    },
    Adresa: {
        Strada: { type: String },
        Numar: { type: String },
        Bloc: { type: String },
        Scara: { type: String }

    },
    Contact: {
        Email: { type: String },
        Telefon: { type: String },

    },
    DataNastere: {
        type: Date,
    },
    Sectie: {
        type: String
    },
    Functie: {
        type: String
    },
    Salariul: {
        type: Number
    },
    Grad: {
        type: Number
    }

})

module.exports = mongoose.model("Doctor", doctorSchema, "Doctori")