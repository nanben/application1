import React, { Component } from 'react';
import { AccidentChartProvider,AccidentChartConsumer } from '../../context/ChartProvider';
import CanvasJSReact from './canvasjs.react';
import FormCompare from '../formulaires/FormCompare';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class Compare extends Component {
	
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

			
		
		return (
		<div>
			 <AccidentChartProvider>
              <AccidentChartConsumer>
			     {function(value){
					  const { accidentListings,updateFilter,filter,allAccidents } = value
					  const count1= accidentListings.filter(acc => 
						new Date(acc.date) <= new Date('2018-12-31T20:59:51.205Z')).length;
					const counte1= allAccidents.filter(acc => 
							new Date(acc.date) <= new Date('2018-12-31T20:59:51.205Z')).length;
		
					const count2 = accidentListings.filter(acc=>
						 new Date(acc.date) < new Date('2019-01-01T20:59:51.205Z')).length;
				   const counte2 = allAccidents.filter(acc=>
							new Date(acc.date) < new Date('2019-01-01T20:59:51.205Z')).length;

					const count3 =	accidentListings.filter(acc=> 
						new Date(acc.date) < new Date('2019-01-12T20:59:51.205Z')).length;
		          const counte3 =	allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-01-12T20:59:51.205Z')).length;

					const count4 = accidentListings.filter(acc=> 
						new Date(acc.date) < new Date('2019-01-24T20:59:51.205Z')).length;
	        	const counte4 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-01-24T20:59:51.205Z')).length;

					const count5 = accidentListings.filter(acc=> 
						new Date(acc.date) < new Date('2019-01-31T20:59:51.205Z')).length;
						
				const counte5 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-01-31T20:59:51.205Z')).length;	

				 const count6	= accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-02-04T20:59:51.205Z')).length;
			   const counte6	= allAccidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-02-04T20:59:51.205Z')).length;

				 const count7 =accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-02-16T20:59:51.205Z')).length;

				 const counte7 =allAccidents.filter(acc=> 
					new Date(acc.date) < new Date('2019-02-16T20:59:51.205Z')).length;
										
				const count8 = accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-02-28T20:59:51.205Z')).length;
					
				const counte8 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-02-28T20:59:51.205Z')).length;

				const count9 = accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-03-14T20:59:51.205Z')).length;

				const counte9 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-03-14T20:59:51.205Z')).length;

				const count10 = accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-03-28T20:59:51.205Z')).length;

				const counte10 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-03-28T20:59:51.205Z')).length;

				const count11 = accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-04-12T20:59:51.205Z')).length;
				
				const counte11 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-04-12T20:59:51.205Z')).length;

				const count12 = accidentListings.filter(acc=> 
						new Date(acc.date) < new Date('2019-04-26T20:59:51.205Z')).length;

				const counte12 = allAccidents.filter(acc=> 
							new Date(acc.date) < new Date('2019-04-26T20:59:51.205Z')).length;

				const count13 = accidentListings.filter(acc=> 
					new Date(acc.date) < new Date('2019-05-10T20:59:51.205Z')).length;

				const counte13 = allAccidents.filter(acc=> 
						new Date(acc.date) < new Date('2019-05-10T20:59:51.205Z')).length;

				const count14 = accidentListings.filter(acc=> 
						new Date(acc.date) < new Date('2019-05-25T20:59:51.205Z')).length;
				

				const counte14 = allAccidents.filter(acc=> 
							new Date(acc.date) < new Date('2019-05-25T20:59:51.205Z')).length;

				const count15 = accidentListings.filter(acc=> 
						new Date(acc.date) < new Date()).length;
				const counte15 = allAccidents.filter(acc=> 
							new Date(acc.date) < new Date()).length;
				//const count9 = this.state.accidents.filter(acc=> acc.date <= this.state.accidents[interval*8].date).length;
	            const commun = filter.commune;
					const options = {
						theme: "light2",
						animationEnabled: true,
						exportEnabled: true,
						title: {
							text: "Bilan des accidents : "+commun + " vs Province de Casablanca",
							fontSize:25,
							fontColor:"black"
						},
						
						axisY2: {
							title: "Commune de  " + commun,
							titleFontColor : "green",
							lineColor : "green",
							labelFontColor : "green"
							
						},
					
						axisY: {
							title: "Toutes les communes ",
							titleFontColor : "#6D50AD",
							lineColor : "#6D50AD",
							labelFontColor : "#6D50AD",
							tickColor:"#6D50AD"
							
						},
						
						data: [
						{
							type: "spline",
							xValueFormatString: "MMM YYYY",
							name :"Commune de  " + commun,
							showInlegend :true,
	
							dataPoints:[
		
								{ x: new Date('2018-12-31T20:59:51.205Z'), y:counte1 },
								{ x: new Date('2019-01-01T20:59:51.205Z'), y:counte2 },
								{ x: new Date('2019-01-12T20:59:51.205Z'), y:counte3 },
								{ x: new Date('2019-01-24T20:59:51.205Z'), y:counte4},
								{ x: new Date('2019-01-31T20:59:51.205Z'), y:counte5 },
								{ x: new Date('2019-02-04T20:59:51.205Z'), y:counte6 },
								{ x: new Date('2019-02-16T20:59:51.205Z'), y:counte7 },
								{ x: new Date('2019-02-28T20:59:51.205Z'), y:counte8 },
								{ x: new Date('2019-03-14T20:59:51.205Z'), y:counte9},
								{ x: new Date('2019-03-28T20:59:51.205Z'), y:counte10 },
								{ x: new Date('2019-04-12T20:59:51.205Z'), y:counte11 },
								{ x: new Date('2019-04-26T20:59:51.205Z'), y:counte12 },
								{ x: new Date('2019-05-10T20:59:51.205Z'), y:counte13 },
								{ x: new Date('2019-05-25T20:59:51.205Z'), y:counte14 },
								{ x: new Date(), y:counte15}
							
							
	
							]
						},
						
						
							{
								type: "spline",
								name:"Toutes les commune",
								axisYType:"secondary",
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
			return(
				<div> 
					 <FormCompare  updateFilter={updateFilter}/>
				
					 <div className="chartC">  <CanvasJSChart options = {options}/>
					  </div>
				

				</div>
			 )
				 }}
			
			</AccidentChartConsumer>
            </AccidentChartProvider>
		</div>
		);
	}
}

export default Compare;                           