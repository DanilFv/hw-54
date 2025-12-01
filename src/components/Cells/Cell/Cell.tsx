import * as React from "react";
import type {IItem} from "../../../types";

interface Props {
    item: IItem;
    onClick?: (id: number) => void;
}


const Cell: React.FC<Props> = ({item, onClick}) => {

    let className: string = 'block';

    if (item.clicked && item.hasItem) {
        className += ' won-item';
    } else if (item.clicked && !item.hasItem) {
        className += ' none';
    }


    return (
         <div className={className} onClick={() => onClick?.(item.id)}></div>
    );
};

export default Cell;