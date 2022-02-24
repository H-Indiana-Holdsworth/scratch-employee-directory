import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Components/Header/Header';
import Auth from './Views/Auth/Auth';
import Home from './Views/Home/Home';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
