import React from 'react'

const CorFavorita = ({cor}) => {
    const estiloQuadrado = {
        width: '100px',
        height: '100px',
        backgroundColor: cor,
        border: '1px solid #000'
    }
  return (
    <div style = {estiloQuadrado}>

    </div>
  )
}

export default CorFavorita