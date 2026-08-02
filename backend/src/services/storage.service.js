const imagekit = require("@imagekit/nodejs")



const imagekitInstance = new imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    
})

async function uploadMusic(file){
    try {
        const response = await imagekitInstance.files.upload({
            file,
            fileName: "music_"+Date.now(),
            folder: "spotify/music"
            
        })
        return response
    } catch (error) {
        console.error("Error uploading music:", error)
        throw error
        
    }   }

    module.exports = {
        uploadMusic
    }