import React from 'react'
import './expenseform.css'
import { useState } from 'react'
const ExpenseForm = (props) => {

                const [formtext, setformText] =   useState("")  
                const [formamount, setformamount]= useState('');
                const [formdate, setformdate] = useState('')    

    const titlesaver=(event)=>{
setformText(event.target.value)
    }
    const amountsaver= (event)=>{
setformamount(event.target.value)
    }
    const datesaver= (event)=>{
setformdate(event.target.value)
    }

    const submit = (event) =>{
        event.preventDefault();
        const formData = {
            title: formtext,
           amount: formamount,
          date:formdate,
          
        }
        props.collection(formData);

        setformText("");
        setformamount("");
        setformdate("");

    }


  return (
    <div>
      <form onSubmit={submit} >
              <div className='titlediv'>
                <label htmlFor="" >Title        </label>
                <input type="text" name="" id="" value={formtext} onChange={titlesaver}/>
              </div>
              <div className='amountdiv'>
                <label htmlFor="">Amount   </label> 
                <input type='number' name="" id="" value={formamount} onChange={amountsaver}/>
              </div>
              <div className='datediv'>
                <label htmlFor=""> Date    </label>
                <input type="date" name="" id=""value={formdate} onChange={datesaver} />
              </div>
              <div className='buttondiv'>
                <button type='submit'> Add Expense</button>
              </div>

      </form>
      </div>
  )
}

export default ExpenseForm
