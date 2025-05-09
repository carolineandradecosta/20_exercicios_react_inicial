import React from 'react'
import FilmeDetalhado from './FilmeDetalhado'

const ListaDeFilmesDetalhados = () => {
    const filmes = [
        {titulo: "Avatar", genero: "Ficção Científica", ano: 2009},
        {titulo: "Titanic", genero: "Romance/Aventura", ano: 1997},
        {titulo: "O Poderoso Chefão", genero: "Crime", ano: 1972}
    ]
  return (
    <div>
        <h1>Lista de Filmes:</h1>
        {
            filmes.map((filme, index) => (
                <FilmeDetalhado key={index} titulo={filme.titulo} genero={filme.genero} ano={filme.ano}/>
            ))
        }
    </div>
  )
}

export default ListaDeFilmesDetalhados