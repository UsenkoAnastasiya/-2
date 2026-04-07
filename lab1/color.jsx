import { useState } from "react";
export default function Color() {
  const [color, Setcolor] = useState("red");
  function set() {
    const nextColor = color === "red" ? "green" : "red";
    Setcolor(nextColor);
  }
  return (
    <div onClick={set} style={{ backgroundColor: color }}>
      {" "}
      клікни{" "}
    </div>
  );
}
