const express = require('express')
const connectToDB =require("./database")
const app = express()
const cors = require('cors')                       //cors is using only for decurity purpose here we r import cors from script.js
const playermodule = require('./schema/player.model.js')
const playerAll = require('./players.json')
connectToDB()

app.use(cors())                         

// app.use(cors({
//     origin:"*",                                          // access all the data
//     methods:["GET","PUT","POST","DElETE"]
// }))
// app.use(cors({                                                                   //it allow to share request to client to access api 

//     origin:["http://127.0.0.1:5500/","https://www.hanumanttechnology.com/"],               //access only two data
//     methods:["GET","PUT","POST","DElETE"]
// }))                 
app.get("/", (req, res)=>{
   res.send('Home is nice but sukoon is not here so go to somewhere else')
})
app.get("/addplayers", async(req, res)=>{
     try {
        let playersData = await playermodule.insertMany(playerAll);
        res.send({
            message:" players added successfully",
            players: playersData
        })
     } catch (error) {
        res.send({
            message:"Error adding player",
            error: error
        });
        
     }
});

app.get("/player/all", async(req, res)=>{
 
    const {birth_place,role, name, country} = req.query;                           //  filter krne ke use krte hai on the baise of Stores query parameters (e.g., ?name=John).

    let search = {}
    if(birth_place){search.birth_place = birth_place}
    if(role)search.role = role                                        // agr single line hai to if mein curly braket use nhi krte kr beh skte hai no usse
    if(name)search.name = name
    if(country)search.country = country
    console.log(birth_place, name, country)



    try {
       //const allData = await playermodule.find();
      const allData = await playermodule.find(search);                      //   fitering  by object , birthplace
        res.send({
            result: allData.length,
            message: "All players data",
            players : allData
        });
    } catch (error) {
        res,send({
            message: "Error fetching players",
            error: error
        });
    }
})


app.listen(2000,()=>{
    console.log("server is running on port http://localhost:2000")
})