import {useState} from "react";

export default function Fruits(){
    const fruits = ['Mango', 'Coconut', 'Dragon Fruit', 'Cherry']
    var [selectedItems, setSelectedItems] = useState(['Mango', 'Cherry'])

    function onChangeSetItems(item){
        setSelectedItems(i => [...i, item]
        )
    }
    return (
        <ul>
            {
                fruits.map(item => (
                    <li key={item}
                    className={selectedItems.includes(item)?"selected": null}
                    >
                        <button onClick={() => onChangeSetItems(item)}>{item}</button>
                    </li>
                ))
            }
        </ul>
    )
}