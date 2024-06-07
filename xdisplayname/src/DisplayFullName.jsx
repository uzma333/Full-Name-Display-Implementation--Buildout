import { useState } from "react";
import "./DisplayFullName.css";

const FullName=()=>{

const[firstname,setFirstname]=useState("");
const[lastname,setLastname]=useState("");
const[fullname,setFullname]=useState("");


const handleFirstName=(e)=>{
   setFirstname (e.target.value)
}
const handleLastName=(e)=>{
    setLastname(e.target.value)
}


const handleSubmit=()=>{
    setFullname(`${firstname} ${lastname}`)
    
}


    return (
<div className="container">
    <h1>Full Name Display</h1>
   <div>
   <label for="firstname">First Name:</label>
   <input type="text" id="firstname" name="firstname" onChange={handleFirstName}/>
   </div>
        <div>
            <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" onChange={handleLastName}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        
    
        
   
    <p>Full Name: {fullname} </p>
</div>
    )
}
export default FullName;