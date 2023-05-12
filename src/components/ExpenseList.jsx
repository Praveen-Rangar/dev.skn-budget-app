import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 70 },
    { id: 4, name: "Fuel", cost: 40 },
    { id: 5, name: "Child Care", cost: 500 },
  ];

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
      />

      <ul className="list-group">
        {expenses.map((expense, id) => (
          <ExpenseItem
            key={id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
