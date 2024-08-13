import React, { useState } from "react";
import "./App.css";
import Countries from "./components/countries";
import Add from "./components/Add";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setbronze] = useState(0);

  // input 초기화
  const init = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setbronze(0);
    return;
  };

  // ===추가===
  const handleAddCountry = () => {
    event.preventDefault();
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
    setCountries([...countries, newCountry]);
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

    console.log(targetCountry);
    // targetCountry의 이름과 일치 => gold, silver, bronze state에 맞게 수정하여 return / 일치X => 그대로 내보내(return)
    const newCountries = countries.map(function (country) {
      if (country.name === targetCountry.name) {
        return { ...country, gold: gold, silver: silver, bronze: bronze };
      } else {
        return country;
      }
    });
    console.log(newCountries);
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
        country={country}
        gold={gold}
        silver={silver}
        bronze={bronze}
        handleAddCountry={handleAddCountry}
        handleUpdateCountry={handleUpdateCountry}
        setCountry={setCountry}
        setGold={setGold}
        setSilver={setSilver}
        setbronze={setbronze}
      />
      <Countries
        countries={countries}
        handleDeleteCountry={handleDeleteCountry}
      />
    </div>
  );
}

export default App;
