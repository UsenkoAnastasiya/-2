import calculateBMR from "../memoize";
function CurrentData({
  stats,
  eatenCalories = 0,
  eatenProteins = 0,
  eatenFats = 0,
  eatenCarbs = 0,
}) {
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

  const getPercentage = (current, target) => {
    if (!target || target === 0) return 0;
    const percent = (current / target) * 100;
    return percent > 100 ? 100 : percent;
  };

  return (
    <div className="card shadow-sm mb-3 p-3 bg-light text-start">
      <h5 className="card-title mb-3 text-primary border-bottom pb-2">
        Ваші показники
      </h5>

      {stats ? (
        <>
          <div className="mb-4 p-2 bg-white border rounded text-center shadow-sm">
            <span className="small text-muted d-block fw-bold">
              ДЕННА НОРМА:
            </span>
            <span className="h4 text-success fw-bold">
              {targetCalories} ккал
            </span>
          </div>

          <label className="small fw-bold mb-1">
            Калорії: {eatenCalories} / {targetCalories} ккал
          </label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              style={{
                width: `${getPercentage(eatenCalories, targetCalories)}%`,
              }}
            />
          </div>

          <label className="small fw-bold mb-1">
            Білки: {eatenProteins} / {targetProteins}г
          </label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-info"
              style={{
                width: `${getPercentage(eatenProteins, targetProteins)}%`,
              }}
            />
          </div>

          <label className="small fw-bold mb-1">
            Жири: {eatenFats} / {targetFats}г
          </label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-warning"
              style={{ width: `${getPercentage(eatenFats, targetFats)}%` }}
            />
          </div>

          <label className="small fw-bold mb-1">
            Вуглеводи: {eatenCarbs} / {targetCarbs}г
          </label>
          <div className="progress mb-3" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-danger"
              style={{ width: `${getPercentage(eatenCarbs, targetCarbs)}%` }}
            />
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
