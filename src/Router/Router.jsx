import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery/Gallery";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        }
      ]
    },
    {
      path:'/login',
      element:<SignIn/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ]);

  export default Router;