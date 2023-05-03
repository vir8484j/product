import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { emailphoto, shop, title, topmost ,emaillink ,orem, emailnum,sign } from "../data/data";
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
                
                <div className="logo"><p><b>{q.logo}</b> </p></div>
                
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
                <div style={{marginTop:'53px',marginLeft:'10px'}}><Link style={{textDecoration:'none'}}><h4 style={{color:'black',marginLeft:'5px'}}>{q.in}</h4></Link></div>
                
            )
        }
        )
        }
     </div>
     <div style={{backgroundColor:'grey',height:'0.1%',width:'90.5%',marginBottom:'30px',marginLeft:'78px'}}></div>
     <div className="lux2">
         <a href="../src/view/screen/home.js" className="lux2a" style={{marginLeft:'40px'}}>Rolex</a>
         <a href="" className="lux2a">In-Stock Deals</a>
         <a href="" className="lux2a">Summer Sale</a>
         <a href="" className="lux2a">Men's Watches</a>
         <a href="" className="lux2a">Women's Watches</a>
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

