export default function Filter({ filter, handleChangeFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
}
