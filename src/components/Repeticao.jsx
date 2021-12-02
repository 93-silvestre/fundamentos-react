import React from "react";

import produtos from "./data/produtos";

export default props =>{

    function getProdutosListItem() {
        return produtos.map(prod => { // transformando ARRAY em trecho em elementos jsx
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - R$ {prod.preco}
            </li>
        })
    }


     return (
         <div>
             <h2>Repetição</h2>
             <ul>
               {getProdutosListItem()}
             </ul>
         </div>
     )
}