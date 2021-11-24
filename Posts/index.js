const express = require('express');
require("dotenv").config(); 
const bodyParser= require('body-parser')
const cors= require('cors')



const PostRoutes = require('./Routes/PostRoutes');

const app= express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

app.use('/posts', PostRoutes);

app.listen(4000, ()=>{
    console.log("Listening to PORT 4000 ")
});



































// const express= require('express')
// const { randomBytes } = require('crypto')
// const bodyParser= require('body-parser')
// const cors= require('cors')
// const axios= require('axios')

// const app= express()
// app.use(bodyParser.json())
// app.use(cors())

// const posts=  {}

// app.get('/posts', (req,res)=>{
//     res.send(posts)

// })

// app.post('/posts',  async(req,res)=>{
//     const id = randomBytes(4).toString('hex')

//     const{title}= req.body;
//     posts[id]={
//         id,title
//     }
//     await axios.post('http://localhost:4005/events',{
//         type:'PostCreated',
//         data:{
//             id,title 
//         }
//     })

//     res.status(201).send(posts[id])

// })
