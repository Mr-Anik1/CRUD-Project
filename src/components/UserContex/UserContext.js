import { createContext, useState } from "react";

export const MyContex=createContext();

function MyProvider(props){
    const [users,setUsers]=useState([
        {id:1,name:'Anik',position:'Front-end Developer',salary:40000},
        {id:2,name:'Manik',position:'Back-end Developer',salary:60000},
        {id:3,name:'Tonik',position:'Data Scientist',salary:90000}
    ]);
    return(
        <div>
          <MyContex.Provider value={[users,setUsers]}>
              {props.children}
          </MyContex.Provider>
        </div>
    );
}
export default MyProvider;

