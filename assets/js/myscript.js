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

