import { PUBLIC_KEY, PRIVATE_KEY } from './config.js'

var limit = 0;

let generateHash = (timesTemp)=> CryptoJS.MD5(timesTemp + PRIVATE_KEY +PUBLIC_KEY );

let getTimesTemp = () => new Date().getTime();

function getHeroes() {

  var timesTemp = getTimesTemp();
  
  let url = `http://gateway.marvel.com/v1/public/characters?limit=${limit+10}&ts=${timesTemp}&apikey=${PUBLIC_KEY}&hash=${generateHash(timesTemp)}`;
  
  var xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", url, true);
  
  xhttp.onreadystatechange = function () {
    
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    
    var listHeroes = xhttp.responseText["data"]["results"];

    }
    
  }
  
  xhttp.send();
}

getHeroes()


