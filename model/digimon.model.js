const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_CONICTION,{ useNewUrlParser: true, useUnifiedTopology: true });


const digimonSchema = mongoose.Schema({
    name:String,
    img:String,
    level:String
})


const digimonModel = mongoose.model('digimon',digimonSchema)


module.exports = digimonModel