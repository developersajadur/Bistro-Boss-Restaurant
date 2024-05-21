import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Order/Orders";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserDashboardLayout from "../Layout/UserDashboardLayout";
import Card from "../Pages/UserDashboard/Card";


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
          path:"/shop",
          element:<Orders></Orders>
        },{
          path:"/login",
          element:<Login></Login>
        },{
          path:"/register",
          element:<Register></Register>
        }
      ]
    },{
      path:"/userDashboard",
      element:<UserDashboardLayout></UserDashboardLayout>,
      children:[
        {
          path:"my-card",
          element:<Card></Card>
        }
      ]
    }
    
  ]);
  