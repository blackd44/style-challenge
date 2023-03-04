import { NavLink, Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return ( 
    <>
      <header>
        <div></div>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/challenges'}>Challenges</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
 
export default GeneralLayout;