function Card() {
  return (
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
        <button className="btn btn-success btn-sm w-100">Додати</button>
      </div>
    </div>
  );
}
export default Card;
