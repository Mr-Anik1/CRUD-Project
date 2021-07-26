import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Create from './components/Create/Create';
import Delete from './components/Delete/Delete';
import Edit from './components/Edit/Edit';
import Home from "./components/Home/Home";
import Read from './components/Read/Read';
import MyProvider from './components/UserContex/UserContext';

function App() {
  return (
    <div className="app">
      {/* UserContext er MyProvider Function dara wrap kore dichi */}
      <MyProvider>

        <Router>
          <Switch>
          
          <Route path='/edit/:id'>
             <Edit/>
           </Route>
           
          <Route path='/read/:id'>
             <Read/>
          </Route>

          <Route path='/delete/:id'>
             <Delete/>
          </Route>
           
          <Route path='/create/'>
             <Create/>
          </Route>

          <Route path='/'>
             <Home/>
          </Route>

          </Switch>
        </Router>

      </MyProvider>
     
    </div>
  );
}

export default App;
