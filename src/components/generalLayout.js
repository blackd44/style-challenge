import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return ( 
    <>
      head
      <Outlet />
    </>
  );
}
 
export default GeneralLayout;