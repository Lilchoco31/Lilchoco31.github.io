//var rainbow = &#x1f308
//var bomb =  &#x2620
//var empty = &#x1f332

var locationRainbow= Math.floor(Math.random() * 8) 
var locationBomb= Math.floor(Math.random() * 8) 
if(locationRainbow===locationBomb){ locationBomb= Math.floor(Math.random() * 8)}
console.log("Win",locationRainbow,"lose",locationBomb)

const warning = (location) => {
console.log(location)


if (location === locationBomb) {alert("Sorry try again")
document.getElementById(location).innerHTML="&#x2620"
}
else if (location === locationRainbow) {alert("You are rich") 
document.getElementById(location).innerHTML="&#x1f308"
}
else {alert("Sucks to suck ") 
document.getElementById(location).innerHTML="&#x1f332"
}

}