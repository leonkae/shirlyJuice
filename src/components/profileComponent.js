import { useState } from "react";
import NameForm from "./name";
import "./homeComponent.css";
import mongoli from "./assets/fdhmongoli.jpg";
function ProfileComponent() {
  const [username, setUsername] = useState("");

  return (
    <div className="profile-component">
      {username ? (
        <div className="profile-info">
          <div className="profile-image">
            <img src={mongoli} alt="Profile-mongoli" />
          </div>
          <h2>Welcome, {username}!</h2>
          <p>This is your profile page.</p>
        </div>
      ) : (
        <NameForm onSubmitName={setUsername} />
      )}
    </div>
  );
}

export default ProfileComponent;
