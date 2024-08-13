import React, { useState } from "react";
import "./App.css";
import Countries from "./components/countries";
import Add from "./components/Add";

function App() {
  const [countries, setCountries] = useState([]);
  const [formValues, setFormValues] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleChange = (e) => {
    // 이벤트가 발생한 input에 등록된 id값을 key로 쓰고,
    // 이벤트가 발생한 input에 입력된 value값으로 formValues 객체를 업데이트
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  // input 초기화
  const init = () => {
    setFormValues({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  // ===추가===
  const handleAddCountry = (event) => {
    event.preventDefault();

    const { country, gold, silver, bronze } = formValues;
    if (!country) {
      alert("국가명을 입력해주세요!");
      return;
    }
    const newCountry = {
      id: new Date().getTime(),
      name: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };
    const sortedCountry = [...countries, newCountry].sort(
      (a, b) => b.gold - a.gold
    );
    setCountries(sortedCountry);
    init();
  };

  // ===업데이트===
  const handleUpdateCountry = (event) => {
    event.preventDefault();

    // state에 있는 나라이름으로 현재 존재하는 countries 배열에서 찾기(find => 내가 수정하려고 하는 대상 국가)
    const targetCountry = countries.find(function (country) {
      return country.name === country.name;
    });

    if (!targetCountry) {
      alert("일치하는 국가가 없습니다!");
      init();
    }

    // targetCountry의 이름과 일치 => gold, silver, bronze state에 맞게 수정하여 return / 일치X => 그대로 내보내(return)
    const newCountries = countries.map(function (country) {
      if (country.name === targetCountry.name) {
        return {
          ...country,
          gold: formValues.gold,
          silver: formValues.silver,
          bronze: formValues.bronze,
        };
      } else {
        return country;
      }
    });
    setCountries(newCountries);
    init();
  };

  // ===삭제===
  const handleDeleteCountry = (id) => {
    const deletedCountry = countries.filter((country) => country.id !== id);
    setCountries(deletedCountry);
  };

  return (
    <div className="container">
      <h1>2024 Paris Olympic</h1>
      <Add
        formValues={formValues}
        handleChange={handleChange}
        handleAddCountry={handleAddCountry}
        handleUpdateCountry={handleUpdateCountry}
      />
      {countries.length === 0 ? (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      ) : (
        <Countries
          countries={countries}
          handleDeleteCountry={handleDeleteCountry}
        />
      )}
    </div>
  );
}

export default App;
