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
        selectedCourse: 1,
        selectedModule: 0
      }
      this.getData = this.getData.bind(this);
      this.addData = this.addData.bind(this);
      this.test = this.test.bind(this);
      this.addModule = this.addModule.bind(this);
      this.manageAPI = this.manageAPI.bind(this);
      this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update("courses")
    this.update("modules")
    this.update("slides")
  }

  getData(type){
    return fetch('https://kfuk-kfum.herokuapp.com/' + type)
    .then((response) => {
        return response.json();
    })
  }

  update(type) {
    this.getData(type)
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

  updateData(type, id, name, content) {
    //Update data on module or slide
    console.log(<ModuleButton />)
    return fetch('https://kfuk-kfum.herokuapp.com/' + type + "/" + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }, body: JSON.stringify({
            // Recieves data from child
            courseID: id,
            name: name,
            description: content 
        })
    })
  }

  deleteData(type, id) {
    //Delete a module or slide
    //If module is deleted all related slides should also be deleted.
    return fetch('https://kfuk-kfum.herokuapp.com/' + type + '/' + id, {
      method: 'delete'
    })
    .then(response =>
      // Define what should be returned, if any
      console.log('Removed module / slide')
    );
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

  editClicked() {
    //Change related text to input field
  }

  deleteClicked() {
    //Delete related field
  }

  addSlide() {
    this.addData("slides")
      .then(() => this.update("slides"))
  }


  addModule() {
    //Add new module
    this.addData("modules")
      .then(() => this.update("modules"));
  }

  test() {
    console.log("function check");
  }

 //You should only make api calls in these pages   
  render() {
    return (
      <div>
        <div className="[ courseDetail ][ row ]">
          <div className="[ col-sm-6 ]">
            {/* Text components with course data from api will be added here */}
          </div>
          <div className="[ col-sm-6 ]">
            {/* Text components with course data from api will be added here */}
          </div>
        </div>

        <div className="[ modules ][ row ]">
          {/* Module components with data from api will be added here */}
          {(this.state.activeModules.length !== 0) ? this.state.activeModules.map(i => <ModuleButton method={this.updateData} id={i.id} key={i.id}>{i.name}</ModuleButton>) : ""}
       </div>
       <button onClick={this.addModule}>Add module</button>

        <div className="[ module-info ][ row ]">
          <div className="[ col-sm-6 ]">
            {/* Text components with module data from api will be added here */}          
          </div>
          <div className="[ col-sm-6 ]">
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
