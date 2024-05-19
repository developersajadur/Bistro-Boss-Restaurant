import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Order/Orders";
import Login from "../Pages/Login/Login";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/orders",
          element:<Orders></Orders>
        },{
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);
  