import React from 'react';

class AddModule extends React.Component{

    render(){
        
        return(
            <div className="col-sm-6">
                <div className="add-slide" onClick={this.props.method}>
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        )
    }
}

export default AddModule;