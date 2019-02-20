import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
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
        activeCourse: 0
      }
      this.getData = this.getData.bind(this);
      this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.getData("courses");
    this.getData("modules");
    this.getData("slides");
  }

  getData(type){
    fetch('https://kfuk-kfum.herokuapp.com/' + type)
    .then( (response) => {
        return response.json();
    })
    .then((result) => {
        console.log('result',result);
        switch(type) {
          case "courses":
            this.setState({
              courses: result
            })
          break;

          case "modules":
            this.setState({
              modules: result
            })
          break;

          case "slides":
            this.setState({
              slides: result
            })
          break;

          default:
           console.log("Zug zug, something went wrong in fetch switch statement")
        }
    })
  }

  addData(type) {

  }

  updateData(type, id, content) {

  }

  deleteData(type, id) {

  }

  test() {
    console.log("function check");
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
          {(this.state.modules.length !== 0) ? this.state.modules.map(i => <ModuleButton method={this.test} key={i.moduleID}>{i.name}</ModuleButton>) : ""}
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
