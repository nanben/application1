import React, { Component } from 'react';
import {Card,CardText,Badge,Button} from 'reactstrap';
import iconFatalURL from './iconFatal.svg';
import iconBlessureURL from './iconBlessure.svg';
import iconPasGraveURL from '../../iconPasGrave.svg';
import L from 'leaflet';


class Legende extends Component {
  state = {  }
  render() { 
    return ( 
       <div className="legende">
         <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}>
          <h3 style={{fontSize:20,color:"black",paddingLeft:30,fontFamily:'italic'}}> Légende </h3><hr/>
           
          <div className="iconPosition">
            <p style={{fontFamily:'italic'}} ><img src={iconFatalURL} alt="iconB" className="icon" />
             ONG NATIONALE <Badge className="btn" >  {this.props.countOngNationale } </Badge>  </p>
            </div>
            <div className="iconPosition">
            <p style={{fontFamily:'italic'}} ><img src={iconBlessureURL} alt="iconB" className="icon" />
             ONG INTERNATIONALE <Badge className="btn" >  {this.props.countOngInternationale } </Badge>  </p>
            </div>
            <div className="iconPosition">
            <p style={{fontFamily:'italic'}} ><img src={iconPasGraveURL} alt="iconB" className="icon" />
             AGENCE DES NATIONS UNIES <Badge className="btn" >  {this.props.countNationU } </Badge>  </p>
            </div>
            
              
      </Card>
       </div>
     
    

     
     );
  }
}
 
export default Legende;
