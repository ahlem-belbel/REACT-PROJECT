import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name); // to store the data(temporary holder variable for what is typed recently)
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="w-full max-w-xs">

  <form 
    
    onSubmit={(e)=> {
    handleClose();  
    e.preventDefault(); //prevvent a page refresh
    console.log("hello from editEmployee");
    console.log(props.id, name,role);  //name and not props.name because it is a state variable (const [name, setName] = useState(props.name);), same for role
    //we dont need a state variable for id because we are not updating it 
    props.updateEmployee(props.id,name,role);
   
   }}    // because of this function the data has reaches App.js 
   id='editmodal' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
   
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" Value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
        Role
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" defaultValue={role} onChange={(e)=>{setRole(e.target.value)}}/>
    </div>

  
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

        </Modal.Body>
        <Modal.Footer>
        <button className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Close</button>

           
           <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' form='editmodal' >Update</button>

        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditEmployee;
