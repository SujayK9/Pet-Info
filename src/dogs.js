import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './dogsInfo.css';
import Pom from './Images/Pomeranian.jpg';
import IndianS from './Images/indianS.jpg';
import Gs from './Images/GS.jpg';
import Pug from './Images/pug.jpeg';
import Ld from './Images/ld.jpeg';
import bull from './Images/bull.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DogInfoDisplay from './DogInfoDisplay';

function Dogs() {
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
        <Route exact path={`/dog1`}>
          {/* change=!change */}
          <DogInfoDisplay sel={0} />
        </Route>

        <Route exact path={`/dog2`} render={() => {
          return (<>
            {/* change=!change */}
            <DogInfoDisplay sel={1} />
          </>
          )
        }}>
        </Route>


        <Route exact path={`/dog3`} render={() => {
          return (<>
            {/* change=!change */}
            <DogInfoDisplay sel={2} />
          </>
          )
        }}>
        </Route>

        <Route exact path={`/dog4`} render={() => {
          return (<>
            {/* change=!change */}
            <DogInfoDisplay sel={3} />
          </>
          )
        }}>
        </Route>

        <Route exact path={`/dog5`} render={() => {
          return (<>
            {/* change=!change */}
            <DogInfoDisplay sel={4} />
          </>
          )
        }}>
        </Route>

        <Route exact path={`/dog6`} render={() => {
          return (<>
            {/* change=!change */}
            <DogInfoDisplay sel={5} />
          </>
          )
        }}>
        </Route>
      </Switch>

      {window.scrollTo({ top: 0 })}
      <div id="parent" className="flex1">

        <Link to="/dog1"><div id="0" onClick={() => handleClick("0")} className="ele">
          <img src={IndianS} className="cover" alt="logo" />
          <h3>Indian Spitz</h3>
        </div></Link>

        <Link to="/dog2"><div id="1" onClick={() => handleClick("1")} className="ele">
          <img src={Pom} className="cover" alt="logo" />
          <h3>Pomeranian</h3>
        </div></Link>

        <Link to="/dog3"> <div id="2" onClick={() => handleClick("2")} className="ele">
          <img src={Gs} className="cover" alt="logo" />
          <h3>German Shepherd</h3>
        </div></Link>

        <Link to="/dog4"><div id="3" onClick={() => handleClick("3")} className="ele">
          <img src={Pug} className="cover" alt="logo" />
          <h3>Pug</h3>
        </div></Link>

        <Link to="/dog5"> <div id="4" onClick={() => handleClick("4")} className="ele">
          <img src={Ld} className="cover" alt="logo" />
          <h3>Labrador</h3>
        </div></Link>

        <Link to="/dog6"> <div id="5" onClick={() => handleClick("5")} className="ele">
          <img src={bull} className="cover" alt="logo" />
          <h3>Bull dog</h3>
        </div></Link>


      </div>

    
    </Router>
  )
}

export default Dogs
