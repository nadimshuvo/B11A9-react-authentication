import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Bills from "../pages/Bills";
import SingleBillDetails from "../components/SingleBillDetails";

import Profile from "../pages/Profile";
import HomeLayout from "../layouts/HomeLayout";
import PrivateRoute from "../provider/PrivateRoute";
import BillsLayout from "../layouts/BillsLayout";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, Component: HomeLayout },
      {
        path: "bills",
        element: (
          <PrivateRoute>
            <Bills></Bills>
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <BillsLayout></BillsLayout>,
            hydrateFallbackElement: <Loading />,
            loader: async () => {
              const res = await fetch("/api.json");
              const data = await res.json();
              return data;
            },
          },
          {
            path: ":id",
            element: <SingleBillDetails></SingleBillDetails>,
            hydrateFallbackElement: <Loading />,
            loader: async ({params: {id}}) => {
              const res = await fetch("/api.json");
              const data = await res.json();
              const billDetails = data.find(bill => bill.id == id);              
              return billDetails;
            },
          },
        ],
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
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
