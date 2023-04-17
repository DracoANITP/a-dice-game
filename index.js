
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var rendomimage1 = "dice"+randomnumber1+ ".png";
var rendomset1 = "images/" + rendomimage1;
var finalimage1= document.querySelectorAll("img")[0];
finalimage1.setAttribute("src",rendomset1);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var rendomimage2 = "dice"+randomnumber2+ ".png";
var rendomset2 = "images/" + rendomimage2;
var finalimage2= document.querySelectorAll("img")[1];
finalimage2.setAttribute("src",rendomset2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 won ";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="Match is draw ";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}