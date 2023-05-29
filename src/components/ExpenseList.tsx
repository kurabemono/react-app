import Expense from "./Expense";

interface Props {
  expenses: Expense[];
  filterKeyword?: string;
  onDelete: (uuid: string) => void;
}

const ExpenseList = ({ expenses, filterKeyword = "", onDelete }: Props) => {
  let filteredExpenses = expenses;
  if (filterKeyword) {
    filteredExpenses = expenses.filter(
      (expense) => expense.category === filterKeyword
    );
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                {/* placeholder for actual delete button */}
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              $
              {filteredExpenses
                .reduce((sum, expense) => sum + expense.amount, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
