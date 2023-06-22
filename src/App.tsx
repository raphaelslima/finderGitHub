import { useState } from "react";
import "./App.css";

//raphaelslima

//Components
import Search from "./components/Search/Search";
import User from "./components/User/User";

//Types
import { UserType } from "./types/User";

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<boolean>(false);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    if (res.status === 404) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const data = await res.json();
    const { avatar_url, login, location, followers, following } = data;
    const newUserData: UserType = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(newUserData);
  };

  return (
    <div>
      <h1 className="title">GitFinder</h1>
      <Search loadUser={loadUser} />
      {user ? <User user={user} error={error} /> : false}
    </div>
  );
}

export default App;
