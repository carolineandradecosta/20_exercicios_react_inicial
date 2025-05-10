import React from 'react'
import SomaComEstilo from './components/SomaComEstilo'
import './App.css'
import SubtraiComEstilo from './components/SubtraiComEstilo'
import MultiplicaComEstilo from './components/MultiplicaComEstilo'
import DivideComEstilo from './components/DivideComEstilo'
import EstudoHoje from './components/EstudoHoje'
import SegundosParaMinutos from './components/SegundosParaMinutos'
import MinutosParaSegundos from './components/MinutosParaSegundos'
import HorasParaSegundos from './components/HorasParaSegundos'
import SegundosParaHoras from './components/SegundosParaHoras'
import ListaDeFilmesDetalhados from './components/ListaDeFilmesDetalhados'
import MensagemClima from './components/MensagemClima'
import DesejoDoDia from './components/DesejoDoDia'
import AnimalFavorito from './components/AnimalFavorito'
import GaleriaImagens from './components/GaleriaImagens'
import GaleriaImagensPublicas from './components/GaleriaImagensPublicas'
import ImagemCondicional2 from './components/ImagemCondicional2'
import ListaFrutas from './components/ListaFrutas'
import ContatoUsuario from './components/ContatoUsuario'
import Produto from './components/Produto'
import ListaProdutos from './components/ListaProdutos'
import MensagemNota from './components/MensagemNota'
import CorFavorita from './components/CorFavorita'
import SaudacaoHorario from './components/SaudacaoHorario'
import StatusConexao from './components/StatusConexao'
import NomeCompleto from './NomeCompleto'
import MensagemEmoji from './components/MensagemEmoji'

const App = () => {
  return (
    <div>
      <SomaComEstilo num1={10} num2={20}/>
      <SubtraiComEstilo num1={33} num2={3} />
      <MultiplicaComEstilo num1={5} num2={5} />
      <DivideComEstilo num1={50} num2={2}/>
      <EstudoHoje nomeDaTecnologia={'Java'}/>
      <SegundosParaMinutos segundos={120}/>
      <MinutosParaSegundos minutos={2}/>
      <HorasParaSegundos horas={2}/>
      <SegundosParaHoras segundos={7200}/>
      <ListaDeFilmesDetalhados/>
      <MensagemClima/>
      <DesejoDoDia mensagem={'Tenha um excelente dia de estudo!'}/>
      <AnimalFavorito/>
      <GaleriaImagens/>
      <GaleriaImagensPublicas/>
      <ImagemCondicional2/>
      <ListaFrutas/>
      <ContatoUsuario nome={'Caroline'} email={'caroline@gmail.com'} telefone={8399944557711}/>
      <Produto nome={'Kindle'} preco={350.00} categoria={'eletrônico'}/> 
      <ListaProdutos/>
      <MensagemNota/>
      <CorFavorita cor={'red'}/>
      <SaudacaoHorario/>
      <StatusConexao/>
      <NomeCompleto nome={'Caroline'} sobrenome={'Andrade'}/>
      <MensagemEmoji mensagem={'Estou Surpresa!'} emoji={"😱"}/>

    </div>
  )
}

export default App