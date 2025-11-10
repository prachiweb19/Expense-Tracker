import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="no-expense">No expenses yet! Add one above.</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;