// snippet: rafce(react arrow function export component )
import React from "react";

const App = () => {
  const names = ["monu", "sonu", "tinku", "hemu"];
  const styles = {
    color: "green",
    fontSize: "55px",
  };
  return (
    <>
      <h1 style={{ color: "red", fontSize: "25px" }}>Hello Manthan</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index} style={styles}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
