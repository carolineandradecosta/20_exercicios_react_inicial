import React from 'react'

const DivideComEstilo = (props) => {
  return (
    <div className='divideComEstilo'>O resultado de {props.num1} / {props.num2} é igual a {props.num1 / props.num2}</div>
  )
}

export default DivideComEstilo