import React from 'react'

const NomeCompleto = (props) => {
  return (
    <div>
        <h2>Seu nome completo é: {props.nome} {props.sobrenome}</h2>
    </div>
  )
}

export default NomeCompleto