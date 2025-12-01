
import * as React from "react";
interface Props {
   children: React.ReactNode;
}

const Board: React.FC<Props> = ({children}) => {
    return (
        <div className='board'>
            {children}
        </div>
    );
};

export default Board;