/************************************************
 * SIMON     - Memory game
 * Developed by  - Priyanjit Dey
 * Organization  - FusionCharts
 *
 ************************************************/

/*
 * CONSTRUCTOR   : GAME
 * @onOff    : Game status
 * @isStrict : Strict Mode status
 * @sequence     : Memory sequence
 * @seqIterator  : Iterator for sequence
 * @moveNum  : Keep track of user input
 * @timerEvents  : Store all setTimeout calls.
 * @userTimer    : Wait for user response.
 * @startTimer   : Timer for start button.   
 */
var Game = function() {
  this.onOff = 0;
  this.isStrict = 0;

  this.sequence = [];
  this.seqIterator = 0;
  this.moveNum = 0;

  this.timerEvents = [];
  this.blinkEvents = [];
  this.userTimer = 0;
  this.startTimer = 0;
}

/*
 * Function  : initialize
 * Arguements    : None  
 * Purpose   : Reset everything
 */
Game.prototype.initialize = function() {
  this.onOff = 0;
  this.isStrict = 0;

  this.sequence = [];
  this.seqIterator = 0;
  this.moveNum = 0;

  this.timerEvents = [];
  this.blinkEvents = [];
  this.userTimer = 0;
  this.startTimer = 0;
}

/*
 * Function  : clearTimers
 * Arguements    : None
 * Purpose   : Clear all setTimeouts
 */
Game.prototype.clearTimers = function() {
  var len = this.timerEvents.length,
    i;
  clearTimeout(this.startTimer);
  clearTimeout(this.userTimer);
  for (i = 0; i < len; i++) {
    clearTimeout(this.timerEvents[i]);
  }
  len = this.blinkEvents.length;
  for (i = 0; i < len; i++) {
    clearTimeout(this.blinkEvents[i]);
  }
}

/*
 * Function  : switchGame
 * Arguements    : None
 * Purpose   : Turn game on/off
 */
Game.prototype.switchGame = function() {
  this.disableControl(true);
  if (this.onOff === 0) {
    this.onOff = 1;
    document.getElementById("ledtext").style.color = "#ea0707";
    document.getElementById("startB").disabled = false;
    document.getElementById("sOnOff").className += " move";
  } else {
    this.onOff = 0;
    this.clearTimers();
    if (this.isStrict === 1) {
      this.toggleStrictMode();
    }
    var localThisObject = this;
    setTimeout(function() {
      localThisObject.initialize();
    }, 300);
    document.getElementById("ledtext").innerHTML = "--";
    document.getElementById("ledtext").style.color = "#631313";
    document.getElementById("sOnOff").className = "switchOnOff";
  }
}

/*
 * Function  : toggleStrictMode
 * Arguements    : None
 * Purpose   : Toggle strict mode.
 */
Game.prototype.toggleStrictMode = function() {
  if (this.isStrict === 0) {
    this.isStrict = 1;
    document.getElementById("strictCheckerB").className += " active";
  } else {
    this.isStrict = 0;
    document.getElementById("strictCheckerB").className = "strictChecker";
  }
  return this.isStrict;
}

/*
 * Function  : disableControl
 * Arguements    : 1
 *         - @status : boolean, sets button on/off   
 * Purpose   : Disables/Enables button
 */
Game.prototype.disableControl = function(status) {
  for (var i = 0; i < 4; i++) {
    document.getElementById("bt" + i).disabled = status;
  }
}

/*
 * Function  : showExclamation
 * Arguements    : 2
 *         - @str : string, message to be displayed in the message box
 *         - @type: integer, the mode in which @startSequence should be invoked.
 * Purpose   : Displays given text and invokes startSequence function in mentioned mode.
 */
