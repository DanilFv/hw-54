import './components/Board/Board.css'
import './components/Cell/Cell.css'
import './components/Tries/Tries.css'
import './App.css'
import type {IItem} from "./types";
import {useState} from "react";
import Board from "./components/Board/Board.tsx";
import Cell from "./components/Cell/Cell.tsx";
import Tries from "./components/Tries/Tries.tsx";
import Button from "./components/Button/Button.tsx";

 const createItems = (): IItem[] => {
     const itemsArray: IItem[] = [];

        for (let i = 0; i < 36; i++) {
            itemsArray.push({
                id: i,
                hasItem: false,
                clicked: false,
            });
        }

        const randomIndex: number = Math.floor(Math.random() * 36);

        itemsArray[randomIndex].hasItem = true;

        return itemsArray;
    }


const App = () => {
    const [items, setItems] = useState<IItem[]>(createItems());

    const clickCell = () => {



    }


  return (
    <>
        <Board>
            {items.map((item: IItem) => (
                <Cell
                    key={item.id}
                    className='cell'
                    onClick={clickCell}
                />
            ))}
        </Board>
        <Tries
            className='tries'
            text={`Tries: ${items.length}`}
        />

        <Button
            text='Reset'
        />
    </>
  )
};

export default App
