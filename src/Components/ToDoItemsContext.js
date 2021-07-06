import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const ToDoContext = createContext();


const ToDoItemsContextProvider = (props) => {

    const [ items, setItems ] = useState([
        { task: 'Create low fidelity wireframes', id: uuid()},
        { task: 'Create branding assets', id: uuid()},
        { task: 'Implement landing page design', id: uuid()}
    ]);

    const addToDoItem = (task) => {
        setItems([...items, {task, id: uuid()}]);
    }

    const removeToDoItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <ToDoContext.Provider value={ { items, addToDoItem, removeToDoItem } }>
            { props.children }
        </ToDoContext.Provider>
    )
}

export default ToDoItemsContextProvider;

