import { useState} from "react";
import "./DisplayFullName.css";

const FullName=()=>{

const[firstname,setFirstname]=useState("");
const[lastname,setLastname]=useState("");
const[fullname,setFullname]=useState("");
const[validation,setValidation]=useState("");
const[isSubmitted,setIsSubmitted]=useState(false);



const handleFirstName=(e)=>{
   setFirstname (e.target.value)
}
const handleLastName=(e)=>{
    setLastname(e.target.value)
}



const handleValidation=(e)=>{
    e.preventDefault();

    
    if(!firstname || !lastname){
        setValidation("please enter the field")
    }else{
    setFullname(`${firstname} ${lastname}`)
    setValidation("");
    setIsSubmitted(true);
}
}



    return (
<div className="container">
    <h1>Full Name Display</h1>
    <form onSubmit={handleValidation}>
        <div>
   <label for="firstname">First Name:</label>
   <input type="text" id="firstname" name="firstname" value={firstname} onChange={handleFirstName} required pattern="[A-Za-z]{,}" title="Three or more letters" />
  
   </div>
  
       <div>
            <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" value={lastname} onChange={handleLastName} required pattern="[A-Za-z]{,}" title="Three or more letters" />
        
       </div>
       <button type="submit">Submit</button>
        </form> 
        {validation && <p className="validate">{validation}</p>}
       {isSubmitted && <p>Full Name: {fullname} </p>}
</div>
    )
}
export default FullName;