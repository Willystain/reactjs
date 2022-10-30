import './ExpenseDate.css'



function ExpenseDate(props) {

    const month = props.date.toLocaleDateString('en-us', { month: "short" })
    const day = props.date.toLocaleDateString('en-us', { day: "numeric" })
    const year = props.date.getFullYear().toString()

    return (
        <div className='expense-date'>
            <div className='expense-date__month'><h2>{month}</h2></div>
            <div className='expense-date__day'><h2>{day}</h2></div>
            <div className='expense-date___year'><h2>{year}</h2></div>
        </div>
        );


}

export default ExpenseDate;