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
            <h4>Module ID: {this.props.module ? this.props.module.id : ""}</h4>
          </div>
          <div className="moduleDetail-section">
            <h4>Module name:</h4>
            {this.props.module ? <EditableText update={this.props.update} type="modules" target={this.props.module} data="name">{this.props.module.name}</EditableText> : ""}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="moduleDetail-section">
            <h4>Module description</h4>
            {this.props.module ? <EditableText update={this.props.update} type="modules" target={this.props.module} data="description">{this.props.module.description}</EditableText> : ""}
          </div>
          <div className="moduleDetail-section">
            <span onClick={this.deleteModule} className="module-element-delete">Delete Module <i className="fas fa-trash-alt"></i></span>
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
