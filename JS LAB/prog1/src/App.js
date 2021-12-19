import React from 'react';

import Personal  from './components/Personal.js';
import Qualification from './components/Qualification.js';
class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      name:"Ansh",
      address:"RV College of Engineering",
      qualifications:[
        {
          SNo:1,
          College:"RVCE",
          Degree: "MCA",
          Marks:"8"
        },

        {
          SNo:2,
          College:"AU",
          Degree: "BCA",
          Marks:"8.48"
        },
        {
          SNo:3,
          College:"PU",
          Degree: "ST josephs college",
          Marks:"8.48"
        }
      ]
    };
  }

  
  render(){
    return(
        <React.Fragment>
        <Personal name={this.state.name}></Personal>
        <Qualification qualifications={this.state.qualifications}></Qualification>
        </React.Fragment>
    
    );
  }

}
export default App;
