import { useState } from "react";

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1>Мій калькулятор калорій</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          Меню
        </button>

        <ul
          className={`dropdown-menu ${isOpen ? "show" : ""}`}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelect("data")}
            >
              Мої дані
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelect("diary")}
            >
              Мій щоденник
            </button>
          </li>
          <li>
            <button
              className="dropdown-item text-danger"
              onClick={() => handleSelect(null)}
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
