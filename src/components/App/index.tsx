import { createHashRouter, RouterProvider } from "react-router-dom";
import Landing from "./../../screens/Landing";
import Login from "./../../screens/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
