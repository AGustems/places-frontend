import React, { Component } from 'react'

class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            imageUrl: '',
            file: null,
        }
    }

    componentDidMount(){
        //fetch la data de el place del id
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        //enviar datos ruta post 
    }

    handleFileUpload = (e) => {
        // cambiar el state file
    }

    render() {
        return (
            <div>
                <h1>Edit yout experience</h1>
                <hr/>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            className="form-control"
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            className="form-control"
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            className="form-control"
                            name="imageUrl"
                            type="file"
                            onChange={this.handleFileUpload}
                        />
                    </div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="Update experience"/>
                </form>
            </div>
        )
    }
}

export default EditForm
