import React, { Component } from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import FormFiltrage from './formulaires/formulaireFiltrage';
import Legende from './statsLegend/Legende';
import L from 'leaflet';
import { MissionListingsProvider,MissionListingsConsumer } from '../context/missionListingsProvider';
import iconFatalURL from '../iconFatal.svg';
import iconBlessureURL from '../iconBlessure.svg';
import iconPasGraveURL from '../iconPasGrave.svg';


const iconI = L.icon({
  iconUrl: iconBlessureURL,
  iconSize: [20, 30]
});
const iconN = L.icon({
  iconUrl:iconFatalURL,
  iconSize : [20, 30]
});
const iconU = L.icon({
  iconUrl : iconPasGraveURL,
  iconSize : [20, 30]
});
const list = [{"nom":"yo","prenom":"ben","arm":"arc"},{"nom":"joy","prenom":"jo","arm":"fleche"}].sort();

class MapFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lat:15.947,
            lng:18.271
         
          
            
           
         }
    }
  
  
    render() { 
        const center =[this.state.lat, this.state.lng ];
        return (  
          <MissionListingsProvider>
          <MissionListingsConsumer>
               {function(value) {
               const { missionListings,updateFilter } = value
               const ongNationale = missionListings.filter(yo =>yo.NomTyp_Ong === "ONG nationale");
               const countOngNationale = ongNationale.length;
               const ongInternationale = missionListings.filter(yo =>yo.NomTyp_Ong === "ONG internationale");
               const countOngInternationale = ongInternationale.length;
               const nationU = missionListings.filter(yo =>yo.NomTyp_Ong === "Agence des Nations Unies");
               const countNationU = nationU.length;
               return(
                 
                <div>
                
                <div className="legend1">
                 <Legende  countOngInternationale={countOngInternationale} 
                           countOngNationale={countOngNationale} countNationU={countNationU}  />
                  </div>
                  <FormFiltrage updateFilter={updateFilter} />
                  <Map
       className="map-filter"
       center={center}
       zoom={6}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
             {missionListings.map(listing => (
                 listing.NomTyp_Ong === "ONG nationale" ?
                      <Marker 
                      key={listing._id}
                      position = {[listing.latitude, listing.longitude]}
                      icon={  iconN } >
                     <Popup> {listing.nom} {listing.region} {listing.ong} </Popup>
                     
             </Marker> :""
                             
                           ))}
                {missionListings.map(listing => (
                 listing.NomTyp_Ong === "ONG internationale" ?
                      <Marker 
                      key={listing._id}
                      position = {[listing.latitude, listing.longitude]}
                      icon={  iconI } >
                     <Popup> {listing.nom} {listing.region} {listing.ong} </Popup>
                     
             </Marker> :""
                             
                           ))}
            {missionListings.map(listing => (
                 listing.NomTyp_Ong === "Agence des Nations Unies" ?
                      <Marker 
                      key={listing._id}
                      position = {[listing.latitude, listing.longitude]}
                      icon={  iconU } >
                     <Popup> {listing.nom} {listing.region} {listing.ong} </Popup>
                     
             </Marker> :""
                             
                           ))}
               </Map>  
             </div>
                
                )
               }}
               
              
               </MissionListingsConsumer>
          </MissionListingsProvider>       
            
        )
              }}
       

 
export default MapFilter;