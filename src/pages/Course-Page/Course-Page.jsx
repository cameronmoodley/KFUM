import React, { Component } from 'react';
import CourseDetail from './../../components/course-detail/course-detail';

class CoursePage extends Component {

  constructor(props){
      super(props)
       this.state = {
           posts: [],
           moduleName: "",
           slides: []
       }
       this.getData = this.getData.bind(this);
       this.getSlides = this.getSlides.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData(){
    fetch('https://kfum-kfuk.herokuapp.com/posts')
    .then( (response) => {
        return response.json();
    })
    .then((result) => {
        console.log('result',result);
        this.setState({
            posts: result
        })
    })
  }

 /*
  getSlides() {
    fetch('https://kfum-kfuk.herokuapp.com/ ' + this.moduleName + ' /slides')
    .then( (response) => {
        return response.json();
    })
    .then((result) => {
        console.log('slides',result);
        this.setState({
          slides: result
        })
    })
  }
  slideContent() {
    const withoutRows = this.state.slides.map(i => <div className="col-md-6"><ModuleSlide>{i}</ModuleSlide></div>);
  }*/

 //You should only make api calls in these pages   
  render() {
    return (
      <div>
        <div className="[ courseDetail ][ row ]">
          <div className="[ col-12 ]">
            <CourseDetail></CourseDetail>
          </div>
        </div>

        <div className="[ modules ][ row ]">
        </div>

        <div className="[ slides ]">
          {/*slideContent()*/}
        </div>
      </div>
    );
  }
}

export default CoursePage;
