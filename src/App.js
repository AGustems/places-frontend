import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import AddPlaces from './components/AddPlaces';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route exact path="/Add" component={AddPlaces}/>
      </Switch>
    </div>
  );
}

export default App;
