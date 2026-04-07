export default function Random() {
  const num1 = Math.floor(Math.random() * 3);
  const num2 = Math.floor(Math.random() * 3);
  const num3 = Math.floor(Math.random() * 3);
  return (
    <>
      {" "}
      <h2> {num1 === num2 && num2 === num3 ? "WIN" : "LOSE"}</h2>
      <h3> Num1 {mum1}</h3>
      <h3> Num2 {num2}</h3>
      <h3> Num3 {num3}</h3>
    </>
  );
}
