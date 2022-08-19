import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListMovies from "./pages/ListMovies";
import Actor from "./pages/Actor";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={ListMovies} exact />
            <Route path="/page/:page" component={ListMovies} exact />
            <Route path="/movie/:id" component={Movie} exact />
            <Route path="/people/:id" component={Actor} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
