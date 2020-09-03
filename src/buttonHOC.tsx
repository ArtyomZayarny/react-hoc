import React,{useState} from 'react'


 const SmartComponent = (OriginalComponent:any) => {
        const name = "Tim"
        const alert = () => {
            window.alert(`HEllo ${name}`)
        }
        const SmartButton = () => {
            return <OriginalComponent name={name} onAlert={alert}/>
        }

    return SmartButton
}
export default SmartComponent