import React, { useState } from "react";
import Header from "./Components/Header";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseChart from "./Components/ExpenseChart";
import "./App.css";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const toggleTheme=()=>{
    console.log("Dark mode toggled:",!darkMode)
    setDarkMode((prevMode)=> !prevMode);
  };
  return (
    <div className= { `App ${darkMode ? "dark" : "lightcd"}`}>
      <Header />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme}/>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;