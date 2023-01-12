import React from 'react'
import "./expensedata.css"
const ExpenseData = (props) => {
    
  return (
    <div className='maindiv'>
        <p className='date'>{props.date}</p>
     <p className='title'>{props.title}</p>
     <p className='amount'>{props.amount}</p>
    </div>
  )
}

export default ExpenseData
