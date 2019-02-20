//This is the round button you click when you select a course module

/* 
 * You need to render a button
 * Recive a method from parent component that should run on click.
 * Recive a text from parent component that should be displayed by the button.
 * 
 * Functinality of this button will be to display the module selected further down on the page and scroll you down to this section
*/

import React from 'react';

class ModuleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            moduleName: this.props.name, // Name of the module displayed on button
            method: this.props.method, // Function to run on button click
        })
    }

    render(){
        return(
            <button className="ModuleBtn" onClick={ this.state.method }>
                { this.state.moduleName }
            </button>
        )
    }
}

export default ModuleButton;