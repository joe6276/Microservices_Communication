require("dotenv").config(); 
const express = require("express");
const app = express();


app.use(express.json()); 


app.use("/posts", require('./Routes/commentRoutes'));


app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

const PORT = process.env.PORT || 4001 ;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));


















// onst express= require('express')
// const bodyparser= require('body-parser')
// const { randomBytes} = require ('crypto')
// const cors= require('cors')
// const axios= require('axios')

// const app=express()
// app.use(bodyparser.json())
// app.use(cors())


// const commentsByPostId = {}


// s
// })

// app.post('/posts/:id/comments', async(req,res)=>{
//     const commentsId= randomBytes(4).toString('hex')
//     const { content } = req.body
//     const comments= commentsByPostId[req.params.id]  || []

//     comments.push({id:commentsId ,content}) 
//     commentsByPostId[req.params.id]= comments

//      await axios.post('http://localhost:4005/events',{
//         type:'CommentCreated',
//         data:{
//             id:commentsId ,
//             content,
//             postId:req.params.id
//         }
//     })
//     res.status(201).send(comments)
// })

// app.post('/events', (req,res)=>{
//     console.log('Received event' , req.body.type )
//     res.send({})
// })

// app.listen(4001, ()=>{
//     console.log("Listening on 4001")
// })