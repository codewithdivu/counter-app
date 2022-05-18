import "./App.css";
import React, { createContext, useState } from "react";
import NavBar from "./Components/navBar";
import Counters from "./Components/counters";
import { UserContextProvider } from "./Contexts/userContext";
import { ArrContextProvider } from "./Contexts/arrContext";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 11 },
    { id: 4, value: 0 },
  ]);
  // const [user, setUser] = useState("dk");\

  const handleDelete = (counterId) => {
    const result = counters.filter((counter) => counter.id !== counterId);
    setCounters(result);
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    newCounters.map((c) => {
      if (c.id === counter.id) {
        c.value++;
        return c;
      }
    });

    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    newCounters.map((c) => {
      if (c.id === counter.id) {
        c.value--;
        return c;
      }
    });

    setCounters(newCounters);
  };

  const handleReset = () => {
    const result = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounters(result);
  };

  return (
    <UserContextProvider>
      <ArrContextProvider>
        <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDelete={handleDelete}
            onDecrement={handleDecrement}
            counter={counters}
            totalCounters={counters.length}
          />
        </main>
      </ArrContextProvider>
    </UserContextProvider>
  );
}

export default App;
