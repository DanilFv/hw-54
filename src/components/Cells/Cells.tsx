import type {IItem} from "../../types";
import Cell from "./Cell/Cell.tsx";
import * as React from "react";

interface Props {
    items: IItem[];
    clickCell: (id: number) => void;
}

const Cells: React.FC<Props> = ({items, clickCell}) => {
    return (
        <>
            {items.map((item: IItem) => (
                <Cell
                    key={item.id}
                    item={item}
                    onClick={() => clickCell(item.id)}
                />
            ))}
        </>
    );
};

export default Cells;