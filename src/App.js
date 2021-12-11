import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { title: "New Desk", amount: 450, date: new Date(2021, 5, 12) },
  ];

  const addExpenseHandler = expense => {
    console.log("In app.js");
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expenses} />
    </div>
    );
}

export default App;
