import React from 'react'

const SaudacaoHorario = () => {
    const exibeHorario = (hora) => {
        if(hora < 12) {
            return <p>Bom dia!</p>
        } else if (hora < 18) {
            return <p>Boa tarde!</p>
        } else {
            return <p>Boa noite!</p>
        }
    }
  return (
    <div>
        {exibeHorario(6)}
        {exibeHorario(12)}
        {exibeHorario(13)}
        {exibeHorario(18)}
    </div>
  )
}

export default SaudacaoHorario