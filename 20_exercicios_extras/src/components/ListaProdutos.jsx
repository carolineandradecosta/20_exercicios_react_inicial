import React from 'react'
import Produto2 from './Produto2'

const ListaProdutos = () => {
    const produtos = ['Fone', 'Carregador', 'Luminária', 'Mouse']
  return (
    <div>
        <h1>Lista de Produtos: </h1>
        {
            produtos.map((produto, index) => (
                <Produto2 key={index} produto={produto}/>
            ))
        }
    </div>
  )
}

export default ListaProdutos