function Profile() {
  return (
    <div>
      <h1>Sarah's Profile</h1>
      <div>
        <h2>Information</h2>
        <label for="city">City of Residence</label>

        <select name="city" id="city">
          <option value="london">London</option>
          <option value="oxford">Oxford</option>
          <option value="truro">Truro</option>
          <option value="liverpool">Liverpool</option>
        </select>
        
        <br/>
        <label for="university">University</label>

        <select name="university" id="university">
          <option value="imperial">Imperial</option>
          <option value="oxford">Oxford</option>
          <option value="cambridge">Cambridge</option>
          <option value="ucl">UCL</option>
        </select> 

        <br/>
        <label for="hobby">First Hobby</label>

        <select name="hobby" id="hobby">
          <option value="climbing">Climbing</option>
          <option value="painting">Painting</option>
          <option value="rhythmic-gymnastics">Rhythmic Gymnastics</option>
          <option value="train-spotting">Train Spotting</option>
        </select> 

        <br/>

        <label for="hobby2">Second Hobby</label>

        <select name="hobby2" id="hobby2">
          <option value="rhythmic-gymnastics">Rhythmic Gymnastics</option>
          <option value="climbing">Climbing</option>
          <option value="painting">Painting</option>
          <option value="train-spotting">Train Spotting</option>
        </select> 

        <br/>
        <button>Save Profile</button>
      </div>
    </div>
  );
}

export default Profile;