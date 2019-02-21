import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
import Slide from './../../components/module-slide/module-slide';

class CoursePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        courses: [],
        modules: [],
        slides: [],
        activeModules: [],
        activeSlides: [],
        selectedCourse: 0,
        selectedModule: 0
      }
      this.getData = this.getData.bind(this);
      this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.getData("courses")
    this.getData("modules")
    this.getData("slides")
  }

  getData(type){
    fetch('https://kfuk-kfum.herokuapp.com/' + type)
    .then( (response) => {
        return response.json();
    })
    .then((result) => {
        console.log(type,result);
        switch(type) {
          case "courses":
            this.setState({
              courses: result
            })
          break;

          case "modules":
            this.setState({
              modules: result
            });

            this.setState({
              activeModule: []
            })
            for(let i = 0; i < result.length; i++) {
                if(result[i].courseID === this.state.selectedCourse) {
                  this.state.activeModules.push(result[i]);
                }
            }
          break;

          case "slides":
            this.setState({
              slides: result
            })

            this.setState({
              activeSlides: []
            })
            for(let i = 0; i < result.length; i++) {
              if(result[i].courseID === this.state.selectedCourse && result[i].moduleID === this.state.selectedModule) {
                this.state.activeSlides.push(result[i]);
              }
            }
          break;

          default:
           console.log("Zug zug, something went wrong in fetch switch statement")
        }
    })
  }

  addData(type) {
    //Add new empty module or slide
  }

  updateData(type, id, content) {
    //Update data on module or slide
  }

  deleteData(type, id) {
    //Delete a module or slide
    //If module is deleted all related slides should also be deleted.
  }

  moduleClicked() {
    //Do whatever when a module is selected
    //Show related slides
  }

  slideClicked() {
    //Do whatever when a slide is clicked
    //Go into slide?
    //Select slide?
  }

  editIcon() {
    //Change related text to input field
  }

  deleteIcon() {
    //Delete related field
  }

  addElement() {
    //Add new module or slide.
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
          {/* Module components with data from api will be added here */}
          {(this.state.activeModules.length !== 0) ? this.state.activeModules.map(i => <ModuleButton method={this.test} key={i.moduleID}>{i.name}</ModuleButton>) : ""}
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
          {(this.state.activeSlides.length !== 0) ? this.state.activeSlides.map(i => <Slide method={this.test} key={i.slideID} slide={i} />) : ""}
        </div>
      </div>
    );
  }
}

export default CoursePage;
