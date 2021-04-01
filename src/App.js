import React, { Component } from 'react'
import "./App.css";
import UserMode from "./components/userMode";
import Logo from "./components/logo";
import Menu from './components/menu';

class App extends Component {
  
  state = {
    appMode: 'hello',
    divColor: "none"
  }
  
  handleModeChange = mode => {
    const cMode = {...this.state};
    cMode['appMode'] = mode;
    this.setState({ appMode: cMode});
  };
  
  handleClick = userMenu => {    
      this.setState({divColor: userMenu});
  };
  
  render() {
    //console.log(this.state.appMode);
    
    const { appMode, divColor } = this.state;
     
    return ( <main className="container">
    <div className="row">
      <div className="col-3">
        <Logo />
      </div>
      <div className="col user-mode">
        <UserMode onModeChange={this.handleModeChange}/>
      </div>        
    </div>
    <div className="menu-div">
      <Menu mode={ appMode } onhandleClick={this.handleClick} color={divColor}/>
    </div>        
  </main> );
  }
}
 
export default App;

