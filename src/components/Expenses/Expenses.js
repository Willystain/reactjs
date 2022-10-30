import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";

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
            return expense.date.toLocaleDateString('en-us', { year: "numeric" }) === year;
        }

    })


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter select={year} onSelect={handleYear} />

                {filtered.length === 0 ? <p>No expenses found</p> : filtered.map((obj, index) => (
                    <ExpenseItem
                        key={obj.id}
                        title={obj.title}
                        amount={obj.amount}
                        date={obj.date} />

                ))}



            </Card>
        </div>
    );

}



export default Expenses;