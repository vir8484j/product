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

         <div className="lux1">
        {emailphoto.map(function(q){
            return(
                <div><img src={q.image} className="luximg"/></div>
                
            )
        }
        )
        }
        {emaillink.map(function(q){
            return(
                <div style={{marginTop:'43px',fontSize:'20px'}}><p><b>{q.text1}</b></p></div>
                
            )
        }
        )
        }
        {orem.map(function(q){
            return(
                <div style={{marginTop:'43px',marginLeft:'-10px',fontSize:'20px'}}><p><b>{q.text2}</b></p></div>
                
            )
        }
        )
        }
        {emailnum.map(function(q){
            return(
                <div style={{marginTop:'43px',marginLeft:'-10px',fontSize:'20px'}}><p><b>{q.text3}</b> </p></div>
                
            )
        }
        )
        }

        {title.map(function(q){
            return(
                
                <div className="logo"><img src={q.image} alt="" style={{width:'500px'}}/></div>
                
            )
        }
        )
        }

        {shop.map(function(q){
            return(
                <div><img src={q.image} className="luximg2"/></div>
                
            )
        }
        )
        }
<div className="hrdiv"></div>

        {sign.map(function(q){
            return(
                <div style={{marginTop:'53px',marginLeft:'10px'}} className='signdiv'><Link style={{textDecoration:'none'}} to={"./Signin.js"}><h4 style={{color:'black',marginLeft:'5px'}}>{q.in}</h4></Link></div>
                
            )
        }
        )
        }
        <div className="hrdiv"></div>

        {log.map(function(q){
            return(
                <div style={{marginTop:'53px',marginLeft:'10px'}} className='signdiv'><Link style={{textDecoration:'none'}} to={"./login.js"}><h4 style={{color:'black',marginLeft:'5px'}}>{q.in}</h4></Link></div>
                
            )
        }
        )
        }
        {rolexlogo.map(function(q){
            return(
                
                <div className="rolexlogoo"><img src={q.image} alt="" /></div>
                
            )
        }
        )
        }

     </div>
     <div style={{backgroundColor:'grey',height:'0.1%',width:'90.5%',marginBottom:'30px',marginLeft:'78px'}}></div>
     <div className="lux2">
         <Link to={"../screen/home.js"} className="lux2a" style={{marginLeft:'40px'}}>Home</Link>
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

