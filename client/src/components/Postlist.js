import React,{useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import Commentlist from '../Commentlist'

export default ()=>{
    const [posts, setPosts] = useState({})
    const fetchPosts= async ()=>{
        const res= await axios.get('http://localhost:4002/posts');

        console.log(res.data)

         setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts();
    }, [])  

    const RenderedPosts = Object.values(posts).map(post=>{
        return(
        <div className="card"
            key={post.id}
            style={{ width:'30%', marginBottom:'20px'}}>
                <div className="card-body">
                    <h3>{ post.title}  </h3>
                    <Commentlist comments ={post.comment}/>
                    <CommentCreate postId={post.id}/>
                </div>


        </div>
        ) 
    })
    return (
        <div className ="d-flex   flex-wrap justify-content-between"> 
        

      { RenderedPosts}

        </div>
    )
}


