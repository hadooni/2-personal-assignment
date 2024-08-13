function Countries(props) {
  return (
    <>
      <div className="newCountry">
        <span>국가명</span>
        <span>금메달</span>
        <span>은메달</span>
        <span>동메달</span>
        <span>액션</span>
      </div>
      {props.countries.map((country) => {
        return (
          <div className="newCountry" key={country.id}>
            <div>{country.name}</div>
            <div>{country.gold}</div>
            <div>{country.silver}</div>
            <div>{country.bronze}</div>
            <button onClick={() => props.handleDeleteCountry(country.id)}>
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Countries;
