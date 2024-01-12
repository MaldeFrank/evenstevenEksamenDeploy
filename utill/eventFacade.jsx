function eventFacade() {


  let events = [
    { id: 1, name: "Redbulls for dinner", payment:[], users:[] },
    { id: 2, name: "Night at the club", payment:[], users:[] },
    { id: 3, name: "Xmas rave", payment:[], users:[] },
    { id: 4, name: "Vacation to Finland", payment:[], users:[] },
  ];

  let nextId = 5;

  const getEvents = () => {
    return events;
  };

  const getEvent = (id) => {
    return events.find((event) => event.id === id);
  };

  const addEvent = (event) => {
    event.id = nextId;
    events.push(event);
    nextId++;
  };
  

  const deleteEvent = (id) => {
    events = events.filter((event) => event.id !== id);
  };

  const addUser = (eventId, user) =>{
    const event = getEvent(eventId)
    event.users.push(user)
  }


  return {
    getEvents,
    getEvent,
    addEvent,
    deleteEvent,
    addUser
  };
}

let returnVal = eventFacade();
export default returnVal;
