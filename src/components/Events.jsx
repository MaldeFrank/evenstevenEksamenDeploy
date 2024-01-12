import { NavLink } from "react-router-dom";
import returnVal from "../../utill/eventFacade";

function Events() {
    return ( 
        <div>
            <div>
                {returnVal.getEvents().map(event => (
                    <NavLink key={event.id} to={`/home/events/${event.id}`}>
                        {event.id} {event.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Events;
