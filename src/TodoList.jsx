import React from "react";

const Todo = ({ itemVal, onDelete }) => {
    return (
        <div className="list-item">
            <i className="fa fa-times" onClick={onDelete}></i>
            <li>{itemVal}</li>
        </div>
    );
};

export default Todo;
