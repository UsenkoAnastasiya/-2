import { useState } from "react";

function App() {
  return (
    <div className="container mt-4">
      <h1>Мій калькулятор калорій</h1>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Введіть назву продукту"
      />
      <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
        <img
          src="https://images.unian.net/photos/2026_03/1773148277-3302.jpg?r=421000"
          className="card-img-top"
          alt="Яблуко"
        />
        <div className="card-body">
          <h5 className="card-title">Яблуко</h5>
          <input
            type="number"
            className="form-control form-control-sm mb-2"
            placeholder="100 г"
          />
          <p className="card-text">52 ккал</p>
          <button className="btn btn-danger btn-sm">Видалити</button>
        </div>
      </div>
      <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
        <img
          src="https://images.unian.net/photos/2026_03/1773148277-3302.jpg?r=421000"
          className="card-img-top"
          alt="Яблуко"
        />
        <div className="card-body">
          <h5 className="card-title">Яблуко</h5>
          <input
            type="number"
            className="form-control form-control-sm mb-2"
            placeholder="100 г"
          />
          <p className="card-text">52 ккал</p>
          <button className="btn btn-success btn-sm">Додати</button>
        </div>
      </div>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title mb-3">Мої дані</h5>

          <div className="mb-2">
            <label htmlFor="weight" className="form-label">
              Ваша вага
            </label>
            <input id="weight" className="form-control" placeholder="кг" />
          </div>

          <div className="mb-2">
            <label htmlFor="height" className="form-label">
              Ваш зріст
            </label>
            <input id="height" className="form-control" placeholder="см" />
          </div>

          <div className="mb-2">
            <label htmlFor="age" className="form-label">
              Ваш вік
            </label>
            <input id="age" className="form-control" placeholder="років" />
          </div>

          <div className="mb-2">
            <label htmlFor="gender" className="form-label">
              Ваша стать
            </label>
            <input
              id="gender"
              className="form-control"
              placeholder="чол / жін"
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="activity" className="form-label">
            Ваша активність(від 1 до 5 )
          </label>
          <input id="activity" className="form-control" placeholder="1" />
        </div>
      </div>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title mb-3"> Поточні дані</h5>
          <div className="mb-2">
            <label htmlFor="calories"> Калорії</label>
            <input
              id="calories"
              className="form-control"
              placeholder="ккал"
              readOnly
            />
          </div>
          <div className="progress mt-2" style={{ height: "12px" }}>
            <div className="progress-bar bg-success" style={{ width: "60%" }} />
          </div>
          <div className="mb-2">
            <label htmlFor="proteins"> Білок </label>
            <input
              id="proteins"
              className="form-control"
              placeholder="г"
              readOnly
            />
          </div>
          <div className="progress mt-2" style={{ height: "12px" }}>
            <div className="progress-bar bg-success" style={{ width: "60%" }} />
          </div>
          <div className="mb-2">
            <label htmlFor="fats"> Жири </label>
            <input
              id="fats"
              className="form-control"
              placeholder="г"
              readOnly
            />
          </div>
          <div className="progress mt-2" style={{ height: "12px" }}>
            <div className="progress-bar bg-success" style={{ width: "60%" }} />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="carbohydrates"> Вуглеводи </label>
          <input
            id="carbohydrates"
            className="form-control"
            placeholder="г"
            readOnly
          />
        </div>
        <div className="progress mt-2" style={{ height: "12px" }}>
          <div className="progress-bar bg-success" style={{ width: "60%" }} />
        </div>
      </div>
      <div className="container shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title mb-3">Мій щоденник</h5>
          <div> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
