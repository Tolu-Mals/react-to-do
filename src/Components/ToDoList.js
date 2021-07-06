import React, { useContext } from 'react';
import { ToDoContext } from './ToDoItemsContext';
import ToDoItem from './ToDoItem';


// const ToDoList = () => {
//     const { items, removeToDoItem } = useContext(ToDoContext);


//     return (
//         <ul>
//             { items.map((item) => {
//                 return (
//                     <li key={item.id}>{item.task}<button className="close" onClick={() => removeToDoItem(item.id)}>&times;</button></li>
//                 );
//             })}
//         </ul>
//     )
// }

const ToDoList = () => {
    const { items } = useContext(ToDoContext);

    return (
        <ul>
            { items.map((item) => {
                return (
                    <ToDoItem key={item.id} item={item}/>
                );
            })}
        </ul>
    )
}

export default ToDoList;
