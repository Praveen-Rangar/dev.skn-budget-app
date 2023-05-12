import React from "react";

const AddexpenseForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input required type="text" className="htmlForm-control" id="name" />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="number"
            className="htmlForm-control"
            id="cost"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddexpenseForm;
