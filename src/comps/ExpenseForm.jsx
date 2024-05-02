import {useState} from 'react';

const ExpenseForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate form data
      if (!name || !amount || !category || !date) {
        alert('Please fill out all fields');
        return;
      }
      // Submit the form data
      onSubmit({ name, amount, category, date });
      // Clear the form fields
      setName('');
      setAmount('');
      setCategory('');
      setDate('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Name:</label> */}
          <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          {/* <label>Amount:</label> */}
          <input placeholder='Amount' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          {/* <label>Category:</label> */}
          <input placeholder='Category' type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    );
  };

  export default ExpenseForm;