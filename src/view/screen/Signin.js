import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Signin(){
  const nav = useNavigate()
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')

 

let submitlogin=async()=>{
    
  let params={
    email:email,
    password:password
  }
  
  console.log(params);
  try {
    let res =await axios.post("login",params).catch(err=>alert(err))
    console.log(res.data);
    
    let {success,message,data} =res.data
    if(success){
    alert(message)
 console.log(data);
   localStorage.setItem('user',true);
 
    nav("/")
    window.location.reload();
    }
    else{
      alert(message)
     }
     } catch (error) {
    alert(error)
  }
  setEmail("")
  setPassword("")
}




    return (
        <div className="container">
      <h1 className="text-center mb-4">Login</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <Form>
            

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={d=>setEmail(d.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={d=>setPassword(d.target.value)}/>
            </Form.Group>


            <Button className="cbtn" variant="primary" onClick={submitlogin}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
    );
}
export default Signin