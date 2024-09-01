import { useState } from "react";



function Form( props ){
    console.log(props)

    const [name, setName]= useState('ravi-123');
    const [job, setJob] = useState();

   
    function submitData() {
        
        const Name = document.getElementById('Name').value;
        const Job = document.getElementById('Job').value;

        props.Name('Ravi');
            

             
    }

    return(
        <div className="mainForm">
            <h1>Add New</h1>
            <p>Name</p>
            <input type="text" id="Name" />
            <p>Job</p>
            <input type="text" id="Job" />

            <button onClick={submitData}>Submit</button>

        </div>
    )
}

export default Form;

