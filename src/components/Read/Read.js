import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { MyContex } from '../UserContex/UserContext';
import './Read.css';

function Read(){
    // eslint-disable-next-line no-unused-vars
    const [users,setUsers]=useContext(MyContex);
    const {id}=useParams();

    // eslint-disable-next-line eqeqeq
    const user=users.filter(user=>user.id==id);
    /*J id ta read korte chacchi seta filter kore nia aslam
      Eikhane user[0] bolte filter korar por amra user namok
      j Array ta paichi setar 0 no index bujahano hoice.
    */

   
    return(
        <div className="read">






          <h3><b className="first">ID</b> <b className="colon"> : </b>  <b id="id">{user[0].id}</b></h3>

          <h3><b className="second">Name</b> <b className="colon"> : </b>  <b id="name">{user[0].name}</b></h3>

          <h3><b className="first">Position</b> <b className="colon"> : </b> <b id="position">{user[0].position}</b></h3>

          <h3><b className="second">Salary</b> <b className="colon"> : </b> <b id="salary">{user[0].salary}</b></h3>
          




          {/* Home Page(Root Route) Link kore dilam */}
          <Link to='/'>
            <Button className="read_btn" variant="primary">Back to Home</Button>
          </Link>
         
        </div>
    );
}
export default Read;