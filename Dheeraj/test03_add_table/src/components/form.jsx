import { useState } from "react";

function Form({ addData }) { 

    const [name, setName] = useState(''); 
    const [job, setJob] = useState('');   

  function submitData() {  
    setName(name) ;
    setJob(job) ;

    addData({ name, job }); 
  }

  return (
    <div className="mainForm">
      <h1>Add New</h1>
      <p>Name</p>
      <input 
        type="text" 
        id="Name"
        value={name} 
        onChange={(e)=>setName(e.target.value)}

      />
      <p>Job</p>
      <input 
        type="text" 
        id="Job" 
        value={job}
        onChange={(e)=>setJob(e.target.value)}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default Form;
