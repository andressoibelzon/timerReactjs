//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundo = 0;
let desena = 0;
let minuto = 0;
let hora = 0;

setInterval(function() {
    console.log("funciona");
    segundo++
    if (segundo === 10) {
        desena++
        segundo = 0
    } 
    if (desena === 6) {
        minuto++
        desena = 0
    }
    if (minuto === 60) {
        hora++
        minuto = 0
    }



    ReactDOM.render(<Home segundo={segundo} desena={desena} minuto={minuto} hora={hora}/>, document.querySelector("#app"));
}, 1000)

//render your react application
