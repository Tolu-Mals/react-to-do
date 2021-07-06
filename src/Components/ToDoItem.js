import React, { useContext } from 'react';
import { ToDoContext } from './ToDoItemsContext';




const ToDoItem = ({ item }) => {

    const { removeToDoItem } = useContext(ToDoContext);

    const removeCurrentItem = (id) => {
        removeToDoItem(id);
    }

    return (
        <li key={item.id}>{item.task}<button className="close" onClick={() => removeCurrentItem(item.id)}>&times;</button></li>
    )
}

export default ToDoItem;
