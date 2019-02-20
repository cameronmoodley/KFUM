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
            method: this.props.method, // Function to run on button click
        })
    }

    render(){
        return(
            <div className="[ col-md-4 ]">
                <button className="[ modules--button ]" onClick={ this.state.method }>
                    { this.props.children }
                </button>
            </div>
        )
    }
}

export default ModuleButton;