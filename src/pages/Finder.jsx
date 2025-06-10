import '../styles/Finder.css'
import Selector from "../components/Selector";

function Finder() {
  return (
    <div id="finder-root">
      <h2>Potential Connections</h2>
      <div id="filters">
        <p>Filters</p>
        <Selector type="city" />
        <Selector type="university" />
        <Selector type="hobby" />
      </div>
      <div id="results">
        <div className="result">
          <h3 className="result-name">Andy</h3>
          <p className="hobbies">Tennis, Coding, Climbing</p>
          <p className="city">London</p>
          <p className="university">UCL</p>
        </div>

        <div className="result">
          <h3 className="result-name">Steve</h3>
          <p className="hobbies">Hiking, Scrabble, Farming</p>
          <p className="city">Oxford</p>
          <p className="university">Oxford</p>
        </div>

        <div className="result">
          <h3 className="result-name">Sarah</h3>
          <p className="hobbies">Photography, Boxing, Piano</p>
          <p className="city">London</p>
          <p className="university">Imperial</p>
        </div>
      </div>
    </div>
  );
}

export default Finder;