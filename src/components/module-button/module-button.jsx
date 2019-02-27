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
            name: '',
            content: '',
            editable: false,
            value: '',
            method: this.props.method, // Function to run on button click
            style: {
                width: '150px',
                height: '50px',
                backgroundColor: 'lightgrey'
            }
        })
        this.onClick = this.onClick.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onClick(){
        this.setState({
            editable: true
        })
    }

    saveChanges(){
        this.setState({
            editable: false,
            name: this.state.name,
            content: this.state.value
        })
        // Send data to parent function
        let Myfunction = this.props.method;
        let name = this.state.name
        let info = this.state.value
        Myfunction('modules', this.props.id, name, info)
    }
    

    handleChange(event){
        if( event.target.name === 'content' ){
            this.setState({
                value: event.target.value
            })
        } else{
            this.setState({
                name: event.target.value
            })
        }
    }

    render(){
        if( this.state.editable === true ){
            return(
                <div>
                    <input type="text" name="name" value={ this.state.name } placeholder="Module Name" onChange={ this.handleChange } />,
                    <input type="text" name="content" value={ this.state.value } placeholder="Module Description" onChange={ this.handleChange } />,
                    <button onClick={ this.saveChanges }> Save </button>
                </div>
            )
        } else{
            return (
                <div>
                    <p className="[ modules--button ]" style={ this.state.style } >{this.state.name}: { this.state.content }</p>
                    <button onClick={ this.onClick } > Edit </button>
                </div>
            )
        }
    }
}

export default ModuleButton;

