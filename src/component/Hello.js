import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike");

  return (
    <>
      <h1>state</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        change
      </button>
    </>
  );
}
