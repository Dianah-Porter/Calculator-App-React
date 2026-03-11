import { useState } from 'react';
import Button from './Button'
    function Calculator({handleClick, current}){
      const buttons = [
                    'AC', '+/-', '%', '/',
                    '7', '8', '9', 'X',
                    '4', '5', '6', '-',
                    '1', '2', '3', '+',
                    '0', '.', '='
                    ];
    const [previous, setPrevious] = useState(null);
    const [operator, setOperator] = useState(null);

    function handleNumber(num){
        if(display === '0'){
            setDisplay(num);
        }
        else{
            setDisplay( display + num);
        }
    }

    function handleOperator(op){
        setPrevious(display);
        setOperator(op);
        setDisplay('0')

    }
    return (
        <div className='w-75 border-2 mx-auto my-3 bg-gray-950 p-3 rounded-2xl'>
            <h1 className=" text-2xl py-4 text-white  ">My Calculator App</h1>
            <input type="text"
            value={current} 
            readOnly
            className=" bg-gray-300 w-68 p-4 text-2xl text-end "
            
            />
        <div className='grid grid-cols-4 gap-2 mt-4'>
            {buttons.map((btn, index)=>{
                return (<Button text={btn}
                    key={index}
                    className={`${btn === '0' ? "col-span-2" : "col-span-1"}`}
                    onClick={handleClick}
                />);
            }        
            )}
        </div>
            
        </div>
    )
}
export default Calculator;