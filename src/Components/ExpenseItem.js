import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  return (
    <div className="expense-card fade-in">
      <div className="expense-title">{expense.title}</div>
      <div
        className={`expense-amount ${
          expense.amount > 100 ? "high" : "low"
        }`}
      >
        ${expense.amount.toFixed(2)}
      </div>
      <div className="expense-date">
        {expense.date.toLocaleDateString()}
      </div>
    </div>
  );
}

export default ExpenseItem;