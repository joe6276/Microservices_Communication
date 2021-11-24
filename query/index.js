const express =require('express')
const bodyparser= require('body-parser')
const app= express()
const cors= require('cors')
app.use(bodyparser.json())
app.use(cors())

const posts={}


app.get('/posts', (req,res)=>{
    res.send(posts)
   
})
app.post("/events" , (req,res)=>{
    const { type,data} =req.body
    
    if(type=='PostCreated'){
        const{ id, title} = data
    posts[id]={
        id,title,comment:[]
    }}
    

    if(type==='CommentCreated'){

        const{id,content,postId}=data

        const post= posts[postId]

        post.comment.push({id,content})
    }
    console.log(posts)
    res.send({ message: "success"})
})

console.log(posts)

app.listen(4002, ()=>{
    console.log("Listening to port 4002")
})