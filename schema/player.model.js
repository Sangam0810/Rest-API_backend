const { default: mongoose } = require("mongoose");

const playersSchema = new mongoose.Schema({
    player_id:{
    type: String,
    requried: true,
    unique: true
    },
    name:{
        type: String,
        requried: true
    },
    image:{
        type: String,
        default:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    role:{
        type: String,
        requried: true
    },
    country:{
        type:String,
        requried:true
    },
    birth_place: String

}, {timestamps:true})


const Indianplayer = mongoose.model('Indianplayer', playersSchema)

module.exports = Indianplayer