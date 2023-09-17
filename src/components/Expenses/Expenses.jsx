import { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'


const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    
    const filteredExpenses = items.filter( expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const selectYearHandler = (year)=>{
        setFilteredYear((prevYear) => year)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onSelectYear={selectYearHandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses