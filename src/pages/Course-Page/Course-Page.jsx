import React, { Component } from 'react';
import CourseDetail from './../../components/course-detail/course-detail';

class CoursePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        courses: [],
        modules: [],
        slides: [],
        activeModule: "",
        activeSlide: "",
        activeCourse: ""
      }
      this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData("courses");
  }

  getData(type){
    fetch('https://kfuk-kfum.herokuapp.com/' + type)
    .then( (response) => {
        return response.json();
    })
    .then((result) => {
        console.log('result',result);
        this.setState({
            courses: result
        })
        console.log(this.state.courses[0].name)
    })
  }

  addData(type) {

  }

  updateData(type, id, content) {

  }

  deleteData(type, id) {

  }

 //You should only make api calls in these pages   
  render() {
    return (
      <div>
        <div className="[ courseDetail ][ row ]">
          <div className="[ col-md-6 ]">
            {/* Text components with course data from api will be added here */}
          </div>
          <div className="[ col-md-6 ]">
            {/* Text components with course data from api will be added here */}
          </div>
        </div>

        <div className="[ modules ][ row ]">
          {/* Module components with data from api will be added here */}
        </div>

        <div className="[ module-info ][ row ]">
          <div className="[ col-md-6 ]">
            {/* Text components with module data from api will be added here */}          
          </div>
          <div className="[ col-md-6 ]">
            {/* Text components with module data from api will be added here */}
          </div>
        </div>
        
        <div className="[ slides ][ row ]">
          {/* Slide components with data from api will be added here*/}

          {/* Trying to figure out how to map out all course names in API */}
          {(this.state.courses.length !== 0) ? this.state.courses.map(i => <p>{i.name}</p>) : ""}
        </div>
      </div>
    );
  }
}

export default CoursePage;
