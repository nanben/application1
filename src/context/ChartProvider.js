import * as React from 'react';

const DefaultState={
    accidentListings :[],
    allAccidents : [],
    filter :{
      commune:"Ain Chock",
      option : ""
    }
}

const AccidentChartContext = React.createContext(DefaultState)

 export const AccidentChartConsumer = AccidentChartContext.Consumer

 export class AccidentChartProvider extends React.Component{
     state = DefaultState

     componentDidMount() {
        fetch("http://localhost:5000/api/v1/accidents")
        .then(res => res.json())
        .then(response => this.setState({accidentListings:response,allAccidents : response}))
        .catch(error => console.log(error))
     }
     updateFilter = filter => {
        this.setState({
          filter
        })
      }
      static applyFilter(accidents, filter) {
        const {commune, option} = filter
        let result = accidents
        if (commune) {
          const com = commune
          result = result.filter(item => item.commune === com);
        }
        if(option){
          
        }
        
        
      
        return result
      }
   
    render(){
        const{children} =this.props
        const{accidentListings,filter,allAccidents} = this.state
        const accidentFiltered = AccidentChartProvider.applyFilter(
            accidentListings,
            filter
          )
    
       return(
             <AccidentChartContext.Provider 
             value={{
                 filter:filter,
                 allAccidents,
                 accidentListings : accidentFiltered,
                 updateFilter : this.updateFilter,
                }} 
              >
                 {children}
             </AccidentChartContext.Provider>
    )
 }
 }