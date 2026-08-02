const musicModel = require("../models/music.model.js")
const jwt = require("jsonwebtoken")
const {uploadMusic} = require("../services/storage.service.js")


async function addMusic(req,res){
    
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.role !== "artist"){
            return res.status(403).json({message: "you don't have permission to add music"})
        }
    
    const  title  = req.body.title;
    const file = req.file;

    const result = await uploadMusic(file.buffer.toString("base64"))

    const newMusic = await musicModel.create({
        uri: result.url,
        title: title,
        artist: decoded.id
    })

    res.status(201).json({message: "Music added successfully", 
        music: {
            id: newMusic._id,
            uri: newMusic.uri,
            title: newMusic.title,
            artist: newMusic.artist
        }})

        } catch (error) {
            console.error(error)
            throw error
        return res.status(401).json({message: "Invalid token"})
    }


}


module.exports = {addMusic}