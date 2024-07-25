import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const loggedIn = false;
  const navigate = useNavigate();

  if (loggedIn) {
    return children;
  } else {
    navigate("/login");
  }
};
