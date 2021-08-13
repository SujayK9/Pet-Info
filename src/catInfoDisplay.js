import React from 'react'
import catInfo from './catInfo.js'
import Ps from './Images/persian.jpeg';
import Mn from './Images/main-coon.jpeg';
import Ab from './Images/ab.jpeg';
import Sm from './Images/siamese.webp';
import hm from './Images/hc.jpg';
import short from './Images/short.jpg';

import './dogsInfo.css'

function catInfoDisplay({sel}) {


    const cat=catInfo[sel];
    return (
        <>
            {window.scrollTo({top:0})}


            <div className="container">
              <h1 style={{fontFamily:"Times new romen", fontSize:"40px",padding:"0px",margin:"5px"}}>{cat.title}</h1>
               
              <div>  <img src={cat.imgsrc}/></div>
              <div>  <p><strong>Description : </strong> {cat.desc}</p> </div> 
              <div>  <h2>height : {cat.height}</h2> </div> 
              <div>  <h2>weight : {cat.weight}</h2> </div> 
              <div>  <h2>Life span : {cat.life}</h2> </div> 
              </div> 
            
            
        </>
    )
}

export default catInfoDisplay
