import React, { Component } from 'react';
import {Table,Card,CardText,CardTitle} from 'reactstrap';



class Bilan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accidents : []
          }
       
    }
    getAccident = () => {
        fetch('http://localhost:5000/api/v1/accidents')
        .then(res => res.json())
        .then(response => this.setState({accidents:response}))
    }
    componentDidMount() {
        this.getAccident();
    }
    render() { 
        const number = 25;
        let communList = [this.state.accidents.filter(accident=>accident.commune === "Anfa"),
                 this.state.accidents.filter(accident=>accident.commune === "Ain Chock"),
                 this.state.accidents.filter(accident=>accident.commune === "Ain Sebaa"),
                 this.state.accidents.filter(accident=>accident.commune === "Al Fida"),
                 this.state.accidents.filter(accident=>accident.commune === "Moulay Rachid"),
                 this.state.accidents.filter(accident=>accident.commune === "Assoukhour Assawda"),
                 this.state.accidents.filter(accident=>accident.commune === "Ben Msick").length,
                 this.state.accidents.filter(accident=>accident.commune === "El Maarif").length,
                 this.state.accidents.filter(accident=>accident.commune === "Hay Hassani").length,
                 this.state.accidents.filter(accident=>accident.commune === "Hay Mohammadi").length,
                 this.state.accidents.filter(accident=>accident.commune === "Machouar Casablanca").length,
                 this.state.accidents.filter(accident=>accident.commune === "Mers Sultan").length,
                 this.state.accidents.filter(accident=>accident.commune === "Sbata").length,
                 this.state.accidents.filter(accident=>accident.commune === "Sidi Belyout").length,
                 this.state.accidents.filter(accident=>accident.commune === "Sidi Bernoussi").length,
                 this.state.accidents.filter(accident=>accident.commune === "Sidi Moumen").length,
                 this.state.accidents.filter(accident=>accident.commune === "Sidi Othmane").length,
                ];
        
        return ( 
            <div className="bilan">
            <Card body  style={{ borderColor:"blue",borderRadius:"1px",borderWidth:1,backgroundColor:'white'}}>
            <hr style={{borderColor :'white'}} />
                <Table striped>
            <thead style={{backgroundColor:"#BD5B4C",fontFamily:'italic'}}>
              <tr>
                <th style={{color:"white"}}> Bilan des tops communes<br/> les plus accidentées </th>
                <th style={{color:"white"}}>Auto</th>
                <th style={{color:"white"}}>Motocycliste</th>
                <th style={{color:"white"}}>Piéton</th>
                <th style={{color:"white"}}>Acc.Grave</th>
                <th style={{color:"white"}}>Acc.BlesséImport.</th>
                <th style={{color:"white"}}>Acc.degâtMoy</th>
                <th style={{color:"white"}}>Nbr.total</th>
                <th style={{color:"white"}}>HeurePointe</th>
                <th style={{color:"white"}}>Cause.Princ</th>
              </tr>
            </thead>
            <tbody style={{fontFamily:'italic'}}>
              <tr>
                <th  scope="row">Moulay Rachid</th>
                <td>6%</td>
                <td>21%</td>
                <td>45%</td>
                <td>42%</td>
                <td>45%</td>
                <td>12%</td>
                <td>33</td>
                <td>20H-22H</td>
                <td>Feux de contrôle defectueux(33%)</td>
              </tr>
              <tr>
              <th style={{backgroundColor:'rgba(180, 190, 255, 0.596'}} scope="row">Anfa</th>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>10%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>28%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>50%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>50%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>42%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>7%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>28</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>20H-22H</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>Frein défectueux(21%)</td>
              </tr>
              <tr>
              <th  scope="row">Sidi Bernoussi</th>
                <td>11%</td>
                <td>25%</td>
                <td>48%</td>
                <td>37%</td>
                <td>55%</td>
                <td>7%</td>
                <td>27</td>
                <td>20H-22H</td>
                <td>Action d'un animal sur la voie(29%)</td>
              </tr>
              <tr>
              <th style={{backgroundColor:'rgba(180, 190, 255, 0.596'}} scope="row">El Maarif</th>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>24%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>28%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>32%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>40%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>48%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>12%</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>25</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>20H-22H</td>
                <td style={{backgroundColor:'rgba(180, 190, 255, 0.596'}}>Route trop étoite(12%)</td>
              </tr>
              <tr>
              <th  scope="row">Hay Mohammadi</th>
                <td>24%</td>
                <td>28%</td>
                <td>32%</td>
                <td>36%</td>
                <td>44%</td>
                <td>20%</td>
                <td>25</td>
                <td>20H-22H</td>
                <td>Accelerateur défecteux(24%)</td>
              </tr>
              <th style={{backgroundColor:"#BD5B4C",color:"white",fontFamily:'italic'}} scope="row">Bilan Annuel de Casablanca</th>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>29%</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>33%</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>37%</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>30%</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>70%</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>---</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>397</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>20H-22H</td>
                <td style={{fontFamily:'italic',backgroundColor:'#BD5B4C',color:'white'}}>Route trop étroite(11%)</td>
            </tbody>
          </Table>
          </Card>
            </div>
            
         );
    }
}
 
export default Bilan;