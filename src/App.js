import './App.css';
import UserList from './pages/userlist/UserList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/newUser" component={NewUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
