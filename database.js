const { default: mongoose } = require("mongoose");

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://Sagam08:RAKESHbunny25@cluster0.lqnehff.mongodb.net/Players")
    .then((result)=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB