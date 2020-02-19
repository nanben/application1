import React, { Component } from 'react';
import {Card,CardText,Badge,Button} from 'reactstrap';
import iconFatalURL from './iconFatal.svg';
import iconBlessureURL from './iconBlessure.svg';
import iconPasGraveURL from './iconPasGrave.svg';
import L from 'leaflet';


class CompteurSuivi extends Component {
  state = {  }
  render() { 
    return ( 
      
        <div className="compteur">
        <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}>
        <h5 className="para1" >
         <th> Compteur "suivi projet"</th></h5> 
         <h7 style={{fontFamily:'italic'}}>Suivi effectué <Badge className="btn" >  {this.props.countSuiviEffectue}60 </Badge>.. 
         Suivi non-effectué <Badge className="btn" >  {this.props.countSuiviNonEffectue }25 </Badge>  </h7>
        
     </Card>
    
    </div>
     
     );
  }
}
 
export default CompteurSuivi;
