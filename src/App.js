import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import AddPlaces from './components/AddPlaces';
=======
<<<<<<< HEAD
import Admin from './components/Admin/Admin';
=======
<<<<<<< HEAD
import EditForm from './components/EditForm';
=======
import Search from './components/Search';
>>>>>>> b7e62ed027b15ca8598e61652faa9fa4828caf70
>>>>>>> d984d756891afdaf4718b2ff8186eba21d7630a1
>>>>>>> 7c3c8a5f7f404da2c8898477ac218b6b11a274b7

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
<<<<<<< HEAD
        <Route exact path="/Add" component={AddPlaces}/>
=======
<<<<<<< HEAD
        <Route exact path = "/admin" render= {(props) => <Admin {...props} />}/>
=======
<<<<<<< HEAD
        <Route path="/edit/:id" render={(props) => <EditForm {...props} />} />
=======
        <Route exact path="/search" render={(props) => <Search {...props} />} />
>>>>>>> b7e62ed027b15ca8598e61652faa9fa4828caf70
>>>>>>> d984d756891afdaf4718b2ff8186eba21d7630a1
>>>>>>> 7c3c8a5f7f404da2c8898477ac218b6b11a274b7
      </Switch>
    </div>
  );
}

export default App;
