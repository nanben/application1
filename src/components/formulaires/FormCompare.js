import React, { Component } from 'react';
import {Card,CardTitle,CardText,Form,FormGroup,Input,Button} from 'reactstrap';



class FormCompare extends Component {
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
      <div  className="formC">
          
        <Form onSubmit = {this.props.formSubmitted} noValidate  
            onChange={() => setTimeout(() => this.props.updateFilter(this.state.filterValues), 0)} >
             <label style={{fontSize:22,color:"#008FFB",fontFamily:'italic'}}> PROVINCE DE CASABLANCA 
                  VS.COMMUNE 
            <Input onChange={this.filterValue} type="select" name="commune" id="commune"> 
        
             {this.state.communes.map(commune =>{
              return <option style={{fontFamily:'italic',color:"red"}} onClick={this.props.inDate} key={commune._id} >{commune.commune} </option>
                })} 
            </Input></label>
    </Form>  
      </div>
         );
    }
}
 
export default FormCompare;