import { Form } from "./Form";

type IncomeWrapperProps = {
  handleAddIncome: (source: string, value: number, date: string) => void;
  handleDeleteIncome: (index: number) => void;
  incomeList: { source: string; value: number; date: string }[];
};

export function IncomeWrapper({
  handleAddIncome,
  handleDeleteIncome,
  incomeList,
}: IncomeWrapperProps) {
  return (
    <div>
      <Form
        handleAddItem={handleAddIncome}
        firstInputId="Income-source"
        firstInputTitle="Income source"
        firstInputPlaceholder="Salary"
        secondInputId="Amount-of-income"
        secondInputTitle="Amount of income"
        secondInputPlaceholder=""
        dateTitle="Date of income"
        btnName="Add Income"
      />
      <table>
        <thead>
          <tr>
            <th>Income</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {incomeList.map((income, index) => (
            <tr key={index}>
              <td>{income.source}</td>
              <td>{income.value}</td>
              <td>{income.date}</td>
              <td>
                <button onClick={() => handleDeleteIncome(index)}>
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
