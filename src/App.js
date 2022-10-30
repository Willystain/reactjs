import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense.js/NewExpense";
import { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toi let Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 500,
      date: new Date(2021, 5, 12),
    },
  ]); 

  function addExpense(expense){
    setExpenses((current) => [...current, expense]);
  }

 


 

  return (
    <div>
      <NewExpense onSaved={addExpense}/>
      <Expenses expenseData={expenses}></Expenses>
    
    </div>
  );
}


export default App;
