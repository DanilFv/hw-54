import {useState} from "react";
import type {IItem} from "../../types";
import Board from "../../components/Board/Board.tsx";
import Tries from "../../components/Tries/Tries.tsx";
import Button from "../../components/Button/Button.tsx";
import Cells from "../../components/Cells/Cells.tsx";

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
 };


const GameBoardCellsPage = () => {
   const [items, setItems] = useState<IItem[]>(createItems());
   const [tries, setTries] = useState<number>(0);
   const [wonGame, setWonGame] = useState<boolean>(false);

    const clickCell = (id: number) => {

        if(wonGame) return alert('Чтобы начать игру заново нажмите на кнопку <<Reset>>!');

        setItems(items.map(item => {
            if (item.id === id) {

                if (!item.clicked) {
                    setTries(prevState => prevState + 1);
                }

                if (item.hasItem) {
                    setWonGame(true);
                    alert('Вы выиграли!')
                }

                return {
                    ...item,
                    clicked: true,
                }
            }
            return item;
        }));
    };

    const resetGame = () => {
        setItems(createItems());
        setTries(0);
        setWonGame(false);
    };


  return (
    <>
        <Board>
          <Cells
              items={items}
              clickCell={clickCell}
          />
        </Board>
        <Tries
            className='tries'
            text={`Tries: ${tries}`}
        />

        <Button
            text='Reset'
            onClick={resetGame}
        />
    </>
  )
};

export default GameBoardCellsPage;