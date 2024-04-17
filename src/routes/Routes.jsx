import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from "../pages/Register";
import PropertyDetails from "../pages/PropertyDetails";
import Error from './../Error/Error';
import About from "../About/About";
import Profile from "../pages/Profile";
//  import Upcoming from "../pages/Upcoming";


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
        path:'/about',
        element: <About></About>

        },
      {
        path:'/property/:id',
        element: <PropertyDetails></PropertyDetails>,
        // loader: () => fetch('../../public/estatesection.json'),

        },
        // {
        //   path:'/upcoming',
        //   element: <Upcoming></Upcoming>
  
        //   },
        {
           path:'/profile',
           element: <Profile></Profile>
  
           },
       
      ]
    },
  ]);
  export default router;