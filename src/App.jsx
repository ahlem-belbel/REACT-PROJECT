import React from 'react'
import Employee from './components/employee';
 //  ./ means same directory (assets)
import { useState } from 'react'
import './index.css' //  CSS file for styling
import {v4 as uuidv4}from 'uuid';
import womanImage from "./assets/woman.jpg";

import woman2Image from "./assets/woman2.jpg";
import woman3Image from "./assets/woman3.jpg";
import woman4Image from "./assets/woman4.jpg";
import man1 from "./assets/man1.jpg"
import man2 from "./assets/man2.jpg"



const App = () => {

  
  
  const showemp=true;
  const [role, setRole]=useState('role')
  const [name,setName]=useState('name')
  const [Employees, setEmployees]=useState(
    [
      { id:1, name:'Anna', role:'Developer',img:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id:2, name:'John', role:'Manager',img:'https://images.pexels.com/photos/12890441/pexels-photo-12890441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id:3 , name:'Sal', role:'Software engineer',img:'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id:4 , name:'Melanie', role:'Developer',img:'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id:5 , name:'Jake', role:'Senior intern',img:'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id:6 , name:'Corey', role:'Developer',img:'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600'},
    ]
  )
    // after that the data has reaches APP.js we have now to take this datat and update it's state
    function updateEmployee(id,newName,newRole){
    
      const updatedEmployees= Employees.map((employee)=>{
        if (id==employee.id){
          return{ ...employee, name:newName, role:newRole } //...employee (it is called spreading , it gets all the attributes of employee)
        }
        return employee;
      });  // create a new list
      setEmployees(updatedEmployees); //replace the state list
      
      
    }
  
    //MAIN
  return (
   
   
    <div >
     {showemp ?(   //if true
      <>
      <input type="text" placeholder='role' onChange={(e) => {console.log(e.target.value)
        setRole(e.target.value); }} 
      />
      <input type='text'placeholder='name'onChange={ (e2) =>{
        console.log(e2.target.value)
        setName(e2.target.value);}}  />
    
    <div className='flex flex-wrap justify-center'>
    {Employees.map((employee) => {    //this is a loop using MAP
     // console.log(uuidv4());
      return(
      <Employee   // we added a key to get rid of warnings in console in cade we didnt use id
       //key={uuidv4()} // we can also use this {employee.id}  and add id:1 ....
       id={employee.id}
       name={employee.name}
       role={employee.role} 
       img={employee.img}
       updateEmployee={updateEmployee}
       />
      )
    })}
     </div>
     </>
     )
    :(  //else 
   <p> i can not show employees</p>
    )}

 


</div>



    
  
   
  )
}

export default App