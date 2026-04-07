import { useState } from "react";

function UserDataForm({ onSave }) {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "female",
    activity: "1",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Дані з форми:", formData);
    onSave(formData);
  };

  return (
    <div className="card shadow-sm p-3">
      <h5 className="mb-3">Мої дані</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label small">Вага (кг)</label>
          <input
            name="weight"
            type="number"
            className="form-control"
            value={formData.weight}
            onChange={handleChange}
            placeholder="weight"
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label small">Зріст (см)</label>
          <input
            name="height"
            type="number"
            className="form-control"
            value={formData.height}
            onChange={handleChange}
            placeholder="height"
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label small">Стать</label>
          <select
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="female">Жінка</option>
            <option value="male">Чоловік</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label small">Ваша активність(від 1до 5)</label>
          <input
            name="activity"
            type="number"
            className="form-control"
            value={formData.activity}
            onChange={handleChange}
            placeholder="activity"
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label small">Вік</label>
          <input
            name="age"
            type="number"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            placeholder="age"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Зберегти та розрахувати
        </button>
      </form>
    </div>
  );
}

export default UserDataForm;
