import React from "react";

export class Content extends React.Component{
    render(){
        return (
    <div className="App">
        <h4>Hello</h4>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
    );
  }
}