export default function SearchInput({ queryData, handleSearch }) {
  return (
    <>
      <select
        name="query"
        id="query"
        value={queryData.query}
        onChange={handleSearch}
      >
        <option value="title">제목</option>
        <option value="author">작성자</option>
      </select>
      <input
        type="text"
        name="value"
        value={queryData.value}
        onChange={handleSearch}
        autoComplete="off"
      />
    </>
  );
}
