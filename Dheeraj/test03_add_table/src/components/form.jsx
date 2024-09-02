import { useEffect, useState } from "react";

function Form({addData}) { 
   // console.log("test 1",addData)

    const [name, setName] = useState(''); 
    const [job, setJob] = useState('');   
    const [data , setData]= useState({})

    useEffect(() => {
      return () => {
       console.log(name,job,data)
       
      };
  
    }, [submitData, name,job,data]);
    
  

  function submitData() {     
    setData({name, job})
 
  }

  const renderUsers = () => {
    return data.map(({ name, job }) => {
      return <tr >  
      <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{job}</td>
     
    </tr>
    })
  }

  const renderHeader = () => {
    return <tr>
      {/* {Object.keys(data[1]).map(key => <th>{(key)}</th>)} */}
    </tr>
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

      <div>
        <h1>Table Data:</h1>
        <table >
        {renderHeader()}
          <tbody>
          {renderUsers()}
            

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
