import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
      date: new Date()
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder=" Enter Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;