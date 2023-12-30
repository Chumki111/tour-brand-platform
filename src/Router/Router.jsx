import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery/Gallery";

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
  ]);

  export default Router;