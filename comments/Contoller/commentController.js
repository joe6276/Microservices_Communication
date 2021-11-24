const { randomBytes} = require ('crypto')
const Comment = require('../Model/Comment')
const axios= require('axios')




exports.getComments= async(req,res,next)=>{

    try {
        const [comment, _] = await Comment.findAll();
        // res.status(200).json({ comment })
        res.send(comment[req.params.id]|| [])

    } catch (error) {
        console.log(error)
    }
    
}

exports.addComment= async(req,res,next)=>{
   
   try {
    const commentsId= randomBytes(4).toString('hex')
    const { content } = req.body

    let comment = new Comment(commentsId,content)
    await comment.save() 


    await axios.post('http://localhost:4005/events',{
        type:'CommentCreated',
        data:{
            id:commentsId ,
            content,
            postId:req.params.id
        }
    })

    

   } catch (error) {
      console.log(error) 
   }
    

   


    res.send("Add a new comment")

}