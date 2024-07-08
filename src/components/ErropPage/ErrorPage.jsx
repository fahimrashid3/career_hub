import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Something wrong</h1>
      <button>
        <NavLink to="/">Click hear to back to home </NavLink>
      </button>
    </div>
  );
};

export default ErrorPage;
