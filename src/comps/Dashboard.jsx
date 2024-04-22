import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Dashboard =() => {
    const nav = useNavigate();
    useEffect(() =>{
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if(!isLoggedIn){
            nav('/login')
        }
    },[nav])

    const handleLogout =() =>{
        localStorage.removeItem('isLoggedIn');
        nav('/login');
    }

    const initialExpenses =[
        { id: 1, name: 'Groceries', amount: 50, category: 'Food', date: '2024-04-22' },
        { id: 2, name: 'Rent', amount: 1000, category: 'Housing', date: '2024-04-20' },
    ]

    const [expenses,setExpenses] = useState(initialExpenses);

    const addExpense = (newExpense) =>{
        setExpenses([...expenses,{id:expenses.length + 1, ...newExpense}]);
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    }

    return(
        <div>
            <h1>Your dashboard</h1>
            <ExpenseForm onSubmit={addExpense} />
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;