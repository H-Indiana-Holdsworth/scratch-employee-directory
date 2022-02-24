import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Components/Header/Header';
import Auth from './Views/Auth/Auth';
import CreateProfile from './Views/CreateProfile/CreateProfile';
import EditProfile from './Views/EditProfile/EditProfile';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/profile/create">
            <CreateProfile />
          </Route>
          <Route exact path="/profile/edit">
            <EditProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
