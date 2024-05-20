import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateText } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const UpdateText = () => {
    const Params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updatingText, setUpdatingText] = useState('');
    const data = useSelector((state) => state.todoReducer);
    console.log(data)
    
    // const updateFun = () => {
    //     const data = useSelector((state) => state.todoReducer);
    //     console.log(data)
    //     setUpdatingText(data[Params.index].data)
    // }
    // useEffect(()=>{
    //     updateFun();
    // },[])
    return (
        <div>
            <h2>UPDATE TEXT HERE</h2>
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input max='50' type="text" value={updatingText} className="form-control" placeholder="Enter text" onChange={(e) => { setUpdatingText(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={(e) => { e.preventDefault(); dispatch(updateText(Params.id, updatingText)); setUpdatingText('');navigate('/') }}>Add Task</button>
            </form>
        </div>
    )
}

export default UpdateText
