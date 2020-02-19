import React,{Component} from 'react';
import { Card, CardText,Button, CardTitle,Form, FormGroup, Label, Input,Col,Spinner } from 'reactstrap';
 
//if i want the title color :rgb(26, 58, 165)
class Mission extends Component {
   constructor(props) {
     super(props);
     this.state = { 
       communes : [],
       types : [],
       causes : [],
       gravites : []
       
      }
   }
  getCommunes = () =>{
    fetch("http://localhost:5000/api/v1/communes")
    .then(res => res.json())
    .then(response => this.setState({communes:response}))
    .catch(error => console.log(error))
  }
  getTypes = () => {
    fetch("http://localhost:5000/api/v1/typeAccidents")
    .then(res => res.json())
    .then(response => this.setState({types:response}))
    .catch(error => console.log(error))
  }
  getCauses = () =>{
    fetch("http://localhost:5000/api/v1/causes")
    .then(res => res.json())
    .then(response => this.setState({causes:response}))
    .catch(error => console.log(error))
  }
  getGravite = () =>{
    fetch("http://localhost:5000/api/v1/gravite")
    .then(res => res.json())
    .then(response => this.setState({gravites:response}))
    .catch(error => console.log(error))
  }
  componentDidMount(){
    this.getTypes();
    this.getCommunes();
    this.getGravite();
    this.getCauses();
  }   
  
   render() { 
    return (
      <div className="form">
         <Card body style={{borderWidth:"2px", borderColor:"green",borderRadius:"8px"}}>
        <CardTitle style={{fontSize:22,color:"red",fontFamily:'italic'}}>  ENREGISTRER UNE MISSION </CardTitle>
         {
           !this.props.sendingAccident && !this.props.sentAccident ?
           <Form  onSubmit = {this.props.formSubmitted} >
           <FormGroup>
           <CardText style={{fontSize:14,color:" green",fontFamily:'italic'}}> Selectionner l'ONG </CardText>
             <Input onChange={this.props.valueChanged}  type="text" name="commune" id="commune" > 
                {this.state.communes.map(commune => {
                  return <option style={{fontFamily:'italic'}}  key={commune._id} > {commune.commune} </option>
                })}
              </Input>
           </FormGroup>
           <FormGroup>
            <CardText style={{fontSize:14,color:" green",fontFamily:'italic'}}> Intitulé du projet</CardText>
             <Input onChange={this.props.valueChanged}
              type="textarea" 
              name="commentaire"
              id="commentaire"
             placeholder="Veuillez entrer le nom de projet" />
           </FormGroup>
           <FormGroup>
             <CardText style={{fontSize:14,color:" green",fontFamily:'italic'}}> Le type de l'ONG </CardText>
             <Input onChange={this.props.valueChanged} type="select" name="type" id="type" >
               {this.state.types.map(type =>{
                return  <option key= {type._id}> {type.type} </option>
               })}  
             </Input>
           </FormGroup>
           <FormGroup>
             <CardText style={{fontSize:14,color:" green",fontFamily:'italic'}}> Localité </CardText>
             <Input onChange={this.props.valueChanged} type="text" name="type" id="type" >
               {this.state.types.map(type =>{
                return  <option key= {type._id}> {type.type} </option>
               })}  
             </Input>
           </FormGroup>
           <FormGroup>
             <CardText style={{fontSize:14,color:" green",fontFamily:'italic'}}> Population cible </CardText>
             <Input onChange={this.props.valueChanged} type="text" name="type" id="type" >
               {this.state.types.map(type =>{
                return  <option key= {type._id}> {type.type} </option>
               })}  
             </Input>
           </FormGroup>
          
           <FormGroup>
             <CardText style={{fontSize:14,color:" green",fontFamily:'italic'}}> Date de mission </CardText>
             <Input onChange={this.props.valueChanged} type="text" name="gravite" id="gravite" >
             {this.state.gravites.map(gravite =>{
                return  <option key= {gravite._id}> {gravite.gravité} </option>
               })}
              </Input>
           </FormGroup>
           
           <div style={{paddingLeft:"40%"}}>
              <Button style={{fontFamily:'italic'}} color ="primary" type="submit" 
                disabled = {!this.props.formIsValid}> Envoyer </Button>
           </div>
            
         </Form> :
             this.props.sendingAccident ?
             <Spinner style={{ width: '3rem', height: '3rem' }} /> : 
              <h2 style={{fontFamily:'italic'}} >Le formulaire a été envoyé!Actualiser la page pour envoyer un nouveau formulaire</h2>
              
           }
            
           
      </Card>
      </div>
     
           
    );
  }
  
}
 
  
 export default Mission;
 
 
