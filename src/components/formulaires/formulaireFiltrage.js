import React, { Component } from 'react';
import { Card, CardText,Button, CardTitle,Form, FormGroup, Input,Col,Label } from 'reactstrap';
class FormFiltrage extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
           regions :[],
           ong : [],
           types : [],
           secteur : [],
          
           filterValues :{
            regions : "",
            ong:"",
            types : "",
            secteur:""
         
            
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
      getSecteur = () => {
        fetch("http://localhost:5000/api/v1/secteur")
        .then(res => res.json())
        .then(response => this.setState({secteur:response}))
        .catch(error => console.log(error))
      }
      
      componentDidMount() {
        this.getOng();
       this.getRegion();
       this.getTypes();
       this.getSecteur();
    };  
    render() { 
        return ( 
        <div className="form-filtre ">
          <Card body style={{borderWidth:"1px", borderColor:"green",borderRadius:"8px"}}>
          <CardTitle style={{fontSize:22,color:"rgb(26, 58, 165)",fontFamily:'italic'}}>OPTIONS DE FILTRAGE </CardTitle>
           <Form onSubmit={this.filterSubmitted} noValidate  
            onChange={() => setTimeout(() => this.props.updateFilter(this.state.filterValues), 0)}>
             <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> FILTRAGE PAR REGION</CardText>
            <FormGroup>
            <Input onChange={this.filterValue} type="select" name="region" id="region"> 
                 <option>Choisir la localité</option>
                {this.state.regions.sort().map(region =>{
                  return <option key={region._id} >{region.Nom_Province} </option>
                })} 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> FILTRAGE PAR TYPE ONG</CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="type" id="type"> 
                 <option>Type de  l'ONG</option>
                {this.state.types.map(type =>{
                  return <option key={type._id} >{type.NomTyp_Ong} </option>
                })} 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> FILTRAGE PAR NOM:ONG </CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="ong" id="ong"> 
                 <option>Selectionner le nom de l'ONG</option>
                {this.state.ong.map(ong =>{
                  return <option key={ong._id} >{ong.Nom_ong} </option>
                })} 
                
            </Input>
           </FormGroup>
           <CardText style={{fontSize:16,color:"blue",fontFamily:'italic'}}> FILTRAGE PAR SECTEUR D'ACTIVITE </CardText>
           <FormGroup>
           <Input onChange={this.filterValue} type="select" name="secteur" id="secteur"> 
                 <option>choisir un domaine</option>
                {this.state.secteur.map(ong =>{
                  return <option key={ong._id} >{ong.Secteur} </option>
                })} 
                
            </Input>
           </FormGroup>
          
          <FormGroup >
            <Label >Ennuler Le Filtre : </Label> <Col className="drap" sm={{ size: 6 }}>
              <Input onChange={this.filterValue} type="select" name="filterE" id="filterE" >
                <option>NON</option>
                <option>OUI</option>
              </Input> </Col>
           
          </FormGroup>
       
        
        
           
           
           
         </Form> 
               
      </Card>
      </div>
           
         );

    }
  }
 
 export default FormFiltrage;