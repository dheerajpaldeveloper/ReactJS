import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Table from './components/table';


function App() {
  let Name ='Dheeraj'
  let Job ='developer'
  
  this.state = {
    message: "initial message"
  };

  newMessage = (newMessage) => {
    this.setState({
      message: newMessage
    });
  }


  return (
    <div className="App">
      <Form newMessage={ this.newMessage } Job={Job} />
      <Table Name={Name} Job={Job} />
    </div>
  );
}

export default App;
