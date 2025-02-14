import React from 'react'
import Employee from './components/Employee'  //  ./ means same directory (assets)
import { useState } from 'react'


const App = () => {
  
  const showemp=true;
  const [role, setRole]=useState('role')
  const [name,setName]=useState('name')
  
  return (
   
   
    <div>
     {showemp ?(   //if true
      <>
      <input type="text" placeholder='role' onChange={(e) => {console.log(e.target.value)
        setRole(e.target.value); }} 
      />
      <input type='text'placeholder='name' onChange={ (e2) =>{
        console.log(e2.target.value)
        setName(e2.target.value);}}  />
    
     <Employee name={name} role="intern " country='algeria'/>
     <Employee name="Nina" country='france'/>
     <Employee name="Amir" role={role} country=' algeria'/>
   
     </>
     )
    :(  //else 
   <p> i can not show employees</p>
    )}

 


</div>



    
  
   
  )
}

export default App