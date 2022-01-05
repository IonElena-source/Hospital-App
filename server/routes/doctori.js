const mongoose = require("mongoose")
const express = require("express")
const doctoriRouter = express.Router()
const Doctor = require("../models/Doctor")
doctoriRouter.get("/", (req, res) => {
    Doctor.find({}).then((response) => {

            return res.status(200).json({
                succes: true,
                doctors: response
            })
        })
        .catch(err => console.log(err))


})


doctoriRouter.post("/", (req, res, next) => {
    const doctorNou = new Doctor({
        _id: mongoose.Types.ObjectId(),
        Nume: req.body.Nume,
        Prenume: req.body.Prenume,
        Adresa: req.body.Adresa,
        Contact: req.body.Contact,
        DataNastere: req.body.DataNastere,
        Sectie: req.body.Sectie,
        Functie: req.body.Functie,
        Salariul: req.body.Salariul,
        Grad: req.body.Grad

    })

    doctorNou.save().then(doctorNou => {
            return res.status(200).json({
                succes: true,
                msg: "Angajat inserat",
                doctorNou: doctorNou
            })
        })
        .catch(err => console.log(err))





})

module.exports = doctoriRouter