import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between container mx-auto">
      <NavLink
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "transparent" : "",
            border: isActive ? "1px solid #23BE0A" : "",
            color: isActive ? "#23BE0A" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "transparent" : "",
            border: isActive ? "1px solid #23BE0A" : "",
            color: isActive ? "#23BE0A" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to="/addCoffee"
      >
        AddCoffee
      </NavLink>
      {/* <NavLink
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid #23BE0A" : "",
            color: isActive ? "#23BE0A" : "",
            viewTransitionName: isTransitioning ? "slider" : "",
          };
        }}
        to="/updateCoffee"
      >
        updatecoffee
      </NavLink> */}
      <NavLink
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid #23BE0A" : "",
            color: isActive ? "#23BE0A" : "",
            viewTransitionName: isTransitioning ? "slider" : "",
          };
        }}
        to="/login"
      >
        login
      </NavLink>
      <NavLink
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid #23BE0A" : "",
            color: isActive ? "#23BE0A" : "",
            viewTransitionName: isTransitioning ? "slider" : "",
          };
        }}
        to="/register"
      >
        singup
      </NavLink>
      <NavLink
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid #23BE0A" : "",
            color: isActive ? "#23BE0A" : "",
            viewTransitionName: isTransitioning ? "slider" : "",
          };
        }}
        to="/users"
      >
        users
      </NavLink>
    </div>
  );
};

export default Header;
