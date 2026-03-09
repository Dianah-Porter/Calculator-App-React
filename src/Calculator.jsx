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
    const [display, setDisplay] = useState('0');
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

    function handleClick(value){
        if(!isNaN(value) || value == 0){
            
        }
    }

    return (
        <div className='w-75 border-2 mx-auto my-3 bg-gray-950 p-3 rounded-2xl'>
            <h1 className=" text-2xl py-4 text-white  ">My Calculator App</h1>
            <input type="text" 
            className=" bg-gray-300 w-68 p-4 text-2xl "
            placeholder={'0'}
            />
        <div className='grid grid-cols-4 gap-2 mt-4'>
            {buttons.map((btn, index)=>{
                return (<Button text={btn}/>);
            }        
            )}
        </div>
            
        </div>
    )
}
export default Calculator;