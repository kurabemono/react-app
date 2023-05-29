import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { FieldValues } from "react-hook-form";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const handleClick = () => {};
  const [filter, setFilter] = useState("");

  const handleFilterChange = (filterKeyword: string) => {
    setFilter(filterKeyword);
  };

  const handleDelete = (uuid: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== uuid));
  };

  const handleSubmit = (data: FieldValues) => {
    setExpenses([
      ...expenses,
      {
        id: crypto.randomUUID(),
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };

  const [expenses, setExpenses] = useState([
    {
      id: crypto.randomUUID(),
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: crypto.randomUUID(),
      description: "Eggs",
      amount: 3,
      category: "Groceries",
    },
    {
      id: crypto.randomUUID(),
      description: "Netflix",
      amount: 12,
      category: "Entertainment",
    },
  ]);

  return (
    <>
      <div className="mb-3">
        <ExpenseForm onSubmit={handleSubmit} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onChangeFilter={handleFilterChange} />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={expenses}
          filterKeyword={filter}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
