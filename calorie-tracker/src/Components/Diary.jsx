function Diary({ meals, onSave, history }) {
  return (
    <div className="card shadow-sm mb-3 p-3">
      <h5 className="card-title mb-3 text-primary">Мій щоденник</h5>

      {/* Секція поточних продуктів */}
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
          <button
            className="btn btn-primary btn-sm w-100 mt-2"
            onClick={onSave}
          >
            Зберегти сьогодні
          </button>
        )}
      </div>

      <hr />

      {/* Секція історії */}
      <div className="mt-3">
        <h6>Історія:</h6>
        {history.length === 0 ? (
          <p className="small text-muted">Історія поки порожня</p>
        ) : (
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
