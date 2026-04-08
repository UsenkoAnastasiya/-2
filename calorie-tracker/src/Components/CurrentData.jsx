import { calculateBMR } from "../memoize";
function CurrentData({ stats }) {
  const targetCalories = stats
    ? calculateBMR(
        Number(stats.age),
        Number(stats.weight),
        Number(stats.height),
        stats.gender,
        stats.activity,
      )
    : 0;
  const targetProteins = Math.round((targetCalories * 0.3) / 4);
  const targetFats = Math.round((targetCalories * 0.3) / 9);
  const targetCarbs = Math.round((targetCalories * 0.4) / 4);

  return (
    <div className="card shadow-sm mb-3 p-3 bg-light">
      <h5 className="card-title mb-3 text-primary">Ваші показники</h5>

      {stats ? (
        <>
          <div className="mb-4 p-2 bg-white border rounded text-center">
            <span className="small text-muted d-block">
              Денна норма калорій:
            </span>
            <span className="h4 text-success fw-bold">
              {targetCalories} ккал
            </span>
          </div>

          <label className="small fw-bold">Калорії (прогрес дня)</label>
          <input
            className="form-control mb-2"
            readOnly
            value={`${targetCalories} ккал`}
          />
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: "0%" }}
            />{" "}
          </div>

          <label className="small fw-bold">
            Білки (ціль: {targetProteins}г)
          </label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div className="progress-bar bg-info" style={{ width: "0%" }} />
          </div>

          <label className="small fw-bold">Жири (ціль: {targetFats}г)</label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div className="progress-bar bg-warning" style={{ width: "0%" }} />
          </div>

          <label className="small fw-bold">
            Вуглеводи (ціль: {targetCarbs}г)
          </label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div className="progress-bar bg-danger" style={{ width: "0%" }} />
          </div>
        </>
      ) : (
        <p className="text-muted text-center py-4">
          Будь ласка, введіть свої дані у формі "Мої дані", щоб розрахувати
          норму.
        </p>
      )}
    </div>
  );
}

export default CurrentData;
