import React, { useEffect, useState } from "react";
//import Comment from "./Comment";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    const {data: comments} = await axios.get("http://jsonplaceholder.typicode.com/comments")
    

    setComments(comments);
    console.log("lista de comentários: ", {comments});
    };
    
  
  useEffect(() => {
    getComments()
   }, []);

   
 
return (
<div>
  <h1>Lista de comentários</h1>
  <button onClick={getComments}>Buscar comentários</button>

  {comments.map((comment) => {
   return (
   <div key={comment.id}> 
    <h3>{comment.name}</h3> 
    <h4>{comment.email}</h4> 
    <p>{comment.body}</p>
    </div>);
})}
</div>
);
};

export default Comments;