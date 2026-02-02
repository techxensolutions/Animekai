import { useDispatch } from "react-redux";
import { RouterProvider } from 'react-router-dom'
import router from "./routes/router";
import { useEffect } from "react";
import { checkAuth } from "./store/UserSlice";
function App () {

  return <RouterProvider router={router} />;
}

export default App