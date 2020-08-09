import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// MUI Stuff
import {
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

// Redux
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

// Pages
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignUp/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';

// Components
import Navbar from './components/layout/Navbar';
import SplashScreen from './components/layout/splashscreen/SplashScreen'; 

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 75,
  },
}));

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <SplashScreen />;
  return children;
}

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <AuthIsLoaded>
            <Navbar />
            <div className={classes.container}>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/project/:id' component={ProjectDetails} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/create' component={CreateProject} />
              </Switch>
            </div>
          </AuthIsLoaded>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
