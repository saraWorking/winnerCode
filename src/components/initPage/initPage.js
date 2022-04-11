import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/actions/actions'
import { useHistory } from "react-router-dom";
import './initPage.css'

export default function InitForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [from, setFrom] = useState(0);

    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(actions.getPage({ itemsPerPage, from, history }));
    }
    return (
        <>
            

            <form className="InitForm">
                <div className="form-row">
                    <div className="col">
                        <label>enter nummber items of page</label>
                        <input type="number" className="form-control" onChange={(e) => { setItemsPerPage(e.target.value) }}></input>
                    </div>
                  
                    <div className="col">
                        <label>start from</label>
                        <input type="number" className="form-control" onChange={(e) => { setFrom(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form-row">
                    <button className="btn btn-primary" onClick={(e)=>handleClick(e)} disabled={!from||!itemsPerPage}>
                        send
                    </button>
                </div>
            </form>
        </>
    )
}
