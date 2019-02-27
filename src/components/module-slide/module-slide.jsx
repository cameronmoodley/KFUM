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
            //slide: this.props.slide,
            method: this.props.method
        })
    }

    render(){
        return(
            <div className="[ col-sm-6 ]">
                <div className="[ slides--element ]" onClick={ this.state.method }>
                    <h2 className="[ slides--element__title ]"> { this.props.slide.title } </h2>
                    <img className="[ slides--element__img ]" src="https://www.ceas-serbia.org/images/people/vladimir_putin.jpg" alt={ this.props.slide.title } />
                </div>
            </div>
        )
    }
}

export default Slide;