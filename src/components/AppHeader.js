import React from 'react';
import {NavLink } from 'react-router-dom';
import {Nav} from 'reactstrap';

const AppHeader = () => (
   
        


    <Nav className="navbar"  >
        
        
        <p style={{textShadow:"3px 2px 6px"}} ><a ><NavLink  className="link" to="">CARTE</NavLink> </a></p>
        <div className="item"><a ><NavLink className="link2" to="mapsuivi">SUIVI</NavLink> </a></div>
        <div className="item"><a ><NavLink className="link1" to="">RAPPORT</NavLink> </a></div>
       
        <div className="item"><a ><NavLink className="link3" to="mission">NOUVELLE MISSION</NavLink> </a></div>
        
    </Nav>
    
       
        
      
    
  
);

export default AppHeader;
// <div className="item"> <a ><NavLink className="link" to="/nouvelAccident">Cas </NavLink> </a> </div>
//<div className="item"> <a ><NavLink className="link" to="/carte">Carte</NavLink></a></div>
//<div><a className= "it"><NavLink className="link" to="/authentification">DECONNEXION</NavLink></a></div>