import { useState, useEffect } from "react";
import returnVal from "../../utill/eventFacade";

function NewEvent() {
  const [event, setEvent] = useState({
    id: null,
    name: "",
    payment: [],
    users: [],
  });

  const [showAddDropdown, setShowAddDropdown] = useState(false);

  const [addUserfield, setAddUserField] = useState({
    name: "",
    number:""
  });

  useEffect(() => {
    // Load event data from local storage when the component mounts
    const storedEvent = JSON.parse(localStorage.getItem("event"));
  
    // Check if storedEvent is an object and not null/undefined
    if (storedEvent && typeof storedEvent === "object") {
      setEvent(storedEvent);
    }
  }, []);

//Sets event in localstorage of the browser
  useEffect(() => {
    if(event.users.length>0){
      localStorage.setItem("event", JSON.stringify(event));
    }
  }, [event]); 

  //Sets the event name
  function handleNameChange(e) {
    setEvent({ ...event, name: e.target.value });
  }

//Adds an user to event user list
  function addUser(){
    const user = {
      name: addUserfield.name,
      number: addUserfield.number,
      payments: [],
    };

    setEvent({ ...event, users: [...event.users, user] });
  }

//Removes an user from the event userlist
  function removeUser(name) {
    const updatedUsers = event.users.filter((user) => user.name !== name);
    setEvent({ ...event, users: updatedUsers });
  }

//Adds event to list
function addEvent(){
 returnVal.addEvent(event)
 setEvent(
  {
  id: null,
  name: "",
  payment: [],
  users: [],
  })
}

  return (
    <div className="event-name-box">
      <label className="event-name-label">Event name:</label>
      <input
        onChange={handleNameChange}
        className="event-name"
        placeholder=" Insert here"
        type="text"
      ></input>
      <label className="user-label">Add users:</label>
      <a
        onClick={() => setShowAddDropdown(!showAddDropdown)}
        className="button-plus-person"
        style={{ cursor: "pointer" }}
      >
        {" "}
        <img
          style={{ width: "4vh", height: "4vh" }}
          src="/images\plus-sign-vector-icon.jpg"
          alt="plus-sign"
        ></img>
      </a>

      {/* Show users */}
      <div className="show-users-div">
        <ul>
          {event.users.map((user, index) => (
            <li key={index}>
              {user.name}
              <button onClick={() => removeUser(user.name)}>- Remove user</button>
              <button>+ Add payment</button>
              <button>See payments</button>
            </li>
          ))}
        </ul>

        {/* Dropdown for adding users to event */}
        {showAddDropdown === true && (
          <div className="add-person-div">
            <input
              onChange={(e) => setAddUserField({...addUserfield,name:e.target.value})}
              placeholder="Name:"
            />
            <input
            onChange={(e)=> setAddUserField({...addUserfield,number:e.target.value})}
            placeholder="Number:"
            />
            <button onClick={addUser} type="button">
              Add
            </button>
          </div>
        )}
          
      </div>
      
      {/*Button to add event to event list*/}
      <button onClick={addEvent}>Add event</button>
    </div>
  );
}

export default NewEvent;
