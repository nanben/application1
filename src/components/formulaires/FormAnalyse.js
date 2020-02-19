import React, { Component } from 'react';
import {Card,CardTitle,CardText,Form,FormGroup,Input,Button} from 'reactstrap';

class FormAnalyse extends Component {
 
       state = {
           communes:[],
           
        }
    render() { 
        return ( 
            <div className="formA">
                 <Card body  style={{ borderColor:"white",backgroundColor:'#49494e',borderWidth:2}}>
                 <br/>
                            <CardText style={{fontSize:16,color:" #FD6A6A",fontFamily:"italic"}}> ANALYSE DE TOUTES LES COMMUNES </CardText>
                                <Button  style={{fontFamily:'italic',color:"gray",borderWidth :"3px"}} outline color="secondary" onClick={this.props.allGravité}>GRAVITES </Button><br/>
                                <Button style={{fontFamily:'italic',color:"gray",borderWidth :"3px"}} outline color="secondary" onClick={this.props.allCategory}>CATEGORIES</Button><br/>
                                <Button style={{fontFamily:'italic',color:"gray",borderWidth :"3px"}}  
                                 outline color="secondary" onClick={this.props.allCause}>CAUSES</Button> <br/>
                                 <Button style={{fontFamily:'italic',color:"gray",borderWidth :"3px"}}  
                                 outline color="secondary" onClick={this.props.allHeure}>CORRELATION(HEURE&ACCIDENT)</Button> <br/>
                    </Card>
            </div>
         );
    }
}
 
export default FormAnalyse;