import { useState } from 'react';
import '../styles/Finder.css'
import Selector from "../components/Selector";
import ProfileCard from '../components/ProfileCard';

const people = [
  [ 'Mara Vu', 'Manchester', 'Cardiff', [ 'Painting' ] ],
  [
    'Kamdyn Ingram',
    'London',
    'Warwick',
    [ 'Coding', 'Figure Skating', 'Figure Skating' ]
  ],
  [ 'Katie Pollard', 'Exeter', 'Leeds', [ 'Pottery' ] ],
  [
    'Jad Brooks',
    'Birmingham',
    'Imperial',
    [ 'Photography', 'Drawing', 'Photography' ]
  ],
  [
    'Autumn Douglas',
    'Cambridge',
    'Cambridge',
    [ 'Boxing', 'Gymnastics', 'Drawing' ]
  ],
  [ 'Derek Powell', 'London', 'Warwick', [ 'Boxing', 'Gymnastics' ] ],
  [
    'Vivian Hammond',
    'Exeter',
    'Edinburgh',
    [ 'Coding', 'Gymnastics', 'Climbing' ]
  ],
  [
    'Francis Griffin',
    'Cambridge',
    'Imperial',
    [ 'Painting', 'Pottery' ]
  ],
  [ 'Charlie Leblanc', 'Oxford', 'Cardiff', [ 'Pottery' ] ],
  [ 'Braden Myers', 'London', 'Oxford', [ 'Drawing', 'Gymnastics' ] ],
  [ 'Lydia Lin', 'Manchester', 'Oxford', [ 'Photography' ] ],
  [
    'Conor Delarosa',
    'Manchester',
    'Cambridge',
    [ 'Coding', 'Tennis' ]
  ],
  [ 'Iyla Combs', 'London', 'Warwick', [ 'Drawing' ] ],
  [ 'Ahmad Lane', 'Exeter', 'Edinburgh', [ 'Drawing', 'Tennis' ] ],
  [ 'Amy Ho', 'London', 'Warwick', [ 'Coding', 'Tennis' ] ],
  [
    'Morgan Foley',
    'Cambridge',
    'Edinburgh',
    [ 'Pottery', 'Coding', 'Gymnastics' ]
  ],
  [
    'Zaylee Norman',
    'Exeter',
    'Leeds',
    [ 'Gymnastics', 'Gymnastics', 'Gymnastics' ]
  ],
  [
    'Aziel Nguyen',
    'Birmingham',
    'Edinburgh',
    [ 'Drawing', 'Photography', 'Drawing' ]
  ],
  [
    'Nova Cisneros',
    'Oxford',
    'Cardiff',
    [ 'Tennis', 'Photography', 'Painting' ]
  ],
  [
    'Alden Walker',
    'Manchester',
    'Cambridge',
    [ 'Climbing', 'Boxing' ]
  ],
  [ 'Hazel Castillo', 'London', 'Cambridge', [ 'Climbing', 'Tennis' ] ],
  [ 'Kai Austin', 'Exeter', 'Imperial', [ 'Pottery', 'Gymnastics' ] ],
  [ 'Alivia Castaneda', 'Birmingham', 'Leeds', [ 'Boxing' ] ],
  [ 'Collin Chang', 'Oxford', 'UCL', [ 'Drawing' ] ],
  [ 'Ophelia Weeks', 'Truro', 'Oxford', [ 'Climbing', 'Climbing' ] ],
  [
    'Anders Fitzgerald',
    'Manchester',
    'UCL',
    [ 'Drawing', 'Climbing' ]
  ],
  [ 'Marlee Levy', 'London', 'Oxford', [ 'Drawing' ] ],
  [ 'Harold Fitzpatrick', 'Birmingham', 'Cardiff', [ 'Climbing' ] ],
  [
    'Annabella Dennis',
    'Manchester',
    'Cambridge',
    [ 'Gymnastics', 'Boxing' ]
  ],
  [ 'Emanuel Ho', 'Manchester', 'Warwick', [ 'Pottery' ] ]
];

function Finder() {
  const [results, updateResults] = useState(people);

  return (
    <div id="finder-root">
      <h2>Potential Connections</h2>
      <div id="filters">
        <p>Filters:</p>
        <Selector type="city" id="city" />
        <Selector type="university" id="university" />
        <Selector type="hobby" id="hobby" />
        <button>Search</button>
      </div>
      <div id="results">
        {results.map(r => <ProfileCard name={r[0]} hobbies={r[3]} city={r[1]} university={r[2]} key={crypto.randomUUID()} />)}
      </div>
    </div>
  );
}

export default Finder;