import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./navigation/navigation.component";
import Nestead from "./components/nestead/nestead.component";
import HomePage from "./pages/home/home.page"; //import of default exports
import { AboutPage } from "./pages/about/about.page"; //import of nondefault exports
import ContentPage from "./pages/content/content.page"; 

//import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
      console.log('UUIDv4: ', uuidv4()); //UUID TEST
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
            <Route path='content' element={<ContentPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;


