import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contacts from './views/Contacts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Contacts /> </Route>
      </Switch>
    </Router>
  )
}

export default App;
