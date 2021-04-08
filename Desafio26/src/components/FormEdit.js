import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from 'react';
import {Button, FormControl, InputLabel} from '@material-ui/core/'
import {BootstrapInput} from '../styles/StyleForm';



const FormEdit = ({onSubmit}) => {
  const {  handleSubmit } = useForm();
       
  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      
      <FormControl>
      <InputLabel shrink htmlFor="bootstrap-input">
          Título
        </InputLabel>
        <BootstrapInput defaultValue=""/>
        </FormControl>

      <FormControl>
      <InputLabel shrink htmlFor="bootstrap-input">
          Descrição
        </InputLabel>
        <BootstrapInput defaultValue=""/>
        </FormControl>

      <div className="m-top-25">
      <Link to="/">
        <Button variant="contained" color="primary" size="small" type="submit" className="info">
          Salvar
        </Button>
        </Link>
        <Link to="/">
        <Button variant="contained" size="small" type="button" className="cancel" disableElevation>
          Cancelar
        </Button>
          </Link>
      </div>
    </form>
  );
};


export default FormEdit;
