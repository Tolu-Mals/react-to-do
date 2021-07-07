import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const ToDoContext = createContext();


const ToDoItemsContextProvider = (props) => {

    const initalItems = JSON.parse(localStorage.getItem("items")) || [];

    const [ items, setItems ] = useState(initalItems);
    
    useEffect(()=> {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

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

