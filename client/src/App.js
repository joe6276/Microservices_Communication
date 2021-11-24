import React from "react";
import Postcreate from "./components/Postcreate";
import Postlist from "./components/Postlist";

export default ()=>{
    return(
<div className="container">
<h1> Create Post </h1>

 <Postcreate/>
 <hr/>
 <h1>PostS List</h1>
 <Postlist/>

</div>
)
}