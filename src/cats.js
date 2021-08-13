import React, {useEffect} from 'react'
import Ps from './Images/persian.jpeg';
import Mn from './Images/main-coon.jpeg';
import Ab from './Images/ab.jpeg';
import Sm from './Images/siamese.webp';
import hm from './Images/hc.jpg';
import short from './Images/short.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import CatInfoDisplay from './catInfoDisplay';

function Cats() {

    const change = false

  useEffect(() => {
    const el = document.querySelector(".flex1")
    // el.style.width = "70%"
    el.style.justifyContent = "center"
  }, [change])



  const handleClick = (id) => {
    document.querySelectorAll(".ele").forEach((e) => e.style.border = "2px solid rgb(52, 49, 243)")
    const node = document.getElementById(id)
    const parent = document.getElementById("parent")
    console.log(node, parent)
    node.style.border = "5px solid rgb(52, 49, 243)"
    parent.style.width = "75%"
    parent.style.justifyContent = "left"
  }
    return (
        <Router>

<Switch>
        <Route exact path={`/cat1`}>
          {/* change=!change */}
          <CatInfoDisplay sel={0} />
        </Route>

        <Route exact path={`/cat2`} render={() => {
          return (<>
            {/* change=!change */}
            <CatInfoDisplay sel={1} />
          </>
          )
        }}>
        </Route>


        <Route exact path={`/cat3`} render={() => {
          return (<>
            {/* change=!change */}
            <CatInfoDisplay sel={2} />
          </>
          )
        }}>
        </Route>

        <Route exact path={`/cat4`} render={() => {
          return (<>
            {/* change=!change */}
            <CatInfoDisplay sel={3} />
          </>
          )
        }}>
        </Route>

        <Route exact path={`/cat5`} render={() => {
          return (<>
            {/* change=!change */}
            <CatInfoDisplay sel={4} />
          </>
          )
        }}>
        </Route>

        <Route exact path={`/cat6`} render={() => {
          return (<>
            {/* change=!change */}
            <CatInfoDisplay sel={5} />
          </>
          )
        }}>
        </Route>
      </Switch>

             {window.scrollTo({top:0})}
            <div id="parent" className="flex1">

            <Link to="/cat1">  <div id="0" onClick={() => handleClick("0")}  className="ele">
          <img src={Ps} className="cover" alt="logo" />
          <h3>Persian</h3>
          </div> </Link>

          <Link to="/cat2"> <div id="1" onClick={() => handleClick("1")} className="ele">
           <img src={Mn} className="cover" alt="logo" />
          <h3>Main coon</h3>
          </div></Link>

          <Link to="/cat3"> <div id="2" onClick={() => handleClick("2")} className="ele">
          <img src={Ab} className="cover" alt="logo" />
          <h3>American bobtail</h3>
          </div></Link>

          <Link to="/cat4"><div id="3" onClick={() => handleClick("3")} className="ele">
          <img src={Sm} className="cover" alt="logo" />
          <h3>Siamese</h3>
          </div></Link>

          <Link to="/cat5"><div id="4" onClick={() => handleClick("4")} className="ele">
           <img src={hm} className="cover" alt="logo" />
          <h3>Himalayan cat</h3>
          </div></Link>

          <Link to="/cat6"><div id="5" onClick={() => handleClick("5")} className="ele">
          <img src={short} className="cover" alt="logo" />
          <h3>American shorthair</h3>
          </div></Link>

            </div>
            </Router>
    )
}

export default Cats
