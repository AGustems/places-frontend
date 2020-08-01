import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import AddPlaces from './components/AddPlaces';
import Admin from './components/Admin/Admin';
import EditForm from './components/EditForm';
import Search from './components/Search';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route exact path="/Add" component={AddPlaces}/>
        <Route exact path = "/admin" render= {(props) => <Admin {...props} />}/>
        <Route path="/edit/:id" render={(props) => <EditForm {...props} />} />
        <Route exact path="/search" render={(props) => <Search {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
