import React from 'react'

const MultiplicaComEstilo = (props) => {
  return (
    <div>
        <p className='multiplicaComEstilo'>O resultado de {props.num1} x {props.num2} é igual a {props.num1 * props.num2}</p>
    </div>
  )
}

export default MultiplicaComEstilo