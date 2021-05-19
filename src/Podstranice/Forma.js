import '../App.css';
import React, { Component } from 'react';


export class Forma extends Component{
state={
  Title: "",
  Description: "",
  Code: ""
}
onSubmit=e=>{e.preventDefault(); window.alert("Post submitted! It will be posted in 7 days!");}
render(){
return (
    <div>
      <div className="Forma">
        <h1>Create a post!</h1>
          <form>
              <input placeholder="Title" value={this.state.Title} onChange={e=>this.setState({Title: e.target.value})}></input><br/><br/>
              <textarea placeholder="Description" value={this.state.Description} onChange={e=>this.setState({Description: e.target.value})} className="description"></textarea><br/><br/>
              <textarea placeholder="Code" value={this.state.Code} onChange={e=>this.setState({Code: e.target.value})} className="code"></textarea><br/><br/>
              <button className="botun" onClick={e=>this.onSubmit(e)}>SUBMIT</button>
          </form>
      </div>

      <div className="Forma2">
              <h1>{this.state.Title}</h1>
              <h2>{this.state.Description}</h2>
              <h4><textarea value={this.state.Code} className="code"></textarea></h4>
      </div>
    </div>
  );
}
}

export default Forma;