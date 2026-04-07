export function CurrentData() {
  return (
    <div className="card shadow-sm mb-3 p-3">
      <h5 className="card-title mb-3">Поточні дані</h5>

      <label>Калорії</label>
      <input className="form-control mb-2" readOnly placeholder="ккал" />
      <div className="progress mb-3" style={{ height: "12px" }}>
        <div className="progress-bar bg-success" style={{ width: "60%" }} />
      </div>

      <label>Білки</label>
      <input className="form-control mb-2" readOnly placeholder="г" />
      <div className="progress mb-3" style={{ height: "12px" }}>
        <div className="progress-bar bg-success" style={{ width: "60%" }} />
      </div>

      <label>Жири</label>
      <input className="form-control mb-2" readOnly placeholder="г" />
      <div className="progress mb-3" style={{ height: "12px" }}>
        <div className="progress-bar bg-success" style={{ width: "60%" }} />
      </div>

      <label>Вуглеводи</label>
      <input className="form-control mb-2" readOnly placeholder="г" />
      <div className="progress" style={{ height: "12px" }}>
        <div className="progress-bar bg-success" style={{ width: "60%" }} />
      </div>
    </div>
  );
}
export default CurrentData;
