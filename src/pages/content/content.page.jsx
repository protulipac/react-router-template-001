import React from 'react';
import { Outlet } from 'react-router-dom';

//import './App.css';

class ContentPage extends React.Component {
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
        <Outlet />
        <h2>ContentPage</h2>
      </div>
    );
  }
}

export default ContentPage;


