import Details from "./view/screen/Details";
import Home from "./view/screen/home.js";
import Signin from "./view/screen/Signin";
import Signup from "./view/screen/Signup";
import './view/style/style.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes} from 'react-router-dom'
import Header from "./view/screen/Header"
import Footer from "./view/screen/footer"
import Menswatches from "./view/screen/Menswatches";
import Womenswatches from "./view/screen/Womenswatches"
import Watches1908 from "./view/screen/Watches1908"
import Summersale from "./view/screen/Summersale";
import Addtocart from "./view/screen/Addtocart";
import Payment from "./view/screen/Payment";


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>


const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Details.js",
          element: <Details />,
        },
        {
          path: "screen/home.js",
          element: <Home />,
        },
        {
          path: "Payment.js",
          element: <Payment />,
        },
        {
          path: "Addtocart.js",
          element: <Addtocart />,
        },
        {
          path: "screen/Menswatches.js",
          element: <Menswatches />,
        },
        {
          path: "screen/Womenswatches.js",
          element: <Womenswatches />,
        },
        {
            path: "screen/Watches1908.js",
            element: <Watches1908 />,
        },
        {
            path: "screen/Summersale.js",
            element: <Summersale/>,
        },
      
        {
            path: "/Signin.js",
            element: <Signin/>,
        },
        {
          path: "/Signup.js",
          element: <Signup/>,
      },
      ],
    },
  ]);
  
  function App() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
  
  export default App;