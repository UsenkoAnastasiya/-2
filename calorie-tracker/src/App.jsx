import { useState } from "react";
import { ColorGenerator, TimeoutIterator } from "calorie-lib";
function App() {
  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Введіть назву продукту"
      />
      <h1> Мій калькулятор калорій</h1>
      <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Яблуко</h5>
          <h6 className="card-subtitle mb-2 text-muted">100 г</h6>
          <p className="card-text">52 ккал</p>
          <img
            src="https://images.unian.net/photos/2026_03/1773148277-3302.jpg?r=421000"
            className="card-img-top"
            alt="Яблуко"
          />
          <button className="btn btn-danger btn-sm">Видалити</button>{" "}
        </div>
      </div>{" "}
      <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Яблуко</h5>
          <input
            type="number"
            className="form-control-sm"
            placeholder="100гр"
          />
          <p className="card-text">52 ккал</p>
          <img
            src="https://images.unian.net/photos/2026_03/1773148277-3302.jpg?r=421000"
            className="card-img-top"
            alt="Яблуко"
          />
          <button className="btn btn-success btn-sm">Додати</button>{" "}
        </div>
        <div>
          {" "}
          <input id="weight" className="form-control-sm" placeholder="weight" />
          <label htmlFor="weight"> Ваша вага </label>
          <input id="height" className="form-control-sm" placeholder="height" />
          <label htmlFor="height"> Ваш зріст </label>
          <input id="age" className="form-control-sm" placeholder="age" />
          <label htmlFor="age"> Ваш вік </label>
          <input id="gender" className="form-control-sm" placeholder="gender" />
          <label htmlFor="gender"> Ваша стать </label>
        </div>
      </div>
    </div>
  );
}
export default App;
