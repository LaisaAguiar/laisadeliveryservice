import React from 'react';

function Button(props) {
  console.log(props);


  return (
    <button onClick={props.handleClick}> {props.texto_botao}</button>
  );
}

export default Button;