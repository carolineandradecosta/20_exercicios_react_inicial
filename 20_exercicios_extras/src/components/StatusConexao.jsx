import React from 'react'

const StatusConexao = () => {
    const exibeStatus = (online) => {
        if (online === true){
            return <h3>Conectado ✅</h3>
        } else if (online === false){
            return <h3>Desconectado ❌</h3>
        } else {
            return <h3>Opção Inválida</h3>
        }
    }
  return (
    <div>
        {exibeStatus(true)}
        {exibeStatus(false)}
        {exibeStatus('outraOpcao')}
    </div>
  )
}

export default StatusConexao