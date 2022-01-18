const config= require('../Config/db')
const db= require('mssql')
const { randomBytes } = require('crypto')
const axios= require('axios')

async function getUsers (req, res){
    try {
        
        let pool= await db.connect(config)
        let user= await pool.request().query('select * FROM post_table')
        res.json(user.recordsets[0])
        
        return user.recordsets
    
       
       
    } catch (error) {
        console.log(error)  
    
    }
}



async function addPost(req,res){
    try {
    let { title }= req.body
    const id = randomBytes(4).toString('hex')
    let pool= await db.connect(config)
    let user= await pool.request() 
    .input('id',db.VarChar, id)
    .input('title',db.VarChar, title)
    .execute('addPost')


    await axios.post('http://localhost:4005/events',{
        type:'PostCreated',
        data:{
            id,title 
        }
    })

    res.send({message:"successfully added"})
    } catch(error){

console.log(error)
    }
}

module.exports={
    getUsers,
    addPost
}