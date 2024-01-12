import { NavLink } from "react-router-dom";
import facade from "../../utill/apiFacade";
import { useState } from "react";

function LoginScreen({ setIsLoggedIn }) {
  const [person, setPerson] = useState({ username: "", password: "" });

  function buttonEvent() {
    facade.login(person.username, person.password, setIsLoggedIn);
  }

  return (
    <div>
      <ul className="signup">
          <NavLink to={"/signup"}>signup</NavLink>
      </ul>

      <form>
        <input
          type="text"
          placeholder="Name:"
          onChange={(e) => {
            setPerson({ ...person, username: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password:"
          onChange={(e) => setPerson({ ...person, password: e.target.value })}
        />
        <button type="button" onClick={buttonEvent}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginScreen;
