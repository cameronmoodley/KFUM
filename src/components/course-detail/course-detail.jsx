import React, { Component } from 'react';

class CourseDetail extends Component {
 //You should only make api calls in these pages   
  render() {
    return (
        <div>
          id: {this.props.id} <br />
          name: {this.props.name} <br />
          description: {this.props.description} <br />
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
