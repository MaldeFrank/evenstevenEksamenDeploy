import { useParams } from "react-router-dom";
import returnVal from "../../utill/eventFacade";

function EventDetails() {
    const { id } = useParams();
    const eventId = parseInt(id, 10);
    const event = returnVal.getEvent(eventId);

    return (
        <div>
            <h1>{event.name}</h1>

            <div>
                {event.users.map((user, index) => (
                    <div key={index}>
                        <p>{user.name} {user.number}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventDetails;
