import React from 'react';
import {Table} from 'reactstrap';




export default class StatsCounter extends React.Component{
  render(){
    return(
      <Table className="countage" >
        <thead>
          <tr>
            <th></th>
            <th style={{fontSize:20,color:"aqua"}}>Pieton</th>
            <th style={{fontSize:20,color:"aqua"}}>Cycliste</th>
            <th style={{fontSize:20,color:"aqua"}}>Motoriste</th>
            <th style={{fontSize:20,color:"aqua"}}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{fontSize:20,color:"bisque"}} scope="row">Countages/Statistique</th>
            <td style={{fontSize:20,color:"red"}}> 0 </td>
            <td style={{fontSize:20,color:"red"}}> 0 </td>
            <td style={{fontSize:20,color:"red"}}> 0 </td>
            <td style={{fontSize:20,color:"red"}}> 0 </td>
          </tr>
        </tbody>
      </Table>
  );
  }
}
  

  





