import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { MyContex } from '../UserContex/UserContext';
import './Edit.css';

function Edit(){
    const [users,setUsers]=useContext(MyContex);
    const {id}=useParams();
    
    // eslint-disable-next-line eqeqeq
    const user=users.filter(user=>user.id==id);

    
    const [name,setName]=useState(user[0].name);
    const [position,setPosition]=useState(user[0].position);
    const [salary,setSalary]=useState(user[0].salary);

    
    const editName=(e)=>{
        setName(e.target.value);
        const edit_name=name;
        user[0].name=edit_name;
    }
   
    const editPosition=(e)=>{
        setPosition(e.target.value);
        const edit_position=position;
        user[0].position=edit_position;
    }
    const editSalary=(e)=>{
        setSalary(e.target.value);
        const edit_salary=salary;
        user[0].salary=edit_salary;
    }
    /*
       prothome setSalary() er maddhome event e fire hoya 
       salary ta state er salary er moddhe rakhlam.Erpor 
       edit_salary namok variable er moddhe state er ukto
       salary ta store korlm.Erpor user[0] er salary te 
       edit_salary ta bosia dilam.Fole jinista upadte hoia
       jabe.
    */
    
    
    
    const editUser=(e)=>{
        e.preventDefault();
        setUsers([...users]);
    }
    
    return(
      <div>
        <Form>
          
        <Form.Group>
           <Form.Label>
             <h2>ID:{user[0].id}</h2>
           </Form.Label>
         </Form.Group> 

         <Form.Group>
           <Form.Label>Name</Form.Label>
           <Form.Control  
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={user[0].name}
           />
         </Form.Group>

         <Form.Group>
           <Form.Label>Position</Form.Label>
           <Form.Control  
            type="text"
            name="position"
            value={position}
            onChange={editPosition}
            placeholder={user[0].position}
           />
         </Form.Group>

         <Form.Group>
         <Form.Label>Salary</Form.Label>
          <Form.Control  
            type="text"
            name="salary"
            value={salary}
            onChange={editSalary}
            placeholder={user[0].salary}
          />
         </Form.Group>

        <Link to='/'>
          <Button className="create_btn" variant="primary">Back to Home</Button>
       
          <Button onSubmit={()=>editUser} variant="success" type="submit">Edit User</Button>
        </Link>
      </Form>
    </div>
    );
}
export default Edit;