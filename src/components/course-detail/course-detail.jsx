import React, { Component } from 'react';
import EditableText from './../editable-text/editable-text';

class CourseDetail extends Component {

  render() {
    return (
      <div>
        <div className="col-sm-6">
          <div className="courseDetail-section">
            <h4>Course ID: {this.props.course ? this.props.course.id : ""}</h4>
          </div>
          <div className="courseDetail-section">
            <h4>Course name:</h4>
            {this.props.course ? <EditableText style={{fontSize: "20px"}} update={this.props.update} type="courses" target={this.props.course} data="name">{this.props.course.name}</EditableText> : ""}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="courseDetail-section">
            <h4>Course description</h4>
            {this.props.course ? <EditableText style={{fontSize: "20px"}} update={this.props.update} type="courses" target={this.props.course} data="description">{this.props.course.description}</EditableText> : ""}
          </div>
        </div>
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
