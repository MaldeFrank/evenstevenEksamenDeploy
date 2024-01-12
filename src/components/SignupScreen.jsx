import React, { useState } from 'react';
import facade from '../../utill/apiFacade';
import { NavLink,useNavigate } from 'react-router-dom';

function SignupScreen() {
  const [person, setPerson] = useState({ username: '', password: '', role: 'user' });
  const navigate = useNavigate();

  function buttonEvent() {
    facade.register(person)
    navigate("/")
  }

  return (
    <div>
      <form>
        <input
          placeholder="Username:"
          type="text"
          value={person.username}
          onChange={(e) => setPerson({ ...person, username: e.target.value })}
        />
        <input
          placeholder="Password:"
          type="password"
          value={person.password}
          onChange={(e) => setPerson({ ...person, password: e.target.value })}
        />
        <button type="button" onClick={buttonEvent}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupScreen;
