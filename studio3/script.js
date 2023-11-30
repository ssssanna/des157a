(function(){
    'use strict'; 
    console.log('reading js'); 

    // variables for instruction overlays
    const welcome = document.querySelector('#overlay-welcome'); 
    const instruction = document.querySelector('#overlay-instruction');

    // variables for game overlays
    const gameControl = document.querySelector('#control'); 

    // variables for buttons
    const welcomeclick = document.querySelector('#welcomeclick'); 
    const start = document.querySelector('#startgame'); 
    const quitgame = document.querySelector('#quitgame'); 

    // variables for game
    const game = document.querySelector('#game'); 
    const action = document.querySelector('#actions'); 
    const scores = document.querySelector('#score'); 

    // variables for sounds 
    const clicksound = new Audio('sounds/smb_stomp.wav'); 
    const winsound = new Audio ('sounds/smb_world_clear.wav'); 

    // object for game
    const gameData = {
        dice: ['images/dice1.svg', 'images/dice2.svg', 'images/dice3.svg', 'images/dice4.svg', 'images/dice5.svg', 'images/dice6.svg'],
        players: ['Luke the penguin', 'Bob the monster'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }; 

    // when 'start the game' button is clicked, game starts
    start.addEventListener('click', function(){
        instruction.className = 'hide'; 

        // game index set randomly
        gameData.index = Math.round(Math.random());

        // the control section at the very top
        gameControl.innerHTML = '<h2>The game has started</h2>'; 
        gameControl.innerHTML += '<button id="quitgameagain">Quit?</button>'; 

        document.querySelector('#quitgameagain').addEventListener('click', function(){
            location.reload(); 
        }); 

        setUpTurn(); 

        // play sound when certain buttons are clicked
        clicksound.play(); 
    }); 

    // set up turn for players and 'roll the dice' button added
    function setUpTurn(){
        game.innerHTML = `<h3 id='gameh3'>Roll the dice for <span class="insnum">${gameData.players[gameData.index]}</span></h3>`; 
        action.innerHTML = '<button id="roll">Roll the dice</button>'; 
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice(); 
            clicksound.play(); 
        }); 
    }

    // get dice images + check if 1 is rolled + check scores 
    function throwDice(){
        action.innerHTML = ''; 
        gameData.roll1 = Math.floor(Math.random()*6)+1; 
        gameData.roll2 = Math.floor(Math.random()*6)+1; 

        game.innerHTML = `<h3 id='gameh3'>Roll the dice for <span class="insnum">${gameData.players[gameData.index]}</span></h3>`; 
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`; 
        gameData.rollSum = gameData.roll1 + gameData.roll2; 

        if (gameData.rollSum === 2) {
            game.innerHTML = '<h3>Oh Snap snake eyes!!</h3>';
            gameData.score[gameData.index] = 0; 

            
            gameData.index ? (gameData.index = 0):(gameData.index = 1); 

            // show the current score 
            showCurrentScore(); 
            setTimeout(setUpTurn, 3000); 
        }
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0):(gameData.index = 1); 

            game.innerHTML = `<h3 id='sorryh3'>Sorry, one of your rolls was a 1, switching to <span class="insnum">${gameData.players[gameData.index]}</span></h3>`; 

            setTimeout(setUpTurn, 3000);
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum; 
            action.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>'; 

            document.querySelector('#rollagain').addEventListener('click', function(){
                setUpTurn(); 
            }); 

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0):(gameData.index = 1);
                setUpTurn(); 
            }); 

            // check winning condition 
            checkWinningCondition(); 
        }
    }

    // check winning threshold: gameEnd = 29
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            game.innerHTML = `<h3 id='winh3'><span class='insnum2'>${gameData.players[gameData.index]}</span> wins the game with <span class='insnum2'>${gameData.score[gameData.index]}</span> points!</h3>`; 

            action.innerHTML = ''; 
            document.getElementById('quitgameagain').innerHTML = "Start a new game"; 
            document.getElementById('quitgameagain').style.borderStyle = "solid";
            document.getElementById('quitgameagain').style.backgroundColor = "rgb(179, 135, 226)";

            winsound.play(); 
        }
        else {
            // show current score
            showCurrentScore(); 
        }
    }

    // score section at the bottom 
    function showCurrentScore () {
        scores.innerHTML = `<h3 id='scoreh3'>The score for ${gameData.players[0]} is currently <span class='insnum2'>${gameData.score[0]}</span> and the score for ${gameData.players[1]} is currently  <span class='insnum2'>${gameData.score[1]}</span></h3>`; 
    }

    // when 'click to continue' is clicked, 'how to play' overlays show up 
    welcomeclick.addEventListener('click', function(){
        welcome.className = 'hide'; 
        instruction.className = 'show'; 
    }); 

    // quit to reload the page to restart the game
    quitgame.addEventListener('click', function(){
        location.reload(); 
    }); 

})(); 