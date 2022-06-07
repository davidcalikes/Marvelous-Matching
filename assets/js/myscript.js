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

  