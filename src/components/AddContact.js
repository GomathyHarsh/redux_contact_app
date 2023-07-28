import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const AddContact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch= useDispatch();
  const navigate= useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const checkEmail= contacts.find((contact)=> contact.email ===email && email);
    const checkNumber = contacts.find((contact) => contact.number === parseInt(number));

    if(!email || !name || !number){
      return toast.warning("Please fill all fields")
    }
    if(checkEmail){
      return toast.error("This email already exists")
    }
    if(checkNumber){
      return toast.error("Number Already Exists")
    }

    const data = {
      id: contacts[contacts.length-1].id+1,
      name,
      email,
      number
    };
    dispatch({type:"ADD_CONTACT",payload:data});
    toast.success("Contact added successfully");
    navigate("/");
  }
  

  return (
    <div className='container'>
        <h1 className='display-3 my-5 text-center'>Add Contact</h1>
      <div className='row'>
        
        <div className='col-md-6 shadow mx-auto p-5'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type='text' placeholder="Name" value={name} onChange={e => setName(e.target.value)} className='form-control'/>
            </div>
            <div className='form-group'>
                <input type='email' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className='form-control'/>
            </div>
            <div className='form-group'>
                <input type='number' placeholder="Phone Number" value={number} onChange={e => setNumber(e.target.value)} className='form-control'/>
            </div>
            <div className='form-group'>
                <input type='submit' value='Submit' className='btn btn-block btn-dark'/>
            </div>
        </form>
        </div>
      </div>

      
    </div>
  )
}

export default AddContact
