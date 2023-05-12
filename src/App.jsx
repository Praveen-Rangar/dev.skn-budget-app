import { createContext, useEffect, useState } from "react";
import AddexpenseForm from "./components/AddexpenseForm";
import Budget from "./components/Budget";
import Expense from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";

function App() {

  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <Expense />
        </div>{" "}
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddexpenseForm />
        </div>
      </div>
    </div>
  );
}

export default App;
