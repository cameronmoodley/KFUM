//This should display one of the slides from selected module

/* 
 * Recive slide information from parent and render.
 * Recive onClick method from parent to display slide in "powerpoint mode"
 * Should render a delete component
 * 
 * You should also have a option to edit this information
 */

import React from 'react';

class Slide extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            slide: {},
            method: this.props.function
        })
    }

    render(){
        return(
            <div className="Slide" onClick={ this.state.method }>
                <h2> { this.state.id } </h2>
                <p> { this.props.children } </p>
                <img src={ this.state.src } alt={ this.state.title } />
            </div>
        )
    }
}

export default Slide;