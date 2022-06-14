/*exported playAnimals, playShapes, playShapes, playColours, playPop, playBack, qSound, testToggle, startGame, startGame2, startGame3, checkCard1, checkCard2, checkCard3, checkCard4, thumbSound, thumbHint, muteOnload */

// Statement that retrieves the position of the sound toggle switch from local storage and stores it in a variable
let sndToggleState = localStorage.getItem("toggle");

setToggle();

/** 
 * Maintains the toggle state of the sound toggle button across all pages of the site
 * Gets state of switch from sndToggleState variable
 * */
function setToggle() {
  if (sndToggleState === "ON") {
    soundToggle();
  } else {
    muteAudio();
  }
}   

/** 
 * Mutes all Audio elements on page
 * Site is muted by default
 * */
function muteAudio() {
  const sounds = document.querySelectorAll("audio");
  for (const sound of sounds)
  sound.muted = true;
}

/** 
 * Plays animals button sound when button is clicked and loads animals game page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
function playAnimals() {
  loadingModal();
  const sound = document.getElementById("animals");
  sound.play();
  sound.addEventListener('ended', function () {
  location.href = 'animals.html';
  });
}

/** 
 * Plays shapes button sound when button is clicked and loads animals game page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
function playShapes() {
  loadingModal();
  const sound = document.getElementById("shapes");
  sound.play();
  sound.addEventListener('ended', function () {
  location.href = 'shapes.html';
  });
}

/** 
 * Plays colours button sound when button is clicked and loads animals game page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
function playColours() {
  loadingModal();
  const sound = document.getElementById("colours");
  sound.play();
  sound.addEventListener('ended', function () {
  location.href = 'colours.html';
  });
}

/** 
 * Plays pop button sound when button is clicked
 * Called from the DOM via onclick event
 * */
function playPop() {
  const sound = document.getElementById("start-btn");
  sound.play();
}

/** 
 * Plays pop button sound when button is clicked and returns to menu page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
function playBack() {
  loadingModal();
  const sound = document.getElementById("back-btn");
  sound.play();
  sound.addEventListener("ended", function () {
  location.href = "index.html";
  });
}

/** 
 * Plays pop button sound when button is clicked and returns to menu page from the about page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
 function playAboutBack() {
  loadingModal();
  const sound = document.getElementById("about-back-button");
  sound.play();
  sound.addEventListener("ended", function () {
  location.href = "index.html";
  });
}

/** 
 * Plays jingle sound when correct answer is clicked
 * Called from the DOM via onclick event
 * */
function playRight() {
  const correct = document.getElementById("correct-sound");
  correct.play();
}

/** 
 * Plays song when playsong button is clicked
 * Called from the DOM via onclick event
 * */
 function playSong() {
  const sound = document.getElementById("congrats-song");
  sound.play();
}

/** 
 * Plays alert sound
 * Called from the DOM via onclick event
 * */
function playWrong() {
  const incorrect = document.getElementById("incorrect-sound");
  incorrect.play();
}

/** 
 * Plays question button sound when button is clicked
 * Called from the DOM via onclick event
 * */
function qSound() {
  const sound = document.getElementById("q-sound");
  sound.play();
}

/**
 * Plays thumbnail hint sound on click event 
 */
 function thumbSound() {
  const thumbSound = document.getElementById("thumb-sound");
  thumbSound.play();
}

/** 
 * Switches all audio elements between muted and unmuted states
 * */
function soundToggle() {
  const sounds = document.querySelectorAll("audio");
  const soundOnOff = document.getElementById("sound-on-off");
  const soundIcon = document.getElementById("sound-icon");
  const sndBtnIcon = document.getElementById("snd-btn-icon");

  if (soundOnOff.innerHTML === "OFF") {
    soundOnOff.innerHTML = "ON";
    soundIcon.className = "fa-solid fa-volume-low";
    sndBtnIcon.className = "fa-solid fa-volume-low";
    for (const sound of sounds) {
      sound.muted = false;
      localStorage.setItem("toggle", "ON");
      sndToggleState = localStorage.getItem("toggle");
    }
  } else {
    soundOnOff.innerHTML = "OFF";
    soundIcon.className = "fa-solid fa-volume-xmark";
    sndBtnIcon.className = "fa-solid fa-volume-xmark";
    for (const sound of sounds) {
      sound.muted = true;
      localStorage.setItem("toggle", "OFF");
      sndToggleState = localStorage.getItem("toggle");
    }
  }
}

