import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
import Slide from './../../components/module-slide/module-slide';
import CourseDetail from './../../components/course-detail/course-detail';

class UpdatedCoursePage extends Component {
    constructor(props){
        super(props)
        this.state = {
          name:'',
          date:'',
          location:'',
          description:''
        }
        this.submitButton = this.submitButton.bind(this)
    }
  
    componentDidMount() {
    }

  submitButton(event){
    console.log(event.target)
      this.setState({
        name: ""
      }).value;
      event.preventDefault();
  }

 //You should only make api calls in these pages   
  render() {
    return (
      <div>
          <form action="" onSubmit={this.submitButton}>
            Name :
            <input type="text" name="name" value="Name"/>
            <br/>
            Date :
            <input type="text" name="date" value="Date"/>
            <br/>
            Location :
            <input type="text" name="location" value="Location"/>
            <br/>
            Description:<br/>
            <textarea name="infoData" name='description' rows='10' cols='30' value="Information"/>
            <br/><br/>
            <input type="submit" value="Save" onClick=''/>
        </form> 
      </div>
    );
  }
}

export default UpdatedCoursePage;
