import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const saveExpenseDataHandler =(enterdExpenseData) =>{
        const expenseData ={
            ...enterdExpenseData,
            id:Math.random().toString()
        }
        console.log('new expense');
        console.log(expenseData);
       props.onAddExpense(expenseData)

    }
    return (
         <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;