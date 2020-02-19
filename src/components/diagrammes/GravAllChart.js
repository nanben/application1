import React, { Component } from 'react';
import { Bar,Pie,Line} from 'react-chartjs-2';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 



class Charte extends Component {
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
        /* <Bar data={chartData} 
                     options={{
                        title:{
                            exportEnabled: true,
                            display:true,
                            text:"Accidents total par commune selon la Gravité ",
                            fontSize:25,
                            fontColor:"black"
                        },
                        legend:{
                            display:true,
                            position:"bottom"
                        }
                    }}
                 /> */   
     const accidentAnfa = this.state.accidents.filter(accident=>accident.commune === "Anfa");
     const countAccidentAnfaFatale = accidentAnfa.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentAnfaBlessure = accidentAnfa.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentAnfaPasGrave = accidentAnfa.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentAnchock = this.state.accidents.filter(accident=>accident.commune === "Ain Chock");
     const countAccidentAnchockFatale = accidentAnchock.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentAnchockBlessure = accidentAnchock.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentAnchockPasGrave = accidentAnchock.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentAnsbaa = this.state.accidents.filter(accident=>accident.commune === "Ain Sebaa");
     const countAccidentAnsbaaFatale = accidentAnsbaa.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentAnsbaaBlessure = accidentAnsbaa.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentAnsbaaPasGrave = accidentAnsbaa.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentAlfida = this.state.accidents.filter(accident=>accident.commune === "Al Fida");
     const countAccidentAlfidaFatale = accidentAlfida.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentAlfidaBlessure = accidentAlfida.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentAlfidaPasGrave = accidentAlfida.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentMoulayRachid = this.state.accidents.filter(accident=>accident.commune === "Moulay Rachid");
     const countAccidentMoulayRachidFatale = accidentMoulayRachid.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentMoulayRachidBlessure = accidentMoulayRachid.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentMoulayRachidPasGrave = accidentMoulayRachid.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentAssawda = this.state.accidents.filter(accident=>accident.commune === "Assoukhour Assawda");
     const countAccidentAssawdaFatale = accidentAssawda.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentAssawdaBlessure = accidentAssawda.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentAssawdaPasGrave = accidentAssawda.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentMsick = this.state.accidents.filter(accident=>accident.commune === "Ben Msick");
     const countAccidentMsickFatale = accidentMsick.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentMsickBlessure = accidentMsick.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentMsickPasGrave = accidentMsick.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentMaarif = this.state.accidents.filter(accident=>accident.commune === "El Maarif");
     const countAccidentMaarifFatale = accidentMaarif.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentMaarifBlessure = accidentMaarif.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentMaarifPasGrave = accidentMaarif.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentHassani = this.state.accidents.filter(accident=>accident.commune === "Hay Hassani");
     const countAccidentHassaniFatale = accidentHassani.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentHassaniBlessure = accidentHassani.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentHassaniPasGrave = accidentHassani.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentMohammadi = this.state.accidents.filter(accident=>accident.commune === "Hay Mohammadi");
     const countAccidentMohammadiFatale = accidentMohammadi.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentMohammadiBlessure = accidentMohammadi.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentMohammadiPasGrave = accidentMohammadi.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentMachouar = this.state.accidents.filter(accident=>accident.commune === "Machouar Casablanca");
     const countAccidentMachouarFatale = accidentMachouar.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentMachouarBlessure = accidentMachouar.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentMachouarPasGrave = accidentMachouar.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentSultan = this.state.accidents.filter(accident=>accident.commune === "Mers Sultan");
     const countAccidentSultanFatale = accidentSultan.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentSultanBlessure = accidentSultan.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentSultanPasGrave = accidentSultan.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentSbata = this.state.accidents.filter(accident=>accident.commune === "Sbata");
     const countAccidentSbataFatale = accidentSbata.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentSbataBlessure = accidentSbata.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentSbataPasGrave = accidentSbata.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentBelyout = this.state.accidents.filter(accident=>accident.commune === "Sidi Belyout");
     const countAccidentBelyoutFatale = accidentBelyout.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentBelyoutBlessure = accidentBelyout.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentBelyoutPasGrave = accidentBelyout.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentBernoussi = this.state.accidents.filter(accident=>accident.commune === "Sidi Bernoussi");
     const countAccidentBernoussiFatale = accidentBernoussi.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentBernoussiBlessure = accidentBernoussi.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentBernoussiPasGrave = accidentBernoussi.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentMoumen = this.state.accidents.filter(accident=>accident.commune === "Sidi Moumen");
     const countAccidentMoumenFatale = accidentMoumen.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentMoumenBlessure = accidentMoumen.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentMoumenPasGrave = accidentMoumen.filter(acc=>acc.gravite === "Pas Grave").length;
     const accidentOthmane = this.state.accidents.filter(accident=>accident.commune === "Sidi Othmane");
     const countAccidentOthmaneFatale = accidentOthmane.filter(acc=>acc.gravite === "Grave-Fatale").length;
     const countAccidentOthmaneBlessure = accidentOthmane.filter(acc=>acc.gravite === "Blessures Importantes" ||acc.gravite === "Pas Grave").length;
     const countAccidentOthmanePasGrave = accidentOthmane.filter(acc=>acc.gravite === "Pas Grave").length;
     let chartData = {
          labels : ["Anfa","Ain Chock","Ain Sebaa","Al Fida","Assoukhour Assawda","Ben Msick","El Maarif",
         "Hay Hassani","Hay Mohammadi","Machouar Casablanca","Mers Sultan","MoulayRachid","Sbata","Sidi Belyout","Sidi Bernoussi",
         "Sidi Moumen","Sidi Othmane"],
         datasets :[{label:"Fatale", data:[countAccidentAnfaFatale,countAccidentAnchockFatale,countAccidentAnsbaaFatale,
            countAccidentAlfidaFatale,countAccidentAssawdaFatale,countAccidentMsickFatale,
            countAccidentMaarifFatale,countAccidentHassaniFatale,countAccidentMohammadiFatale,countAccidentMachouarFatale,
            countAccidentSultanFatale, countAccidentMoulayRachidFatale,countAccidentSbataFatale,countAccidentBelyoutFatale,countAccidentBernoussiFatale,
            countAccidentMoumenFatale,countAccidentOthmaneFatale],backgroundColor:"red",borderWidth:0.5,borderColor:"black"},
            {label:"Blessure Importante", data:[countAccidentAnfaBlessure,countAccidentAnchockBlessure,countAccidentAnsbaaBlessure,
                countAccidentAlfidaBlessure,countAccidentAssawdaBlessure,countAccidentMsickBlessure,
                countAccidentMaarifBlessure,countAccidentHassaniBlessure,countAccidentMohammadiBlessure,countAccidentMachouarBlessure,
                countAccidentSultanBlessure,countAccidentMoulayRachidBlessure,countAccidentSbataBlessure,countAccidentBelyoutBlessure,countAccidentBernoussiBlessure,
                countAccidentMoumenBlessure,countAccidentOthmaneBlessure],backgroundColor:"orange",borderWidth:0.5,borderColor:"black"},
                {label:"Pas de Dégât", data:[countAccidentAnfaPasGrave,countAccidentAnchockPasGrave,countAccidentAnsbaaPasGrave,
                    countAccidentAlfidaPasGrave,countAccidentAssawdaPasGrave,countAccidentMsickPasGrave,
                    countAccidentMaarifPasGrave,countAccidentHassaniPasGrave,countAccidentMohammadiPasGrave,countAccidentMachouarPasGrave,
                    countAccidentSultanPasGrave,countAccidentMoulayRachidPasGrave,countAccidentSbataPasGrave,countAccidentBelyoutPasGrave,countAccidentBernoussiPasGrave,
                    countAccidentMoumenPasGrave,countAccidentOthmanePasGrave],backgroundColor:"green",borderWidth:0.5,borderColor:"black"}]
         };

