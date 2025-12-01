import './App.css'
import type {IItem} from "./types";
import {useState} from "react";

 const createItems = (): IItem[] => {
        const allCells: number = 36;
        const itemsArray: IItem[] = [];

        for (let i = 0; i < allCells; i++) {
            itemsArray.push({
                id: i,
                hasItem: false,
                clicked: false,
            });
        }

        const randomIndex = Math.floor(Math.random() * allCells);

        itemsArray[randomIndex].hasItem = true;

        return itemsArray;
    }


const App = () => {
    const [items, setItems] = useState<IItem[]>(createItems());


  return (
    <>

    </>
  )
};

export default App
