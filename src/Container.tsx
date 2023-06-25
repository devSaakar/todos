import React from 'react'

interface ContainerProps{
    styles:React.CSSProperties
}

const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}> Container</div>
  )
}

export default Container