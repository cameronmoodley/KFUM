import React, { Component } from 'react';
import EditableText from './../editable-text/editable-text';

class CourseDetail extends Component {

  render() {
    return (
      <div>
        <div className="col-sm-12" style={{textAlign: "center"}}>
          <div className="courseDetail-section">
            <h2>Course Information</h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="courseDetail-section">
            <h3>Course ID: {this.props.course ? this.props.course.id : ""}</h3>
          </div>
          <div className="courseDetail-section">
            <h3>Course name:</h3>
            {this.props.course ? <EditableText style={{fontSize: "20px"}} update={this.props.update} type="courses" target={this.props.course} data="name">{this.props.course.name}</EditableText> : ""}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="courseDetail-section">
            <h3>Course description</h3>
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
