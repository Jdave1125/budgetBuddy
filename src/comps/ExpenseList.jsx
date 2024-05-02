const ExpenseList = ({ expenses, onDelete }) => {
    return (
      <div>
        <h2>Expenses</h2>
        <ul className="list">
          {expenses.map((expense) => (
            <li className="item" key={expense.id}>
              <div>Name: {expense.name}</div>
              <div>Amount: ${expense.amount}</div>
              <div>Category: {expense.category}</div>
              <div>Date: {expense.date}</div>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;