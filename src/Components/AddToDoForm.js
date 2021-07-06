import React, { useContext, useState } from 'react'
import { ToDoContext } from './ToDoItemsContext'

const AddToDoForm = () => {
    const { addToDoItem } = useContext(ToDoContext);

    const [ task, setTask ] = useState("");



   const formSubmit = (e) =>{
        e.preventDefault();
        addToDoItem(task);
        setTask("");
   }


    return (
        <form className="add-to-do-form" onSubmit={formSubmit}>
            <input type="text" placeholder="What do you want to do today?" value={task} onChange={e => setTask(e.target.value)}/>
            <button type="submit" id="add-btn">Add</button>
        </form>
    );
}

export default AddToDoForm
