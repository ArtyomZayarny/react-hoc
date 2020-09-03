import React from 'react'

const Button:React.FC = (props:any) => {
    return <button onClick={() => props.onAlert()}>{props.name}</button>
}

Button.defaultProps = {
    name:'Default button text'
}
export default Button