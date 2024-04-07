import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Budget from "./Components/Budget";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import "./App.css";

interface Income {
  source: string;
  value: number;
  date: string;
}

interface Expense {
  source: string;
  value: number;
  date: string;
}

function App() {
  const [incomeList, setIncomeList] = React.useState<Income[]>([]);
  const [expenseList, setExpenseList] = React.useState<Expense[]>([]);
  const [targetSaving, setTargetSaving] = React.useState<number>(0);
  const [savingAmount, setSavingAmount] = React.useState<number>(0);
  const [transferAmount, setTransferAmount] = React.useState<number>(0);
  const [transferredSaving, setTransferredSaving] = React.useState<number>(0);

  React.useEffect(() => {
    updateSavingAmount();
  }, [incomeList, expenseList, targetSaving]);

  const handleAddIncome = (source: string, value: number, date: string) => {
    const newIncome: Income = { source, value, date };
    setIncomeList([...incomeList, newIncome]);
  };

  const handleAddExpense = (source: string, value: number, date: string) => {
    const newExpense: Expense = { source, value, date };
    setExpenseList([...expenseList, newExpense]);
  };

  const handleSetTargetSaving = (value: number) => {
    setTargetSaving(value);
  };

  const handleDeleteIncome = (index: number) => {
    const updatedIncomeList: Income[] = [...incomeList];
    updatedIncomeList.splice(index, 1);
    setIncomeList(updatedIncomeList);
  };

  const handleDeleteExpense = (index: number) => {
    const updatedExpenseList: Expense[] = [...expenseList];
    updatedExpenseList.splice(index, 1);
    setExpenseList(updatedExpenseList);
  };

  const updateSavingAmount = () => {
    const totalIncome: number = incomeList.reduce(
      (acc, income) => acc + income.value,
      0
    );
    const totalExpense: number = expenseList.reduce(
      (acc, expense) => acc + expense.value,
      0
    );
    const balance: number = totalIncome - totalExpense;
    const updatedSavingAmount: number = balance >= 0 ? balance : 0;
    setSavingAmount(updatedSavingAmount);
  };

  const handleTransferToSaving = () => {
    if (transferAmount > savingAmount) {
      alert("Transfer amount cannot exceed current balance.");
      return;
    }
    setSavingAmount(savingAmount - transferAmount);
    setTransferredSaving(transferredSaving + transferAmount);
    setTransferAmount(0);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/budget-app">Budget</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/budget-app"
            element={
              <Budget
                setTargetSaving={handleSetTargetSaving}
                targetSaving={targetSaving}
                savingAmount={savingAmount}
              />
            }
          />
          <Route
            path="/"
            element={
              <div>
                <div className="column">
                  <IncomeWrapper
                    handleAddIncome={handleAddIncome}
                    handleDeleteIncome={handleDeleteIncome}
                    incomeList={incomeList}
                  />
                </div>
                <div className="column">
                  <ExpenseWrapper
                    handleAddExpense={handleAddExpense}
                    handleDeleteExpense={handleDeleteExpense}
                    expenseList={expenseList}
                  />
                </div>
                <div className="column">
                  <div className="current-saving-container">
                    <p>Current Saving</p>
                    <p>{transferredSaving}</p>
                  </div>
                </div>
                <div className="balance-container">
                  <p>Current Balance:</p>
                  <span>{savingAmount}</span>
                  <div className="transfer-container">
                    <p>Transfer to Saving Account</p>
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) =>
                        setTransferAmount(parseFloat(e.target.value))
                      }
                    />
                    <button onClick={handleTransferToSaving}>Transfer</button>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
