import React from 'react';
import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//import './App.css';

class ContentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {
          id: 1,
          first: "Mick",
          last: "Jagger"
        },
        {
          id: 2,
          first: "John",
          last: "Lennon"
        },
      ],
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      persons: [...prevState.persons, { id: 3, first: "Tina", last: "Turner"}]
    }))

    this.setState(prevState => ({
      persons: [...prevState.persons, { id: 4, first: "Annie", last: "Lennox"}]
    }))

    //OR SOMETHING WRONG - THIRD ENTRY WAS LOST
    // this.setState({
    //   persons: [...this.state.persons, { id: 3, first: "Tina", last: "Turner"}]
    // })

    // this.setState({
    //   persons: [...this.state.persons, { id: 4, first: "Annie", last: "Lennox"}]
    // })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Outlet />
        <h2>ContentPage</h2>
        <table>
          <tbody>
            { this.state.persons.map((person) => 
              <tr key={uuidv4()}>
                <td>{person.id}</td>
                <td>{person.first}</td>
                <td>{person.last}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContentPage;


