import { createContext, useReducer } from "react"

const AppReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
        return{
            ...state,
            expenses: state.expenses.filter(
               (expense)=> expense.id !== action.payload 
            ),
        } 
        case 'SET_BUDGET':
            return{
                ...state,
                budget: action.payload,
            };   
    default:
        return state
  } 
};

const initialState ={
    budget: 4000,
    expenses: [
        {id: 12, name: 'Shopping', cost: 500},
        {id: 13, name: 'Car-service', cost: 300},
        {id: 14, name: 'petrol', cost: 500},
        {id: 15, name: 'food', cost: 1000}
    ],
};
export const AppContex = createContext();

export const AppProvider =(props)=>{
    const [state, dispatch]= useReducer(AppReducer, initialState);
    return(
    <AppContex.Provider
     value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContex.Provider>
    );
};