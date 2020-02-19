import * as React from 'react';



const DefaultState={
    missionListings :[],
    filter :{}
}

const MissionListingsContext = React.createContext(DefaultState)

 export const MissionListingsConsumer = MissionListingsContext.Consumer

 export class MissionListingsProvider extends React.Component{
     state = DefaultState

     componentDidMount() {
        fetch("http://localhost:5000/api/v1/mission")
        .then(res => res.json())
        .then(response => this.setState({missionListings:response}))
        .catch(error => console.log(error))
     }
     updateFilter = filter => {
        this.setState({
          filter
        })
      }
      static applyFilter(mission, filter) {
        const { nom, type, region ,ong,secteur,filterE} = filter
        let result = mission
        if (nom) {
          const nome = nom
          result = result.filter(item => item.Nom_ong === nome)
        }
        if (type) {
            const typ =type
          result = result.filter(item => item.NomTyp_Ong === typ)
        }
        if (region) {
          const reg = region
          result =result.filter(item => item.Nom_Province === reg)
        }
        if(ong){
            const onge =ong
               
         result = result.filter(item=> item.Nom_ong===onge)
        }
        if(secteur){
          const sec = secteur
             
       result = result.filter(item=> item.Secteur===sec)
      }
      if(filterE){
        
        result = result.filter(item=>item.NomTyp_Ong==="ONG internationale" || item.NomTyp_Ong==="ONG nationale" || item.NomTyp_Ong==="ONG internationale" || item.NomTyp_Ong=== "Agence des Nations Unies")
      }
     
       return result
      }
      
   
    render(){
        const{children} =this.props
        const{missionListings,filter} = this.state
        const missionFiltered = MissionListingsProvider.applyFilter(
            missionListings,
            filter
          )
    
       return(
             <MissionListingsContext.Provider 
             value={{
                 missionListings : missionFiltered,
                 updateFilter : this.updateFilter,
                }} 
              >
                 {children}
             </MissionListingsContext.Provider>
    )
 }
 }