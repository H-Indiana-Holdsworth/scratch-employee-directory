import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ConfirmEmail from './Components/Auth/ConfirmEmail';
import Header from './Components/Header/Header';
import { UserProvider } from './Context/UserContext';
import Auth from './Views/Auth/Auth';
import CreateProfile from './Views/CreateProfile/CreateProfile';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';

function App() {
  return (
    <div className="App">
      <UserProvider>
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
              <Profile />
            </Route>
            <Route exact path="/profile/create">
              <CreateProfile />
            </Route>
            <Route exact path="/profile/edit">
              <CreateProfile isEditing />
            </Route>
            <Route exact path="/confirm-email">
              <ConfirmEmail />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
