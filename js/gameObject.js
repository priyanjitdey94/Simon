/************************************************
* SIMON     - Memory game
* Developed by  - Priyanjit Dey
* Organization  - FusionCharts
*
************************************************/

/*
* CONSTRUCTOR   : GameObject
* @id       : button ID. 0 - green; 1 - red; 2 - yellow; 3 - blue; 
* @bgColor  : default color of button 
* @bgColorLight : Color when blinking
*/
var GameObject = function () {
  this.id = 0;
  this.bgColor = null;
  this.bgColorLight = null;
};

GameObject.prototype.initializeButton = function (id, color, colorLight) {
  this.id = id;
  this.bgColor = color;
  this.bgColorLight = colorLight;
};
/*
* Function  : display
* Arguements    : None
* Purpose   : Visualization on click
*/
GameObject.prototype.createFlash = function (tempObj) {
  var localThisObject = this;
  if (tempObj !== undefined) {
    localThisObject = tempObj;
  }

  setTimeout(function () {
    document.getElementById('bt' + localThisObject.id).style.backgroundColor = localThisObject.bgColorLight;
    document.getElementById('soundbutton' + localThisObject.id).play();
  }, 100);
  setTimeout(function () {
    document.getElementById('bt' + localThisObject.id).style.backgroundColor = localThisObject.bgColor;
    localThisObject.check();
  }, 200);
};

GameObject.prototype.display = function () {
  simon.disableControl(true);
  this.createFlash();
};

/*
* Function  : check
* Arguments     : None
* Purpose   : Checks whether the input is correct or not
*/
GameObject.prototype.check = function (_obj, _sequence, _moveNum, _isStrict) {
  var localThisObject = this;
  if (_obj !== undefined) {
    localThisObject = _obj;
    simon.sequence = [];
    simon.seqIterator = 0;
    for (var i = 0; i < _sequence.length; i++) {
      simon.sequence.push(_sequence[i]);
      simon.seqIterator++;
    }
  }
  if (_moveNum !== undefined) {
    simon.moveNum = _moveNum;
  }
  if (_isStrict !== undefined) {
    simon.isStrict = _isStrict;
  }

  if (localThisObject.id === simon.sequence[simon.moveNum]) {
    if (simon.moveNum >= 19) {
      simon.startSequence(1);
    } else if (simon.moveNum === simon.seqIterator - 1) {
      simon.moveNum = 0;
      simon.startSequence(0);
    } else {
      simon.moveNum++;
      simon.disableControl(false);
      simon.waitForUser();
    }
  } else {
    // document.getElementById('soundbuttonWrong').play();
    if (simon.isStrict === 1) {
      simon.showExclamation('!!', 1);
    } else {
      simon.moveNum = 0;
      simon.showExclamation('!!', 2);
    }
  }
};

//* ********************************************************//

var button0 = new GameObject();
button0.initializeButton(0, '#00BA47', '#89ed91');
var button1 = new GameObject();
button1.initializeButton(1, '#A50000', '#ef8686');
var button2 = new GameObject();
button2.initializeButton(2, '#C6B800', '#f4ed89');
var button3 = new GameObject();
button3.initializeButton(3, '#302293', '#6d75ed');
