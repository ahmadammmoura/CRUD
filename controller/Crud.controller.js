const superagent = require('superagent')
const Data = require('../model/data.model')
const digimonModel = require('../model/digimon.model')


const getData = async(req,res) =>{

    await superagent.get(`https://digimon-api.vercel.app/api/digimon`)
        .then(response => response.body.map(digimon => new Data(digimon)))
        .then(data => res.send(data))
}


const addData = async(req,res) =>{

    const {name,img,level} = req.body

    const newDigimon = new digimonModel({
        name:name,
        img:img,
        level:level
    })

    await newDigimon.save()



    res.send("done")
}

const getFav = async(req,res) =>{

    await digimonModel.find({},(err,data)=>{
        res.send(data)
    })

}


const deleteFav = async(req,res) =>{

    const id = req.params.id

     await digimonModel.remove({_id:id},(err,data)=>{
        digimonModel.find({},(err,filerdData)=>{
            res.send(filerdData)
        })
    })
}

const updateFav = async(req,res) =>{

    const id = req.params.id;

    const {name , img , level} = req.body

     await digimonModel.findOne({_id : id},(err,data)=>{
        data.name = name;
        data.img = img;
        data.level = level;
        data.save()  
    })

    await digimonModel.find({},(err,allData)=>{
        res.send(allData)
    })






}


module.exports ={
    getData:getData,
    addData:addData,
    getFav:getFav,
    deleteFav:deleteFav,
    updateFav:updateFav
}