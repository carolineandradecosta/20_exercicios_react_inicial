import React from 'react'

const MensagemEmoji = (props) => {
  return (
    <div>
        <h3>{props.mensagem} {props.emoji}</h3>
    </div>
  )
}

export default MensagemEmoji