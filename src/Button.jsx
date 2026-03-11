
function Button({text, onClick,span}){
    return (
    <div className="">
        <button
        onClick={() => onClick(text)}
        className={`${span} w-16 bg-gray-600 text-white rounded-2xl p-4 hover:bg-orange-400`}
    >{text}</button>
    </div>
    );
}
export default Button;