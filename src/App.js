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
import { 
  useSelector,
  connect
} from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

// Pages
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignUp/SignUp';
import Dashboard from './components/home/Dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetail/ProjectDetails';
import CreateProject from './components/projects/CreateProject';

// Components
import Navbar from './components/layout/Navbar';
import SplashScreen from './components/layout/splashscreen/SplashScreen'; 
import CopyRight from './components/layout/CopyRight';

const useStyles = makeStyles((theme) => ({
  app: {
    position: 'relative'
  },
  container: {
    height: '100vh',
    minHeight: 500
  },
  copyRight: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    position: 'absolute',
    bottom: 0
  }
}));

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <SplashScreen />;
  return children;
}

const App = (props) => {
  const classes = useStyles();
  const { ui } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.app}>
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
            {ui.copyRight ? (
              <div className={classes.copyRight}>
                <CopyRight />
              </div>
            ) : null}
          </AuthIsLoaded>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  ui: state.ui
});

export default connect(mapStateToProps, null)(App);
