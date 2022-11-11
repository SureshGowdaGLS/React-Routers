import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/myapps" element={<Navigate replace to="/learn" /> }/>
      <Route path="/learn" element={<Learn /> }/>
      <Route path="/learn/courses" element={<Courses />} > 
      <Route path=":courseid" element={<CourseId />}/>
      </Route>
      <Route path="/learn/bundles" element={<Bundles />}> 
      </Route>
    </Routes>
  </Router>
);

function Home(){
  return (
    <div>
      <h1> Home Route </h1>
    </div>
  );
}
function Learn(){
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses Are Listed Here</h4>
      <Link className="btn btn-success" to="/learn/courses">Courses</Link> {" "} |
      <Link className="btn btn-primary" to="/learn/bundles">Bundle</Link>
      <Outlet />
    </div>
  );
}

function Courses(){
  const courseList = ["React","Angular","vue","NodeJS"]
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>

    <p>More Test</p>
    <NavLink 
    style={({isActive}) => {
    return {
      backgroundColor: isActive ? "pink" : "yellow"
    };
  }}
    to={'/learn/courses/randomCourseName'}>{randomCourseName}</NavLink>
    <NavLink className="btn btn-light" to={'/learn/courses/tests'}>Tests</NavLink>

      <Outlet />
    </div>
  );
}

function Bundles(){
  return (
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}
function CourseId(){
  const {courseid} = useParams()
  return (
    <div>
      <h1>URL params is :{courseid}</h1>
      <button className='btn btn-warning'>Price</button>
    </div>
  );
}

reportWebVitals();
