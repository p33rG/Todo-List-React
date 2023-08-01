import React, { useState } from "react";
import "./style.css"
import Todo from "./TodoList";
const ToDoLists = () => {

    const [items, setitems] = useState("");
    // creating an array for the storing list of items
    const [values, arritems] = useState([]);

    const inputEvent = (event) => {
        setitems(event.target.value);
    };
    const addItem = () => {
        arritems((preValue) => {
            return [...preValue, items];
        });
        setitems("");

    };
    const deleteItem = (index) => {
        arritems((prevValues) => {
            const updatedValues = prevValues.filter((_, i) => i !== index);
            return updatedValues;
        });
    };
    return (
        <>
            <div className="main_div">
                <div className="todo_div">
                    <h1 className="header">Todo List</h1>
                    <input type="text" placeholder="please enter an item" onChange={inputEvent} value={items} />
                    <button onClick={addItem}> <i className="fa fa-plus"></i></button>
                    <hr />
                    <ul>
                        {
                            values.map((itemVal, index) => {

                                return (
                                    <>
                                        <div className="list-item" >
                                            <Todo key={index} itemVal={itemVal} onDelete={() => deleteItem(index)} />
                                        </div>

                                    </>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDoLists;