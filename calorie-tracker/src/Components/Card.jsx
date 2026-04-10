function Card({ title, calories, btnText, btnColor, onAction }) {
  return (
    <div className="card shadow-sm mb-3">
      <img
        src="https://images.unian.net/photos/2026_03/1773148277-3302.jpg?r=421000"
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <input
          type="number"
          className="form-control form-control-sm mb-2"
          placeholder="100 г"
        />
        <p className="card-text text-muted">{calories} ккал</p>
        <button className={`btn ${btnColor} btn-sm w-100`} onClick={onAction}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
