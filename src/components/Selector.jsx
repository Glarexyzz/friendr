const data = {
  "city": ["London", "Oxford", "Truro", "Cambridge", "Liverpool"],
  "university": ["Imperial", "UCL", "Oxford", "Cambridge", "Warwick"],
  "hobby": ["Climbing", "Painting", "Gymnastics", "Tennis", "Drawing"]
};

function Selector({ type }) {
  const values = data[type];
  const options = values.map(
    v => <option value={v} key={crypto.randomUUID()}>{v}</option>
  );

  return (
    <select name={type} className="selector">
      {options}
    </select>
  );
}

export default Selector;