/** 
 * Switches between test and learning game modes
 * */
function testToggle() {

  let testOnOff = document.getElementById("test-on-off");
  if (testOnOff.innerHTML === "OFF") {
    testOnOff.innerHTML = "ON";
    chkGame();
    runTest();
  } else {
    testOnOff.innerHTML = "OFF";
    document.location.reload();
  }
}

// *** RUNGAME FUNCTIONS ***

/** 
 * Contains functions and statements required to run the ANIMALS game one single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
function runGame() {

  // Applies shuffle algorithm to animals array & pushes first four elements to the game area placeholeders.
  let animals = ["assets/images/animal_cat.webp", "assets/images/animal_dog.webp", "assets/images/animal_pig.webp", "assets/images/animal_horse.webp", "assets/images/animal_sheep.webp", "assets/images/animal_cow.webp", "assets/images/animal_duck.webp", "assets/images/animal_rooster.webp"];
  shuffle(animals);

  document.getElementById("box-1").src = animals[0];
  document.getElementById("box-2").src = animals[1];
  document.getElementById("box-3").src = animals[2];
  document.getElementById("box-4").src = animals[3];

  let quizList = animals.slice(0, 4);

  document.getElementById("q-thumb").src = quizList[Math.floor(Math.random() * quizList.length)];

  let quizPic = document.getElementById("q-thumb").getAttribute('src');
  

  // Uses quizzPic variable to duplicate image to floating congratsBox element"
  document.getElementById("float-pic").src = quizPic;
  

  let question = document.getElementById("question-txt").innerHTML;

  if (quizPic === "assets/images/animal_sheep.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the sheep?";
    document.getElementById("q-sound").src = "assets/audio/q_sheep.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_sheep.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_sheep.mp3";
  } else if (quizPic === "assets/images/animal_duck.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the duck?";
    document.getElementById("q-sound").src = "assets/audio/q_duck.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_duck.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_duck.mp3";
  } else if (quizPic === "assets/images/animal_horse.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the horse?";
    document.getElementById("q-sound").src = "assets/audio/q_horse.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_horse.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_horse.mp3";
  } else if (quizPic === "assets/images/animal_pig.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the pig?";
    document.getElementById("q-sound").src = "assets/audio/q_pig.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_pig.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_pig.mp3";
  } else if (quizPic === "assets/images/animal_rooster.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the rooster?";
    document.getElementById("q-sound").src = "assets/audio/q_rooster.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_rooster.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_rooster.mp3";
  } else if (quizPic === "assets/images/animal_cat.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the cat?";
    document.getElementById("q-sound").src = "assets/audio/q_cat.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_cat.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_cat.mp3";
  } else if (quizPic === "assets/images/animal_dog.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the dog?";
    document.getElementById("q-sound").src = "assets/audio/q_dog.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_dog.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_dog.mp3";
  } else if (quizPic === "assets/images/animal_cow.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the cow?";
    document.getElementById("q-sound").src = "assets/audio/q_cow.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_cow.mp3";
    document.getElementById("congrats-song").src = "assets/audio/song_cow.mp3";
  }
  makeMatch();
}

/** 
 * Contains functions and statements required to run the SHAPES game one single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
function runGame2() {

  // Applies shuffle algorithm to animals array & pushes first four elements to the game area placeholeders.
  let shapes = ["assets/images/shapes_circle.webp", "assets/images/shapes_oval.webp", "assets/images/shapes_rectangle.webp", "assets/images/shapes_square.webp", "assets/images/shapes_star.webp", "assets/images/shapes_triangle.webp"];
  shuffle(shapes);

  document.getElementById("box-1").src = shapes[0];
  document.getElementById("box-2").src = shapes[1];
  document.getElementById("box-3").src = shapes[2];
  document.getElementById("box-4").src = shapes[3];

  let quizList = shapes.slice(0, 4);

  document.getElementById("q-thumb").src = quizList[Math.floor(Math.random() * quizList.length)];

  let quizPic = document.getElementById("q-thumb").getAttribute('src');

  // Uses quizzPic variable to duplicate image to floating congratsBox element"
  document.getElementById("float-pic").src = quizPic;

  let question = document.getElementById("question-txt").innerHTML;

  if (quizPic === "assets/images/shapes_circle.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the circle?";
    document.getElementById("q-sound").src = "assets/audio/q_circle.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_circle.mp3";
  } else if (quizPic === "assets/images/shapes_oval.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the oval?";
    document.getElementById("q-sound").src = "assets/audio/q_oval.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_oval.mp3";
    } else if (quizPic === "assets/images/shapes_rectangle.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the rectangle?";
    document.getElementById("q-sound").src = "assets/audio/q_rectangle.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_rectangle.mp3";
    } else if (quizPic === "assets/images/shapes_square.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the square?";
    document.getElementById("q-sound").src = "assets/audio/q_square.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_square.mp3";
    } else if (quizPic === "assets/images/shapes_star.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the star?";
    document.getElementById("q-sound").src = "assets/audio/q_star.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_star.mp3";
    } else if (quizPic === "assets/images/shapes_triangle.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the triangle?";
    document.getElementById("q-sound").src = "assets/audio/q_triangle.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_triangle.mp3";
  }
  makeMatch();
}

/** 
 * Contains functions and statements required to run the COLOURS game one single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
function runGame3() {

  // Applies shuffle algorithm to animals array & pushes first four elements to the game area placeholeders.
  let colours = ["assets/images/colours_black.webp", "assets/images/colours_blue.webp", "assets/images/colours_green.webp", "assets/images/colours_orange.webp", "assets/images/colours_pink.webp", "assets/images/colours_purple.webp", "assets/images/colours_red.webp", "assets/images/colours_yellow.webp"];
  shuffle(colours);

  document.getElementById("box-1").src = colours[0];
  document.getElementById("box-2").src = colours[1];
  document.getElementById("box-3").src = colours[2];
  document.getElementById("box-4").src = colours[3];

  let quizList = colours.slice(0, 4);

  document.getElementById("q-thumb").src = quizList[Math.floor(Math.random() * quizList.length)];

  let quizPic = document.getElementById("q-thumb").getAttribute('src');

  // Uses quizzPic variable to duplicate image to floating congratsBox element"
  document.getElementById("float-pic").src = quizPic;

  let question = document.getElementById("question-txt").innerHTML;

  if (quizPic === "assets/images/colours_black.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour black?";
    document.getElementById("q-sound").src = "assets/audio/q_black.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_black.mp3";
  } else if (quizPic === "assets/images/colours_blue.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour blue ?";
    document.getElementById("q-sound").src = "assets/audio/q_blue.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_blue.mp3";
  } else if (quizPic === "assets/images/colours_green.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour green?";
    document.getElementById("q-sound").src = "assets/audio/q_green.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_green.mp3";
  } else if (quizPic === "assets/images/colours_orange.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour orange?";
    document.getElementById("q-sound").src = "assets/audio/q_orange.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_orange.mp3";
  } else if (quizPic === "assets/images/colours_pink.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour pink?";
    document.getElementById("q-sound").src = "assets/audio/q_pink.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_pink.mp3";
  } else if (quizPic === "assets/images/colours_purple.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour purple?";
    document.getElementById("q-sound").src = "assets/audio/q_purple.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_purple.mp3";
  } else if (quizPic === "assets/images/colours_red.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour red?";
    document.getElementById("q-sound").src = "assets/audio/q_red.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_red.mp3";
  } else if (quizPic === "assets/images/colours_yellow.webp") {
    document.getElementById("question-txt").innerHTML = "Where is the colour yellow?";
    document.getElementById("q-sound").src = "assets/audio/q_yellow.mp3";
    document.getElementById("thumb-sound").src = "assets/audio/thumb_yellow.mp3";
  }
  makeMatch();
}

/** 
 * Creates active flash card that matches thumbnail image. 
 * */
