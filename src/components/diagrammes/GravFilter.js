import React, { Component } from 'react';
import FormAnalyse from './formulaires/FormAnalyse';
import CanvasJSReact from './canvasjs.react';
import { AccidentListingsProvider,AccidentListingsConsumer } from "../../context/AccidentListingsProvider";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class GravFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return (  
          <AccidentListingsProvider>
          <AccidentListingsConsumer>
               {function(value) {
               const { accidentListings,updateFilter } = value
               const y1 = accidentListings.filter(acc=>acc.gravite === "Blessures Importantes").length;
               const y2 = accidentListings.filter(acc=>acc.gravite === "Grave-Fatale").length;
               const y3 = accidentListings.filter(acc=>acc.gravite === "Pas Grave").length;
               const options = {
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "Commune",
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
                        { y: y1*100, label: "Blessures Importantes" },
                        { y: y2*100, label: "Grave-Fatalet" },
                        { y: y3*100, label: "Pas Grave" },
                     
                        
                    ]
                    
                }]
            }
               return (
                
                      <div className="chartdate">
                      <FormAnalyse  updateFilter={updateFilter}/>
                       <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			         />
                       
                       
                   </div>
                      
                      )
                     }}
                     
             </AccidentListingsConsumer>
          </AccidentListingsProvider>
         
         
        )
    }
}
 
export default GravFilter;