
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fetching_Tsx from "./Ts_Files/Fetching_Tsx";//importing typescript extension based page
import App from "./App";
import Page3 from "./Js_Files/Page3";//importing javascript extention based page

function Useapp() {
  return (<Router>

          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/page2' component={Fetching_Tsx} />
            <Route path='/page3' component={Page3} />
            
          </Switch>
    </Router>
    
  );
}

export default Useapp;