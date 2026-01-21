import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import BlankLayout from "../BlankLayout";
import Home from "../pages/Home";
import FiltersPage from "../pages/FiltersPage";
import WatchMovie from "../pages/WatchMovie";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path:"/filter",
        element:<FiltersPage/>
      },
      {
        path:"/watch/:name",
        element:<WatchMovie/>
      }
    ],
  },
  {
    path:"/",
    element: <BlankLayout />,
    children: [
      {
        path:"",
        element:<LandingPage/>
      },
    ]
  }
]);
export default router;
