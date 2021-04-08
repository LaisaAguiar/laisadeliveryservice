import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, StyleTitulo } from "../styles/Estilos";
import Form from "../components/Form";
import { createPost } from "../services/posts";
import "../styles/style.css";

const CreatePost = () => {
  const history = useHistory();

   const onSubmit = async (data) => {
    try { 
      await createPost(data);
      toast.success("Post criado com sucesso!!");
      history.push("/");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };

  return (
    <Container>
      <StyleTitulo>Criar uma nova publicação</StyleTitulo>
      <Form />
    </Container>
  );
};

export default CreatePost;
 