function makeMatch() {

  const box1 = document.getElementById("box-1").getAttribute('src');
  const box2 = document.getElementById("box-2").getAttribute('src');
  const box3 = document.getElementById("box-3").getAttribute('src');
  const box4 = document.getElementById("box-4").getAttribute('src');
  const answerBox = document.getElementById("q-thumb").getAttribute('src');

  if (box1 === answerBox) {
    let active = document.getElementById("box-1");
    active.className += " active";
  } else if (box2 === answerBox) {
    let active = document.getElementById("box-2");
    active.className += " active";
  } else if (box3 === answerBox) {
    let active = document.getElementById("box-3");
    active.className += " active";
  } else if (box4 === answerBox) {
    let active = document.getElementById("box-4");
    active.className += " active";
    }
  }

/** 
 * Initialises the Animals game
 * */
function startGame() {

  resetBoxClassNames();
  document.getElementById("modal-box").style.display = "none";
  runGame();
}

/** 
 * Initialises the shapes game
 * */
function startGame2() {

  resetBoxClassNames();
  document.getElementById("modal-box").style.display = "none";
  runGame2();
}

/** 
 * Initialises the colours game
 * */
function startGame3() {

  resetBoxClassNames();
  document.getElementById("modal-box").style.display = "none";
  runGame3();
}

