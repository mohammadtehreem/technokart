import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { About } from "./About";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
