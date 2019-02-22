import React from 'react';
class EditInput extends React.Component{
    constructor(props){
        super(props);
        this.state = ({input:''});
        
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            input:event.target.value
        });
    }

    render(){
        return(
            <div>
            <input className ="[ inputName ]" type="text" value={this.state.input} onChange={this.handleChange}>Name</input>
            <button className="[ changeThisTextButton ]" onClick={this.handleChange}>Edit</button>
            </div>
        );
    }
}

export default EditInput;



// class changeThisText = document.getElementById('changeThisTextButton');
