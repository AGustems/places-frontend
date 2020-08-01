import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import CompleteSubmit from "./CompleteSubmit";
import LoadingInfo from "./LoadingInfo";

export class AddPlaces extends Component {
    constructor(props) {
        super(props)
        this.state={
            search: '',
            lat: 0,
            lng: 0,
            direccion: '',
            name:'',
            description:'',
            saved:false,
            loading: false
        }
    }
    handleSave = (e)=>{
        e.preventDefault()
        console.log(this.state)
        const uploadData = new FormData()
        const history = this.props.history;
        uploadData.append('imageUrl',this.state.file)
        uploadData.append('name',this.state.name)
        uploadData.append('description',this.state.description)
        uploadData.append('lat',this.state.lat)
        uploadData.append('lng',this.state.lng)
        this.setState({
         ...this.state,
        loading: true,
        });
        axios.post('http://localhost:5000/api/places', uploadData).then(
            response=>{
                console.log('File upload successful:', response.data)
                this.setState({...this.state,loading: false,saved:true})
                setTimeout(function () {
                    history.push(`/list`);
                     }, 5000);
            }
        )
    }
    
    handleFileUpload = (e) => {
    this.setState({
      ...this.state,
      file: e.target.files[0],
    });
  };

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

   handleFileUpload=(e)=>{
        console.log('File upload...')
        this.setState({file: e.target.files[0]})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // buscar la direccion y mostrar un PIN en el mapa con la dirección
        axios.get("http://localhost:5000/api/address?search=" + this.state.search)
        .then(response => {
            console.log(response.data)
            // volver a renderizar el mapa con CENTER = lat, lng y un PIN =  lat, lng
            this.setState({
                lat: response.data.candidates[0].geometry.location.lat,
                lng: response.data.candidates[0].geometry.location.lng,
                direccion: response.data.candidates[0].formatted_address
            })
          
        })
    }


    render() {
        console.log("Render")
        const center = {
            lat: this.state.lat,
            lng: this.state.lng
        }
        const zoom = 15
        const getMapOptions = (maps) => {
            return {
                disableDefaultUI: false,
                mapTypeControl: true,
                streetViewControl: true,
                styles: [{ featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{ visibility: 'on' }] }],
                }
        }
        const renderMarkers = (map, maps) => {
            const position = {
                lat: this.state.lat,
                lng: this.state.lng
            }
            let marker = new maps.Marker({
                position: position,
                map,
                title: this.state.direccion})
        }
        if (this.state.loading) {
        return <LoadingInfo />;
        } else if (this.state.saved) {
        return <CompleteSubmit />;
        } else{
            return (
            <div>
                <h1>Add Place</h1>
                <div>
                <h1>File Upload</h1>
                <form onSubmit={this.handleSave}>
                    <label>Título</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <label>Descripción</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/>
                    <label>Foto</label>
                    <input type='file' name='imageUrl' onChange={this.handleFileUpload}/>
                    <input type='submit' value='Guardar'/>
                </form>
                </div>
                <div style={{width:'600px', height:'400px'}}>
                    <GoogleMapReact
                        key={this.state.direccion}
                        bootstrapURLKeys={ { key: 'AIzaSyBT0RpL1Yw7Q5WC4WemS6hyJ_Y3PnSUyfY'} }
                        defaultCenter={center}
                        defaultZoom={zoom}
                        options={getMapOptions}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                        />
                        <form onSubmit={this.handleSubmit}>
                            <label>Direccion</label>
                            <input type="text"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleChange}
                                placeholder="informar la direccion" />
                            <input type="submit" value="buscar" />
                        </form>
                    </div>
                    </div>
        )
        }
    }
}

export default AddPlaces
