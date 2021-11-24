import React from "react";


export default ( {comments })=>{

 
    

    const renderedComment= comments.map(comm=>{
      return <li key={comm.id}>{comm.content}</li>   
    })
    
    
    return(
        <div>
            {renderedComment}

        </div>
    )
}

