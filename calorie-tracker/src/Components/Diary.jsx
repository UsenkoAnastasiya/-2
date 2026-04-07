function Diary() {
  return (
    <div className="card shadow-sm mb-3 p-3">
      <h5 className="card-title mb-3">Мій щоденник</h5>
      <div className="card mb-2 p-2">
        <h6>26.03.2026</h6>
        <p>Калорії: 1800 | Білки: 90 г | Жири: 60 г | Вуглеводи: 200 г</p>
      </div>
      <div className="card mb-2 p-2">
        <h6>25.03.2026</h6>
        <p>Калорії: 2100 | Білки: 100 г | Жири: 70 г | Вуглеводи: 220 г</p>
      </div>
      <button className="btn btn-primary btn-sm mt-2">Зберегти сьогодні</button>
    </div>
  );
}

export default Diary;
