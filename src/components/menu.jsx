import React, { Component } from 'react';
import "../App.css";

class Menu extends Component {
    render() {
        const { appMode } = this.props.mode;
        
        const userMenus = ['Entry1', 'Entry2', 'Entry3', 'Entry4', 'Entry5'];
        
        const adminMenus = [ 'AdminEntry1', 'AdminEntry2', 'AdminEntry3'];
        
        const switchMode = (appMode === "App Mode") ? userMenus : adminMenus; 
        
        const switchColor = (appMode === "App Mode") ?  "gray" :  "white";     
         
        
        //console.log(switchMode);

        return (
            <React.Fragment>
                <div style={{  marginTop: "10px", backgroundColor: switchColor}} className="pDiv">
                    {switchMode.map(userMenu => (
                        
                        <div 
                            key={userMenu}
                            onClick={() => this.props.onhandleClick(userMenu)} 
                            className="col-6 p-3 border menu" 
                            style={{marginLeft: "85px", textAlign: "center", cursor: "pointer", backgroundColor:
                                    this.props.color === userMenu ? "grey": "white"}}>
                            {userMenu}
                        </div>
                        
                    ))}
                </div> 
            </React.Fragment>
        );
    }
}

export default Menu;