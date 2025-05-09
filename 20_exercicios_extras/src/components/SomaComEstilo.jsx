import React from 'react'

const SomaComEstilo = (props) => {
  return (
    <div>
        <p className='somaComEstilo'>O resultado de {props.num1} + {props.num2} é igual a {props.num1 + props.num2}</p>
    </div>
  )
}

export default SomaComEstilo