import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Signin(){
const nav = useNavigate()
  const[name,setName] =useState('')
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')




let submitregister=async()=>{
  // console.log(file);
  // console.log(fileName);
  
    const formdata= new FormData();
    // formdata.append("file",file)
    // formdata.append("filename",fileName)
    //let data =JSON.stringify( Object.fromEntries(formdata));
  
  //console.log(data);
    let params={
    username:name,
    email:email,
    password:password,
    // image:file
  }
  console.log(params);
  try {
      let res =await axios.post("register",params).catch(err=>alert(err))
      console.log(res?.data);
      const {success,message} =res?.data
      if(success){
        alert(message)
        nav("/Signin.js")
      }
      else{
        alert(message)
      }
    } catch (error) {
      console.log("error==",error);
      alert(error)
    }
  setEmail("")
  setPassword("")
  setName("")
  }
    return (
        <div className="container">
      <h1 className="text-center mb-4">Register</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" value={name} onChange={d=>setName(d.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={d=>setEmail(d.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={d=>setPassword(d.target.value)}/>
            </Form.Group>


            <Button className="cbtn" variant="primary" onClick={submitregister}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
    );
}
export default Signin