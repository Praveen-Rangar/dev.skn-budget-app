import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
          <span style={{ marginRight: "100px" }}>£{props.cost}</span>
          <TiDelete
            className=""
            onClick={() => handleDelete(props.id)}
            size="1.5em"
          />
        </div>
      </li>
    </div>
  );
};

export default ExpenseItem;
