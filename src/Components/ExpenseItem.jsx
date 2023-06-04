import React, { useContext } from "react";
import {TiDelete} from 'react-icons/ti';
import { AppContex } from "../Contex.jsx/AppContex";
const ExpenseItem =(props)=>{
    const {dispatch}= useContext(AppContex);

    const handleDeleteExpense =()=>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    return(
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.name}
                <div>
                    <span>
                      ₹{props.cost} 
                    </span>
                    <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
                </div>
                
               
            </li>  
        </div>
    )
}
export default ExpenseItem