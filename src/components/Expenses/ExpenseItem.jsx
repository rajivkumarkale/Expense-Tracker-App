import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = ({ expense }) => {
    const [title, setTitle] = useState(expense.title)

    const clickHandler = () => {
        setTitle((prevTitle) => {
            return 'Updated!'
        })
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={expense.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${expense.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem