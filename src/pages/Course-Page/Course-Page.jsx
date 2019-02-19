import React, { Component } from 'react';
import CourseDetail from './../../components/course-detail/course-detail';

class CoursePage extends Component {

  constructor(props){
      super(props)
       this.state = {
           posts: [],
       }
       
       this.getData = this.getData.bind(this);
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

 //You should only make api calls in these pages   
  render() {
    return (
        <div>
            Hello Oslo from your parent
            <CourseDetail></CourseDetail>
        </div>
    );
  }
}

export default CoursePage;