import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details/Details";
import Header from "./Components/Header/Header"

import Food from "./Components/Foods/Food";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Food></Food>
          </Route>
          <Route path="/details/:foodId">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Food></Food>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route>
            <img
              className="w-75"
              src="https://previews.123rf.com/images/artinspiring/artinspiring1809/artinspiring180900980/109808287-oops-404-error-page-not-found-concept-flat-vector-illustration-of-internet-connection-problem-with-l.jpg"
              alt=""
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
