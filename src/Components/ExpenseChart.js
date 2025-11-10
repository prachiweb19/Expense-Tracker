import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,

} from "chart.js";
import "./ExpenseChart.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Expenses",
        data: months.map(
          (_, i) =>
            expenses
              .filter((e) => e.date.getMonth() === i)
              .reduce((sum, e) => sum + e.amount, 0)
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderRadius:8,
      }
    ]
  };
  const options = {
    plugins:{
        legend: {display:false},
    },
    scales:{
        y:{bebeginAtZero: true}
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <Bar data={data}  options={options}/>
    </div>
  );
}

export default ExpenseChart;