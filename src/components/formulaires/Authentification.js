import React, { Component } from 'react';
import {Card,CardTitle,CardText,Form,FormGroup,Input,Button} from 'reactstrap';


class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo:"",
            password:""
          }
    }
    render() { 
        return ( 
            <div className="autho">
            <Card body  style={{ borderColor:"gray",borderRadius:"2px",borderWidth:4,backgroundColor:'#ad3408'}}>
            <hr style={{borderColor :'white'}} />
                    
            <Form onSubmit={this.props.authenSubmitted} >
             
        
              <div style={{paddingLeft:"31%"}}>
                     <Button style={{fontFamily:'italic',fontSize:18,color:"#FD9A6A"}} color ="secondary"  
                          type="submit" onClick={this.props.show}   >
                         Entrer </Button>
            <hr style={{borderColor :'white'}} />
              </div>
            </Form>
            </Card>
            </div>
         );
    }
}
 
export default Authentification;
// <CardText style={{fontSize:16,color:"#FD6A6A",fontFamily:'italic'}}> PSEUDO</CardText>
//<FormGroup>
//<Input  onChange={this.props.valueChanged} type="text" name="pseudo" id="pseudo" placeholder="Entrez votre pseudo"/>    
//</FormGroup>
//<CardText style={{fontSize:16,color:"#FD6A6A",fontFamily:'italic'}}> MOT DE PASSE </CardText>
//<FormGroup>
//<Input  onChange={this.props.valueChanged} type="password" name="password" id="password" placeholder="Entrez votre mot de passe"/>    
//</FormGroup>