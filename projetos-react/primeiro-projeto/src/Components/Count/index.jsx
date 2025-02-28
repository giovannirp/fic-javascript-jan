import React, { useState } from 'react'
import "./style.css";

export default function Count() {
  const [count, setCount] = useState(0);

  // Função para aumentar o valor do estado
  const aumentar = () => {
    setCount(count + 1);
  }

  // Função para diminuir o valor do estado


  return (
    <div className="containerCount">
        <h1>{count}</h1>

        <button onClick={aumentar} style={{ marginRight: '10px'}}>Aumentar</button>
        <button>Diminuir</button>
    </div>
  )
}
