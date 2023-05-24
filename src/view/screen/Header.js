import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { emailphoto, shop, title, topmost ,emaillink ,orem, emailnum,sign, rolexlogo, log } from "../data/data";
import {Link} from 'react-router-dom'
export default function Header  () {
  return (
    <div className='lux '> 
<div className="top">
{topmost.map(function(q){
            return(
                <div><p><marquee behavior="slider" direction="right">{q.sale}</marquee></p></div>
                
            )
        }
        )
        }
</div> 

      <div style={{display:'inline-flex',alignItems:'center'}}>
        {emailphoto.map(function(q){
            return(
                <div><img src={q.image} style={{width:30,marginLeft:50}}/></div>
                
            )
        }
        )
        }
        <div>
       <h5 style={{marginLeft:30}}>EMAIL:info@gmail.com or 1.804.824.8888</h5>
       </div>
        {title.map(function(q){
            return(
                
                <div ><img src={q.image} alt="" style={{width:400}}/></div>
                
            )
        }
        )
        }

        {shop.map(function(q){
            return(
                <div>
                    <Link style={{textDecoration:'none'}} to={"Addtocart.js"}>
                    <img src={q.image} style={{width:30,marginLeft:30}}/>
                    </Link>
                    </div>
                
            )
        }
        )
        }


        {sign.map(function(q){
            return(
                <div style={{}} ><Link style={{textDecoration:'none'}} to={"Signup.js"}>
                    <h4 style={{color:'black',marginLeft:'20px'}}>{q.in}</h4>
                    </Link>
                    </div>
                
            )
        }
        )
        }
     

        {log.map(function(q){
            return(
                <div >
                    <Link style={{textDecoration:'none'}} to={"Signin.js"}>
                        <h4 style={{color:'black',marginLeft:'20px'}}>{q.in}</h4>
                    </Link></div>
                
            )
        }
        )
        }
        {rolexlogo.map(function(q){
            return(
                
                <div><img src={q.image} alt=""  style={{width:100,marginLeft:20}}/></div>
                
            )
        }
        )
        }

     </div> 
     <div style={{backgroundColor:'grey',height:'0.1%',width:'90.5%',marginBottom:'30px',marginLeft:'4%'}}></div>
     <div className="lux2">
         <Link to={"../screen/home.js"} className="lux2a" style={{marginLeft:'0px'}}>Home</Link>
         <Link to={"../screen/Watches1908.js"} className="lux2a" >Rolex 1908</Link>
         <Link to={"../screen/Summersale.js"} className="lux2a">Summer Sale</Link>
         <Link to={"../screen/Menswatches.js"} className="lux2a">Men's Watches</Link>
         <Link to={"../screen/Womenswatches.js"} className="lux2a">Women's Watches</Link>
     </div>
     
     <div className="lux3">
        <input type='button' value="FREE OVERNIGHT SHIPPING" className="btn" style={{fontSize:'20px'}}/>
         <input type='button' value="30 DAY RETURN POLICY" className="btn" style={{fontSize:'20px'}}/>
         <input type='button' value="NO RESTOCKING FEE" className="btn" style={{fontSize:'20px'}}/> 
         {/* <button className="btn" style={{fontSize:'20px'}}>FREE OVERNIGHT SHIPPING</button>
         <button className="btn" style={{fontSize:'20px'}}>30 DAY RETURN POLICY</button>
         <button className="btn" style={{fontSize:'20px'}}>NO RESTOCKING FEE</button> */}
     </div>
    
</div>
  )
}

