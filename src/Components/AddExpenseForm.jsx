import React, { useContext, useState } from "react";
import { AppContex } from "../Contex.jsx/AppContex";
import { v4 as uuidv4 } from 'uuid';
const AddExpenseForm =()=>{
    const {dispatch}= useContext( AppContex);

    const [name, setName]= useState('')
    const [cost, setCost]= useState('')

    const onSubmit = (event) =>{
        event.preventDefault();

        const expense ={
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-sm">
                        <label htmlFor="">Name</label>
                        <input required='requried' type="text" id="name" className="form-control" value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                    </div>
                    <div className="col-sm">
                        <label htmlFor="">Cost</label>
                        <input type="text" required='requried' className="form-control" id="cost" value={cost} onChange={(event)=>{setCost(event.target.value)}} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button type="submit" className="btn btn-primary mt-3">
                            save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddExpenseForm