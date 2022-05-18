import React, { useContext, useState } from "react";
import { ArrContext } from "../Contexts/arrContext";
import { UserContext } from "../Contexts/userContext";
import Counter from "./counter";

const Counters = ({
  counter,
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
  totalCounters,
}) => {
  const { user, setUser } = useContext(UserContext);
  const { arr, setArr } = useContext(ArrContext);

  console.log("user :>> ", arr);

  if (totalCounters === 0) {
    return <h1>There is no Counters</h1>;
  }

  return (
    <div>
      <button
        onClick={() => setArr(["abd"])}
        className="btn btn-primary btn-sm m-2"
        // disabled={totalCounters === 0 ? true : false}
      >
        Add Arr
      </button>
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
