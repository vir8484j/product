import {product,slid} from '../data/data'
import {useNavigate} from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Link} from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Home(){
    let navigate = useNavigate()
function addtocart(){
alert('addtocart')
}
function productdetails(d){
//console.log(d);
navigate('/Details.js',{state:d})
}
return(  
<>

<div>
<div><Breadcrumb>
      <Breadcrumb.Item href="#" style={{marginLeft:'78px'}}>Home</Breadcrumb.Item>
    </Breadcrumb></div>
    {
        <AwesomeSlider className='aweslid'>
                {
                    slid.map(function(d)
                    {
                        return(
                            <div>
                            <img src={d.image} alt=""style={{width:'1900px',height:'1000px'}}/>
                            </div>
                        )
                    }
                    )
                }
            
        </AwesomeSlider>
    }
</div>

    

        <div className='main-div-product'>
           {
            product.map(function(d){
            return(
            <div className='product-div'>
                <div className='image'>
                    <img src={d.image} alt="" style={{width:'60%',height:'100%'}}/>
                </div>    
                <div className='product'>
                   <div className='companyproduct'>
                        <p style={{fontSize:'28px'}}>{d.company}</p></div>
                    <div className='product-name'>
                        <p>{d.name}</p>
                    </div>
                    
                    <div className='product-rate'>
                        <p>Rs.{d.sellRate}</p>
                        <p>Rs.<sub><del>{d.MRPRate}</del></sub></p>
                    </div>
                    <div className='product-detail'>
                    <div className='product-detail-addtocart'>
                    <input type='button' value="Add To Cart" onClick={addtocart}/>
                    </div>    
                    
                    <div className='product-detail-show'>
                    
                    <button value={d} onClick={()=>productdetails(d)}>Details </button>
                    </div>    
                </div> 
                </div>  
                
            </div>)
            })
            }
        </div>
        </>
)  
}

export default Home