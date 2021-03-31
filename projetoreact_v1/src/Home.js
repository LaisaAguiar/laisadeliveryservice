import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Button from './Button';
import {useEffect} from "react";

function Home () {

    const [texto, setText]= useState("Learn More")
    const [titulo, setTitulo] = useState("")
  
    function handleClick() {
      console.log('Cliquei no botão')
    };
  
    function ChangeText() {
  setText("Aprenda React aqui");
    };
  
    function handleClickh1() {
  setTitulo("Desafio Aula 20 - React pt. 1");
    }
  
    useEffect(() => {
      if(texto!=="Learn More") {
        console.log("texto do anchor mudou");
      }
  
    }, [texto]);
    
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            {texto}
        </a>
       
       
        <Button handleClick={ChangeText} texto_botao="muda texto"/>
        <Button handleClick={handleClick} texto_botao="cliques"/>
        <Button handleClick={handleClickh1} texto_botao="adiciona título"/> 
      </header>

    </div>
  );
}

export default Home;