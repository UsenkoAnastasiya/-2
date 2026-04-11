function Diary({ meals, onRemove, onSave, history }) {
  return (
    <div className="card shadow-sm mb-3 p-3">
      <h5 className="card-title mb-3 text-primary">Мій щоденник</h5>

      <div className="mb-4">
        <h6>Продукти за сьогодні:</h6>
        {meals.length === 0 ? (
          <p className="small text-muted italic">Ще нічого не з'їдено</p>
        ) : (
          meals.map((item) => (
            <div
              key={item.id}
              className="card mb-2 p-2 border-start border-success border-4"
            >
              <div className="d-flex justify-content-between">
                <strong>{item.title}</strong>
                <span>{item.calories} ккал</span>
              </div>
            </div>
          ))
        )}

        {meals.length > 0 && (
          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-outline-danger btn-sm flex-grow-1"
              onClick={onRemove}
            >
              ✖ Видалити останнє
            </button>
            <button
              className="btn btn-primary btn-sm flex-grow-1"
              onClick={onSave}
            >
              💾 Зберегти сьогодні
            </button>
          </div>
        )}
      </div>

      <hr />

      <div className="mt-3">
        <h6>Історія:</h6>
        {history && history.length === 0 ? (
          <p className="small text-muted">Історія поки порожня</p>
        ) : (
          history &&
          history.map((entry) => (
            <div key={entry.id} className="card mb-2 p-2 bg-light shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{entry.date}</span>
                <span className="badge bg-secondary">
                  {entry.calories} ккал за день
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Diary;
