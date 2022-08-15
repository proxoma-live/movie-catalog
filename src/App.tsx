import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

import "./App.css";
import ActorPage from "./pages/ActorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/page/:page" component={Home} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/people/:id" component={ActorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
