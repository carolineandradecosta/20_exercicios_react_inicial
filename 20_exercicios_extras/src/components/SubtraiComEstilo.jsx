import React from 'react'

const SubtraiComEstilo = (props) => {
  return (
    <div>
        <p className='subtraiComEstilo'>O resultado de {props.num1} - {props.num2} é igual a {props.num1 - props.num2}</p>
    </div>
  )
}

export default SubtraiComEstilo