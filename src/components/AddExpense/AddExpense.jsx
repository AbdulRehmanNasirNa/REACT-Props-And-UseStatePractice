import React from 'react'
import "./addexpense.css"
import ExpenseForm from './ExpenseForm'
const AddExpense = (props) => {
    const collectdata = (collectedData)=>{
const improvedata = {
...collectedData,
id: Math.random(0, 10)
}
props.givemedata(improvedata);
    }

    
  return (
    <div>
      <ExpenseForm collection={collectdata}/>
    </div>
  )
}

export default AddExpense
