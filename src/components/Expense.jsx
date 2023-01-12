import React from 'react'
import AddExpense from './AddExpense/AddExpense'
import "./expense.css"
import ExpenseData from './ExpenseData'
import { useState } from 'react'
const Expense = () => {
    const obj= [
    {
        id: 0,
        date: "26-06-2011",
        title:"Food",
        amount: "$230"
    },
    {
        id: 1,
        date: "23-07-2023",
        title:"Travel",
        amount: "$100"
    },
    { 
      id: 2,
        date: "1-09-2023",
        title:"Clothes",
        amount: "$30"
    },
    {   id: 3,
        date: "12-02-2021",
        title:"Extra",
        amount: "$40"
    }
    
    ]

     const [expenses, setExpenses] = useState(obj)

    const datatoshow = (finalData)=>{
      const allExpenses = [finalData, ...expenses]
     setExpenses((allExpenses));
    }
  return (
    <div >
      <AddExpense  givemedata={datatoshow}/>
      {
        expenses.map(
          expense =>(
            <ExpenseData
            date={expense.date}
             title={expense.title}
             amount={expense.amount}
             />
        )
        )
      }
    </div>
  )
}

export default Expense
