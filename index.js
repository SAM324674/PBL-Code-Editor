const express = require('express')
const app = express();
const PORT = 8000
const colors = require('colors');
const PATH = require('path')
const userRoutes = require('./routes/user')

//setting ejs 
app.set('view engine' , 'ejs')
app.set('views' , PATH.resolve('./views'))


//Database Connection
const db = require('./configs/mongoose')

//middlewares
app.use(express.json())

//Routes
app.use('/user' , userRoutes);

app.get('/' , (req , res)=>{
    res.render('home')
})


app.listen(PORT , ()=>{
    console.log(`SERVER STARTED : http://localhost:${PORT}/`.bgGreen.black)
})