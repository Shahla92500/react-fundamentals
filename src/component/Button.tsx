
interface ButtonProps{
    type?:'button'|'reset'|'submit';
    text: string;
    onClick?: ()=>void | undefined;
    disabled?: boolean;
    //  className?: string;
}


function Button({type='button', text, onClick, disabled=false}: ButtonProps) {
    const buttonStyles = {
        button: 'border border-sky-500',
        reset: 'border',
        submit: 'border border-green-500'
    }
    return (
     <button 
     className={`py-2 rounded hover:cursor-pointer ${buttonStyles[type]} `} 
     type={type} 
     disabled={disabled} 
     onClick={onClick}>
        {text}
    </button>
    )
}

export default Button;