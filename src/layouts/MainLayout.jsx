import { NavLink, Outlet } from "react-router-dom";

function MainLayout({ setIsLoggedIn }) {
 

  return (
    <div>
      <nav>
        <NavLink to="newevent">
          |New event|
        </NavLink>

        <NavLink to="events">
          |Events|
        </NavLink>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        
      </nav>
      {/*Where child routes is shown*/}
      <Outlet />
    </div>
  );
}

export default MainLayout;
