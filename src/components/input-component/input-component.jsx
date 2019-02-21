import React from 'react';
class editInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    handleChange(){
        this.setState({
            text:
        })
    }

    render(){
        return(
            <input type="text" value={this.state.text} onChange={handleChange}/>
        );
    }
}




// class changeThisText = document.getElementById('changeThisText');
