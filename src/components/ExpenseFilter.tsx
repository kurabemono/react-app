import { categories } from "./Categories";

interface Props {
  onChangeFilter: (filterKeyword: string) => void;
}

const ExpenseFilter = ({ onChangeFilter }: Props) => {
  return (
    <select
      className="form-select"
      name="category"
      onChange={(event) => onChangeFilter(event.target.value)}
    >
      <option key="All categories" value="">
        All categories
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
