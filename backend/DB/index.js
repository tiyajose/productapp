const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tiyajo2002:Pass123456789@cluster0.oft3egy.mongodb.net/cev')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log('Error :')
    })