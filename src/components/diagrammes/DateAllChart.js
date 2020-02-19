import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class ChartDate extends Component {
	
			state= {
				accidents : [],
			}
	getAccidents =() =>{
		fetch("http://localhost:5000/api/v1/accidents")
		.then(res=>res.json())
		.then(result=>this.setState({accidents:result}))
	}
    componentDidMount() {
          this.getAccidents();
				
					
				
			}
			render() {

				const count1= this.state.accidents.filter(acc => 
					new Date(acc.date) <= new Date('2018-12-31T20:59:51.205Z')).length;
	
				const count2 = this.state.accidents.filter(acc=>
					 new Date(acc.date) < new Date('2019-01-01T20:59:51.205Z')).length;
	
				const count3 =	this.state.accidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-01-12T20:59:51.205Z')).length;
	
				const count4 = this.state.accidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-01-24T20:59:51.205Z')).length;
	
				const count5 = this.state.accidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-01-31T20:59:51.205Z')).length;
					
			 const count6	= this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-02-04T20:59:51.205Z')).length;
		  
			 const count7 =this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-02-16T20:59:51.205Z')).length;
						
			const count8 = this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-02-28T20:59:51.205Z')).length;
			const count9 = this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-03-14T20:59:51.205Z')).length;
			const count10 = this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-03-28T20:59:51.205Z')).length;
			const count11 = this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-04-12T20:59:51.205Z')).length;
			const count12 = this.state.accidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-04-26T20:59:51.205Z')).length;
			const count13 = this.state.accidents.filter(acc=> 
				new Date(acc.date) < new Date('2019-05-10T20:59:51.205Z')).length;
			const count14 = this.state.accidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-05-25T20:59:51.205Z')).length;
			
			const count15 = this.state.accidents.filter(acc=> 
					new Date(acc.date) < new Date()).length;
			//const count9 = this.state.accidents.filter(acc=> acc.date <= this.state.accidents[interval*8].date).length;
			
					
		
				const options1 = {
					theme: "light2",
					animationEnabled: true,
					exportEnabled: true,
					title: {
						text: "Evolution temporelle de la forêt de Mâamora en superfice",
						fontSize:25,
						fontColor:"black"
					},
					
					axisY: {
						title: "superficie en ha",
						titleFontColor:"#6D78AD",
						labelFontColor:"#6D78AD"
					},
				
					
					data: [
					{
						type: "column",
						xValueFormatString: "YYYY",
						showInlegend :true,
		
						dataPoints:[
	
							{ label: '1958', y:140271 },
							{ label: '1987', y:137732 },
							{ label: '2018', y:134626 },
						]
					}
				]
				}	

				
				
				const options = {
					theme: "light2",
					animationEnabled: true,
					exportEnabled: true,
					title: {
						text: "Accidents par intervalle de date",
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
		
		return (
		<div >
			  
			<div className="chartdate">
			
			<CanvasJSChart options = {options} 
				
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		</div>	
		
		);
	}
}

export default ChartDate;                           