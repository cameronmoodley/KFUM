import React, { Component } from 'react';
import ModuleButton from './../../components/module-button/module-button';
import Slide from './../../components/module-slide/module-slide';
import CourseDetail from './../../components/course-detail/course-detail';

class UpdatedCoursePage extends Component {
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
      this.getData("courses");
      this.getData("modules");
      this.getData("slides");
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
            modules: result
          })
        }
        else{
          this.setState({
            slides: result
          })
        }
      })

    }
  


 //You should only make api calls in these pages   
  render() {
    const modules = this.state.modules;
    let displayModules = modules.map((v,i) => {
       return <CourseDetail 
          key={i}
          id={v.id}
          name={v.name}
          description={v.description}
        />
    })
    return (
      <div>
        <div className="[ courseDetail ][ row ]">
          <div className="[ col-md-6 ]">
            {/* Text components with course data from api will be added here */}
            {displayModules}
          </div>
          <div className="[ col-md-6 ]">
            {/* Text components with course data from api will be added here */}
          </div>
        </div>

        <div className="[ modules ][ row ]">
          {
            
          }
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

        </div>
      </div>
    );
  }
}

export default UpdatedCoursePage;
