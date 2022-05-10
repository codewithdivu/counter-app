import React, { useState } from "react";

const Counter = ({ onDelete, counter, onIncrement, onDecrement }) => {
  return (
    <div className="row">
      <div className="col-1">
        <span
          style={
            counter.value === 0
              ? { backgroundColor: "yellow", color: "black" }
              : { backgroundColor: "blue" }
          }
          className="badge badge-primary m-2"
        >
          {counter.value === 0 ? "zero" : counter.value}
        </span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? true : false}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
