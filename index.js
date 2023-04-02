// // for fist player 
// var randomNo1 = Math.floor(Math.random() * 6)+1;
// var randomDiceImage1 = "dice" + randomNo1 + ".png";
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src" , randomDiceImage1);

// // for 2nd player 

// var randomNo2 = Math.floor(Math.random() * 6)+1;
// var randomDiceImage2 = "dice" +randomNo2 +".png";
// var image2 = document.querySelectorAll("img")[1]
// image2.setAttribute("src",randomDiceImage2);

// // When fist player win 

// if(randomNo1>randomNo2)
// {
//     document.querySelector("h1").innerHTML="🚩 Player 1 Win!";
// }

// else if(randomNo1<randomNo2)
// {
//     document.querySelector("h1").innerHTML=" Player 2 Win! 🚩";
// }
 
// else 
// {
//     document.querySelector("h1").innerHTML="Draw!";
// }

// if player  1 win
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomDiceImageSource1);

    // if  player 2 win

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImageSource2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
    
     var image2 = document.querySelectorAll("img")[1];
    
     image2.setAttribute("src",randomDiceImageSource2);

     if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML="🚩 Player 1 Win!"
}
     else if(randomNumber1<randomNumber2){
     document.querySelector("h1").innerHTML=" Player 2 Win! 🚩"
}
     else  {
        document.querySelector("h1").innerHTML="Draw!"
}