import React from 'react'
import dogsInfo from './dogsInfo.js'
import pom from './Images/Pomeranian.jpg';
import IndianS from './Images/indianS.jpg';
import Gs from './Images/GS.jpg';
import Pug from './Images/pug.jpeg';
import Ld from './Images/ld.jpeg';
import bull from './Images/bull.jpg';
import './dogsInfo.css'

function DogInfoDisplay({sel}) {


    const dog=dogsInfo[sel];
    return (
        <>
            {window.scrollTo({top:0})}


            <div className="container">
              <h1 style={{fontFamily:"Times new romen", fontSize:"40px",padding:"0px",margin:"5px"}}>{dog.title}</h1>
               
              <div>  <img src={dog.imgsrc}/></div>
              <div>  <p><strong>Description : </strong> {dog.desc}</p> </div> 
              <div>  <h2>height : {dog.height}</h2> </div> 
              <div>  <h2>weight : {dog.weight}</h2> </div> 
              <div>  <h2>Life span : {dog.life}</h2> </div> 
              </div> 
            
            
        </>
    )
}

export default DogInfoDisplay
