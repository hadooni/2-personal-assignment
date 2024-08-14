function InputForm({
  formValues,
  handleChange,
  handleAddCountry,
  handleUpdateCountry,
}) {
  const { country, gold, silver, bronze } = formValues;
  return (
    <>
      <div className="container-box">
        <span>국가명</span>
        <span>금메달</span>
        <span>은메달</span>
        <span>동메달</span>
      </div>
      <form>
        <input
          id="country"
          type="text"
          value={country}
          onChange={handleChange}
          placeholder="국가 입력"
        />
        <input id="gold" type="number" value={gold} onChange={handleChange} />
        <input
          id="silver"
          type="number"
          value={silver}
          onChange={handleChange}
        />
        <input
          id="bronze"
          type="number"
          value={bronze}
          onChange={handleChange}
        />
        <button onClick={handleAddCountry}>국가추가</button>
        <button onClick={handleUpdateCountry}>업데이트</button>
      </form>
    </>
  );
}

export default InputForm;
