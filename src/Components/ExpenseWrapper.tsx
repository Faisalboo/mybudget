import { Form } from "./Form";

type ExpenseWrapperProps = {
  handleAddExpense: (source: string, value: number, date: string) => void;
  handleDeleteExpense: (index: number) => void;
  expenseList: { source: string; value: number; date: string }[];
};

export function ExpenseWrapper({
  handleAddExpense,
  handleDeleteExpense,
  expenseList,
}: ExpenseWrapperProps) {
  return (
    <div>
      <Form
        handleAddItem={handleAddExpense}
        firstInputId="Expense-source"
        firstInputTitle="Expense source"
        firstInputPlaceholder="Electricity bill"
        secondInputId="Amount-of-Expense"
        secondInputTitle="Amount of Expense"
        secondInputPlaceholder=""
        dateTitle="Date of Expense"
        btnName="Add Expense"
      />
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense, index) => (
            <tr key={index}>
              <td>{expense.source}</td>
              <td>{expense.value}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => handleDeleteExpense(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
