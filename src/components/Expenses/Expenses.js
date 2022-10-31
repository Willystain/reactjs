import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [year, setYear] = useState('2020');

    const handleYear = (data) => {
        setYear(data);
        console.log(year);

    }

    const filtered = props.expenseData.filter(expense => {
        if (year === 'all') {
            return expense;
        } else {
            return expense.date.getFullYear().toString() === year;

        }

    })


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter select={year} onSelect={handleYear} />
                <ExpensesChart expenseChartData = {filtered}/>
                {filtered.length === 0 && <p>No expenses found</p>}
                {filtered.length > 0 && filtered.map((obj, index) => (
                    <ExpenseItem
                        key={index}
                        title={obj.title}
                        amount={obj.amount}
                        date={obj.date} />

                ))}

               
            </Card>
        </div>
    );

}



export default Expenses;