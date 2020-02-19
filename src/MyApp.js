import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import App from './App'; 
import MapFilter from './components/MapFilter';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import HomeMap from './Home';
import Compare from './components/diagrammes/Compare';
import Authentification from './components/formulaires/Authentification';
import imge from './imge.png';
import icon from './icon.png';
import Bilan from './components/diagrammes/Bilan';
import Mission from './components/formulaires/Mission';
import MapSuivi from './components/mapSuivi';



class MyApp extends Component {
    state = { 
       show:false,
       allUsers:{},
       user : {
         pseudo :'',
         password : ''
       }
     }    
     getUsers = () =>{
      fetch('http://localhost:5000/api/v1/users')
      .then(res => res.json())
      .then(response =>this.setState({allUsers:response}))
      .catch(error =>console.log(error))
    }
     componentDidMount() {
          this.getUsers();
     }
     userValid = () => {
       if(this.state.user.pseudo === this.state.allUsers.pseudo && this.state.user.password === this.state.allUsers.password){
         return true
       }
       else return "le pseudo ou mot de passe incorrecte"
     }
     authenSubmitted = (event) =>{
        event.preventDefault()
        if(this.userValid){
          this.setState({
            show : true
          })
        }
        
     }
     valueChanged=(event) => {
      const{name,value}= event.target;
      this.setState( (prevState) => ({
        user:{
          ...prevState.user,
          [name]:value
        }
      }))
   }
    render() { 

          let app =<BrowserRouter>
          <div>
          <div className="head">
            <img src={icon} alt="icon" className="iconHead" />
            <img src={icon} alt="icon" className="iconHead1" />
          <img src={icon} alt="icon" className="iconHead2" /></div><br/>
            <div className="text"> <p style={{fontSize: "1.43333rem",fontWeight:"bold",left: "300px",textShadow:"3px 2px 4px"}}> SECRETARIAT PERMANENT DES ORGANISATION NON GOUVERNEMENTALES ET DES AFFAIRES HUMANITAIRES(SPONGAH)</p>
            <div className="text1">
            <p style={{textShadow:"3px 2px 4px"}}> <em>SPONGAH-App,votre plateforme webmapping pour la gestion et visualisation des activités des ong en temps réel</em></p>
            </div>
            
           
            
          </div>
          <AppHeader/>
     
          <Route exact path="/" component={MapFilter} />
       <Route path="/nouvelAccident" component={App} />
       <Route path="/analyse" component={HomeMap} />
       <Route path="/carte" component={MapFilter}></Route>
       <Route path="/comparer" component={Compare}></Route>
       <Route path="/bilan" component={Bilan}></Route>
       <Route path="/mapsuivi" component={MapSuivi}></Route>
       <Route path="/mission" component={Mission}></Route>

          </div>

        </BrowserRouter>

        return ( 
           <div>
            
               {this.state.show ? app : <Authentification 
               authenSubmitted={this.authenSubmitted}
               valueChanged={this.valueChanged}
               userValid={this.userValid}
               show={this.state.show}
                /> }
           </div>
            
         );
    }
}
 
export default MyApp;