import './App.css';
import { CreateAccount } from './components/createAccount';
import { WelcomePage } from './components/welcomePage';
import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
          <Router>
              <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path='/createAccount' element={<CreateAccount />} />
              </Routes>
          </Router>
    </div>
  );
}

export default App;