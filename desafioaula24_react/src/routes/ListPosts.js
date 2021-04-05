import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//import  { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"


import { getPostsList, deletePost, editPost} from "../services/posts";

import "../styles/style.css";

const ListPosts = () => {
  const [post, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setopenEdit] = useState(false)
  const [selectedItem, setSelectedItem] = useState([]);
  const history = useHistory()

  const pagInicial = () => {
    history.push("/")
    setopenEdit(false)
    setOpen(false)
  }

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      toast.success("Post deletado com sucesso")
    } catch {
      toast.error("Ooops!! Houve um problema ao deletar o post.");
    } finally {
      setOpen(false);
    }
  };

  const handleOpenModalDelete = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleEdit = async (id) => {
    try {
      await editPost(id);
      toast.success("Post editado com sucesso!!");
    } catch {
      toast.error("Ooops!! Não consegui editar o post.");
    } finally {
      setopenEdit(false);
    }
  };
const handleOpenModalEdit = (item) => {
  setSelectedItem(item);
  setopenEdit(true)
};

  useEffect(() => {
    const handleGetPosts = async () => {
      const response = await getPostsList();
      console.log(response);
      setPosts(response.data);
      toast.success("Listagem de posts foi carregada com sucesso!!");
    };

    handleGetPosts();
  }, []);

  return (
    <>
      <div className="card">
        {post.map((item, idx) => (
          <div className="card-item" key={item.id}>
            <div>
              <p className="title">{item.title}</p>
              <p className="text">{item.body}</p>
            </div>
            <div>
              <button className="info"onClick={()=>handleOpenModalEdit(item)}>Editar Post</button>
              <button className="error"onClick={() => handleOpenModalDelete(item)}>Excluir Post</button>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className="modal">
          <p>Realmente deseja excluir essa postagem?</p>
          <div>
            <p>{selectedItem.title}</p>
            <p>{selectedItem.body}</p>
          </div>
          <div className="m-top-25">
            <button
              className="error"
              onClick={() => handleDelete(selectedItem.id)}
            >
              Excluir
            </button>
            <button type="button" onClick={pagInicial} className="cancel">Cancelar</button>
          </div>
        </div>
      )}
      
        {openEdit && (
          <div className="modal">
            <p>Você deseja editar esta postagem?</p>
            <div>
              <p>{selectedItem.title}</p>
              <p>{selectedItem.body}</p>
            </div>
            <div className="m-top-25">
              <button
                className="error"
                onClick={() => handleEdit(selectedItem.id)}
              >
                Editar
              </button>
              <button type="button" onClick={pagInicial} className="cancel">Cancelar</button>
            </div>
          </div>
        //{-----------------------------------------}
      )}
    </>
  );
};

export default ListPosts;
