import React, { useContext } from "react";
import { AppContex } from "../Contex.jsx/AppContex";
const ExpenseTotal =()=>{
  const {expenses}= useContext(AppContex);

  const totalExpenses = expenses.reduce((total,item)=>{
    return( total += item.cost);
  },0)
    return(
        <div className="alert alert-primary">
          <span>Spent so far: ₹{totalExpenses}</span>
        </div>
    )
}
export default ExpenseTotal