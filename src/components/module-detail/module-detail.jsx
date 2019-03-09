import React, { Component } from 'react';
import EditableText from './../editable-text/editable-text';

class ModuleDetail extends Component {
  
  render() {
    return (
        <div className="col-sm-12">
          id: {this.props.module ? this.props.module.id : ""} <br />
          name: {this.props.module ? <EditableText update={this.props.update} type="modules" target={this.props.module} data="name">{this.props.module.name}</EditableText> : ""}<br />
          description: {this.props.module ? <EditableText update={this.props.update} type="modules" target={this.props.module} data="description">{this.props.module.description}</EditableText> : ""}<br />
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
