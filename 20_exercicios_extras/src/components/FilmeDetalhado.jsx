import React from 'react'

const FilmeDetalhado = (props) => {
  return (
    <div>
        <h2>{props.titulo}</h2>
        <h3>{props.genero}</h3>
        <p>{props.ano}</p>
    </div>
  )
}

export default FilmeDetalhado