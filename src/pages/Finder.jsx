import '../styles/Finder.css'
import Selector from "../components/Selector";
import ProfileCard from '../components/ProfileCard';

function Finder() {
  return (
    <div id="finder-root">
      <h2>Potential Connections</h2>
      <div id="filters">
        <p>Filters:</p>
        <Selector type="city" />
        <Selector type="university" />
        <Selector type="hobby" />
      </div>
      <div id="results">
        <ProfileCard name={"Andy"} hobbies={["Tennis", "Coding", "Climbing"]} city={"London"} university={"UCL"} />
        <ProfileCard name={"Steve"} hobbies={["Hiking", "Scrabble", "Farming"]} city={"Oxford"} university={"Oxford"} />
        <ProfileCard name={"Sarah"} hobbies={["Photography", "Boxing", "Piano"]} city={"London"} university={"Imperial"} />
      </div>
    </div>
  );
}

export default Finder;