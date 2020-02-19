import React, { Component } from 'react';
import {Card,CardText,Badge,Button} from 'reactstrap';
import iconFatalURL from './iconFatal.svg';
import iconBlessureURL from './iconBlessure.svg';
import iconPasGraveURL from './iconPasGrave.svg';
import L from 'leaflet';


class LegendeSuivi extends Component {
  state = {  }
  render() { 
    return ( 
       <div className="legende-suivi">
         <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}> 
          <div className="iconPosition">
            <p className="para" ><img src={iconFatalURL} alt="iconB" className="icon" />
             ONG nationale  
            
            
            <img src={iconBlessureURL} alt="iconB" className="icon" />
             ONG internationale 
            
            <img src={iconPasGraveURL} alt="iconB" className="icon" />
             Agence des Nations Unies  </p>
            </div>
          
            
              
      </Card>
       </div>
     
    

     
     );
  }
}
 
export default LegendeSuivi;
