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

    handleSubmit(event){
        this.state.value;
    }

    render(){
        return(
            <div>
            <input className ="[ inputName ]" type="text" value={this.state.input} onChange={this.handleChange}/>
            <button className="[ changeThisTextButton ]" onClick={this.handleChange}/>
            <button className="[ changeThisTextSubmit ]" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

export default EditInput;



// class changeThisText = document.getElementById('changeThisTextButton');
