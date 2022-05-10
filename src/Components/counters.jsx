import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({
  counter,
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
  totalCounters,
}) => {
  if (totalCounters === 0) {
    return <h1>There is no Counters</h1>;
  }

  return (
    <div>
      <button
        onClick={onReset}
        className="btn btn-primary btn-sm m-2"
        // disabled={totalCounters === 0 ? true : false}
      >
        Reset
      </button>
      {counter.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
