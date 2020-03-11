var player1Wins=0, player2Wins=0, ties=0;

function main(){
    var dice1 = randomDice(1);
    var dice2 = randomDice(2);
    var srcString1 = document.getElementsByClassName("img1")[0].getAttribute("src");
    var diceNum1 = parseInt(srcString1.charAt(11));
    var srcString2 = document.getElementsByClassName("img2")[0].getAttribute("src");
    var diceNum2 = parseInt(srcString2.charAt(11));
    console.log(diceNum1);
    if(diceNum1>diceNum2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        console.log(document.querySelector("h1").innerHTML);
        player1Wins++;
        document.getElementById("player1Wins").innerHTML = player1Wins;
    }
    else if(diceNum1<diceNum2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        console.log(document.querySelector("h1").innerHTML);
        player2Wins++;
        document.getElementById("player2Wins").innerHTML = player2Wins;
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Tie!";
        console.log(document.querySelector("h1").innerHTML);
        ties++;
        document.getElementById("ties").innerHTML = ties;
    }
}

function randomNumber(){
    var randomNumber = Math.ceil(Math.random() * 6);
    return randomNumber;
}

function randomDice(imgNum){
    var randomNum = randomNumber();
    document.getElementsByClassName("img" + imgNum)[0].setAttribute("src", "images/dice" + randomNum + ".png");
}

