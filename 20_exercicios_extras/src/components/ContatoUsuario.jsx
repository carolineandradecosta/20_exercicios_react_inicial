import React from 'react'

const ContatoUsuario = (props) => {
  return (
    <div>
        <h1>Contato do Usuário:</h1>
        <p>Nome: {props.nome}</p>
        <p>E-mail: {props.email}</p>
        <p>Telefone: {props.telefone}</p>
    </div>
  )
}

export default ContatoUsuario