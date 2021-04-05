import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../styles/style.css";

const Form = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();
 
  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <input name="title" ref={register} placeholder="Título" />
      <input name="descricao" ref={register} placeholder="Descrição" />
      <div className="m-top-25">
      <Link to="/">
        <button type="submit" className="info">
          Criar
        </button>
        </Link>
        <Link to="/">
          <button type="button" className="cancel">
            Cancelar
          </button>
          </Link>
      </div>
    </form>
  );
};


export default Form;
