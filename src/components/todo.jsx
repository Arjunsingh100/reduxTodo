import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addText,updateText,deleteText } from '../actions/index';
import { useNavigate } from 'react-router-dom';
const Todo = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const data = useSelector((state) => state.todoReducer);
    console.log(data)
    const dispatch = useDispatch();


    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteText(id));
    }
    const handleUpdate = (id, index) => {
        console.log(id);
        navigate(`/updateText/${id}/${index}`)
    }
    return (
        <>
            <h1>React Redux Todolist</h1>
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input max='50' type="text" value={text} className="form-control" placeholder="Enter text" onChange={(e) => { setText(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={(e) => { e.preventDefault(); dispatch(addText(text)); setText('') }}>Add Task</button>
            </form>
            <div>
                {data?.map((ele, index) => {
                    return (
                        <div key={index} className="d-flex justify-content-between">
                            <h4>{ele?.data}</h4>
                            <button onClick={() => { handleUpdate(ele.id, index) }}><i className="fa-solid fa-pencil fa-lg" style={{ color: '#74C0FC' }}></i></button>
                            <button onClick={() => { handleDelete(ele.id) }}><i className="fa-solid fa-trash fa-sm" style={{ color: '#d33912' }}></i></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Todo
