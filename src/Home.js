import React, { Component } from 'react';
import { AccidentChartProvider,AccidentChartConsumer } from './context/ChartProvider';
//import Chart from './components/diagrammes/Chart';
import ChartT from './components/diagrammes/CatAllChartT';
//import ChartX from './components/diagrammes/GravFilter';
import ChartDate from './components/diagrammes/DateAllChart';
import Charte from './components/diagrammes/GravAllChart';
import FormAnalyse from "./components/formulaires/FormAnalyse";
import PieChart from './components/diagrammes/CauseAllChart';
import FormAnalyse2 from './components/formulaires/FormAnalyse2';
//import GravFilter from './components/diagrammes/GravFilter';
import CanvasJSReact from './components/diagrammes/canvasjs.react';
import Heure from './components/diagrammes/Heure';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  class HomeMap extends Component {
    constructor(props){
      super(props);
      this.state = {
        showAllDate :true,
        showInDate:false,
        showAllGravité:false,
        showAllCategory:false,
        showAllCause:false,
        showOption:false,
        showHeure:false
    }
    }
   
  showOptions = () =>{
    this.setState({
      showOption:true
    })
  }
  showAllGravité = () =>{
      this.setState({
          showAllGravité:true,
          showAllDate:false,
          showAllCategory:false,
          showAllCause:false,
          showInDate:false,
          showHeure:false
      })
  }
  showAllCategory = () =>{
      this.setState({
        showAllDate :false,
        showAllGravité:false,
        showAllCategory:true,
        showAllCause:false,
        showInDate:false,
        showHeure:false
      })
  }
  showAllCause = () =>{
    this.setState({
        showAllDate :false,
        showAllGravité:false,
        showAllCategory:false,
        showAllCause:true,
        showInDate:false,
        showHeure:false
      })
  }
  showAllHeure = () =>{
    this.setState({
        showAllDate :false,
        showAllGravité:false,
        showAllCategory:false,
        showAllCause:false,
        showInDate:false,
        showHeure:true
      })
  }

      render() { 
       
          return ( 
            <div>
            {this.state.showAllDate?  <div >  <ChartDate/></div>:""}
            <FormAnalyse 
            allGravité={this.showAllGravité}
            allCategory={this.showAllCategory}
            allCause={this.showAllCause} 
            allHeure ={this.showAllHeure}
            showOption={this.showOptions} 
            option={this.state.showOption} />
             {this.state.showAllGravité? <div >  <Charte/></div>:""}
             {this.state.showAllCategory?<div >  <ChartT/></div>:""}
             {this.state.showAllCause?<div >  <PieChart/></div>:""}
             {this.state.showHeure?<div > <Heure/></div>:""}
         
            <AccidentChartProvider>
              <AccidentChartConsumer>
                
              {function(value) {
               const { accidentListings,updateFilter,filter } = value
               const total = accidentListings.length;
               const count1= accidentListings.filter(acc => 
                new Date(acc.date) <= new Date('2018-12-31T20:59:51.205Z')).length;
               const counte1= accidentListings.filter(acc => 
                  new Date(acc.date).getHours() <= 0).length;
        
              const count2 =  accidentListings.filter(acc=>
                 new Date(acc.date) < new Date('2019-01-01T20:59:51.205Z')).length;
             const counte2= accidentListings.filter(acc => 
                  new Date(acc.date).getHours() <= 2).length;
        
              const count3 =	 accidentListings.filter(acc=> 
                new Date(acc.date) < new Date('2019-01-12T20:59:51.205Z')).length;
              const counte3= accidentListings.filter(acc => 
                  new Date(acc.date).getHours() <= 4).length;
             const counte4= accidentListings.filter(acc => 
                    new Date(acc.date).getHours() <= 6).length;
              const count4 =  accidentListings.filter(acc=> 
                new Date(acc.date) < new Date('2019-01-24T20:59:51.205Z')).length;
            const counte5= accidentListings.filter(acc => 
                  new Date(acc.date).getHours() <= 8).length;  
              const count5 =  accidentListings.filter(acc=> 
                new Date(acc.date) < new Date('2019-01-31T20:59:51.205Z')).length;
           const counte6= accidentListings.filter(acc => 
                  new Date(acc.date).getHours() <= 10).length;           
             const count6	=  accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-02-04T20:59:51.205Z')).length;
           const counte7= accidentListings.filter(acc => 
                new Date(acc.date).getHours() <= 12).length;
           const count7 = accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-02-16T20:59:51.205Z')).length;
          const counte8= accidentListings.filter(acc => 
                new Date(acc.date).getHours() <= 14).length;      
         const count8 =  accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-02-28T20:59:51.205Z')).length;
         const counte9= accidentListings.filter(acc => 
                new Date(acc.date).getHours() <= 16).length; 
        const count9 =  accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-03-14T20:59:51.205Z')).length;
       const counte10= accidentListings.filter(acc => 
                new Date(acc.date).getHours() <= 18).length;
      const count10 =  accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-03-28T20:59:51.205Z')).length;
       const counte11= accidentListings.filter(acc => 
                new Date(acc.date).getHours() <= 20).length;    
       const count11 =  accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-04-12T20:59:51.205Z')).length;
       const counte12= accidentListings.filter(acc => 
                new Date(acc.date).getHours() <= 22).length;
       const count12 =  accidentListings.filter(acc=> 
                new Date(acc.date) < new Date('2019-04-26T20:59:51.205Z')).length;
      const counte13= accidentListings.filter(acc => 
                  new Date(acc.date).getHours() <= 24).length;   
                const count13 =  accidentListings.filter(acc=> 
              new Date(acc.date) < new Date('2019-05-10T20:59:51.205Z')).length;
           const count14 =  accidentListings.filter(acc=> 
                new Date(acc.date) < new Date('2019-05-25T20:59:51.205Z')).length;
            const count15 =  accidentListings.filter(acc=> 
                new Date(acc.date) < new Date()).length;
            const cat1 = accidentListings.filter(acca => acca.type==="Auto-Auto").length/total;
            const cat2 = accidentListings.filter(
              acc=>acc.type === "Auto-Cycliste").length/total;
            const cat3 = accidentListings.filter(
              acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length/total;
            const grav1 = accidentListings.filter(acc=>acc.gravite === "Grave-Fatale").length/total;
           const grav2= accidentListings.filter(acc=>acc.gravite === "Blessures Importantes").length/total;
           const grav3 = accidentListings.filter(acc=>acc.gravite === "Pas Grave").length/total;
           const y1 = accidentListings.filter(acc=>
            acc.cause === "Negligence du controle de circulation").length/total;
           const y2 = accidentListings.filter(acc=>
              acc.cause === "Les vehicules se suivent trop etroitement").length/total;
             const y3 = accidentListings.filter(acc=>
              acc.cause === "Distance trop etroit entre les vehicules durant la circulation").length/total;
          const y4 = accidentListings.filter(acc=>
              acc.cause === "Excés de vitesse").length/total;
          const y5 = accidentListings.filter(acc=>
              acc.cause === "Inexperience du conducteur").length/total;
          const y6 = accidentListings.filter(acc=>
              acc.cause === "Somnolence/fatigue").length/total;
          const y7 = accidentListings.filter(acc=>
            acc.cause === "Perte conscience/Malade").length/total;
          const y8 = accidentListings.filter(acc=>
             acc.cause === "Frein defectueux").length/total;
           const y9 = accidentListings.filter(acc=>
            acc.cause === "Pneu crevé").length/total;
          const y10 = accidentListings.filter(acc=>
            acc.cause === "Trottoir defectuex").length/total;
          const y11 = accidentListings.filter(acc=>
            acc.cause === "Prise de substance illcite (drogue)").length/total;
          const y12 = accidentListings.filter(acc=>
            acc.cause === "Accelerateur deffectueux").length/total;
          const y13 = accidentListings.filter(acc=>
              acc.cause === "Les feux de controle defecteux").length/total;
          const y14 = accidentListings.filter(acc=>
            acc.cause === "Action d'un animal sur la voie").length/total;
          const y15 = accidentListings.filter(acc=>
            acc.cause === "Main tenant un telephone au volant").length/total;
          const y16 = accidentListings.filter(acc=>
            acc.cause === "Condition metéo/climat").length/total;
          const y17 = accidentListings.filter(acc=>
            acc.cause === "Autres").length/total;
          const y18 = accidentListings.filter(acc=>
              acc.cause === "route trop étroite").length/total;
         
          const option = filter.option
            const commun = filter.commune
            const option4 = {
              exportEnabled: true,
              animationEnabled: true,
              title: {
                text: "Principales Causes des Accidents dans la commune de "+ commun,
                fontSize:22,
                fontColor:"black"
              },
              data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<h3>{label}</h3>: {y}%",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                  { y: parseInt(y1*100), label: "Negligence du controle de circulation" },
                  { y: parseInt(y2*100), label: "Les vehicules se suivent trop etroitement" },
                  { y: parseInt(y3*100), label: "Distance trop etroit entre les vehicules durant la circulation" },
                  { y: parseInt(y4*100), label: "Excés de vitesse" },
                  { y: parseInt(y5*100), label: "Inexperience du conducteur" },
                  { y: parseInt(y6*100), label: "Somnolence/fatigue" },
                  { y: parseInt(y7*100), label: "Perte conscience/Malade" },
                  { y: parseInt(y8*100), label: "Frein defectueux" },
                  { y: parseInt(y9*100), label: "Pneu crevé" },
                  { y: parseInt(y10*100), label: "Trottoir defectuex" },
                  { y: parseInt(y11*100), label: "Prise de substance illcite (drogue)" },
                  { y: parseInt(y12*100), label: "Accelerateur deffectueux" },
                  { y: parseInt(y13*100), label: "Les feux de controle defecteux" },
                  { y: parseInt(y14*100), label: "Action d'un animal sur la voie" },
                  { y: parseInt(y15*100), label: "Main tenant un telephone au volant" },
                  { y: parseInt(y16*100), label: "Condition metéo/climat" },
                  { y: parseInt(y17*100), label: "Autres" },
                  {y:parseInt(y18*100), label : "Route trop étroite"}
                ]
                
              }]
            }
             const option3 = {
              exportEnabled: true,
              animationEnabled: true,
              title: {
                text: "Commune de " + commun,
                fontSize:25,
                fontColor:"black"
              },
              data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<h3>{label}</h3>: {y}%",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                  { y: parseInt(grav1*100), label: "Grave-Fatale" },
                  { y: parseInt(grav2*100), label: "Blessures Importantes" },
                  { y: parseInt(grav3*100), label: "Dégats moins Importants" }
                ]}]}
             const option2 = {
              exportEnabled: true,
              animationEnabled: true,
              title: {
                text: "Commune de " + commun,
                fontSize:25,
                fontColor:"black"
              },
              data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<h3>{label}</h3>: {y}%",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                labelFontColor:"#6D78AD",
                dataPoints: [
                  { y: parseInt(cat1*100), label: "Automobile" },
                  { y: parseInt(cat2*100), label: "Motor-Cycliste" },
                  { y: parseInt(cat3*100), label: "Piéton" }
                ]}]}
                const option1 = {
                  theme: "light2",
                  animationEnabled: true,
                  exportEnabled: true,
                  title: {
                    text: "commune de " + commun,
                    fontSize:25,
                    fontColor:"black"
                  },
                  
                  axisY: {
                    title: "Nombre d'accidents ",
                    titleFontColor:"#6D78AD",
					        	labelFontColor:"#6D78AD"
                    
                  },
                
                  
                  data: [
                  {
                    type: "spline",
                    xValueFormatString: "MMM YYYY",
                    showInlegend :true,
                    dataPoints:[
                      { x: new Date('2018-12-31T20:59:51.205Z'), y:count1 },
                      { x: new Date('2019-01-01T20:59:51.205Z'), y:count2 },
                      { x: new Date('2019-01-12T20:59:51.205Z'), y:count3 },
                      { x: new Date('2019-01-24T20:59:51.205Z'), y:count4},
                      { x: new Date('2019-01-31T20:59:51.205Z'), y:count5 },
                      { x: new Date('2019-02-04T20:59:51.205Z'), y:count6 },
                      { x: new Date('2019-02-16T20:59:51.205Z'), y:count7 },
                      { x: new Date('2019-02-28T20:59:51.205Z'), y:count8 },
                      { x: new Date('2019-03-14T20:59:51.205Z'), y:count9},
                      { x: new Date('2019-03-28T20:59:51.205Z'), y:count10 },
                      { x: new Date('2019-04-12T20:59:51.205Z'), y:count11 },
                      { x: new Date('2019-04-26T20:59:51.205Z'), y:count12 },
                      { x: new Date('2019-05-10T20:59:51.205Z'), y:count13 },
                      { x: new Date('2019-05-25T20:59:51.205Z'), y:count14 },
                      { x: new Date(), y:count15}
                    ]
                  }
                  
                  ]
            }
            const option5 = {
              theme: "light2",
              animationEnabled: true,
              exportEnabled: true,
              title: {
                text: "commune de " + commun,
                fontSize:25,
                fontColor:"black"
              },
              
              axisY: {
                title: "Nombre d'accidents ",
                titleFontColor:"#6D78AD",
                labelFontColor:"#6D78AD"
                
              },
            
              
              data: [
              {
                type: "spline",
                showInlegend :true,
                dataPoints:[
                  { label: "00 H", y:counte1 },
                  { label: "2H", y:counte2 },
                  { label: "4H", y:counte3 },
                  { label: "6H", y:counte4},
                  { label: "8H", y:counte5 },
                  { label: "10H", y:counte6 },
                  { label: "12H", y:counte7 },
                  { label: "14H", y:counte8 },
                  { label: "16H", y:counte9},
                  { label: "18H", y:counte10 },
                  { label: "20H", y:counte11 },
                  { label: "22H", y:counte12 },
                  { label: "24H", y:counte13 },
                 
                ]
              }
              
              ]
        }
            
               let finalOption = {}
               if(!option){
                  finalOption = option1
               }
               if(option==="Gravite"){
                 finalOption=option3
               }
               if(option==="Type"){
                 finalOption=option2
               }
               if(option==="Cause"){
                 finalOption=option4
               }
               if(option==="Correlation(Heure & accidents)"){
                 finalOption=option5
               }
               
             

                return(
                   <div> 
                        <FormAnalyse2  updateFilter={updateFilter}/>
                        <hr style={{borderColor :'white'}}/>
                        <div className="chartdateX">  <CanvasJSChart options = {finalOption}/>
                         </div>
                         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                         <hr style={{borderColor :'white'}}/>
                         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                         <hr style={{borderColor :'white'}}/>

                   </div>
                )
                }}
              </AccidentChartConsumer>
            </AccidentChartProvider>
            </div>
           );
      }
  }
   
  export default HomeMap;