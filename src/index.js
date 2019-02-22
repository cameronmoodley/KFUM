import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import CoursePage from './pages/Course-Page/Course-Page';
import UpdateCoursePage from './pages/updated-course-page/Course-Page'

ReactDOM.render(
    <Router>
        <App>
            <Route path="/" exact component={UpdatedCoursePage} />
        </App>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
