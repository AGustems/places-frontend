<<<<<<< HEAD
import React, { Component } from 'react'
import axios from "axios"

export class Admin extends Component {
    constructor(props) {
        super (props)
        this.state = {
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/api/places`)
          .then(res => {
            const places = res.data;
            this.setState({ places });
          })
      }
    
=======
import React, { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);
  }
>>>>>>> a47d18363e880a572b1643fe11f7118e20dcb858

  render() {
    const placeEdit = this.props.places.map((place) => (
      <div>
        <h4>this.place.name</h4>
        <button> Edit</button>
        <button>Delete</button>
      </div>
    ));

<<<<<<< HEAD
    render() {
          const placeEdit =  this.state.places.map((place) => {
       
               return <div>
               <h4>{place.name}</h4>
               <button> Edit</button>
               <button>Delete</button>
                </div>
            })


        return (
            <div>

            <h2>Manage your places</h2>

                {placeEdit}
                
            </div>
        )
    }
=======
    return (
      <div>
        <h2>Manage your places</h2>

        {placeEdit}
      </div>
    );
  }
>>>>>>> a47d18363e880a572b1643fe11f7118e20dcb858
}

export default Admin;
