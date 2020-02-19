import React, { Component } from 'react';
import { Card, CardText,Button, CardTitle,Form, FormGroup, Input } from 'reactstrap';
class FormSuivi extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
           regions :[],
           ong : [],
           types : [],
           filterValues :{
            regions : "",
            ong:"",
            types : "",
            
          },
          }
    }
    filterValue=(event) => {
      const{name,value} = event.target;
      this.setState( (prevState) => ({
           filterValues :{
             ...prevState.filterValues,
             [name] :value
           }
          }))
    }
   
    filterSubmitted = (event) =>{
      event.preventDefault();
     
    }
    
    getRegion = () =>{
        fetch("http://localhost:5000/api/v1/region")
        .then(res => res.json())
        .then(response => this.setState({regions:response}))
        .catch(error => console.log(error))
      }
      getOng = () =>{
        fetch("http://localhost:5000/api/v1/ong")
        .then(res => res.json())
        .then(response => this.setState({ong:response}))
        .catch(error => console.log(error))
      }
      getTypes = () => {
        fetch("http://localhost:5000/api/v1/type_ong")
        .then(res => res.json())
        .then(response => this.setState({types:response}))
        .catch(error => console.log(error))
      }
     
      
      componentDidMount() {
        this.getOng();
       this.getRegion();
       this.getTypes();
    };  
    render() { 
        return ( 
        <div className="form-suivi ">
          <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}>
          <CardTitle style={{fontSize:22,color:"rgb(26, 58, 165)",fontFamily:'italic'}}>OPTIONS DE REQUETES </CardTitle>
           <Form onSubmit={this.filterSubmitted} noValidate  
            onChange={() => setTimeout(() => this.props.updateFilter(this.state.filterValues), 0)}>
             <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> ONG</CardText>
            <FormGroup>
            <Input onChange={this.filterValue} type="select" name="region" id="region"> 
                 <option>Choisir l'ONG'</option>
                {this.state.ong.map(ong =>{
                  return <option key={ong._id} >{ong.nom} </option>
                })} 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> PROJETS</CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="type" id="type"> 
                 <option>choisir le projet</option>
                {this.state.types.map(type =>{
                  return <option key={type._id} >{type.nom} </option>
                })} 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> STATUS DE SUIVI </CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="ong" id="ong"> 
                 <option>OUI</option>
                   <option>NON </option>
                 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}>BAILLEUR </CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="ong" id="ong"> 
                 <option>choisir un domaine</option>
                {this.state.ong.map(ong =>{
                  return <option key={ong._id} >{ong.nom} </option>
                })} 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}>LOCALITE </CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="ong" id="ong"> 
                 <option>choisir la localité</option>
                {this.state.regions.map(ong =>{
                  return <option key={ong._id} >{ong.nom} </option>
                })} 
                
            </Input>
           </FormGroup>
        
           
           
           
         </Form> 
               
      </Card>
      </div>
           
         );

    }
  }
 
 export default FormSuivi;