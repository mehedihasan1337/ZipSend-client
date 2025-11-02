import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../routs/PrivateRoute";
import SendPercal from "../pages/SendPercal/SendPercal";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index:true,
        Component: Home,
      },
      {
        path:"coverage",
        Component: Coverage,
        loader:()=> fetch('./ServiceCenter.json')
      },
      {
        path:"SendParcel",
        element: <PrivateRoute> <SendPercal></SendPercal></PrivateRoute>
      }
    ]
  },
  {
    path:"/",
    Component: AuthLayout,
    children:[
      {
        path:"login",
        Component: Login,   
      },
      {
        path:"register",
        Component:Register,   
      },
    ]
  }
]);