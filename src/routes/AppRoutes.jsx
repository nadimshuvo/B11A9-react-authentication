import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Bills from "../pages/Bills";
import Profile from "../pages/Profile";
import HomeLayout from "../layouts/HomeLayout";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, Component: HomeLayout },
      { path: "bills", element: <PrivateRoute><Bills></Bills></PrivateRoute> },
      { path: "profile", element: <PrivateRoute><Profile></Profile></PrivateRoute> }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
