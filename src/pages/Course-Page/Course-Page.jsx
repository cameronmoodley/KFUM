import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
import Slide from './../../components/module-slide/module-slide';
import CourseDetail from './../../components/course-detail/course-detail';
import ModuleDetail from './../../components/module-detail/module-detail';

class CoursePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        courses: [],
        modules: [],
        slides: [],
        activeModules: [],
        activeSlides: [],
        selectedCourse: 1,
        selectedModule: 1
      }

      this.getData = this.getData.bind(this);
      this.addData = this.addData.bind(this);
      this.test = this.test.bind(this);
      this.addModule = this.addModule.bind(this);
      this.addSlide = this.addSlide.bind(this);
      this.manageAPI = this.manageAPI.bind(this);
      this.update = this.update.bind(this);
      this.moduleClicked = this.moduleClicked.bind(this);
      this.updateData = this.updateData.bind(this);
      this.dataChange = this.dataChange.bind(this);
      this.deleteData = this.deleteData.bind(this);
      this.dataDelete = this.dataDelete.bind(this);
  }

  componentDidMount() {
    this.update("courses")
    .then(() => this.update("modules"))
    .then(() => this.update("slides"))
  }

  getData(type){
    return fetch('https://kfuk-kfum.herokuapp.com/' + type)
    .then((response) => {
        return response.json();
    })
  }

  update(type) {
    return this.getData(type)
      .then(result => this.manageAPI(type, result));
  }

  manageAPI(type, result) {
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
        
        const filteredModules = result.filter(module => module.courseID === this.state.selectedCourse);
        
        this.setState({
          activeModules: filteredModules
        })
      break;
      case "slides":
        this.setState({
          slides: result
        })

        const filteredSlides = result.filter(slide => slide.courseID === this.state.selectedCourse && slide.moduleID === this.state.selectedModule)

        this.setState({
          activeSlides: filteredSlides
        });

      break;

      default:
        console.log("Zug zug, something went wrong in fetch switch statement");
      break;
    }
  }

  addData(type) {
    let addJSON;

    switch(type) {
      case 'courses':
        addJSON = JSON.stringify({
          name: '',
          description: ''
        })
      break;

      case 'modules':
      addJSON = JSON.stringify({
        courseID: this.state.selectedCourse,
        name: '',
        description: ''
      })
      break;

      case 'slides':
      addJSON = JSON.stringify({
        courseID: this.state.selectedCourse,
        moduleID: this.state.selectedModule,
        title: '',
        content: ''
      })
      break;
      
      default:
      console.log('Error in POST function')
      break;
    }
    //Add new empty module or slide
    return fetch('https://kfuk-kfum.herokuapp.com/' + type, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: addJSON
    })
  }

  updateData(type, id, object) {
    console.log(type, id, object)
    return fetch('https://kfuk-kfum.herokuapp.com/' + type + "/" + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }, body: JSON.stringify(object)
    })
  }

  deleteData(type, id) {
    return fetch('https://kfuk-kfum.herokuapp.com/' + type + '/' + id, {
      method: 'delete'
    })
    .then(response =>
      console.log(response)
    );
  }

  moduleClicked(id) {
    this.setState({
      selectedModule: id
    });
    this.update("modules");
    this.update("slides");

    this.setState({
      mDetail: this.state.activeModules.filter(mod => mod.id === this.state.selectedModule)[0]
    });
  }

  dataChange(type, id, object) {
    this.updateData(type, id, object)
      .then(() => this.update(type))
  }

  addSlide() {
    this.addData("slides")
      .then(() => this.update("slides"))
  }


  addModule() {
    //Add new module
    this.addData("modules")
      .then(() => this.update("modules"))
      //TODO: Make new module active
  }

  dataDelete(type, id) {
    this.deleteData(type, id)
      .then(() => this.update(type))
  }

  test() {
    console.log("function check");
  }

 //You should only make api calls in these pages   
  render() {

    let cDetail = this.state.courses.filter(course => course.id === this.state.selectedCourse)[0];
    let mDetail = this.state.activeModules.filter(mod => mod.id === this.state.selectedModule)[0];

    return (
      <div>
        <div className="[ courseDetail ][ row ]">
          <CourseDetail course={cDetail} update={this.dataChange}/>
        </div>

        <div className="[ modules ][ row ]">
          {(this.state.activeModules.length !== 0) ? this.state.activeModules.map(i => <ModuleButton moduleClicked={this.moduleClicked} id={i.id} key={i.id}>{i.name}</ModuleButton>) : ""}
       </div>

        <div className="[ module-info ][ row ]">
          {<ModuleDetail module={mDetail} update={this.dataChange} delete={this.dataDelete} />}
        </div>
        
        <div className="[ slides ][ row ]">
          {/* Slide components with data from api will be added here*/}
          {(this.state.activeSlides.length !== 0) ? this.state.activeSlides.map(i => <Slide method={this.test} key={i.id} slide={i} update={this.dataChange} delete={this.dataDelete} />) : ""}
        </div>
        <button onClick={this.addModule}>Add module</button>
        <button onClick={this.addSlide}>Add Slide</button>
      </div>
    );
  }
}

export default CoursePage;
