import React from 'react';
import { connect } from 'react-redux';
import { Grommet, Box } from 'grommet';
import { ToastProvider } from 'react-toast-notifications';
import SignUp from './components/SignUp';
import constants from './constants';


const App = () => {
  return (
    <ToastProvider>
      <Grommet theme={constants.theme} full>
        <Box fill>
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align="center" justify="center">
              <SignUp />
            </Box>
          </Box>
        </Box>
      </Grommet>
    </ToastProvider>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(App);
