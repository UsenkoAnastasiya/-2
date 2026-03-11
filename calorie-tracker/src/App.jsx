import { useState } from "react";
function App() {
  return (
    <div className="container mt-4">
      <h1> Мій калькулятор калорій</h1>
      <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Яблуко</h5>
          <h6 className="card-subtitle mb-2 text-muted">100 г</h6>
          <p className="card-text">52 ккал</p>
          <button className="btn btn-danger btn-sm">Видалити</button>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
export default App;
