import React from 'react'

const MensagemNota = () => {
    const mediaAluno = (nota) => {
        if(nota >=7){
            return <h3>Aprovado</h3>
        } else if (nota >=5){
            return <h3>Recuperação</h3>
        } else {
            return <h3>Reprovado</h3>
        }
    }
  return (
    <div>
        {mediaAluno(7)}
        {mediaAluno(5)}
        {mediaAluno(4)}
        {mediaAluno(8)}
    </div>
  )
}

export default MensagemNota