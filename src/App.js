import Header from './components/Header';
import Footer from './components/Footer';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
//import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/ALLMoviesFetch';
//import SingleMovie from './components/SingleMovie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
        <div>
          <Header/>
          <Routes>
              <Route exact path="/">
                <SliderImages/>
                <CardsSlider/>
                <Premieres/>
              </Route>
              <Route exact path="/movies">
                <AllMoviesFetch />
              </Route>
              <Route exact path="/movies/:movid">
                <SingleMovieFetch />
              </Route>
              <Route exact path="/register">
                <Registration />
              </Route>
          </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;