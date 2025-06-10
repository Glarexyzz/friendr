function ProfileCard({ name, hobbies, city, university }) {
  return (
    <div className="result">
      <p className="result-name">{name}</p>
      <div className='result-info'>
        <p className="hobbies">Hobbies: <b>{hobbies.join(", ")}</b></p>
        <p className="city">City: <b>{city}</b></p>
        <p className="university">University: <b>{university}</b></p>
      </div>
    </div>
  );
}

export default ProfileCard;