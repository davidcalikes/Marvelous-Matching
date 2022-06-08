/** 
 * Plays animals button sound when button is clicked and loads animals game page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
 function playAnimals() {
    let sound = document.getElementById("animals");
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
    let sound = document.getElementById("shapes");
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
    let sound = document.getElementById("colours");
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
  let sound = document.getElementById("start-btn");
  sound.play();
}

/** 
 * Plays pop button sound when button is clicked and returns to menu page
 * Called from the DOM via onclick event
 * Waits until sound has ended before loading page to prevent audio clipping
 * */
 function playBack() {
  let sound = document.getElementById("back-btn");
  sound.play();
  sound.addEventListener("ended", function () {
    location.href = "index.html";
  });
}

/** 
 * Switches all audio elements between muted and unmuted states
 * */
function soundToggle() {
  let soundOnOff = document.getElementById("sound-on-off");
  let soundIcon = document.getElementById("sound-icon");
  let sndBtnIcon = document.getElementById("snd-btn-icon");
  
  if (soundOnOff.innerHTML === "OFF") {
      soundOnOff.innerHTML = "ON";
      soundIcon.className = "fa-solid fa-volume-low";
      sndBtnIcon.className = "fa-solid fa-volume-low";
      const sounds = document.querySelectorAll("audio");
      for (const sound of sounds) {
      sound.muted = false;
      localStorage.setItem("toggle", "ON");
      let sndToggleState = localStorage.getItem("toggle")
      sndToggleState;
    }
      
  } else {
    soundOnOff.innerHTML = "OFF";
    soundIcon.className = "fa-solid fa-volume-xmark";
    sndBtnIcon.className = "fa-solid fa-volume-xmark";
    const sounds = document.querySelectorAll("audio");
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
      console.log("Test Mode Activated")
      chkGame();
      runTest();
  } else {
    testOnOff.innerHTML = "OFF";
    document.location.reload();
  }
}


/**
 * Returns random elements from array using Fisher-Yates Shuffle Algorithm. 
 * (Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
 */
 function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = 
    [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// *** RUNGAME FUNCTIONS ***

/** 
 * Contains functions and statements required to run the ANIMALS game a single game cycle.
 * Including shuffling of Flashcards, creating a matching pair and congratulating the user for a correct answer.
 * Includes functions that provides the user audio and visual feedback.  
 * */
 function runGame() {

  // Applies shuffle algorithm to animals array & pushes first four elements to the game area placeholeders.
  let animals = ["assets/images/animal_cat.webp","assets/images/animal_dog.webp","assets/images/animal_pig.webp","assets/images/animal_horse.webp","assets/images/animal_sheep.webp","assets/images/animal_cow.webp","assets/images/animal_duck.webp","assets/images/animal_rooster.webp"];
  shuffle(animals);

    document.getElementById("box-1").src = animals[0];
    document.getElementById("box-2").src = animals[1];
    document.getElementById("box-3").src = animals[2];
    document.getElementById("box-4").src = animals[3];

    let quizList = animals.slice(0,4);
    
    document.getElementById("q-thumb").src = quizList[Math.floor(Math.random()* quizList.length)];
    let quizPic = document.getElementById("q-thumb").getAttribute('src');
    console.log(quizPic);

    // Uses quizzPic variable to duplicate image to floating congratsBox element"
    document.getElementById("float-pic").src = quizPic;
    
     let question = document.getElementById("question-txt").innerHTML;
     question;
     console.log(question);

     if (quizPic === "assets/images/sheep.webp") {
      document.getElementById("question-txt").innerHTML = "Where is the sheep?";
      document.getElementById("q-sound").src = "assets/audio/q_sheep.mp3";
      document.getElementById("thumb-sound").src = "assets/audio/thumb_sheep.mp3";
    
     } else {

    if (quizPic === "assets/images/duck.webp") {
     document.getElementById("question-txt").innerHTML = "Where is the duck?";
     document.getElementById("q-sound").src = "assets/audio/q_duck.mp3";
     document.getElementById("thumb-sound").src = "assets/audio/thumb_duck.mp3";
   } else {

    if (quizPic === "assets/images/horse.png") {
      document.getElementById("question-txt").innerHTML = "Where is the horse?";
      document.getElementById("q-sound").src = "assets/audio/q_horse.mp3";
      document.getElementById("thumb-sound").src = "assets/audio/thumb_horse.mp3";
      
      } else {

       if (quizPic === "assets/images/pig.png") {
        document.getElementById("question-txt").innerHTML = "Where is the pig?";
        document.getElementById("q-sound").src = "assets/audio/q_pig.mp3";
        document.getElementById("thumb-sound").src = "assets/audio/thumb_pig.mp3";
      
      } else {

      if (quizPic === "assets/images/rooster.png") {
        document.getElementById("question-txt").innerHTML = "Where is the rooster?";
        document.getElementById("q-sound").src = "assets/audio/q_rooster.mp3";
        document.getElementById("thumb-sound").src = "assets/audio/thumb_rooster.mp3";
        
        } else {

         if (quizPic === "assets/images/cat.png") {
          document.getElementById("question-txt").innerHTML = "Where is the cat?";     
          document.getElementById("q-sound").src = "assets/audio/q_cat.mp3";
          document.getElementById("thumb-sound").src = "assets/audio/thumb_cat.mp3";
         
        } else {
        
          if (quizPic === "assets/images/dog.png") {
            document.getElementById("question-txt").innerHTML = "Where is the dog?";
            document.getElementById("q-sound").src = "assets/audio/q_dog.mp3";
            document.getElementById("thumb-sound").src = "assets/audio/thumb_dog.mp3";
           
          } else {

             if (quizPic === "assets/images/cow.png") {
              document.getElementById("question-txt").innerHTML = "Where is the cow?";
              document.getElementById("q-sound").src = "assets/audio/q_cow.mp3";
              document.getElementById("thumb-sound").src = "assets/audio/thumb_cow.mp3";
             }
             }
           }
         }
       }
     }
   }
 }
 makeMatch();
}

 /** 
 * Creates active flash card that matches thumbnail image. 
 * */      
function makeMatch() {
      
  let box1 = document.getElementById("box-1").getAttribute('src');
  let box2 = document.getElementById("box-2").getAttribute('src');
  let box3 = document.getElementById("box-3").getAttribute('src');
  let box4 = document.getElementById("box-4").getAttribute('src');
  
  let answerBox = document.getElementById("q-thumb").getAttribute('src');
  
  console.log(answerBox);

  if (box1 === answerBox) {
    let active = document.getElementById("box-1");
    active.className += " active"; 
    console.log("box1 winner");
  
  } else {
    
    if (box2 === answerBox) {
      let active = document.getElementById("box-2");
      active.className += " active"; 
      console.log("box2 winner");
    
    } else {
    
      if (box3 === answerBox) {
        let active = document.getElementById("box-3");
        active.className += " active"; 
        console.log("box3 winner");

      } else {
    
        if (box4 === answerBox) {
          let active = document.getElementById("box-4");
          active.className += " active"; 
          console.log("box4 winner");

        }  
      }
    }  
  }     
}

runGame();

 function thumbSound() {
  const thumbSound = document.getElementById("thumb-sound");
  thumbSound;
  thumbSound.play();
  }

  function thumbHint() {
    const thumbHint = document.getElementById("thumb-hint").style.display = "flex";
    thumbHint;
  }

  function hideHint() {
    const hideHint = document.getElementById("thumb-hint").style.display = "none";
    hideHint;
  }

