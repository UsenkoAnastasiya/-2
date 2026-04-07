function Search({ onSearch }) {
  return (
    <div className="col-md-4">
      <input
        type="text"
        className="form-control"
        placeholder="Введіть назву продукту"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
