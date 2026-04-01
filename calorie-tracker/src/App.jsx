import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Мій калькулятор калорій</h1>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Меню
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setActivePage("data")}
              >
                Мої дані
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setActivePage("diary")}
              >
                Мій щоденник
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-danger"
                onClick={() => setActivePage(null)}
              >
                Закрити все
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Введіть назву продукту"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          {searchQuery && (
            <>
              <div className="card shadow-sm mb-3">
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
                  <button className="btn btn-success btn-sm w-100">
                    Додати
                  </button>
                </div>
              </div>
              <div className="card shadow-sm mb-3">
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
                  <button className="btn btn-danger btn-sm w-100">
                    Видалити
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm mb-3 p-3">
            <h5 className="card-title mb-3">Поточні дані</h5>

            <label>Калорії</label>
            <input className="form-control mb-2" readOnly placeholder="ккал" />
            <div className="progress mb-3" style={{ height: "12px" }}>
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              />
            </div>

            <label>Білки</label>
            <input className="form-control mb-2" readOnly placeholder="г" />
            <div className="progress mb-3" style={{ height: "12px" }}>
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              />
            </div>

            <label>Жири</label>
            <input className="form-control mb-2" readOnly placeholder="г" />
            <div className="progress mb-3" style={{ height: "12px" }}>
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              />
            </div>

            <label>Вуглеводи</label>
            <input className="form-control mb-2" readOnly placeholder="г" />
            <div className="progress" style={{ height: "12px" }}>
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              />
            </div>
          </div>

          {activePage === "data" && (
            <div className="card shadow-sm mb-3 p-3">
              <h5 className="card-title mb-3">Мої дані</h5>

              <input className="form-control mb-2" placeholder="Вага (кг)" />
              <input className="form-control mb-2" placeholder="Зріст (см)" />
              <input className="form-control mb-2" placeholder="Вік" />
              <input className="form-control mb-2" placeholder="Стать" />
              <input
                className="form-control mb-2"
                placeholder="Активність (1-5)"
              />

              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={() => setActivePage(null)}
              >
                Зберегти
              </button>
            </div>
          )}

          {activePage === "diary" && (
            <div className="card shadow-sm mb-3 p-3">
              <h5 className="card-title mb-3">Мій щоденник</h5>

              <div className="card mb-2 p-2">
                <h6>26.03.2026</h6>
                <p>Калорії: 1800</p>
                <p>Білки: 90 г</p>
                <p>Жири: 60 г</p>
                <p>Вуглеводи: 200 г</p>
              </div>

              <div className="card mb-2 p-2">
                <h6>25.03.2026</h6>
                <p>Калорії: 2100</p>
                <p>Білки: 100 г</p>
                <p>Жири: 70 г</p>
                <p>Вуглеводи: 220 г</p>
              </div>

              <button className="btn btn-primary btn-sm mt-2">
                Зберегти сьогодні
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
