import axios from "axios";

const postagem = async () => {
     await axios.post("http://jsonplaceholder.typicode.com/posts")
}

export default postagem; 
