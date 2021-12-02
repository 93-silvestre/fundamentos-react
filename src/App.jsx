import React from "react";
import './App.css';
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";


export default (props) => (

    <div className="App">
    <Card titulo="#06 - Condicional com IF">
    <CondicionalComIf numero={0}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional">
    <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="#04 - Repetição">
     <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 - Componente com Filhos">
    <ComFilhos>
      <ul>
        <li>Nathalia</li>
        <li>Alice</li>
        <li>Thiago</li>
        <li>Bruno</li>
      </ul>
    </ComFilhos>
    </Card>
    <Card titulo="#02 - Componente com Parametro">
    <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>
    </Card>
    <Card titulo="#02 - Componente com Parametro">
    <ComParametro titulo="Segunda Instância" subtitulo="do mesmo componente com valores diferente"/>
    </Card>
    <Card titulo="#01 - Primeiro Componente">
    <Primeiro/>
    </Card>
  
   


  </div>

);