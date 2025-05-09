import React from 'react'

const MensagemClima = () => {
    const renderizaClima = (tipoClima) => {
        if(tipoClima === 'sol') {
            return <h3>Dia ensolarado ☀️</h3>
        } else if (tipoClima === 'chuva') {
            return <h3>Leve seu guarda-chuva ☔</h3>
        } else if (tipoClima === 'nublado'){
            return <h3>Dia nublado ⛅</h3>
        }
    }
  return (
    <div>
        {renderizaClima('sol')}
        {renderizaClima('chuva')}
        {renderizaClima('nublado')}
        
    </div>
  )
}

export default MensagemClima