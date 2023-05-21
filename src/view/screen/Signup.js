import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Signin(){
const[name,setName] =useState('')
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')

  async function register(){
   
    let params={
      name:name,
      email:email,
      password:password
    }
    console.log(params);
    let res =await axios.post('register',params).catch(d=>console.log(d));
    console.log(res?.data);
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


            <Button className="cbtn" variant="primary" onClick={register}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
    );
}
export default Signin