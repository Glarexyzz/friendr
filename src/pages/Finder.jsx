import Selector from "../components/Selector";

function Finder() {
  return (
    <div>
      <h2>Potential Connections</h2>
      <div id="filters">
        <Selector type="city" />
        <Selector type="university" />
      </div>
      <div id="results">
        <div className="result">
          <h3>Andy</h3>
          <p>Tennis, Coding, Climbing</p>
          <p>London</p>
        </div>
      </div>
    </div>
  );
}

export default Finder;