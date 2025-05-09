import React from 'react'

const AnimalFavorito = () => {
    const renderizeAnimalFavorito = (nomeAnimal) => {
        if(nomeAnimal === 'cachorro') {
            return <h3>🐶 Eu amo cachorros!</h3>
        } else if (nomeAnimal === 'gato'){
            return <h3>🐱 Eu amo gatos!</h3>
        } else {
            return <h3>🐾 Amo todos os animais!</h3>
        }
    }
  return (
    <div>
        {renderizeAnimalFavorito('cachorro')}
        {renderizeAnimalFavorito('gato')}
        {renderizeAnimalFavorito('outroAnimal')}
    </div>
  )
}

export default AnimalFavorito