import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from "./navigation/navigation.component";
import Nestead from "./components/nestead/nestead.component";
//import './App.css';

export const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <Outlet />
    </div>
  )
}

export const AboutPage = () => {
  return (
    <div>
      <h2>AboutPage</h2>
      <Outlet />
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Routes>
          {/* <Route exact path='/' component={HomePage} /> */}
          <Route path='/' element={<Navigation />} >
            <Route index element={<HomePage />} >  {/* or index={true} */}
              {/* <Route path='nestead' element={<Nestead />} - ERROR/> 
               Index routes must not have child routes.
               */}
            </Route>
            <Route path='about' element={<AboutPage />} >
              <Route path='nestead' element={<Nestead />} />
              {/* /about/nestead */}
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;


