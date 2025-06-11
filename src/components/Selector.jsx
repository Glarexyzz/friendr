const data = {
  "city": ["London", "Oxford", "Truro", "Cambridge", "Liverpool", "Manchester", "Exeter", "Birmingham"],
  "university": ["Imperial", "UCL", "Oxford", "Cambridge", "Warwick", "Edinburgh", "Leeds", "Cardiff"],
  "hobby": ["Climbing", "Painting", "Gymnastics", "Tennis", "Drawing", "Figure Skating", "Pottery", "Boxing", "Coding", "Photography"]
};

function Selector({ type, id, value }) {
  const values = data[type];
  const options = values.map(
    v => <option value={v} key={crypto.randomUUID()} selected={v === value ? "selected" : ""}>{v}</option>
  );

  return (
    <select name={type} className="selector" id={id}>
      <option value={`none`}>{`Select ${type}`}</option>
      {options}
    </select>
  );
}

export default Selector;