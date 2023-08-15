import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("please provide value");
      return;
    }
    addItem(item);
    setItem("");
  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <h4>Todo List</h4>
        <div className="form-control">
          <input
            type="text"
            name="item"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
