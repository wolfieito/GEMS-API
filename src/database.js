const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://MartinLopez:aa@gemsdb.xccg3.mongodb.net/gems?retryWrites=true&w=majority",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
.catch(err=> console.error(err))