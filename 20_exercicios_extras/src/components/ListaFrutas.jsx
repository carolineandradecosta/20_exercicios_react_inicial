import React from 'react'
import Fruta from './Fruta'

const ListaFrutas = () => {
    const frutas = ['Laranja', 'Melão', 'Graviola', 'Morango']

  return (
    <div>
        <h1>Lista de Frutas:</h1>
        {
            frutas.map((fruta, index) => (
                <Fruta key={index} fruta={fruta}/>
            ))
        }
    </div>
  )
}

export default ListaFrutas