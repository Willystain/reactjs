
import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [changeUi, setChangeUi] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();


        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    const eventClick = ()=>{
        changeUi ?  setChangeUi(false) :  setChangeUi(true);
    }
    

    const form = <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input
                value={enteredTitle}
                type="text"
                onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label >Amount</label>
            <input
                value={enteredAmount}
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input
                value={enteredDate}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler} />
        </div>

    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
    </div>
    <div className='new-expense__actions'>
        <button onClick={eventClick}>Cancel</button>
    </div>
</form>

const button =  <div className='new-expense__actions'>
          
<button onClick={eventClick} >Expand</button>

</div>


const handleUi = ()=>{
    return changeUi ? button : form;
}


    return (
       handleUi()
    
    );

}


export default ExpenseForm;