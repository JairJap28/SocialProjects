import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

// Pages
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';

// Components
import Navbar from './components/layout/Navbar';
import SplashScreen from './components/layout/splashscreen/SplashScreen'; 

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <SplashScreen />;
  return children;
}

function App() {
  return (
    <Router>
      <div className="App">
        <AuthIsLoaded>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/project/:id' component={ProjectDetails} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/create' component={CreateProject}/>
          </Switch>
        </AuthIsLoaded>
      </div>
    </Router>
  );
}

export default App;
