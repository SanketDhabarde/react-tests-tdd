function StarbucksInput({ name, value, onChange: changeHandler, error }) {
  return (
    <>
      <label>
        {name}
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
    </>
  );
}

export default StarbucksInput;
