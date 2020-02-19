import React, { Component } from 'react';
import {Card,CardTitle,CardText,Form,FormGroup,Input,Button} from 'reactstrap';



class FormAnalyse2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            communes:[],
            filterValues :{
                commune : "Ain Chock",
                option : ""
               }
         }
    }
    getCommunes = () =>{
        fetch("http://localhost:5000/api/v1/communes")
        .then(res => res.json())
        .then(response => this.setState({communes:response}))
        .catch(error => console.log(error))
      }
    componentDidMount() {
        this.getCommunes();
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
    render() { 
        return (
             <div className="formB">
            <Card body  style={{ borderColor:"white",borderRadius:"8px",borderWidth:2,backgroundColor:'#49494e'}}>
            <hr style={{borderColor :'white'}} />
                    <CardTitle style={{fontSize:22,color:"#008FFB",fontFamily:'italic'}}> PROVINCE DE CASABLANCA </CardTitle>
                      <hr style={{borderColor :'white'}}/>
            <Form onSubmit = {this.props.formSubmitted} noValidate  
            onChange={() => setTimeout(() => this.props.updateFilter(this.state.filterValues), 0)} >
<CardText style={{fontSize:16,color:"#FD6A6A",fontFamily:'italic'}}> ANALYSES INDIVIDUELLES </CardText>
  <FormGroup>
  <Input onChange={this.filterValue} type="select" name="commune" id="commune"> 
      <option style={{fontFamily:'italic',fontSize:"16"}}> Selectionner une commune </option>
      {this.state.communes.map(commune =>{
      return <option style={{fontFamily:'italic',color:"red"}} onClick={this.props.inDate} key={commune._id} >{commune.commune} </option>
      })} 
      
  </Input>
</FormGroup>
<FormGroup>
  <p  style={{fontFamily:'italic',color:"#FD6A6A"}}>
  Options d'analyse </p> <Input onChange ={this.filterValue} type="select" name="option" id="option" >
     <option style={{fontFamily:'italic',color:"red"}}>Gravite</option>
     <option style={{fontFamily:'italic',color:"red"}}>Type</option>
     <option style={{fontFamily:'italic',color:"red"}}>Cause</option>
     <option style={{fontFamily:'italic',color:"red"}}>Correlation(Heure & accidents)</option>
  </Input>
      
 
</FormGroup>
</Form>
            </Card>
           
        </div>
         );
    }
}
 
export default FormAnalyse2;