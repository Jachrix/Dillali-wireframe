import React, { Component } from "react";

class UserMode extends Component {
    
    render() {
        const modes = ["App Mode", "Admin Mode"];
        
        return (
            <React.Fragment>
                {modes.map(mode => (
                    <div key={mode} className="form-check">
                        <input id={mode} className="form-check-input" type="radio" name="flexRadioDefault"/>
                        <label htmlFor={mode} onClick={() => this.props.onModeChange(mode)} className="form-check-label">{mode}</label>
                    </div>
                ))}                
            </React.Fragment>
        );
    }
}

export default UserMode;