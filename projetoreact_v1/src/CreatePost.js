import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import postagem from "./postagem"



const CreatePost = () => {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = async (data) => {
        console.log("data: ", data);
      try {
        postagem(data)
         //await postagem(data)
        toast.success("Post criado com sucesso!!");
      } catch (error) {
        toast.error("Ops!! Houve um problema com a criação do post");
      }
    };

    return ( 
     <div> 
         <h1>Criar um novo post</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
             <label>Num do usuário</label>
            <input type="number" name="userId" ref={register} placeholder="Usuário"/>

            <label>Título</label>
            <input type="text" name="title" ref={register} placeholder="Título"/>

            <label>Body</label>
            <input type="text" name="body" ref={register} placeholder="Body"/>

            <input type="submit"/>
            </form>
    </div> 
      
     ) };
     fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: {},
        body: {},
        userId: {},
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  export default CreatePost;