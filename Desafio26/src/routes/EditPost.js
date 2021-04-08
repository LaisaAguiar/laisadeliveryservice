import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, StyleTitulo } from "../styles/Estilos";
import FormEdit from "../components/FormEdit";
import { editPost } from "../services/posts";
import "../styles/style.css";

const EditPost = () => {
  
  const history = useHistory();


  const handleEdit = async (data) => {
    try {
      await editPost(data);
      toast.success("Post editado com sucesso!!");
      history.push("/")
    } catch {
      toast.error("Ooops!! Não consegui editar o post.");
    }
  };
  
  return (
    <Container>
      <StyleTitulo>Editar uma publicação</StyleTitulo>
      <FormEdit/>
      </Container>
  );
};

export default EditPost;
 