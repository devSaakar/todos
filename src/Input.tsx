import React from 'react'

interface InputProps{
    value:number;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props:InputProps) => {

  return (
    <div>
        <input type={"text"} onChange={props.handleChange} value={props.value} />
    </div>
  )
}

export default Input