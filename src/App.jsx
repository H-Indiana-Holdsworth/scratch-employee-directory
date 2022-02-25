import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ConfirmEmail from './Components/Auth/ConfirmEmail';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Auth from './Views/Auth/Auth';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';
import ViewProfile from './Views/Profile/ViewProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth isSigningUp />
          </Route>
          <PrivateRoute exact path="/profile">
            <ViewProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/create">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/edit">
            <Profile isEditing />
          </PrivateRoute>
          <Route exact path="/confirm-email">
            <ConfirmEmail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
