import cover from './Images/cover2.jpg';
import catCover from './Images/catcover.jpeg';
import dogCover from './Images/dogcover.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dogs from './dogs';
import Cats from './cats.js';
import DogInfoDisplay from './DogInfoDisplay';

function App() {
  return (
    <Router>
      <Switch>

      <Route exact path="/dogs">
          <Dogs />
          </Route>
          <Route exact path="/cats">
            <Cats />
          </Route>

          <Route exact path={`/dog1`}>
          <Dogs />
          </Route>

          <Route exact path={`/dog2`}>
          <Dogs />
          </Route>

          <Route exact path={`/dog3`}>
          <Dogs />
          </Route>

          <Route exact path={`/dog4`}>
          <Dogs />
          </Route>

          <Route exact path={`/dog5`}>
          <Dogs />
          </Route>

          <Route exact path={`/dog6`}>
          <Dogs />
          </Route>

          <Route exact path={`/cat1`}>
          <Cats />
          </Route>

          <Route exact path={`/cat2`}>
          <Cats />
          </Route>

          <Route exact path={`/cat3`}>
          <Cats />
          </Route>

          <Route exact path={`/cat4`}>
          <Cats />
          </Route>

          <Route exact path={`/cat5`}>
          <Cats />
          </Route>

          <Route exact path={`/cat6`}>
          <Cats />
          </Route>

          <Route exact path="/" render={()=>{
            return(
              <>
              <div className="App">
      <header className="App-header">
        <img src={cover} className="cover" alt="logo" />

        <h1 className="title">
          WELCOME TO PETS WORLD
        </h1>
        <h2 style={{fontFamily:"Courier"}}>Find your loved pets here</h2>

        <div className="mark">
        <marquee className="flex0" direction="left" scrollamount="12">
              <div className="b">
                They reduce your stress
              </div>
              <div className="b">
               They help you become fit
              </div>
              <div className="b">
               They care for you
              </div>
              <div className="b">
               They build your confidence
              </div>
              <div className="b">
               They make you less lonely
              </div>
              </marquee>
              </div>

        <div className="flex2">
        <Link to="/dogs"> <div className="ele">
           <img src={dogCover} className="cover" alt="logo" />
          <h3>Explore dogs world</h3>
          </div></Link>
          <Link to="/cats"><div className="ele">
         <img src={catCover} className="cover" alt="logo" />
          <h3>Explore cats world</h3>
          </div></Link>
        </div>
        </header>
        </div>
        </>
            )
          }}>
    
        </Route>
          
          
        </Switch>
    </Router>
  );
}

export default App;
