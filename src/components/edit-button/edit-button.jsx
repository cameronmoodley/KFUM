import React from 'react';

class editButton extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            method:this.props.method
        })
    }
 






    render(){
        <div className="[ col-md-4 ]">
                <button style={editButtonStyle} className="[ modules--button__edit ][ fal fa-pencil-alt ]" onClick={ this.state.method }>
                    { this.props.children }
                </button>
            </div>
    }

}
export default editButton;