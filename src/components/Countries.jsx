function Countries(props) {
  return (
    <>
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
