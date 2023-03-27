import React from 'react'
import '../App.css';
import buttonArray from './Buttons'

export default function Calculator(){
   
    const[typed, setTyped]= React.useState({
        number: "",
        operation: "",
    })
    const[firstNumber, setFirstNumber]=React.useState(0)
    const[result, setResult]=React.useState(0)
    //me
    console.log("result2 ", result)

    function clickButton(value, type){
        if(type === "Operation"){
            if(value === "%"){
                setResult(parseInt(typed.number) / 100)}
            else if (value === "AC"){
                setResult(0)
                setTyped(preveState => ({
                    ...preveState,
                    number: "",
                    operation: ""}))
                setFirstNumber(0)
            }
            else if (value === "+/-"){
                setTyped(preveState => ({
                    ...preveState,
                    number: -parseFloat(typed.number),
                    operation: ""}))
            }
            else if (value === "."){
                setTyped(preveState => ({
                    ...preveState,
                    number: typed.number + value,
                    operation: ""}))

            }    
            else {
                setFirstNumber(typed.number)
                setTyped(preveState => ({
                    ...preveState,
                    number: "",
                    operation: value}))}         
        }
        else{
           setTyped(preveState => ({
                ...preveState,
                number: typed.number + value}))
                  
        }

         if(value === "="){
            console.log("first number is " , firstNumber)
            //me
            console.log("result " , result)

            console.log("second number is " , typed.number)
            console.log(parseFloat(firstNumber) + parseFloat(typed.number))

            if(typed.operation === "+"){
                setResult(parseFloat(firstNumber) + parseFloat(typed.number) )
            }
            else if(typed.operation === "-"){
                setResult((parseFloat(firstNumber) - parseFloat(typed.number)))}
            else if(typed.operation === "/"){
                setResult((parseFloat(firstNumber) / parseFloat(typed.number)))}
            else if(typed.operation === "X"){
                setResult((parseFloat(firstNumber) * parseFloat(typed.number)))}

         }
        
        }
        

    const buttons= buttonArray.map((e)=>{  
        return (
            <div 
                key={e.id} 
                value={e.buttonValue} 
                className={e.buttonClass} 
                onClick={() => clickButton(e.buttonValue, e.buttonType)}
                >{e.buttonValue}</div>
                )      
        
    })
    return(

        <div className='calculator'>
        <input className='entry' onChange={setTyped} value={result || typed.number || firstNumber }/>
        {buttons}
        </div>
    )
}

