import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import BlankLayout from "../BlankLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path:"/",
    element: <BlankLayout />,
    children: [
      {
        path:"",
        element:<LandingPage/>
      }
    ]
  }
]);
export default router;
