import React from 'react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css'
import Cronometro from './Components/Cronometro';

function App() {
  return (
    <div className="App">
      <Form></Form>
      <List></List>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
