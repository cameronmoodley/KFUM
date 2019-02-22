import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
import Slide from './../../components/module-slide/module-slide';
import CourseDetail from './../../components/course-detail/course-detail';

class UpdatedCoursePage extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
  
    componentDidMount() {
    }


 //You should only make api calls in these pages   
  render() {
    return (
      <div>
        Oda creates a seperate form to post data to the server!!!
      </div>
    );
  }
}

export default UpdatedCoursePage;
