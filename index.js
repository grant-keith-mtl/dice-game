function main(imgNum){
    randomDice(imgNum);
    var srcString1 = document.getElementsByClassName("img" + imgNum)[0].getAttribute("src");
    var diceNum1 = parseInt(srcString1.charAt(11));
    console.log(diceNum1);
    var srcString2;
    var diceNum2;
    if(imgNum==1){
        srcString2 = document.getElementsByClassName("img2")[0].getAttribute("src");
        diceNum2 = parseInt(srcString2.charAt(11));
        console.log(diceNum2);
        if(diceNum1>diceNum2){
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
            console.log(document.querySelector("h1").innerHTML);
        }
        else if(diceNum1<diceNum2){
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
            console.log(document.querySelector("h1").innerHTML);
        }
        else{
            document.querySelector("h1").innerHTML = "It's a Tie!";
            console.log(document.querySelector("h1").innerHTML);
        }
    }
    if(imgNum==2){
        srcString2 = document.getElementsByClassName("img1")[0].getAttribute("src");
        diceNum2 = parseInt(srcString2.charAt(11));
        console.log(diceNum2);
        if(diceNum2>diceNum1){
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
            console.log(document.querySelector("h1").innerHTML);
        }
        else if(diceNum2<diceNum1){
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
            console.log(document.querySelector("h1").innerHTML);
        }
        else{
            document.querySelector("h1").innerHTML = "It's a Tie!";
            console.log(document.querySelector("h1").innerHTML);
        }
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

