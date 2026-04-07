function Navbar({ onNavigate }) {
  return (
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
              onClick={() => onNavigate("data")}
            >
              Мої дані
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => onNavigate("diary")}
            >
              Мій щоденник
            </button>
          </li>
          <li>
            <button
              className="dropdown-item text-danger"
              onClick={() => onNavigate(null)}
            >
              Закрити все
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
