//This should display one of the slides from selected module

/* 
 * Recive slide information from parent and render.
 * Recive onClick method from parent to display slide in "powerpoint mode"
 * Should render a delete component
 * 
 * You should also have a option to edit this information
 */

import React from 'react';
import EditableText from './../editable-text/editable-text';

class Slide extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            //slide: this.props.slide,
            method: this.props.method
        })
        this.deleteSlide = this.deleteSlide.bind(this);
    }

    deleteSlide() {
        this.props.delete("slides", this.props.slide.id);
    }

    render(){
        return(
            <div className="col-sm-6 slide">
                <span onClick={this.deleteSlide} className="slides--element__delete"><i class="fas fa-trash-alt"></i></span>
                <div className="slides--element">
                    <div className="slides--text">
                        <EditableText style={{fontSize: "2rem", fontWeight: "bold"}} update={this.props.update} type="slides" target={this.props.slide} data="title">{this.props.slide.title}</EditableText>
                    </div>
                    <div className="slides--img">
                        <img className="slides--element__img" src="https://s-media-cache-ak0.pinimg.com/736x/c4/d4/82/c4d482a830bc0580f42d3b6fd26a034a--colour-palettes-scenery.jpg" alt={ this.props.slide.title } />
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide;