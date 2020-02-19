import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Heure extends Component {
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
        const counte1= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 0).length;
        const counte2= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 2).length;
        const counte3= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 4).length;
        const counte4= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 6).length;
        const counte5= this.state.accidents.filter(acc =>  new Date(acc.date).getHours() <= 8).length;
        const counte6= this.state.accidents.filter(acc =>  new Date(acc.date).getHours() <= 10).length;
        const counte7= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 12).length;
        const counte8= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 14).length;
        const counte9= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 16).length;
        const counte10= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 18).length;
        const counte11= this.state.accidents.filter(acc =>  new Date(acc.date).getHours() <= 20).length;
        const counte12= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 22).length;
        const counte13= this.state.accidents.filter(acc => new Date(acc.date).getHours() <= 24).length;
        const option = {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: "Commune de CASABLANCA " ,
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
        return ( 
            <div className="chartdate">
		
			<CanvasJSChart options = {option} 
				
			/>
		
		</div>
         );
    }
}
 
export default Heure;