import React, { Component } from 'react';
import EditableText from './../editable-text/editable-text';

class ModuleDetail extends Component {
  constructor(props) {
    super(props);

    this.deleteModule = this.deleteModule.bind(this);
  }

  deleteModule() {
    this.props.delete("modules", this.props.module.id);
  }
  
  render() {
    return (
      <div>
        <div className="col-sm-6">
          <div className="moduleDetail-section">
            <h3>Module ID: {this.props.module ? this.props.module.id : ""}</h3>
          </div>
          <div className="moduleDetail-section">
            <h3>Module name:</h3>
            {this.props.module ? <EditableText update={this.props.update} type="modules" target={this.props.module} data="name">{this.props.module.name}</EditableText> : ""}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="moduleDetail-section">
            <h3>Module description</h3>
            {this.props.module ? <EditableText update={this.props.update} type="modules" target={this.props.module} data="description">{this.props.module.description}</EditableText> : ""}
            <button onClick={this.deleteModule}>Delete Module</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModuleDetail;

//This should contain course information

/* 
 * Recive course information from parent and render this data.
 * 
 * Functinality of this section is to display course information from API.
 * You should also have a option to edit this information.
 * --- might not be dumb component ---
*/
