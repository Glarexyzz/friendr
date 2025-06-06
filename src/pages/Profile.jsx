import "../styles/CurrentProfile.css";



function Profile() {
  return (
    <div id='profile-container'>
      <h1 id="profile-title">Your Profile</h1>
      <div>
        <h2 id="information-title">Information</h2>
        <div id="form">
          <div id="labels">
            <label for="city" className='info-label'>City of Residence</label>
            <label for="university" className='info-label'>University</label>
            <label for="hobby" className='info-label'>First Hobby</label>
            <label for="hobby2" className='info-label'>Second Hobby</label>
          </div>
          <div id="selects">
            <select name="city" id="city">
              <option value="london">London</option>
              <option value="oxford">Oxford</option>
              <option value="truro">Truro</option>
              <option value="liverpool">Liverpool</option>
            </select>

            <select name="university" id="university">
              <option value="imperial">Imperial</option>
              <option value="oxford">Oxford</option>
              <option value="cambridge">Cambridge</option>
              <option value="ucl">UCL</option>
            </select> 

            <select name="hobby" id="hobby">
              <option value="climbing">Climbing</option>
              <option value="painting">Painting</option>
              <option value="rhythmic-gymnastics">Rhythmic Gymnastics</option>
              <option value="train-spotting">Train Spotting</option>
            </select> 

            <select name="hobby2" id="hobby2">
              <option value="rhythmic-gymnastics">Rhythmic Gymnastics</option>
              <option value="climbing">Climbing</option>
              <option value="painting">Painting</option>
              <option value="train-spotting">Train Spotting</option>
            </select> 
          </div>
        </div>
        <button id="save-button">Save Profile</button>
      </div>
    </div>
  );
}

export default Profile;