import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import Form from './components/FormComponent/Form';
import DashboardPage from './Pages/DashboardPage';
import UserDetailsPage from './Pages/UserDetailsPage';
import UsersPage from './Pages/UsersPage';

function App() {
  return (
    <div className="App">
      <>

      <BrowserRouter>

        <Switch>
          <Route path="/" exact component={Form}/>
          <Route path="/dashboard" exact component={DashboardPage}/>
          <Route path="/users" exact component={UsersPage}/>
          <Route path="/userdetails" exact component={UserDetailsPage}/>
        </Switch>
      </BrowserRouter>
      </>
      {/* <Form /> */}
      
    </div>
  );
}

export default App;
