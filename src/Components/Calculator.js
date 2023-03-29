import React from 'react'
import '../App.css';
import buttonArray from './Buttons'

export default function Calculator(){
   
    //for any user input
    const[typed, setTyped]= React.useState({
        number: "",
        operation: "",
    })

    //first number before the operation which is based on typed.number
    const[firstNumber, setFirstNumber]=React.useState(0)

    //result after clicking = button
    const[result, setResult]=React.useState("")

 

    function clickButton(value, type){
        //operations include "+-/*=.AC%"
        if(type === "Operation"){
            if(value === "%"){
                setResult(parseFloat(typed.number) / 100)
                setTyped(preveState => ({
                    ...preveState,
                    number: parseFloat(typed.number) / 100
                    }))
            }
            else if (value === "AC"){
                setResult("")
                setTyped(preveState => ({
                    ...preveState,
                    number: "",
                    operation: ""}))
                setFirstNumber(0)
            }

            //changing sign of the entered value
            else if (value === "+/-"){
                setTyped(preveState => ({
                    ...preveState,
                    number: -parseFloat(typed.number),
                    operation: ""}))
                    setResult(preveState => -preveState)
            }
            //making float numbers
            else if (value === "."){
                setTyped(preveState => ({
                    ...preveState,
                    number: typed.number + value
                    }))

            }    
            else {
                setFirstNumber(typed.number)
                setTyped(preveState => ({
                    ...preveState,
                    number: "",
                    operation: value}))}         
        }

        //making the number
        else{
           setTyped(preveState => ({
                ...preveState,
                number: typed.number + value}))
                  
        }

        if(value === "="){
            //setting the result and also make the result as the typed.number for following calculations
            if(typed.operation === "+"){
                setResult((parseFloat(firstNumber) + parseFloat(typed.number)).toString())
                setTyped(preveState => ({
                    ...preveState,
                    number: (parseFloat(firstNumber) + parseFloat(typed.number)).toString()}))
            }
            else if(typed.operation === "-"){
                setResult(((parseFloat(firstNumber) - parseFloat(typed.number))).toString())
                setTyped(preveState => ({
                    ...preveState,
                    number: (parseFloat(firstNumber) - parseFloat(typed.number)).toString()}))}
            else if(typed.operation === "/"){
                setResult(((parseFloat(firstNumber) / parseFloat(typed.number))).toString())
                setTyped(preveState => ({
                    ...preveState,
                    number: (parseFloat(firstNumber) / parseFloat(typed.number)).toString()}))}
            else if(typed.operation === "X"){
                setResult(((parseFloat(firstNumber) * parseFloat(typed.number))).toString())
                setTyped(preveState => ({
                    ...preveState,
                    number: (parseFloat(firstNumber) * parseFloat(typed.number)).toString()}))}

        }
        
        }
        
       

        //making buttons based on the Button.js file
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
            {/* Calculator screen section which shows the typed number or results or the first number */}
        <input className='entry' onChange={setTyped} value={ typed.number || result || firstNumber }/>
        {buttons}
        </div>
    )
}

