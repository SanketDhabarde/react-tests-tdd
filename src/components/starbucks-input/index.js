function StarbucksInput({ name, value, onChange: changeHandler, error }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {error && <p>{error}</p>}
    </>
  );
}

export default StarbucksInput;