/** 
 * Checks the 1st flashcard in response to user click event to see if it is the "active" card that matches the card below. 
 * */
function checkCard1() {

  const box1 = document.getElementById("box-1").getAttribute('class');
  const testOnOff = document.getElementById("test-on-off");
  const activeBox = "box active";

  if (box1 === activeBox) {
    playRight();
    congratsBox();
    addScore();
    addAttempt();
  } else if (testOnOff.innerHTML === "ON") {
    addAttempt();
    chkGame();
    tenCheck();
    playWrong();
  } else {
    document.getElementById("box-1").src = "assets/images/try_again.webp";
    playWrong();
  }
}

/** 
 * Checks the 2nd flashcard in response to user click event to see if it is the "active" card that matches the card below. 
 * */
function checkCard2() {

  const box2 = document.getElementById("box-2").getAttribute('class');
  const testOnOff = document.getElementById("test-on-off");
  const activeBox = "box active";

  if (box2 === activeBox) {
    playRight();
    congratsBox();
    addScore();
    addAttempt();
  } else if (testOnOff.innerHTML === "ON") {
    addAttempt();
    chkGame();
    tenCheck();
    playWrong();
  } else {
    document.getElementById("box-2").src = "assets/images/try_again.webp";
    playWrong();
  }
}

/** 
 * Checks the 3rd flashcard in response to user click event to see if it is the "active" card that matches the card below. 
 * */
function checkCard3() {

  const box3 = document.getElementById("box-3").getAttribute('class');
  const testOnOff = document.getElementById("test-on-off");
  const activeBox = "box active";

  if (box3 === activeBox) {
    playRight();
    congratsBox();
    addScore();
    addAttempt();
  } else if (testOnOff.innerHTML === "ON") {
    addAttempt();
    chkGame();
    tenCheck();
    playWrong();
    } else {
    document.getElementById("box-3").src = "assets/images/try_again.webp";
    playWrong();
  }
}

/** 
 * Checks the 4th flashcard in response to user click event to see if it is the "active" card that matches the card below. 
 * */