         const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text:"Accidents total par commune selon la Gravité"
			},
			axisY: {
                title: "Nombre d'accidents ",
                titleFontColor:"#6D78AD",
                labelFontColor:"#6D78AD"
                
              },
			data: [
			{
                type: "column",
                color:"red",
                name:'Grave',
                showInLegend: true,
				dataPoints: [
					{ label:"Anfa" , y: countAccidentAnfaFatale},
					{ label:"Ain Chock" , y:countAccidentAnchockFatale},
					{ label:"Ain Sebaa" , y: countAccidentAnsbaaFatale},
					{ label:"Al Fida", y: countAccidentAlfidaFatale},
                    {label: "Assoukhour Assawda", y: countAccidentAssawdaFatale},
                    {label:"Ben Msick",y:countAccidentMsickFatale},
                    {label:"El Maarif", y: countAccidentMaarifFatale},
                    { label:  "Hay Hassani", y:countAccidentHassaniFatale},
                    { label: "Hay Mohammadi", y: countAccidentMohammadiFatale},
                    { label: "Machouar Casablanca", y: countAccidentMachouarFatale},
                    { label: "Mers Sultan", y:countAccidentSultanFatale},
                    { label: "Moulay Rachid", y:countAccidentMoulayRachidFatale},
                    { label: "Sbata", y: countAccidentSbataFatale},
                    { label: "Sidi Belyout", y: countAccidentBelyoutFatale},
                    { label: "Sidi Bernoussi", y: countAccidentBernoussiFatale},
                    { label: "Sidi Moumen", y: countAccidentMoumenFatale},
                    { label: "Sidi Othmane", y: countAccidentOthmaneFatale}
                   
                   
				]
            },
            {
                type: "column",
                name:'Importantes',
                color:"#FF9800",
                showInLegend: true,
				dataPoints: [
					{ label:"Anfa" , y: countAccidentAnfaBlessure},
					{ label:"Ain Chock" , y:countAccidentAnchockBlessure},
					{ label:"Ain Sebaa" , y: countAccidentAnsbaaBlessure},
					{ label:"Al Fida", y: countAccidentAlfidaBlessure},
					{label:"Ben Msick",y:countAccidentMsickBlessure},
                    {label:"El Maarif", y: countAccidentMaarifBlessure},
                    { label:  "Hay Hassani", y:countAccidentHassaniBlessure},
                    { label: "Hay Mohammadi", y: countAccidentMohammadiBlessure},
                    { label: "Machouar Casablanca", y: countAccidentMachouarBlessure},
                    { label: "Mers Sultan", y:countAccidentSultanBlessure},
                    { label: "Sbata", y:countAccidentSbataBlessure},
                    { label: "Sidi Belyout", y: countAccidentBelyoutBlessure},
                    { label: "Sidi Bernoussi", y: countAccidentBernoussiBlessure},
                    { label: "Sidi Moumen", y: countAccidentMoumenBlessure},
                    { label: "Sidi Othmane", y: countAccidentOthmaneBlessure}
                   
                   
				]
            }
            
			]
        }
       

        return (
            <div>
                
            <div className="char">
               
                 <CanvasJSChart options = {options}/>
            </div>
            </div> 
            
         );
    }
}
 
export default Charte;


