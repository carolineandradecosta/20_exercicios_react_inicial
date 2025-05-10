import React from 'react'

const Produto = (props) => {
  return (
    <div className='produto'>
        <h1>Produto:</h1>
        <h3>Nome: {props.nome}</h3>
        <p>Preço: {props.preco}</p>
        <p>Categoria: {props.categoria}</p>
    </div>
  )
}

export default Produto