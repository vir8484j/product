import Details from "./view/screen/Details";
import Home from "./view/screen/home.js";
import Signin from "./view/screen/Signin";
import Login from "./view/screen/login";
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
          path: "/src/view/screen/Menswatches.js",
          element: <Menswatches />,
        },
        {
          path: "/src/view/screen/Womenswatches.js",
          element: <Womenswatches />,
        },
        {
            path: "/src/view/screen/Watches1908.js",
            element: <Watches1908 />,
        },
        {
            path: "/src/view/screen/Summersale.js",
            element: <Summersale/>,
        },
        {
            path: "/src/view/screen/login.js",
            element: <Login />,
        },
        {
            path: "/src/view/screen/Signin.js",
            element: <Signin/>,
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