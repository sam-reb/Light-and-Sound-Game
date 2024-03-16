//Add your global variables here
let pattern = [1, 2, 3, 4, 4, 3, 2, 1];
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.6;
const clueHoldTime = 600; //clue plays for 600ms
const cluePauseTime = 333; // clue pauses for 333ms
const nextClueWaitTime = 1000; // waits 1 second between each clue
let guessCounter = 0;
let wins = 0;
let losses = 0;

//initialize start & stop buttons
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

//shuffle elements of pattern array
function shuffle() {
  pattern = pattern.sort(() => Math.random() - 0.5);
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  //shuffle the pattern array for new game
  shuffle();
  //show that player is on level 1
  document.getElementById("levels").innerHTML = "Round: 1/8";
  //hide startBtn, show stopBtn
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  //resets game level displayed
  document.getElementById("levels").innerHTML = "Round: 0/8";
  //hide stopBtn, show startBtn
  stopBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); //set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("GAME OVER, YOU LOST 🤣");
  losses++;
  //updates loss counter
  document.getElementById("losses").innerHTML = "L's: " + losses;
}

function winGame() {
  stopGame();
  alert("YOU WIN! 🏆");
  wins++;
  //updates win counter
  document.getElementById("wins").innerHTML = "W's: " + wins;
}

function guess(btn) {
  //checks stopBtn wasn't clicked
  if (!gamePlaying) {
    return;
  } else {
    //GAME LOGIC
    if (pattern[guessCounter] == btn) {
      if (guessCounter == progress) {
        if (guessCounter == pattern.length - 1) {
          winGame();
        } else {
          progress++;
          document.getElementById("levels").innerHTML =
            "Round: " + (progress + 1) + "/8";
          playClueSequence();
        }
      } else {
        guessCounter++;
      }
    } else {
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 280,
  2: 400,
  3: 520,
  4: 640,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext();
let o = context.createOscillator();
let g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
