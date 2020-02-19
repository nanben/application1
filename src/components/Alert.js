import React, { Component } from 'react';

import { Alert,Card } from 'reactstrap';

class AlertMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
        <Alert  isOpen={this.state.visible} toggle={this.onDismiss} >
            <h6>
               Autoriser la localisation permet de recueillir les coordonnées du point d'accident...
            
              </h6> 
              <p>Veuillez l'accepter</p>
    
         </Alert>
    );
  }
}

export default AlertMessage;