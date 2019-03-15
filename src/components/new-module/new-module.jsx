import React from 'react';

class AddModule extends React.Component{

    render(){
        
        return(
            <div className="col-sm-4">
                <div className="add-module" onClick={this.props.method}>
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        )
    }
}

export default AddModule;