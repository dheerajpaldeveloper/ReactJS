import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/table';

function App() {
  const [formData, setFormData] = useState([]);

  const addData = (data) => {
    console.log("test app.js",data)
    setFormData([formData, data]); 
  };

  return (
    <div className="App">
      <Form addData= {addData} />
      <Table data= {formData} />
    </div>
  );
}

export default App;
