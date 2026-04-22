import { useState } from "react";

function Card({ title, calories, image, btnText, btnColor, onAction }) {
  const [grams, setGrams] = useState(100);

  const calculatedCalories = Math.round((calories / 100) * grams);

  return (
    <div className="card shadow-sm mb-3">
      <img
        src={image || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <input
          type="number"
          className="form-control form-control-sm mb-2"
          placeholder="100 г"
          value={grams}
          onChange={(e) => setGrams(Number(e.target.value))}
        />
        <p className="card-text text-muted">{calculatedCalories} ккал</p>
        <button
          className={`btn ${btnColor} btn-sm w-100`}
          onClick={() => onAction(grams)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
