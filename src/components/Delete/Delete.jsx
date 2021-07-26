import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { MyContex } from '../UserContex/UserContext';
import './Delete.css';

function Delete(){
    const [users,setUsers]=useContext(MyContex);
    const {id}=useParams();
    //useParams() babohar kore dinamic id ta dhorlam
    

   
    //Delete Btn e click holei filter kaj korbe
    const deleteBtn=(id)=>{
      // eslint-disable-next-line eqeqeq
      const updateUser=users.filter(user=> user.id!=id);
      setUsers(updateUser);
    }
    /*
       users er data gula k filter korechi ekhon params er 
       id er sathe jdi kono id mile jai tahole seta bad dia
       baki gula k updateUser variable e rakhbe.

       setUsers() e 'updateUser' set kore state ta k upadte 
       korlm.
    */
    


   
    return(
      <div>
        {/* React BootStrp babohar kore ekta Dialog Box toiri korlam */}
        <Modal.Dialog>

          <Modal.Header closeButton>
           <Modal.Title>Are You Sure?</Modal.Title>
          </Modal.Header>

          <Link to='/'>
           <Modal.Footer>
            <Button className="btn" variant="info">Cancel</Button>
            <Button className="btn" onClick={()=>deleteBtn(id)} variant="danger">Delete</Button>
           </Modal.Footer>
          </Link>

        </Modal.Dialog>
      </div>
    );
}
export default Delete;