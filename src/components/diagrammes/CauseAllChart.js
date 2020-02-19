import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
	constructor(props) {
        super(props);
        this.state = {
            accidents :[]
            }    
      
         }
    
    getData = () =>{
        fetch("http://localhost:5000/api/v1/accidents")
        .then(res=>res.json())
        .then(result=>this.setState({accidents:result}))
    }
  
    componentDidMount() {
      this.getData();
    }
	render() {
		const total = this.state.accidents.length;
		 const y1 = this.state.accidents.filter(acc=>
			acc.cause === "Negligence du controle de circulation").length/total;
		 const y2 = this.state.accidents.filter(acc=>
				acc.cause === "Les vehicules se suivent trop etroitement").length/total;
     	const y3 = this.state.accidents.filter(acc=>
				acc.cause === "Distance trop etroit entre les vehicules durant la circulation").length/total;
		const y4 = this.state.accidents.filter(acc=>
				acc.cause === "Excés de vitesse").length/total;
		const y5 = this.state.accidents.filter(acc=>
				acc.cause === "Inexperience du conducteur").length/total;
		const y6 = this.state.accidents.filter(acc=>
				acc.cause === "Somnolence/fatigue").length/total;
		const y7 = this.state.accidents.filter(acc=>
			acc.cause === "Perte conscience/Malade").length/total;
		const y8 = this.state.accidents.filter(acc=>
		   acc.cause === "Frein defectueux").length/total;
	   const y9 = this.state.accidents.filter(acc=>
			acc.cause === "Pneu crevé").length/total;
		const y10 = this.state.accidents.filter(acc=>
			acc.cause === "Trottoir defectuex").length/total;
		const y11 = this.state.accidents.filter(acc=>
			acc.cause === "Prise de substance illcite (drogue)").length/total;
		const y12 = this.state.accidents.filter(acc=>
			acc.cause === "Accelerateur deffectueux").length/total;
		const y13 = this.state.accidents.filter(acc=>
				acc.cause === "Les feux de controle defecteux").length/total;
		const y14 = this.state.accidents.filter(acc=>
			acc.cause === "Action d'un animal sur la voie").length/total;
		const y15 = this.state.accidents.filter(acc=>
			acc.cause === "Main tenant un telephone au volant").length/total;
		const y16 = this.state.accidents.filter(acc=>
			acc.cause === "Condition metéo/climat").length/total;
		const y17 = this.state.accidents.filter(acc=>
			acc.cause === "Autres").length/total;
		const y18 = this.state.accidents.filter(acc=>
				acc.cause === "route trop étroite").length/total;
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Principales Causes des Accidents",
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
	
		
		
		return (
		<div className="chartdate">
			
			<CanvasJSChart options = {options} 
			
			/>
	
		</div>
		);
	}
}

export default PieChart;