import React, {useState} from 'react';

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyExpenses = [
  { title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14), id: 1 },
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28), id: 2 },
  { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), id: 3},
  { title: "New Desk", amount: 450, date: new Date(2021, 5, 12), id: 4 },
];

const App = () => {
  const[expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expenses} />
    </div>
    );
}

export default App;
