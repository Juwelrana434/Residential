import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from "../pages/Register";
import PropertyDetails from "../pages/PropertyDetails";
import Error from './../Error/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
      
      {
      path:'/',
      element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>

        },
      {
        path:'/register',
        element: <Register></Register>

        },
      {
        path:'/property/:property.id',
        element: <PropertyDetails></PropertyDetails>

        },
      ]
    },
  ]);
  export default router;