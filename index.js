var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number b/w 1-6

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number b/w 1-6

var randomDiceImagefor1 = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

var randomDiceImagefor2 = "dice" + randomNumber2 + ".png"; //dice1.png to dice6.png

var randomImageSource1 = "images/" + randomDiceImagefor1; //images/dice1.png-dice6.png

var randomImageSource2 = "images/" + randomDiceImagefor2; //images/dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0]; //for live updates

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , randomImageSource1);

image2.setAttribute("src" , randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Match draw";
}