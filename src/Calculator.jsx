import { useState } from 'react';
import Button from './Button'
    function Calculator(){
      const buttons = [
                    'AC', '+/-', '%', '/',
                    '7', '8', '9', 'X',
                    '4', '5', '6', '-',
                    '1', '2', '3', '+',
                    '0', '.', '='
                    ];
    const [previous, setPrevious] = useState(null);
    const [display, setDisplay] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForNumber, setWaitingForNumber] = useState(false);

    function handleButtonClick(value){
        if(!isNaN(value) || value === '.'){
            handleNumber(value);
        }
        else if(['+', 'X', '-', '/'].includes(value)){
            handleOperator(value)
        }
        else if(value === '='){
             calculate();
        }else if(value === 'AC'){
            setDisplay('0');
            setOperator(null);
            setPrevious(null);
        }
    }

    function handleNumber(num){
        if(waitingForNumber){
        setDisplay(num);
        setWaitingForNumber(false);
        return;
        }
        if(display === '0'){
            setDisplay(num);
        }
        else{
            setDisplay( display + num);
        }
    }

    function handleOperator(op){
        if(previous !== null) calculate();
        setPrevious(display);
        setOperator(op);
        setWaitingForNumber(true);
    }
    function calculate(){
        if(operator === null || previous === null) return;
        let result;
        let prev = parseFloat(previous);
        let curr = parseFloat(display);
        
        if(operator === '+'){result = prev + curr; }
        else if(operator === '-') {result = prev - curr; }
        else if(operator === 'X') {result = prev * curr; }
        else if(operator === '/') {result = prev / curr; }

        setDisplay(result.toString());
        setPrevious(null);
        setOperator(null);

    }
    return (  
        <div className='w-75 border-2 mx-auto my-3 bg-gray-950 p-3 rounded-2xl'>
            <h1 className=" text-2xl py-4 text-white  ">My Calculator App</h1>
            <input type="text"
            value={display} 
            readOnly
            className=" bg-gray-300 w-68 p-4 text-2xl text-end "
            
            />
        <div className='grid grid-cols-4 gap-2 mt-4'>
            {buttons.map((btn, index)=>{
                const isOperator = ['+', 'X', '-', '/', '='].includes(btn);
                const isNumber = ['AC', '+/-', '%', '7', '8', 
                    '9','4', '5', '6','1', '2', '3','0', '.'].includes(btn);
                return (<Button text={btn}
                    key={index}
                    span={`${btn === '0' ? "col-span-2" : ""}`}
                    isOperator = {isOperator}
                    isNumber = {isNumber}
                    onClick={handleButtonClick}
                />);
            }        
            )}
        </div>
            
        </div>
    )
}
export default Calculator;