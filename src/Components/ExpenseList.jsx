import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContex } from "../Contex.jsx/AppContex";
const ExpenseList =()=>{
    const { expenses } = useContext(AppContex);

    const [filteredExpenses, setFilteredExpenses]= useState(expenses || []);

    useEffect(()=>{
        setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange =(event)=>{

        const searchResults = expenses.filter((filteredExpenses)=>
        filteredExpenses.name.toLowerCase().includes(event.target.value)
        );
        setFilteredExpenses(searchResults);
    }
    
    return(
        <div>
            <input 
                type="text" 
                class="form-control mb-2 mr-sm-2" 
                placeholder="Type to search...."
                onChange={handleChange}
            />
            <ul className="list-group">
              {filteredExpenses.map((expense)=>(
                   <ExpenseItem 
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost} 
                    />
               ))}
            </ul>
        </div>
    )
}
export default ExpenseList