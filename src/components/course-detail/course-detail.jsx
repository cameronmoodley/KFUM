import React, { Component } from 'react';
import EditableText from './../editable-text/editable-text';

class CourseDetail extends Component {

  render() {
    return (
        <div className="col-sm-12">
          id: {this.props.course ? this.props.course.id : ""} <br />
          name: {this.props.course ? <EditableText update={this.props.update} type="courses" target={this.props.course} data="name">{this.props.course.name}</EditableText> : ""}<br />
          description: {this.props.course ? <EditableText update={this.props.update} type="courses" target={this.props.course} data="description">{this.props.course.description}</EditableText> : ""}<br />
        </div>
    );
  }
}

export default CourseDetail;

//This should contain course information

/* 
 * Recive course information from parent and render this data.
 * 
 * Functinality of this section is to display course information from API.
 * You should also have a option to edit this information.
 * --- might not be dumb component ---
*/
