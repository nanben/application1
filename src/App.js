import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import AppHeader from './components/AppHeader';
import  L from 'leaflet';
import Formulaire from './components/formulaires/Formulaire';
import AlertMessage from './components/Alert';



const myIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  iconSize: [25, 31],
  fillColor:"red",
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -76]
});

const API_URL = 'http://localhost:5000/api/v1/accidents' ;
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      location:{
        lat: 19.047720,
        lng: 15.305452
        },
      haveUsersLocation: false,
      zoom: 10,
      newAccident:{
        commune : "",
        type : "",
        cause : "",
        gravite :"",
        commentaire :"",   
      },
      sendingAccident : false,
      sentAccident : false,
      accidents : [],
 
     
    };
  }
  getAccidents = () =>{
    fetch("http://localhost:5000/api/v1/accidents")
        .then(res => res.json())
        .then(response => this.setState({accidents:response}))
        .catch(error => console.log(error))
   }
  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
        this.setState({
          location:{
            lat:position.coords.latitude,
            lng:position.coords.longitude
          },
          haveUsersLocation:true,
          zoom:13, 
        });
      } 
      );
   this.getAccidents();
   }

  valueChanged=(event) => {
     const{name,value}= event.target;
     this.setState( (prevState) => ({
       newAccident:{
         ...prevState.newAccident,
         [name]:value
       }
     }))
  }
  formIsValid = () => {
    let { commune,type,commentaire,gravite,cause}  = this.state.newAccident;
     commune = commune.trim();
     type = type.trim();
     gravite = gravite.trim();
     cause = type.trim();
     commentaire = commentaire.trim();
    const valid = 
       commune.length > 0 && commune.length <= 200 &&
       type.length > 0 && type.length <= 200 &&
       cause.length > 0 && cause.length <= 200 &&
       gravite.length > 0 && gravite.length <= 200 &&
       commentaire.length > 0 && commentaire.length <= 1000;
    return   valid && this.state.haveUsersLocation ? true : false;
  }
  
  formSubmitted = (event) => {
     event.preventDefault()
     if (this.formIsValid()) {
      const body = {
        commune : this.state.newAccident.commune,
        type: this.state.newAccident.type,
        cause : this.state.newAccident.cause,
        gravite : this.state.newAccident.gravite,
        commentaire : this.state.newAccident.commentaire,
        latitude : this.state.location.lat,
        longitude: this.state.location.lng
       };
       this.setState({
         sendingAccident : true
       });
       fetch(API_URL, {
         method :'POST',
         headers : {
           'content-type':'application/json'
         },
         body : JSON.stringify(body)
       })
       .then( res => res.json())
       .then((result) =>{
        setTimeout( ()=>{
          this.setState({
            sendingAccident : false,
            sentAccident : true
          });
        },4000)
       });
       
     }
  }

  render() {

    const position =[this.state.location.lat,this.state.location.lng];
  
     
    return (
      <div>
           <Map
          className="map"
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.haveUsersLocation?
          <Marker  position={position} icon={myIcon}>
          </Marker> : <div className="alert"> <AlertMessage/>  </div> 
          }
        </Map>
         <div className="sendForm">
            <Formulaire 
              valueChanged = {this.valueChanged} 
              formSubmitted = {this.formSubmitted}
              formIsValid = {this.formIsValid}
             sendingAccident = {this.state.sendingAccident}
             sentAccident = {this.state.sentAccident}
            />
        </div> 
       
      </div>
          
      
    );
  }
}
export default App;
