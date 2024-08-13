function Add(props) {
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
          type="text"
          value={props.country}
          onChange={(e) => {
            props.setCountry(e.target.value);
          }}
          placeholder="국가 입력"
        />
        <input
          type="number"
          value={props.gold}
          onChange={(e) => props.setGold(e.target.value)}
        />
        <input
          type="number"
          value={props.silver}
          onChange={(e) => props.setSilver(e.target.value)}
        />
        <input
          type="number"
          value={props.bronze}
          onChange={(e) => props.setbronze(e.target.value)}
        />
        <button onClick={props.handleAddCountry}>국가추가</button>
        <button onClick={props.handleUpdateCountry}>업데이트</button>
      </form>
    </>
  );
}

export default Add;
