import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MyContex } from '../UserContex/UserContext';
import './Create.css';

function Create(){
    const [users,setUsers]=useContext(MyContex);
    
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [position,setPosition]=useState("");
    const [salary,setSalary]=useState("");

    const updateId=(e)=>{
        setId(e.target.value);
    }
    const updateName=(e)=>{
        setName(e.target.value);
    }
    const updatePosition=(e)=>{
        setPosition(e.target.value);
    }
    const updateSalary=(e)=>{
        setSalary(e.target.value);
    }
    
    
    const handelSubmit=(e)=>{
        e.preventDefault();
        setUsers([...users,{id:id,name:name,position:position,salary:salary}]);
    }
    /*
       setUsers() e ekti Array niyachi abong er moddhe ager
       users gulo spreed kore diyachi abong notun ekta 
       Object nia tar moddhe ekhankar id,name,salary bosia 
       dichi.Fole notun ja ceate korbo segula agergular 
       sathe bose jabe.
    */


    return(
      <div className="create">
         <Form onSubmit={handelSubmit}>

          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control  
              type="text"
              name="id"
              value={id}
              onChange={updateId}
              placeholder="Enter ID"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control  
              type="text"
              name="name"
              value={name}
              onChange={updateName}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control  
              type="text"
              name="position"
              value={position}
              onChange={updatePosition}
              placeholder="Enter Position"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Salary</Form.Label>
            <Form.Control  
              type="text"
              name="salary"
              value={salary}
              onChange={updateSalary}
              placeholder="Enter Salary"
            />
          </Form.Group>
         
          <Link to='/'>
            <Button className="create_btn" variant="primary">Back to Home</Button>
          </Link> 
          <Button variant="success" type="submit">Create User</Button>
       
         </Form>
         
      </div>
    );
}
export default Create;