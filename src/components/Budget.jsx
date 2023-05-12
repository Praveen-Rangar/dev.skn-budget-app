import React, { useState } from "react";

const Budget = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  return (
    <>
      <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between  ">
        {isEditClicked ? (
          <>
            <input
              required="required"
              type="number"
              className="form-control mr-3"
              id="name"
              placeholder="Enter Budget"
            />
            <button
              onClick={() => setIsEditClicked(!isEditClicked)}
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </>
        ) : (
          <>
            {" "}
            <span className="">Budget : £ 2000</span>
            <button
              onClick={() => setIsEditClicked(!isEditClicked)}
              type="button"
              className="btn btn-primary"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Budget;
