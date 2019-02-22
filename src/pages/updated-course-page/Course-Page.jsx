import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
import Slide from './../../components/module-slide/module-slide';

class UpdateCoursePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        courses: [],
        modules: [],
        slides: []
      }
      this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData("courses")
    this.getData("modules")
    this.getData("slides")
    // https://kfuk-kfum.herokuapp.com/courses
    // https://kfuk-kfum.herokuapp.com/modules
    // https://kfuk-kfum.herokuapp.com/slides
  }

  getData(type){
    fetch('https://kfuk-kfum.herokuapp.com/'+type)
    .then((response)=> {
      return response.json();
    })
    .then((result) => {
      if(type === 'courses'){
        this.setState({
          courses: result
        })
      }
      else if(type === 'modules'){
        this.setState({
          courses: result
        })
      }
      else{
        this.setState({
          courses: slides
        })
      }
    })
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
          <button onClick={this.addModule}>Add module</button>
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

export default UpdateCoursePage;
