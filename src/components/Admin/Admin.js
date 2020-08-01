import React, { Component } from 'react'

export class Admin extends Component {
    constructor(props) {
        super (props)
        this.state = {

        }

    }
    render() {
          const placeEdit =  this.props.places.map((place) => {
       
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
}

export default Admin
