import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';
function Details(){
    let location = useLocation();
    const[product,setProduct] = useState(location.state)
    console.log(product);


  async  function productaddtocart(product){


let params = {
   ...product
}

let res = await axios.post("addtocart",params)
console.log(res.data);    

let {message,success} = res.data
console.log(success);
if(success){
    alert(message)
}
else{
    alert(message)

}


}
    function productbuynow(){
alert('buy now')
    }
    return(
        <>
        <Breadcrumb>
      <Breadcrumb.Item href="Home.js" style={{marginLeft:'75px'}}>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="Details.js">
        Details
      </Breadcrumb.Item>
    </Breadcrumb>

        <h3 style={{marginLeft:'75px'}}>{product.name}</h3>
        <div className='details'>
            <div className='details-image'>
                <div className='details-image-inner'>
                    <img src={product.image} style={{width:'50%',height:'100%',marginLeft:'25%'}}/>
                </div>

            </div>
            <div className='details-info'>
                    <div className='details-info-ratings'>
                            <p>1,441 ratings</p>
                    </div>
                    
                    <div className='details-info-rate'>
                        <p>Rs.{product.sellRate}/-</p>
                        <p>Inclusive of all taxes EMI starts at ₹2,962. No Cost EMI available EMI o</p>
                    </div>
                    
                    <div className='details-info-offer'>
                            <p>Offers</p>
                    </div>
                    
                    <div className='details-info-color'>
                            <p>Colour:{product.dial_color}</p>
                    </div>
                    
                    <div className='details-button'>
                           
                    <button value={product} onClick={()=>productaddtocart(product)}>Add To Cart </button> 
                    <button value={product} onClick={()=>productbuynow(product)}>Buy Now </button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Details