function checkCard4() {

  const box4 = document.getElementById("box-4").getAttribute('class');
  const testOnOff = document.getElementById("test-on-off");
  const activeBox = "box active";

  if (box4 === activeBox) {
    playRight();
    congratsBox();
    addScore();
    addAttempt();
  } else if (testOnOff.innerHTML === "ON") {
    addAttempt();
    chkGame();
    tenCheck();
    playWrong();
  } else {
    document.getElementById("box-4").src = "assets/images/try_again.webp";
    playWrong();
  }
}

/** 
 * Checks the game type to produce the correct set of flash cards on reset
 * */
function chkGame() {
  let gameType = document.getElementById("game-type").innerHTML;

  if (gameType === "Animals") {
    resetBoxClassNames();
    playAgain();
  } else if (gameType === "Shapes") {
    resetBoxClassNames();
    playAgain2();
  } else if (gameType === "Colours") {
    resetBoxClassNames();
    playAgain3();
  }
}

/** 
 * Resets the Animals game after user attempt
 * */
function playAgain() {

  tenCheck();
  resetBoxClassNames();
  document.getElementById("congrats-box").style.display = "none";
  hideHint();
  runGame();
}

/** 
 * Resets the Shapes game after user attempt
 * */
function playAgain2() {

  tenCheck();
  resetBoxClassNames();
  document.getElementById("congrats-box").style.display = "none";
  hideHint();
  runGame2();
}

/** 
 * Resets the Colours game after user attempt
 * */
function playAgain3() {

  tenCheck();
  resetBoxClassNames();
  document.getElementById("congrats-box").style.display = "none";
  hideHint();
  runGame3();
}

/** 
 * Sets hidden congratulations modal display to flex 
 * */
function congratsBox() {
document.getElementById("congrats-box").style.display = "flex";
}

/** 
 * Resets the box class names so a new random element can be assigned active class (and avoid active active class name error) 
 * */
function resetBoxClassNames() {
  document.getElementById("box-1").className = "box";
  document.getElementById("box-2").className = "box";
  document.getElementById("box-3").className = "box";
  document.getElementById("box-4").className = "box";
}

/**
 * Displays thumbnail overlay image on click event 
 */
function thumbHint() {
  document.getElementById("thumb-hint").style.display = "flex";
}

/**
 * Hides thumbnail overlay image on click event 
 */
function hideHint() {
  document.getElementById("thumb-hint").style.display = "none";
}

/**
 * Returns random elements from array using Fisher-Yates Shuffle Algorithm. 
 * (Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
 */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

/**
 * Increments number of correct answers by 1 and adds to score board in info container  
 */
function addScore() {
  let getScore = parseInt(document.getElementById("add-score").innerText);
  document.getElementById("add-score").innerText = ++getScore;
}

/**
 * Increments number of attempts by 1 and adds to score board in info container  
 */
function addAttempt() {
  let testAttempts = parseInt(document.getElementById("attempts").innerText);
  document.getElementById("attempts").innerText = ++testAttempts;
}

/**
 * Checks the number of attempts and ends the test when maximum numer of tests is reached
 */
function tenCheck() {
  const maxAttempts = document.getElementById("attempts").innerHTML;
  const testState = document.getElementById("test-on-off");
  if (maxAttempts === "10" && testState.innerHTML === "ON") {
    endTest();
  }
}

/**
 * Resets the game and displays test scoreboard
 */
function runTest() {

  resetBoxClassNames();

  document.getElementById("play-info").style.display = "none";
  document.getElementById("score-board").style.display = "block";
  document.getElementById("end-test").style.display = "none";
  document.getElementById("add-score").innerHTML = "0";
  document.getElementById("attempts").innerHTML = "0";

  makeMatch();
}

/**
 * Displays end of test modal and shows final score 
 */
function endTest() {
  
  const getFinalScr = document.getElementById("add-score").innerText;
  document.getElementById("end-test").style.display = "flex";
  document.getElementById("final-score").innerHTML = getFinalScr;
}

function loadingModal() {
  
  document.getElementById("loading").style.display = "block";
}