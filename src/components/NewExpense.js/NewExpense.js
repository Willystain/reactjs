

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import { useState } from 'react';


function NewExpense(props) {

   const [isEditing, setIsEditing] = useState(false);
    
    function onSaveExpenseData(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString
        }
    
        props.onSaved(expenseData);
    }

    const startEditing = () =>{
    setIsEditing(true)
  
    }

    const cancelEditing =()=>{
      setIsEditing(false)
    
    }



    return <div className="new-expense">
        {!isEditing && <button  onClick={startEditing}> Expand</button>}
        {isEditing && <ExpenseForm onCancel={cancelEditing} onSaveExpenseData ={onSaveExpenseData}/>}
    </div>

}



export default NewExpense;