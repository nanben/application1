import React, { Component } from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import {Table,Card,CardText,CardTitle} from 'reactstrap';
import FormSuivi from './formulaires/formulaireSuivi';
import LegendeSuivi from './statsLegend/legendeSuivi';
import CompteurSuivi from './statsLegend/compteurSuivi';
import L from 'leaflet';
import { MissionListingsProvider,MissionListingsConsumer } from '../context/missionListingsProvider';
import iconFatalURL from '../iconFatal.svg';
import iconBlessureURL from '../iconBlessure.svg';
import iconPasGraveURL from '../iconPasGrave.svg';


const ongI = L.icon({
  iconUrl: iconFatalURL,
  iconSize: [20, 30]
});
const ongN = L.icon({
  iconUrl:iconBlessureURL,
  iconSize : [20, 30]
});
const nationU = L.icon({
  iconUrl : iconPasGraveURL,
  iconSize : [20, 30]
});

class MapSuivi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lat:19.292,
            lng:15.369,
            zoom:5
          
            
           
         }
    }
  
  
    render() { 
        const center =[this.state.lat, this.state.lng ];
        return (  
          <MissionListingsProvider>
          <MissionListingsConsumer>
               {function(value) {
               const { missionListings,updateFilter } = value
               const suiviEffectue = missionListings.filter(yo =>yo.status === "OUI");
               const countSuiviEffectue = suiviEffectue.length;
               const suiviNonEffectue = missionListings.filter(yo =>yo.type === "NON");
               const countSuiviNonEffectue = suiviNonEffectue.length;
               
               return(
                 
                <div>
                  <div className="form-suivi">
                    <FormSuivi/>
                  </div>
                <div className="legend">
                 <LegendeSuivi/>
                  </div>
                  <div className="compteursuivi"> <CompteurSuivi/> </div>
                  <div className="textcart">
         <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}> 
           <h5 style={{paddingLeft:"30px",textShadow:"3px 2px 4px"}} > Affichage de la requête sur la carte</h5> </Card>  </div>
           <div className="texttable">
         <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}> 
           <CardText> <h5 style={{paddingLeft:"30px",textShadow:"3px 2px 4px"}}>Affichage de la requête sur le tableau</h5> </CardText> </Card>  </div>
          
                  <div className="bilan">
            <Card body  >
                <Table striped>
            <thead style={{backgroundColor:"#BD5B4C",fontFamily:'italic'}}>
              <tr>
                <th style={{color:"white"}}> ONG</th>
                <th style={{color:"white"}}>Projets</th>
                <th style={{color:"white"}}>Status projet</th>
                <th style={{color:"white"}}>Bailleur</th>
                <th style={{color:"white"}}>Localité</th>
 
              </tr>
            </thead>
            <tbody style={{fontFamily:'italic'}}>
              <tr>
                <th  scope="row">XXXX</th>
                <td>XXXX</td>
                <td>XXXX</td>
                <td>XXXX</td>
                <td>XXXX</td>

              </tr>
              <tr>
              <th style={{backgroundColor:'rgba(180, 190, 255, 0.596'}} scope="row">XXXX</th>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
               
               
              </tr>
              <tr>
              <th  scope="row">XXXX</th>
                <td>XXXX</td>
                <td>XXXX</td>
                <td>XXXX</td>
                <td>XXXX</td>
              </tr>
              <tr>
              <th style={{backgroundColor:'rgba(180, 190, 255, 0.596'}} scope="row">XXXX</th>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>XXXX</td>
              </tr>
              <tr>
              <th  scope="row">XXXX</th>
                <td>XXXX</td>
                <td>XXXX</td>
                <td>XXXX</td>
                <td>XXXX</td>
                
              </tr>
              <th style={{backgroundColor:"#BD5B4C",color:"white",fontFamily:'italic'}} scope="row">TOTAL</th>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>XXXX</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>XXXX</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>XXXX</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>XXXX</td>
               
            </tbody>
          </Table>
          </Card>
            </div>
                  <Map
       className="map-suivi"
       center={center}
       zoom={13}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            <Marker position={center} >
              <Popup>DESRCIPTION</Popup> </Marker> 
               </Map>  
             </div>
                
                )
               }}
               
              
               </MissionListingsConsumer>
          </MissionListingsProvider>       
            
        )
              }}
       

 
export default MapSuivi;