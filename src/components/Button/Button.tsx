import * as React from "react";

interface Props {
    type?: 'button' | 'submit' | 'reset';
    text: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler
}

const Button: React.FC<Props> = ({ type='button', text='Текст', className, style, onClick }) => {
    return (
        <button className={className} type={type} style={style} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;