


var wordArray = ["computer science", "calculus", "art history","accounting","accounting", "finance","american study",
"anatomy","physiology", "anthropology", "archaeology", "architecture","chemistry", "engineering","history", "media studies",
"counselling", "creative writing","criminology","dentistry","theater","economics","education","english",
"film making","french","geology","linguistics","marketing","mathematics","philosophy","physics","politics",
"psychology"]
var randomWord = "";
var win = 0;
var loss = 0;



document.getElementById("start").onclick = function (event) {
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    var question = "";
    var lives = 100;
    var guessLetters = "";
    document.getElementById("yourGuesses").textContent = "";
    document.getElementById("result").innerText = "";
    document.getElementById("lives").textContent = lives;


    console.log(randomWord);


    function convert(word) {
        for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) == " ") {
                question += " ";
            }
            else {
                question += "_";
            }
        }
    }

    convert(randomWord);
    document.querySelector("#question").innerHTML = question;

    function replace(word, replacement, index) {
        return word.substr(0, index) + replacement + word.substr(index + 1);
    }

    document.onkeyup = function (event) {
        var userGuess = event.key;
        var newSpan = document.createElement("span");
        newSpan.textContent = userGuess;
        if (randomWord.indexOf(userGuess) < 0) {
            newSpan.setAttribute("class", "wrong")
            lives= lives - 5;
           

        }
        else {
            newSpan.setAttribute("class", "right")
        }


        if (lives < 60) {
            document.getElementById("lives").textContent = 55;
            loss++;
            document.getElementById("result").innerText = "Fail";
            document.getElementById("fail").innerText = loss;
            document.querySelector("#question").innerHTML = randomWord;
            return
        }
        else if (document.getElementById("result").innerText == "Pass"){
           return
        }
        else {
            document.getElementById("lives").textContent = lives;
            document.getElementById("yourGuesses").appendChild(newSpan);
            console.log(userGuess);
            console.log(randomWord.indexOf(userGuess));
            for (var j = 0; j < randomWord.length; j++) {
                if (randomWord.indexOf(userGuess, j) == j) {
                    question = replace(question, userGuess, j);
                    document.querySelector("#question").innerHTML = question;
                }
            }
            if (question.indexOf("_") < 0){
            win++;
            document.getElementById("result").innerText = "Pass";
            document.getElementById("pass").innerText = win;
            }

        }


    }
}
