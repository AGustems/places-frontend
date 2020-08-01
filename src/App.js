import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import EditForm from './components/EditForm';
=======
import Search from './components/Search';
>>>>>>> b7e62ed027b15ca8598e61652faa9fa4828caf70

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
<<<<<<< HEAD
        <Route path="/edit/:id" render={(props) => <EditForm {...props} />} />
=======
        <Route exact path="/search" render={(props) => <Search {...props} />} />
>>>>>>> b7e62ed027b15ca8598e61652faa9fa4828caf70
      </Switch>
    </div>
  );
}

export default App;
