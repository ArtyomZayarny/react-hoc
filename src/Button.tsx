import React, {useEffect} from 'react'

const Button:React.FC = (props:any) => {
const handleClick = () => {
    if ( 'click' in props &&  typeof props.click === 'function') {
      props.click()
    }
}
        
    return <button onClick={() => handleClick()}>{props.name}</button>
}

Button.defaultProps = {
    name:'Default button text'
}
export default Button