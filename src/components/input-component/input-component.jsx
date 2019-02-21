import React from 'react';
class editInput extends React.Component{
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
            <input className ="[ inputName ]" type="text" value={this.state.input} onChange={handleChange}/>
            <button className="[ changeThisTextButton ]" onClick={this.handleChange}/>
            <button className="" onClick={this.handleSubmit}/>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);




// class changeThisText = document.getElementById('changeThisTextButton');
