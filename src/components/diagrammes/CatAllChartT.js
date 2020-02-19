import React, { Component } from 'react';
import { Bar,Pie,Line} from 'react-chartjs-2';



class ChartT extends Component {
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
     const accidentAnfa = this.state.accidents.filter(accident=>accident.commune === "Anfa");
     const countAccidentAnfaFatale = accidentAnfa.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentAnfaBlessure = accidentAnfa.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentAnfaPasGrave = accidentAnfa.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentAnchock = this.state.accidents.filter(accident=>accident.commune === "Ain Chock");
     const countAccidentAnchockFatale = accidentAnchock.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentAnchockBlessure = accidentAnchock.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentAnchockPasGrave = accidentAnchock.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentAnsbaa = this.state.accidents.filter(accident=>accident.commune === "Ain Sebaa");
     const countAccidentAnsbaaFatale = accidentAnsbaa.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentAnsbaaBlessure = accidentAnsbaa.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentAnsbaaPasGrave = accidentAnsbaa.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentAlfida = this.state.accidents.filter(accident=>accident.commune === "Al Fida");
     const countAccidentAlfidaFatale = accidentAlfida.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentAlfidaBlessure = accidentAlfida.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentAlfidaPasGrave = accidentAlfida.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentMoulayRachid = this.state.accidents.filter(accident=>accident.commune === "Moulay Rachid");
     const countAccidentMoulayRachidFatale = accidentMoulayRachid.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentMoulayRachidBlessure = accidentMoulayRachid.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentMoulayRachidPasGrave = accidentMoulayRachid.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentAssawda = this.state.accidents.filter(accident=>accident.commune === "Assoukhour Assawda");
     const countAccidentAssawdaFatale = accidentAssawda.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentAssawdaBlessure = accidentAssawda.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentAssawdaPasGrave = accidentAssawda.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentMsick = this.state.accidents.filter(accident=>accident.commune === "Ben Msick");
     const countAccidentMsickFatale = accidentMsick.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentMsickBlessure = accidentMsick.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentMsickPasGrave = accidentMsick.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentMaarif = this.state.accidents.filter(accident=>accident.commune === "El Maarif");
     const countAccidentMaarifFatale = accidentMaarif.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentMaarifBlessure = accidentMaarif.filter(acc=>acc.type === "Auto-Cycliste").length;
     const countAccidentMaarifPasGrave = accidentMaarif.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentHassani = this.state.accidents.filter(accident=>accident.commune === "Hay Hassani");
     const countAccidentHassaniFatale = accidentHassani.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentHassaniBlessure = accidentHassani.filter(acc=>acc.type === "Auto-Cycliste").length;
     const countAccidentHassaniPasGrave = accidentHassani.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentMohammadi = this.state.accidents.filter(accident=>accident.commune === "Hay Mohammadi");
     const countAccidentMohammadiFatale = accidentMohammadi.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentMohammadiBlessure = accidentMohammadi.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentMohammadiPasGrave = accidentMohammadi.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentMachouar = this.state.accidents.filter(accident=>accident.commune === "Machouar Casablanca");
     const countAccidentMachouarFatale = accidentMachouar.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentMachouarBlessure = accidentMachouar.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentMachouarPasGrave = accidentMachouar.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentSultan = this.state.accidents.filter(accident=>accident.commune === "Mers Sultan");
     const countAccidentSultanFatale = accidentSultan.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentSultanBlessure = accidentSultan.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentSultanPasGrave = accidentSultan.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentSbata = this.state.accidents.filter(accident=>accident.commune === "Sbata");
     const countAccidentSbataFatale = accidentSbata.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentSbataBlessure = accidentSbata.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentSbataPasGrave = accidentSbata.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentBelyout = this.state.accidents.filter(accident=>accident.commune === "Sidi Belyout");
     const countAccidentBelyoutFatale = accidentBelyout.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentBelyoutBlessure = accidentBelyout.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentBelyoutPasGrave = accidentBelyout.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentBernoussi = this.state.accidents.filter(accident=>accident.commune === "Sidi Bernoussi");
     const countAccidentBernoussiFatale = accidentBernoussi.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentBernoussiBlessure = accidentBernoussi.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentBernoussiPasGrave = accidentBernoussi.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentMoumen = this.state.accidents.filter(accident=>accident.commune === "Sidi Moumen");
     const countAccidentMoumenFatale = accidentMoumen.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentMoumenBlessure = accidentMoumen.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentMoumenPasGrave = accidentMoumen.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     const accidentOthmane = this.state.accidents.filter(accident=>accident.commune === "Sidi Othmane");
     const countAccidentOthmaneFatale = accidentOthmane.filter(acc=>acc.type === "Auto-Auto").length;
     const countAccidentOthmaneBlessure = accidentOthmane.filter(acc=>acc.type === "Auto-Cycliste" ).length;
     const countAccidentOthmanePasGrave = accidentOthmane.filter(acc=>acc.type === "Auto-Piéton" || acc.type === "Cycliste-Piéton" ).length;
     let chartData = {
          labels : ["Anfa","Ain Chock","Ain Sebaa","Al Fida","Assoukhour Assawda","Ben Msick","El Maarif",
         "Hay Hassani","Hay Mohammadi","Machouar Casablanca","Mers Sultan","Moulay Rachid","Sbata","Sidi Belyout","Sidi Bernoussi",
         "Sidi Moumen","Sidi Othmane"],
         datasets :[{label:"Automobile", data:[countAccidentAnfaFatale,countAccidentAnchockFatale,countAccidentAnsbaaFatale,
            countAccidentAlfidaFatale,countAccidentAssawdaFatale,countAccidentMsickFatale,
            countAccidentMaarifFatale,countAccidentHassaniFatale,countAccidentMohammadiFatale,countAccidentMachouarFatale,
            countAccidentSultanFatale,countAccidentMoulayRachidFatale,countAccidentSbataFatale,countAccidentBelyoutFatale,countAccidentBernoussiFatale,
            countAccidentMoumenFatale,countAccidentOthmaneFatale],backgroundColor:"blue",borderWidth:0.5,borderColor:"black"},
            {label:"Motor-Cycliste", data:[countAccidentAnfaBlessure,countAccidentAnchockBlessure,countAccidentAnsbaaBlessure,
                countAccidentAlfidaBlessure,countAccidentMoulayRachidBlessure,countAccidentAssawdaBlessure,countAccidentMsickBlessure,
                countAccidentMaarifBlessure,countAccidentHassaniBlessure,countAccidentMohammadiBlessure,countAccidentMachouarBlessure,
                countAccidentSultanBlessure,countAccidentMoulayRachidPasGrave,countAccidentSbataBlessure,countAccidentBelyoutBlessure,countAccidentBernoussiBlessure,
                countAccidentMoumenBlessure,countAccidentOthmaneBlessure],backgroundColor:"rgb(167, 24, 24)",borderWidth:0.5,borderColor:"black"},
                {label:"Piéton", data:[countAccidentAnfaPasGrave,countAccidentAnchockPasGrave,countAccidentAnsbaaPasGrave,
                    countAccidentAlfidaPasGrave,countAccidentAssawdaPasGrave,countAccidentMsickPasGrave,
                    countAccidentMaarifPasGrave,countAccidentHassaniPasGrave,countAccidentMohammadiPasGrave,countAccidentMachouarPasGrave,
                    countAccidentSultanPasGrave,countAccidentMoulayRachidPasGrave,countAccidentSbataPasGrave,countAccidentBelyoutPasGrave,countAccidentBernoussiPasGrave,
                    countAccidentMoumenPasGrave,countAccidentOthmanePasGrave],backgroundColor:"yellow",borderWidth:0.5,borderColor:"black"}]
         };
     

        return ( 
            <div className="chartcat">
               <Bar
                data={chartData}
               options={{
                   title:{
                       display:true,
                       text:"Accidents total par commune selon la Catégorie",
                       fontSize:25,
                       fontColor:"black"
                   },
                   legend:{
                       display:true,
                       position:"top"
                   },
                   yaxis: {
                    show: true,
                    showAlways: true,
                    seriesName: "nombre d'accident",
                    opposite: false,
                    reversed: false,
                    logarithmic: false,
                    tickAmount: 6,
                    min: 6,
                    max: 6,
                    forceNiceScale: false,
                    floating: false,
                
                    labels: {
                        show: true,
                        align: 'right',
                        minWidth: 0,
                        maxWidth: 160,
                        style: {
                            color: "#78909C",
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            cssClass: 'apexcharts-yaxis-label',
                        },
                   
                    },
                    axisBorder: {
                        show: true,
                        color: '#78909C',
                        offsetX: 0,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#78909C',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                    },
                  
                    
                  
                    
                }
                
                
              
                 
               }}
                />
            </div>
         );
    }
}
 
export default ChartT;


