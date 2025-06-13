import { useState } from 'react';
import "../styles/CurrentProfile.css";

function Profile() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [contactsPermission, setContactsPermission] = useState(null);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      setShowPopup(true);
    }
  };

  const handlePermissionSelect = (permission) => {
    setContactsPermission(permission);
    setShowPopup(false);
    // Here you would typically send this to your backend
    console.log(`Phone: ${phoneNumber}, Permission: ${permission}`);
  };

  return (
    <div id='profile-container'>
      <h1 id="profile-title">Your Profile</h1>
      <div>
        <h2 id="information-title">Information</h2>
        {/* Profile form section */}
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

        {/* Phone Number Section */}
        <div className="phone-section">
          <h2 className="section-title">Phone Verification</h2>
          <form onSubmit={handlePhoneSubmit} className="phone-form">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="phone-input"
              pattern="[0-9]{10,15}"
              required
            />
            <button type="submit" className="link-phone-btn">
              Link Phone Number
            </button>
          </form>
        </div>
      </div>

      {/* Permission Popup */}
      {showPopup && (
        <div className="permission-popup">
          <div className="popup-content">
            <h3>Contact Access Permission</h3>
            <p>How should we handle your existing contacts?</p>
            <div className="permission-options">
              <button 
                onClick={() => handlePermissionSelect('block')}
                className="permission-btn block-btn"
              >
                Block all existing contacts
              </button>
              <button 
                onClick={() => handlePermissionSelect('allow')}
                className="permission-btn allow-btn"
              >
                Allow existing contacts to find me
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

