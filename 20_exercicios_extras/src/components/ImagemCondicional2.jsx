import React from 'react'

const ImagemCondicional2 = () => {
    const imagemCondicional = (tipoImagem) => {
        if(tipoImagem === 'LOGO') {
            return <img src="/logo.png" alt="" />
        } else if (tipoImagem === 'PERSONAGEM') {
            return <img src="/personagem.png" alt="" />
        }
    }
  return (
    <div>
        {imagemCondicional('LOGO')}
        {imagemCondicional('PERSONAGEM')}
    </div>
  )
}

export default ImagemCondicional2