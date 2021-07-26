import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MyContex } from '../UserContex/UserContext';
import './Home.css';
function Home(){
    // eslint-disable-next-line no-unused-vars
    const [users,setUsers]=useContext(MyContex);
    return(
        <div>
           
           <Link to='/create/'>
             <Button className="create_btn" variant="primary">create user</Button>
           </Link>
          


           <Table striped bordered hover>
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Position</th>
                 <th>Salary</th>
                 <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  users.map(user=>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.position}</td>
                      <td>{user.salary}</td>
                      <td>
                        <Link to={'/read/'+user.id}>
                          <Button className="action_btn" variant="success">Read</Button>
                        </Link>
                        

                        <Link to={'/edit/'+user.id}>
                          <Button className="action_btn" variant="info">Edit</Button>
                        </Link>
                       

                        {/* Delete e click korlei eta 
                        '/delete' route e chole jabe karon
                        App.js e path='/delete' add korachi
                        ar eikhane link kore dichi*/}
                        <Link to={'/delete/'+user.id}>
                         <Button className="action_btn" variant="danger">Delete</Button>
                        </Link> 
                        


                      </td>
                    </tr>
                  )
                
                }
                
               </tbody>
            </Table>
        </div>
    );
}
export default Home;