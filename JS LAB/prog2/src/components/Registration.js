import React from 'react';

class Registration extends React.Component {

    constructor(props){
        super(props);
    
        this.state={
          name:"",
          age:"",
          qualification:"",
          marks:"",
          aboutyourself:""
        }
    
    
      }
     changehandler=(event,id)=>{
        let data=event.target.value;
    
        this.setState(()=>({
          [`${id}`]: data
        }))
      }
    
     
    
      render(){
        return(
          <React.Fragment>
            <div>
              ENTER NAME HERE
              <input type="text" value={this.state.name} onChange={(event)=>{this.changehandler(event,"name")}}></input>
              </div>
              
              <div>
              ENTER Age
              <input type="text" value={this.state.age} onChange={(event)=>{this.changehandler(event,"age")}}></input>
              </div>
              <div>
              ENTER Qualification
              <input type="text" value={this.state.qualification} onChange={(event)=>{this.changehandler(event,"qualification")}}></input>
              </div>
            <div>
              {JSON.stringify(this.state)}
            </div>
            </React.Fragment>
    
        );
      }
    }


export default Registration;