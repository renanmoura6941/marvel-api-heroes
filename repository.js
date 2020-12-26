import { PUBLIC_KEY, PRIVATE_KEY } from './config.js'

let generateHash = ()=> CryptoJS.MD5(getTimeTemp() + PUBLIC_KEY + PRIVATE_KEY);
let getTimeTemp = () => new Date().getTime();

function getHeroes() {
  let url = `http://gateway.marvel.com/v1/public/characters?ts=${getTimeTemp()}&apikey=${PUBLIC_KEY}=${generateHash()}`;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  }
  xhttp.send();
}

getHeroes()


