import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet } from 'grommet';
import { ToastProvider } from 'react-toast-notifications';
import SignUp from './components/SignUp';
import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

class App extends Component {
  // Initialize state
  state = { passwords: [] };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  };

  render() {
    const { passwords } = this.state;

    return (
      <Grommet theme={theme}>
        <ToastProvider>
          <div className="App">
            <SignUp />
            {/* Render the passwords if we have them */}
            {passwords.length ? (
              <div>
                <h1>5 Passwords.</h1>
                <ul className="passwords">
                  {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
                  {passwords.map((password, index) => (
                    <li key={index}>{password}</li>
                  ))}
                </ul>
                <button className="more" onClick={this.getPasswords}>
                  Get More
                </button>
              </div>
            ) : (
              // Render a helpful message otherwise
              <div>
                <h1>No passwords :(</h1>
                <button className="more" onClick={this.getPasswords}>
                  Try Again?
                </button>
              </div>
            )}
          </div>
        </ToastProvider>
      </Grommet>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(App);
