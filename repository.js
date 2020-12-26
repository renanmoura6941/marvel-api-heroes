import {PUBLIC_KEY,PRIVATE_KEY } from './config.js'

function getHeroes(){    
}

function getTimeTemp(){
  return  new Date().getTime(); 
}

function generateHash(){
  return CryptoJS.MD5(getTimeTemp()+PUBLIC_KEY+PRIVATE_KEY)
}


getHeroes()


//var url = "http://gateway.marvel.com/v1/public/characters?ts=1387249200000&apikey=11e884f682fd0f940f631c8682c94b65&hash=f1fcb5c90e9a89cea33e33f4442ae76b";//Sua URL

// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", url, true);

// xhttp.onreadystatechange = function(){
//     if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
//         console.log(xhttp.responseText);
//     }
// }

// xhttp.send();