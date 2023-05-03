import Details from "./view/screen/Details";
import Home from "./view/screen/home.js";
import Sale from "./view/screen/sale.js";
import './view/style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { emailphoto, shop, sign, title, topmost } from "./view/data/data";
import { emaillink } from "./view/data/data";
import { orem } from "./view/data/data";
import { emailnum } from "./view/data/data";
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Header from "./view/screen/Header"

function App(){

    return(

    <BrowserRouter>
     <>
     <div>

     <Header/>
     </div>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/Sale" element={<Sale/>} />            
            <Route path="/header" element={<Header/>} />            

        </Routes>
        <div>
        footer
        
        </div>
        </>
    </BrowserRouter>
    
    )
}
export default App