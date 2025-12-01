import  {type MouseEventHandler} from "react";
import * as React from "react";

interface Props {
    className?: string;
    onClick?: MouseEventHandler;
}


const Cell: React.FC<Props> = ({className, onClick}) => {
    return (
         <div className={className} onClick={onClick}></div>
    );
};

export default Cell;