function Button({text, onClick,span, isOperator,isNumber}){
    return (
        <button
        onClick={() => onClick(text)}
        className={`${span} ${isOperator? 'bg-orange-400 hover:bg-orange-500 text-white' : ''}
        ${isNumber? 'bg-gray-400 text-gray-950 hover:bg-gray-500': ''}
         w-full rounded-2xl p-4 `}
    >{text}</button>

    );
}
export default Button;