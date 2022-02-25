import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ConfirmEmail from './Components/Auth/ConfirmEmail';
import Header from './Components/Header/Header';
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
          <Route exact path="/profile">
            <ViewProfile />
          </Route>
          <Route exact path="/profile/create">
            <Profile />
          </Route>
          <Route exact path="/profile/edit">
            <Profile isEditing />
          </Route>
          <Route exact path="/confirm-email">
            <ConfirmEmail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
