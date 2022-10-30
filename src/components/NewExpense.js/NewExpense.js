

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


function NewExpense(props) {
    
    function onSaveExpenseData(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString
        }
    
        props.onSaved(expenseData);
    }


    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData ={onSaveExpenseData}/>
    </div>

}



export default NewExpense;