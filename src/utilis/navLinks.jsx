import { NavLink } from "react-router";

const navLinks = (
  <>
    <li>
      <NavLink to='/' className="font-bold text-base text-white">Home</NavLink>
    </li>
    <li>
      <NavLink to='/bills' className="font-bold text-base text-white">Bills</NavLink>
    </li>
    <li>
     <NavLink to='/profile' className="font-bold text-base text-white">Profile</NavLink>
    </li>
  </>
);

export default navLinks;