Game.prototype.showExclamation = function(str, type) {
  var localThisObject = this; //to store the this context
  this.disableControl(true);
  document.getElementById("ledtext").innerHTML = str;

  var t1 = setTimeout(function() {
    document.getElementById("ledtext").style.color = "#631313";
  }, 100);
  var t2 = setTimeout(function() {
    document.getElementById("ledtext").style.color = "#ea0707";
  }, 300);
  var t3 = setTimeout(function() {
    document.getElementById("ledtext").style.color = "#631313";
  }, 500);
  var t4 = setTimeout(function() {
    document.getElementById("ledtext").style.color = "#ea0707";
    localThisObject.startSequence(type);
  }, 700);
  this.blinkEvents.push(t1);
  this.blinkEvents.push(t2);
  this.blinkEvents.push(t3);
  this.blinkEvents.push(t4);
}



/*
 * Function  : startSequence
 * Arguements    : 1
 *         - @seq : Mode 
 * Purpose   : Creates sequence in given mode
 ***Modes***
 * 0 : Normal Mode. Add a number and display
 * 1 : Strict Mode. Empty the array. Add number. Display
 * 2 : Repeat Mode. Only Display.
 */
Game.prototype.startSequence = function(seq) {
  this.disableControl(true);
  if (seq === 0) {
    this.sequence.push(Math.floor(Math.random() * 4));
    this.seqIterator++;
    this.display();
  } else if (seq === 1) {
    this.initialize();
    this.startSequence(0);
  } else if (seq === 2) {
    this.display();
  }
}

/*
 * Function  : display
 * Arguements    : None
 * Purpose   : Driver function to visualize the sequence
 */
Game.prototype.display = function() {
  //console.log("display");
  document.getElementById("ledtext").innerHTML = (this.seqIterator < 10 ? "0" + this.seqIterator : this.seqIterator);
  for (var i = 0; i < this.seqIterator; i++) {
    this.displayHelper(i, this.sequence[i], 600);
  }
}

/*
 * Function  : displayHelper
 * Arguements    : None
 * Purpose   : Helper function to  create visualiztion of each button
 */
Game.prototype.displayHelper = function(j, id, offset) {
  var localThisObject = this;
  var localDocument = document.getElementById("bt" + id);
  var t1;

  t1 = setTimeout(function() {
    switch (id) {
      case 0:
        localDocument.style.backgroundColor = "#89ed91";
        break;
      case 1:
        localDocument.style.backgroundColor = "#ef8686";
        break;
      case 2:
        localDocument.style.backgroundColor = "#f4ed89";
        break;
      case 3:
        localDocument.style.backgroundColor = "#6d75ed";
        break;
    }
    document.getElementById("soundbutton" + id).play();

    setTimeout(function() {
      switch (id) {
        case 0:
          localDocument.style.backgroundColor = "#00BA47";
          break;
        case 1:
          localDocument.style.backgroundColor = "#A50000";
          break;
        case 2:
          localDocument.style.backgroundColor = "#C6B800";
          break;
        case 3:
          localDocument.style.backgroundColor = "#302293";
          break;
      }
      if (j === localThisObject.seqIterator - 1) {
        document.getElementById("startB").disabled = false;
        localThisObject.waitForUser();
      }
    }, 320);
  }, (j * 700) + offset);
  localThisObject.timerEvents.push(t1);
}

/*
 * Function  : waitForUser
 * Arguements    : None
 * Purpose   : Checks response time of user. If exceeds, visualizes again.
 */
Game.prototype.waitForUser = function() {
  this.disableControl(false);
  var localThisObject = this;
  localThisObject.userTimer = setTimeout(function() {
    localThisObject.disableControl(true);
    localThisObject.moveNum = 0;
    localThisObject.showExclamation("!!", 2);
  }, 10000);
}

/*
 * Function  : start
 * Arguements    : None
 * Purpose   : Execution starts here.
 */
Game.prototype.start = function() {
  document.getElementById('startB').disabled = true;
  this.disableControl(true);
  this.clearTimers();
  this.initialize();
  this.showExclamation('--', 1);
}
//* *********************************************************************** *//

var simon = new Game();
