
// import color from '../../utilspc/color.js'


// function faden (str) {
//   // var num1 = Number('0x' + str.split('#')[1])
//   console.log(str)
//   var num = Math.floor((Number('0x' + str.split('#')[1])) * 0.7 + 255 * 0.3)
//   console.log(num)
//   // console.log(num1, num)
//   // var num1 = ((num >> 16) + 50) > 255 ? 255 : ((num >> 16) + 50)
//   // var num2 = (Math.floor(num / 256) % 256 + 50) > 255 ? 255 : (Math.floor(num / 256) % 256 + 50)
//   // var num3 = ((num % 256) + 50) > 255 ? 255 : ((num % 256) + 50)
//   // console.log(num1, num2, num3)
//   // var newNum = num1 * 65536 + num2 * 256 + num3
//   var str1 = '#' + (num % 0xFFFFFF << 0).toString(16)
//   console.log(str1)
//   return str1
// }

// faden('#003456')

// var getRandomColor = function () {
//   return '#' + (Math.random() * 0xffffff << 0).toString(16)
// }

// Canvas.prototype.numberTurnIntoRGB = function (num) {
//   var str = (num % 0xFFFFFF << 0).toString(16)
//   if (str.length !== 6) {
//     while (str.length !== 6) {
//       str = '0' + str
//     }
//   }
//   return '#' + str
// }

// Canvas.prototype.drawSector = function () {
//   var angle = 0
//   var beginAngle = 0
//   var endAngle = 0
//   var sum = 0
//   for (let i = 0; i < this.num.length; i++) {
//     sum = sum + this.num[i]
//   }
//   for (let i = 0; i < this.num.length; i++) {
//     angle = 2 * Math.PI * this.num[i] / sum
//     endAngle = beginAngle + angle
//     this.ctx.beginPath()
//     if (this.color[i]) {
//       console.log('123')
//       this.ctx.fillStyle = this.color[i]
//     } else {
//       this.ctx.fillStyle = getRandomColor()
//     }
//     this.ctx.arc(this.ele.width / 2, this.ele.height / 2, 75, beginAngle, endAngle, false)
//     this.ctx.lineTo(this.ele.width / 2, this.ele.height / 2)
//     this.ctx.closePath()
//     this.ctx.fill()
//     beginAngle = beginAngle + angle
//   }
// }

// Canvas.prototype.drawCircular = function () {
//   var angle = 0
//   var beginAngle = (this.beginAngle - 90) * Math.PI / 180
//   var endAngle = 0
//   var sum = 0
//   for (let i = 0; i < this.num.length; i++) {
//     sum = sum + this.num[i]
//   }
//   // for (let i = 0; i < this.num.length; i++) {
//   let i = 0
//   var inter = setInterval(() => {
//     angle = 2 * Math.PI * this.num[i] / sum
//     endAngle = beginAngle + angle
//     this.ctx.beginPath()
//     if (this.color[i]) {
//       this.ctx.fillStyle = this.color[i]
//       this.ctx.strokeStyle = this.color[i]
//     } else {
//       this.ctx.fillStyle = getRandomColor()
//       this.ctx.strokeStyle = this.color[i]
//     }
//     this.ctx.arc(this.ele.width / 2, this.ele.height / 2, 75, beginAngle, endAngle, false)
//     this.ctx.lineTo(this.ele.width / 2, this.ele.height / 2)
//     this.ctx.closePath()
//     this.ctx.fill()
//     beginAngle = beginAngle + angle
//     this.ctx.fillStyle = '#FFFFFF'
//     this.ctx.beginPath()
//     this.ctx.arc(75, 75, 65, 0, Math.PI * 2, false)
//     this.ctx.closePath()
//     this.ctx.fill()
//     i++
//     if (i === this.color.length) {
//       clearInterval(inter)
//       return
//     }
//   }, 1000 / 60)
// }
// Canvas.prototype.drawCircularWithAnimation = function () {
//   var gra = color.gradientColor('#339955', '#66CCFF', 30)
//   var inter = setInterval(() => {
//     this.ctx.fillStyle = gra[this.nownum]
//     this.ctx.fillRect(50, 50, 50, 50)
//     if (this.nownum === gra.length - 1) {
//       clearInterval(inter)
//       return
//     }
//     this.nownum++
//   }, 1000 / 30)
// }

// Canvas.prototype.test = function () {
//   ctx.font="40px Arial";
//   ctx.fillText("Hello World",10,50);
// }

// Canvas.prototype.weapp = function () {
//   let i = 0
//   let ctx = wx.createCanvasContext('text1')
//   setInterval(function () {
//     ctx.clearRect(0, 0, 150, 150)
//     ctx.setFillStyle('red')
//     ctx.fillRect(10, i, 75, 75)
//     i++
//     ctx.draw(true)
//   }, 1000 / 60)
// }

// import color from '../../utilspc/color.js'
// import wx from '../../utilspc/canvas.js'

function imgReady(img, callback) {
  if (img.complete) {
    callback();
  } else {
    img.onload = callback;
  }
}

var wx = {
  createCanvasContext: function createCanvasContext(id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    return ctx;
  }
};

Circular = function(canvasId, obj) {
  var _this = this;
  this.countImg = 0;
  this.canvasId = canvasId;
  this.canvas = document.getElementById(this.canvasId);
  this.type = obj.type ? obj.type : 'pure';
  this.value = obj.value ? obj.value : 70;
  this.color = obj.color ? obj.color : '#00AAEF';
  this.colorArray = obj.colorArray ? obj.colorArray : ['#1FC695', '#8FE3CA'];
  this.backgroundColor = obj.backgroundColor !== undefined ? obj.backgroundColor : '#EBF1F7';
  //this.text = obj.text ? obj.text : ''
  this.textColor = obj.text ? obj.text : '#657180';
  this.lineCap = obj.lineCap ? obj.lineCap : 'round'
  this.animate = obj.animate ? obj.animate : false;
  this.haveBackground = obj.haveBackground !== undefined ? obj.haveBackground : false;
  this.callback = obj.callback;
  this.values = obj.values ? obj.values : [30, 50, 70];
  this.settings = obj.value ? obj.value : {
    valueArray: [30, 10, 5, 25, 30],
    colorArray: ['#FF9900', '#1FC695', '#00AAEF', '#66CCFF', '#000000'],
    lineWidthArray: [30, 10, 20, 15, 8]
  };
  if (this.settings.lineWidthArray) {
    for (var i = 0; i < this.settings.lineWidthArray.length; i++) {
      this.settings.lineWidthArray[i] *= 2;
    }
  }
  this.showNumber = obj.showNumber !== undefined ? obj.showNumber : true;
  this.lineWidth = obj.lineWidth ? obj.lineWidth : 10;
  this.radius = (obj.radius ? obj.radius : 70) - this.lineWidth / 2;
  this.gap = obj.gap ? obj.gap : 1;
  this.center = {
    left: obj.cx ? obj.cx : this.radius + this.lineWidth / 2,
    top: obj.cy ? obj.cy : this.radius + this.lineWidth / 2
  };
  this.lineWidth *= 2;
  this.radius *= 2;
  this.center.left *= 2;
  this.center.top *= 2;
  // 以下为私有变量
  this.translatedx = 0;
  this.translatedy = 0;
  this.i = 0;
  this.iArray = [];
  this.circularAni = null;
  this.frameRate = 60;
  this.canChange = true;
  this.offset = 0;
  this.oldSelect = 0;
  this.isRolling = false;
  this.imageSrcArray = obj.imageSrcArray !== undefined ? obj.imageSrcArray : [];
  this.imageArray = [];
  this.imgWidth = obj.imgWidth !== undefined ? obj.imgWidth : null;
  this.imgHeight = obj.imgHeight !== undefined ? obj.imgHeight : null;
  if (this.type === 'rollingCircular') {
    for (var _i = 0; _i < this.imageSrcArray.length; _i++) {
      var img = new Image();
      img.src = this.imageSrcArray[_i];
      imgReady(img, function () {
        _this.countImg++;
        if (_this.countImg === _this.imageSrcArray.length) {
          _this.needDraw && _this.draw();
        }
      });
      this.imageArray.push(img);
    }
    console.log(this.imageArray);
  }
  this.canvas.addEventListener('touchstart', function (e) {
    // e.stopPropagation()
    if (_this.type === 'threeCircular') {
      _this.threeCircularClicked(e);
    } else if (_this.type === 'rollingCircular') {
      _this.rollingCircularClicked(e);
    }
  });

  this.canvas.addEventListener('touchend', function (e) {
    // e.stopPropagation()
    if (_this.type === 'threeCircular') {
      _this.threeCircularUp(e);
    }
  });
};

Circular.prototype.show = function () {
  if (this.type !== 'rollingCircular') {
    this.draw();
  } else if (this.type === 'rollingCircular' && this.countImg === this.imageArray.length) {
    this.draw();
  } else {
    this.needDraw = true;
  }
};

Circular.prototype.draw = function () {
  this.ctx = wx.createCanvasContext(this.canvasId);
  this.ctx.save();
  this.setValue(this.value);
};

Circular.prototype.setValue = function (value) {
  if (this.type === 'pure' || this.type === 'twoCircular') {
    this.setPureValue(value);
  } else if (this.type === 'multiCircular') {
    this.drawThreeRings(value);
  } else if (this.type === 'personalCircular') {
    this.setPersonalCircularValue(value);
  } else if (this.type === 'bounceCircular') {
    this.drawBounceCircular(value);
  } else if (this.type === 'threeCircular') {
    if (Array.isArray(value)) {
      this.setThreeCircularValue(value);
    } else {
      this.initThreeCircularValue(value.valueArray);
    }
  } else if (this.type === 'rollingCircular') {
    this.initRollingCircular(value);
  }
};

Circular.prototype.getValue = function () {
  return this.value;
};

Circular.prototype.rollingCircularClicked = function (e) {
  // console.log(this)
  if (this.isRolling) {
    return;
  }
  var box = this.canvas.getBoundingClientRect();
  var clickX = (e.touches[0].clientX - box.left / 2) * this.canvas.width / box.width;
  var clickY = (e.touches[0].clientY - box.top / 2) * this.canvas.height / box.height;
  var touchAngle = (Math.atan2(clickY * 2 - this.center.top, clickX * 2 - this.center.left) / Math.PI * 180 + 270) % 360;
  console.log(touchAngle);
  var clockwise = touchAngle < 180;
  var sum = 0;
  var step = 0;
  var stepplus1 = this.value.valueArray[0];
  for (var i = 0; i < this.value.valueArray.length; i++) {
    sum += this.value.valueArray[i];
  }
  for (var _i2 = 0; _i2 < this.value.valueArray.length; _i2++) {
    var range1 = step / sum * 360 - this.offset;
    var range2 = stepplus1 / sum * 360 - this.offset;
    if (range1 < 0) {
      range1 = step / sum * 360 - (this.offset - 360);
    }
    if (range2 < 0) {
      range2 = stepplus1 / sum * 360 - (this.offset - 360);
    }
    if (range1 <= touchAngle && touchAngle <= range2) {
      this.isRolling = true;
      this.drawRollingCircular(this.value, _i2, clockwise);
      break;
    }
    step += this.value.valueArray[_i2];
    stepplus1 = step + this.value.valueArray[_i2 + 1];
  }
};

Circular.prototype.drawRollingCircular = function (value, select) {
  var _this2 = this;

  var clockwise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // requestAnimationFrame(this.drawRollingCircular);
  var sum = 0;
  var t = 0;
  var angle = 0;
  var rolling = 0;
  var goalAngle = 0;
  for (var i = 0; i < value.valueArray.length; i++) {
    if (i < select) {
      rolling += value.valueArray[i];
    }
    sum += value.valueArray[i];
  }
  goalAngle = (rolling + value.valueArray[select] / 2) / sum * 360;
  if (clockwise) {
    if (goalAngle >= this.offset) {
      goalAngle = goalAngle - this.offset;
    } else if (goalAngle < this.offset) {
      goalAngle = goalAngle + 360 - this.offset;
    }
  } else {
    if (goalAngle >= this.offset) {
      goalAngle = 360 - (goalAngle - this.offset);
    } else if (goalAngle < this.offset) {
      goalAngle = 360 - (goalAngle + 360 - this.offset);
    }
  }
  console.log('aftergoal:' + goalAngle + ', this.offset' + this.offset + ', rolling' + rolling);
  this.circularAni = setInterval(function () {
    var begin = 0;
    angle = t;
    t++;
    _this2.ctx.clearRect(0, 0, _this2.center.left * 4, _this2.center.top * 4);
    _this2.ctx.setLineWidth(30);
    for (var _i3 = 0; _i3 < value.valueArray.length; _i3++) {
      var beginAngle = -(_this2.offset + (clockwise ? 1 : -1) * Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + begin / sum * 2 * Math.PI + 0.5 * Math.PI;
      var endAngle = -(_this2.offset + (clockwise ? 1 : -1) * Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + (begin + value.valueArray[_i3]) / sum * 2 * Math.PI + 0.5 * Math.PI;
      _this2.ctx.setStrokeStyle(value.colorArray[_i3]);
      _this2.ctx.beginPath();
      _this2.ctx.setLineWidth(_this2.lineWidth);
      _this2.ctx.arc(_this2.center.left, _this2.center.top, _this2.radius, beginAngle, endAngle, false);
      _this2.ctx.stroke();
      begin += value.valueArray[_i3];
    }
    begin = 50;
    if (_this2.imageSrcArray) {
      for (var _i4 = 0; _i4 < value.valueArray.length; _i4++) {
        var _beginAngle = -(_this2.offset + (clockwise ? 1 : -1) * Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + begin / sum * 2 * Math.PI + 0.5 * Math.PI;
        var _endAngle = -(_this2.offset + (clockwise ? 1 : -1) * Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + (begin + value.valueArray[_i4]) / sum * 2 * Math.PI + 0.5 * Math.PI;
        _this2.ctx.drawImage(_this2.imageArray[_i4], _this2.center.left - _this2.radius * Math.cos(_beginAngle + (_endAngle - _beginAngle) / 2) - _this2.imgHeight / 2, _this2.center.top - _this2.radius * Math.sin(_beginAngle + (_endAngle - _beginAngle) / 2) - _this2.imgHeight / 2, _this2.imgWidth, _this2.imgHeight);
        begin += value.valueArray[_i4];
      }
    }
    if (angle >= goalAngle) {
      clearInterval(_this2.circularAni);
      var offset = 0;
      if (clockwise) {
        offset = (angle + _this2.offset) % 360;
      } else {
        offset = (_this2.offset - angle) % 360;
        if (offset < 0) {
          offset += 360;
        }
      }
      var t2 = 0;
      var begin2 = 0;
      var ani = setInterval(function () {
        _this2.ctx.clearRect(0, 0, _this2.center.left * 4, _this2.center.top * 4);
        for (var _i5 = 0; _i5 < value.valueArray.length; _i5++) {
          if (_i5 === select) {
            _this2.ctx.setStrokeStyle(value.colorArray[_i5]);
            _this2.ctx.beginPath();
            _this2.ctx.save();
            _this2.ctx.translate(0, t2);
            _this2.ctx.arc(_this2.center.left, _this2.center.top, _this2.radius, -offset / 180 * Math.PI + begin2 / sum * 2 * Math.PI + 0.5 * Math.PI, -offset / 180 * Math.PI + (begin2 + value.valueArray[_i5]) / sum * 2 * Math.PI + 0.5 * Math.PI, false);
            _this2.ctx.stroke();
            _this2.ctx.restore();
            begin2 += value.valueArray[_i5];
          } else {
            _this2.ctx.setStrokeStyle(value.colorArray[_i5]);
            _this2.ctx.setLineWidth(_this2.lineWidth);
            _this2.ctx.beginPath();
            _this2.ctx.arc(_this2.center.left, _this2.center.top, _this2.radius, -offset / 180 * Math.PI + begin2 / sum * 2 * Math.PI + 0.5 * Math.PI, -offset / 180 * Math.PI + (begin2 + value.valueArray[_i5]) / sum * 2 * Math.PI + 0.5 * Math.PI, false);
            _this2.ctx.stroke();
            begin2 += value.valueArray[_i5];
          }
        }
        if (_this2.imageSrcArray) {
          for (var _i6 = 0; _i6 < value.valueArray.length; _i6++) {
            // console.log(begin)
            var _beginAngle2 = -(_this2.offset + (clockwise ? 1 : -1) * Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + begin / sum * 2 * Math.PI + 0.5 * Math.PI;
            var _endAngle2 = -(_this2.offset + (clockwise ? 1 : -1) * Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + (begin + value.valueArray[_i6]) / sum * 2 * Math.PI + 0.5 * Math.PI;
            _this2.ctx.drawImage(_this2.imageArray[_i6], _this2.center.left - _this2.radius * Math.cos(_beginAngle2 + (_endAngle2 - _beginAngle2) / 2) - _this2.imgHeight / 2, _this2.center.top - _this2.radius * Math.sin(_beginAngle2 + (_endAngle2 - _beginAngle2) / 2) - _this2.imgHeight / 2 + (_i6 === select ? t2 : 0), _this2.imgWidth, _this2.imgHeight);
            begin += value.valueArray[_i6];
          }
        }
        if (t2 >= 8) {
          clearInterval(ani);
          begin = 0 - value.valueArray[0] - value.valueArray[1];
          _this2.isRolling = false;
          _this2.offset = offset;
          return;
        }
        t2++;
      }, 1000 / 30);
    }
  }, 1000 / 240);
};

// Circular.prototype.drawRollingCircular = function (value, select) {
//   let sum = 0
//   let t = 0
//   let angle = 0
//   let rolling = 0
//   let goalAngle = 0
//   for (let i = 0; i < value.valueArray.length; i++) {
//     if (i < select) {
//       rolling += value.valueArray[i]
//     }
//     sum += value.valueArray[i]
//   }
//   goalAngle = (rolling + value.valueArray[select] / 2) / sum * 360
//   if (goalAngle >= this.offset) {
//     goalAngle = goalAngle - this.offset
//   } else if (goalAngle < this.offset) {
//     goalAngle = goalAngle - (this.offset - 360)
//   }
//   this.circularAni = setInterval(() => {
//     let begin = 0
//     angle = t
//     t++
//     this.ctx.clearRect(0, 0, this.center.left * 4, this.center.top * 4)
//     this.lineWidth = 30
//     this.ctx.setLineWidth(30)
//     for (let i = 0; i < value.valueArray.length; i++) {
//       let beginAngle = -(this.offset + Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + begin / sum * 2 * Math.PI + 0.5 * Math.PI
//       let endAngle = -(this.offset + Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + (begin + value.valueArray[i]) / sum * 2 * Math.PI + 0.5 * Math.PI
//       this.ctx.setStrokeStyle(value.colorArray[i])
//       this.ctx.beginPath()
//       this.ctx.arc(this.center.left, this.center.top, this.radius, beginAngle, endAngle, false)
//       this.ctx.stroke()
//       begin += value.valueArray[i]
//     }
//     begin = 0 - value.valueArray[0] - value.valueArray[1]
//     for (let i = 0; i < value.valueArray.length; i++) {
//       console.log(begin)
//       let endAngle = -(this.offset + Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + (begin + value.valueArray[i]) / sum * 2 * Math.PI
//       let beginAngle = -(this.offset + Math.tween.Quad.easeInOut(t, 0, goalAngle, goalAngle)) / 180 * Math.PI + begin / sum * 2 * Math.PI
//       this.ctx.drawImage(this.imageArray[i], this.center.left - this.radius * Math.cos(beginAngle + (endAngle - beginAngle) / 2) - 16, this.center.top - this.radius * Math.sin(beginAngle + (endAngle - beginAngle) / 2) - 16)
//       begin += value.valueArray[i]
//       var lastEndAngle = endAngle
//       var lastBeginAngle = beginAngle
//       console.log('++', lastBeginAngle, lastEndAngle)
//     }
//     if (angle >= goalAngle) {
//       this.thatValue = 0
//     }
// }
Circular.prototype.initRollingCircular = function (settings) {
  var _this3 = this;

  this.circularAni = setInterval(function () {
    _this3.ctx.clearRect(0, 0, _this3.center.left * 2, _this3.center.top * 2);
    for (var i = 0; i < settings.valueArray.length; i++) {
      _this3.iArray.push(0);
    }
    for (var _i7 = 0; _i7 < settings.valueArray.length; _i7++) {
      // this.drawACircular(30, '', settings.colorArray[i], Math.tween.Bounce.easeInOut(this.iArray[settings.valueArray.length - 1], this.iArray[settings.valueArray.length - 1 - i], 2, 100), this.radius)
      _this3.drawACircularFrom(_this3.lineWidth, '', settings.colorArray[settings.valueArray.length - 1 - _i7], _this3.iArray[settings.valueArray.length - 1 - _i7], _this3.radius, 50);
    }
    _this3.ctx.lineWidth = _this3.lineWidth;
    _this3.ctx.setFillStyle('white');
    _this3.ctx.beginPath();
    _this3.ctx.arc(_this3.center.left, _this3.center.top, 60, 0, 2 * Math.PI, false);
    _this3.ctx.fill();
    _this3.ctx.draw(false);
    if (_this3.iArray[settings.valueArray.length - 1] >= 100) {
      clearInterval(_this3.circularAni);
      _this3.drawRollingCircular(_this3.value, 0);
      return;
    } else {
      for (var _i8 = 0; _i8 < settings.valueArray.length; _i8++) {
        var sum = 0;
        for (var j = 0; j <= _i8; j++) {
          sum += settings.valueArray[j];
        }
        _this3.iArray[_i8] = _this3.iArray[_i8] + sum * 2 / 10;
        // this.iArray[i] = this.iArray[i] + (new Function('return ' + settings.valueArray.slice(0, i + 1).join('+')))() * 2 / 100
      }
    }
  }, 1000 / 60);
};

Circular.prototype.drawBounceCircular = function (value) {
  this.drawAnimationBackground
  // this.setBounceCircularValue(this.value)
  ();
};

// Circular.prototype.drawBounceCircular = function () {
// }

Circular.prototype.drawAnimationBackground = function () {
  var _this4 = this;

  var i = 1;
  var j = 1;
  var t = 1;
  // let animatedFlag = false
  console.log(i, j, t);
  this.circularAni = setInterval(function () {
    var a = Math.tween.Elastic.easeOut(t, 0, _this4.radius, 93);
    _this4.ctx.clearRect(0, 0, _this4.center.left * 4, _this4.center.top * 4);
    _this4.drawACircular(2, '', 'rgba(255, 255, 255, 0.2)', 100, t * 1.5 * _this4.radius / 60);
    _this4.drawACircular(4, '', 'rgba(255, 255, 255, 0.5)', 100, t * 1.5 * _this4.radius * 0.9 / 60);
    _this4.drawACircle('rgba(255, 255, 255, 0.1)', 100, a * 0.7);
    _this4.drawACircle('rgba(255, 255, 255, 0.1)', 100, a * 0.5
    // this.ctx.clearRect(0, 0, this.center.left * 4, this.center.top * 4)
    // this.drawACircular(2, '', 'rgba(255, 255, 255, 0.2)', 100, i * 140 / 60)
    // this.drawACircular(4, '', 'rgba(255, 255, 255, 0.5)', 100, i * 120 / 60)
    // this.drawACircle('rgba(255, 255, 255, 0.1)', 100, i * this.radius * 0.5 / 60)
    // this.drawACircle('rgba(255, 255, 255, 0.1)', 100, j * this.radius * 0.7 / 60)
    );t++;
    if (t * 1.5 * _this4.radius / 60 >= _this4.radius) {
      clearInterval(_this4.circularAni);
      _this4.setBounceCircularValue(_this4.value);
    }
  }, 1000 / 60
  // setTimeout(() => {
  //   clearInterval(this.circularAni)
  //   // this.ctx.clearRect(0, 0, this.center.left * 4, this.center.top * 4)
  //   this.setBounceCircularValue(this.value)
  // }, 1500)
  );
};

Circular.prototype.drawBounceBackground = function () {
  this.drawACircular(1, '', 'rgba(255, 255, 255, 0.2)', 100, this.radius);
  this.drawACircular(2, '', 'rgba(255, 255, 255, 0.5)', 100, this.radius * 0.9);
  this.drawACircle('rgba(255, 255, 255, 0.1)', 100, this.radius * 0.5);
  this.drawACircle('rgba(255, 255, 255, 0.1)', 100, this.radius * 0.7);
};

Circular.prototype.setBounceCircularValue = function (value) {
  var _this5 = this;

  if (value > 100) {
    value = 100;
    this.i = 100;
  }
  if (value < 0) {
    value = 0;
    this.i = 0;
  }
  this.value = value;
  if (this.circularAni) {
    clearInterval(this.circularAni);
  }
  var isNegative = this.value - this.i < 0;
  this.circularAni = setInterval(function () {
    _this5.ctx.clearRect(0, 0, _this5.center.left * 2, _this5.center.top * 2);
    _this5.drawBounceBackground();
    _this5.drawACircular(_this5.lineWidth, '', 'rgba(255, 255, 255, 0.6)', _this5.i, _this5.radius * 0.9 - _this5.lineWidth / 2);
    if (_this5.i === _this5.value) {
      clearInterval(_this5.circularAni);
      return;
    } else {
      _this5.i = isNegative ? _this5.i - 1 : _this5.i + 1;
    }
  }, 1000 / this.frameRate);
};

Circular.prototype.setPureValue = function (value) {
  var _this6 = this;

  if (value > 100) {
    value = 100;
    this.i = 100;
  }
  if (value < 0) {
    value = 0;
    this.i = 0;
  }
  this.value = value;
  if (this.circularAni) {
    clearInterval(this.circularAni);
  }
  var isNegative = this.value - this.i < 0;
  if (this.animate) {
    this.circularAni = setInterval(function () {
      _this6.ctx.clearRect(0, 0, _this6.center.left * 2, _this6.center.top * 2);
      if (_this6.type !== 'twoCircular') {
        _this6.drawBackgroundCircular(_this6.lineWidth, _this6.backgroundColor);
        _this6.drawACircular(_this6.lineWidth, _this6.lineCap, _this6.color, _this6.i, _this6.radius);
      }
      // 百分比圆环绘制
      if (_this6.type === 'twoCircular') {
        _this6.drawACircular(_this6.lineWidth, _this6.lineCap, _this6.colorArray[0], _this6.i, _this6.radius - 24);
        _this6.drawACircular(_this6.lineWidth - 4, _this6.lineCap, _this6.colorArray[1], _this6.i, _this6.radius);
      }
      // 文字绘制
      // this.drawKanji()
      _this6.ctx.setStrokeStyle(_this6.textColor);
      _this6.ctx.setFillStyle(_this6.textColor);
      _this6.ctx.setTextAlign('center');
      _this6.ctx.setFontSize(30);
      if (_this6.showNumber) {
        _this6.ctx.fillText(_this6.i + '%', _this6.center.left, _this6.center.top + 10, 150);
      }
      _this6.ctx.draw(false);
      if (_this6.i === _this6.value) {
        clearInterval(_this6.circularAni);
        return;
      } else {
        _this6.i = isNegative ? _this6.i - 1 : _this6.i + 1;
      }
    }, 1000 / this.frameRate);
  } else {
    this.ctx.clearRect(0, 0, this.center.left * 2, this.center.top * 2);
    this.ctx.setStrokeStyle(this.backgroundColor);
    this.ctx.setLineWidth(this.lineWidth);
    this.ctx.beginPath();
    this.ctx.arc(this.center.left, this.center.top, this.radius, -Math.PI * 2 / 4, Math.PI * 2 - Math.PI * 2 / 4, false);
    this.ctx.stroke
    // this.ctx.fillStyle = '#FF0000'
    ();this.ctx.setStrokeStyle(this.color);
    this.ctx.setLineCap(this.lineCap);
    this.ctx.beginPath();
    this.ctx.arc(this.center.left, this.center.top, this.radius, -Math.PI * 2 / 4, Math.PI * 2 * this.value / 100 - Math.PI * 2 / 4, false);
    this.ctx.stroke();
    this.ctx.setStrokeStyle(this.textColor);
    this.ctx.setFillStyle(this.textColor);
    this.ctx.setTextAlign('center');
    this.ctx.setFontSize(30);
    if (this.showNumber) {
      this.ctx.fillText(this.value + '%', this.center.left, this.center.top + 10, 150);
    }
    this.ctx.draw(false);
  }
};

Circular.prototype.drawACircular = function (lineWidth, lineCap, color, percent, radius) {
  this.ctx.setLineWidth(lineWidth);
  this.ctx.setStrokeStyle(color);
  this.ctx.setLineCap(lineCap);
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, radius, -Math.PI * 2 / 4, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4, false);
  this.ctx.stroke();
};

Circular.prototype.drawACircularFrom = function (lineWidth, lineCap, color, percent, radius, from) {
  this.ctx.setLineWidth(lineWidth);
  this.ctx.setStrokeStyle(color);
  this.ctx.setLineCap(lineCap);
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, radius, -Math.PI * 2 / 4 + from / 100 * 2 * Math.PI, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4 + from / 100 * 2 * Math.PI, false);
  this.ctx.stroke();
};

Circular.prototype.drawACircle = function (color, percent, radius) {
  this.ctx.setLineWidth(1);
  this.ctx.setFillStyle(color);
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, radius, -Math.PI * 2 / 4, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4, false);
  this.ctx.fill();
};

Circular.prototype.drawBackgroundCircular = function (lineWidth, color) {
  this.ctx.setLineWidth(lineWidth);
  this.ctx.setStrokeStyle(color);
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, this.radius, -Math.PI * 2 / 4, Math.PI * 2 - Math.PI * 2 / 4, false);
  this.ctx.stroke();
};

// Circular.prototype.drawCircularText = function (text)
Circular.prototype.drawThreeRings = function (settings) {
  var _this7 = this;

  this.ctx.setFontSize(24);
  this.circularAni = setInterval(function () {
    _this7.ctx.clearRect(0, 0, _this7.center.left * 2, _this7.center.top * 2);
    for (var _i9 = 0; _i9 < settings.valueArray.length; _i9++) {
      _this7.iArray.push(0);
    }
    for (var _i10 = 0; _i10 < settings.valueArray.length; _i10++) {
      _this7.drawACircular(settings.lineWidthArray[_i10], '', settings.colorArray[_i10], _this7.iArray[settings.valueArray.length - 1 - _i10], _this7.radius);
    }
    if (_this7.iArray[settings.valueArray.length - 1] === 100) {
      clearInterval(_this7.circularAni);
      _this7.ctx.setLineWidth(2);
      for (var i = 0; i < settings.valueArray.length; i++) {
        var sum = 0;
        for (var _j = 0; _j < i; _j++) {
          sum += settings.valueArray[_j];
        }
        var pos = getArcNewPos(sum + settings.valueArray[i] / 2, 100, _this7.center.left, _this7.center.top, _this7.radius);
        _this7.ctx.setStrokeStyle(settings.colorArray[settings.valueArray.length - 1 - i]);
        _this7.ctx.setFillStyle(settings.colorArray[settings.valueArray.length - 1 - i]);
        _this7.ctx.beginPath();
        _this7.ctx.moveTo(pos.x, pos.y);
        if (pos.x < _this7.center.left && pos.y < _this7.center.top) {
          _this7.ctx.lineTo(pos.x - 50 / 3 * 2 * 2, pos.y - 50 / 3 * 2 * 2);
          _this7.ctx.stroke();
          _this7.ctx.moveTo(pos.x - 50 / 3 * 2 * 2, pos.y - 50 / 3 * 2 * 2);
          _this7.ctx.lineTo(pos.x - 100 / 3 * 2 * 2, pos.y - 50 / 3 * 2 * 2);
          _this7.ctx.fillText(settings.valueArray[i] + '%', pos.x - 100 / 3 * 2 * 2 + 5, pos.y - 50 / 3 * 2 * 2 - 2);
        } else if (pos.x > _this7.center.left && pos.y < _this7.center.top) {
          _this7.ctx.lineTo(pos.x + 50 / 3 * 2 * 2, pos.y - 50 / 3 * 2 * 2);
          _this7.ctx.stroke();
          _this7.ctx.moveTo(pos.x + 50 / 3 * 2 * 2, pos.y - 50 / 3 * 2 * 2);
          _this7.ctx.lineTo(pos.x + 100 / 3 * 2 * 2, pos.y - 50 / 3 * 2 * 2);
          _this7.ctx.fillText(settings.valueArray[i] + '%', pos.x + 100 / 3 * 2 * 2 - 25, pos.y - 50 / 3 * 2 * 2 - 2);
        } else if (pos.x > _this7.center.left && pos.y > _this7.center.top) {
          _this7.ctx.lineTo(pos.x + 50 / 3 * 2 * 2, pos.y + 50 / 3 * 2 * 2);
          _this7.ctx.stroke();
          _this7.ctx.moveTo(pos.x + 50 / 3 * 2 * 2, pos.y + 50 / 3 * 2 * 2);
          _this7.ctx.lineTo(pos.x + 100 / 3 * 2 * 2, pos.y + 50 / 3 * 2 * 2);
          _this7.ctx.fillText(settings.valueArray[i] + '%', pos.x + 100 / 3 * 2 * 2 - 25, pos.y + 50 / 3 * 2 * 2 - 2);
        } else {
          _this7.ctx.lineTo(pos.x - 50 / 3 * 2 * 2, pos.y + 50 / 3 * 2 * 2);
          _this7.ctx.stroke();
          _this7.ctx.moveTo(pos.x - 50 / 3 * 2 * 2, pos.y + 50 / 3 * 2 * 2);
          _this7.ctx.lineTo(pos.x - 100 / 3 * 2 * 2, pos.y + 50 / 3 * 2 * 2);
          _this7.ctx.fillText(settings.valueArray[i] + '%', pos.x - 100 / 3 * 2 * 2 + 5, pos.y + 50 / 3 * 2 * 2 - 2);
        }
        _this7.ctx.stroke();
      }
      _this7.ctx.draw(false);
      return;
    } else {
      for (var _i11 = 0; _i11 < settings.valueArray.length; _i11++) {
        var _sum = 0;
        for (var j = 0; j <= _i11; j++) {
          _sum += settings.valueArray[j];
        }
        _this7.iArray[_i11] = _this7.iArray[_i11] + _sum * 2 / 100;
        // this.iArray[i] = this.iArray[i] + (new Function('return ' + settings.valueArray.slice(0, i + 1).join('+')))() * 2 / 100
      }
    }
    _this7.ctx.draw(false);
  }, 1000 / this.frameRate);
};

// Circular.prototype.drawACircular = func
Circular.prototype.setThreeCircularValue = function (value, isClick) {
  var _this8 = this;

  if (!isClick) {
    if (!this.canChange) {
      return;
    }
    this.canChange = false;
  }
  var t = 0;
  if (this.circularAni) {
    clearInterval(this.circularAni);
  }
  if (value.toString() === this.value.valueArray.toString()) {
    this.ctx.clearRect(0, 0, 1000, 1000);
    if (this.haveBackground) {
      if (this.backgroundColor !== undefined) {
        this.drawACircular(this.lineWidth, this.lineCap, this.backgroundColor, 100, this.radius);
        this.drawACircular(this.lineWidth, this.lineCap, this.backgroundColor, 100, this.radius + this.lineWidth + this.gap);
        this.drawACircular(this.lineWidth, this.lineCap, this.backgroundColor, 100, this.radius + this.lineWidth * this.gap * 2 + this.gap * 2);
      } else {
        this.drawACircular(this.lineWidth, this.lineCap, this.value.colorArray[0], 100, this.radius);
        this.drawACircular(this.lineWidth, this.lineCap, this.value.colorArray[1], 100, this.radius + this.lineWidth + this.gap);
        this.drawACircular(this.lineWidth, this.lineCap, this.value.colorArray[2], 100, this.radius + this.lineWidth * this.gap * 2 + this.gap * 2);
        this.drawACircular(this.lineWidth, this.lineCap, 'rgba(0, 0, 0, 0.5)', 100, this.radius);
        this.drawACircular(this.lineWidth, this.lineCap, 'rgba(0, 0, 0, 0.5)', 100, this.radius + this.lineWidth + this.gap);
        this.drawACircular(this.lineWidth, this.lineCap, 'rgba(0, 0, 0, 0.5)', 100, this.radius + this.lineWidth * this.gap * 2 + this.gap * 2);
      }
    }
    this.drawACircular(this.lineWidth, this.lineCap, this.value.colorArray[0], value[0], this.radius);
    this.drawACircular(this.lineWidth, this.lineCap, this.value.colorArray[1], value[1], this.radius + this.lineWidth + this.gap);
    this.drawACircular(this.lineWidth, this.lineCap, this.value.colorArray[2], value[2], this.radius + this.lineWidth * this.gap * 2 + this.gap * 2);
    return;
  }
  this.circularAni = setInterval(function () {
    // console.log('hahah')
    _this8.ctx.clearRect(0, 0, 1000, 1000);
    if (_this8.haveBackground) {
      if (_this8.backgroundColor !== undefined) {
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.backgroundColor, 100, _this8.radius);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.backgroundColor, 100, _this8.radius + _this8.lineWidth + _this8.gap);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.backgroundColor, 100, _this8.radius + _this8.lineWidth * _this8.gap * 2 + _this8.gap * 2);
      } else {
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.value.colorArray[0], 100, _this8.radius);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.value.colorArray[1], 100, _this8.radius + _this8.lineWidth + _this8.gap);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.value.colorArray[2], 100, _this8.radius + _this8.lineWidth * _this8.gap * 2 + _this8.gap * 2);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, 'rgba(0, 0, 0, 0.5)', 100, _this8.radius);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, 'rgba(0, 0, 0, 0.5)', 100, _this8.radius + _this8.lineWidth + _this8.gap);
        _this8.drawACircular(_this8.lineWidth, _this8.lineCap, 'rgba(0, 0, 0, 0.5)', 100, _this8.radius + _this8.lineWidth * _this8.gap * 2 + _this8.gap * 2);
      }
    }
    // console.log(value[0], this.value.valueArray[0])
    _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.value.colorArray[0], Math.tween.Cubic.easeInOut(t, _this8.value.valueArray[0], value[0] - _this8.value.valueArray[0], 100), _this8.radius);
    _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.value.colorArray[1], Math.tween.Cubic.easeInOut(t, _this8.value.valueArray[1], value[1] - _this8.value.valueArray[1], 100), _this8.radius + _this8.lineWidth + _this8.gap);
    _this8.drawACircular(_this8.lineWidth, _this8.lineCap, _this8.value.colorArray[2], Math.tween.Cubic.easeInOut(t, _this8.value.valueArray[2], value[2] - _this8.value.valueArray[2], 100), _this8.radius + _this8.lineWidth * _this8.gap * 2 + _this8.gap * 2);
    if (t === 100) {
      clearInterval(_this8.circularAni);
      _this8.value.valueArray = value;
      _this8.canChange = true;
    }
    t++;
  }, 1000 / this.frameRate);
};

Circular.prototype.initThreeCircularValue = function (value) {
  var _this9 = this;

  var t = 0;
  if (!this.canChange) {
    return;
  }
  this.canChange = false;
  this.circularAni = setInterval(function () {
    _this9.ctx.clearRect(0, 0, _this9.center.left * 4, _this9.center.top * 4);
    if (_this9.haveBackground) {
      if (_this9.backgroundColor !== undefined) {
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.backgroundColor, 100, _this9.radius);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.backgroundColor, 100, _this9.radius + _this9.lineWidth + _this9.gap);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.backgroundColor, 100, _this9.radius + _this9.lineWidth * _this9.gap * 2 + _this9.gap * 2);
      } else {
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.value.colorArray[0], 100, _this9.radius);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.value.colorArray[1], 100, _this9.radius + _this9.lineWidth + _this9.gap);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.value.colorArray[2], 100, _this9.radius + _this9.lineWidth * _this9.gap * 2 + _this9.gap * 2);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, 'rgba(0, 0, 0, 0.5)', 100, _this9.radius);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, 'rgba(0, 0, 0, 0.5)', 100, _this9.radius + _this9.lineWidth + _this9.gap);
        _this9.drawACircular(_this9.lineWidth, _this9.lineCap, 'rgba(0, 0, 0, 0.5)', 100, _this9.radius + _this9.lineWidth * _this9.gap * 2 + _this9.gap * 2);
      }
    }
    _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.value.colorArray[0], Math.tween.Cubic.easeInOut(t, 0, value[0], 100), _this9.radius);
    _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.value.colorArray[1], Math.tween.Cubic.easeInOut(t, 0, value[1], 100), _this9.radius + _this9.lineWidth + _this9.gap);
    _this9.drawACircular(_this9.lineWidth, _this9.lineCap, _this9.value.colorArray[2], Math.tween.Cubic.easeInOut(t, 0, value[2], 100), _this9.radius + _this9.lineWidth * _this9.gap * 2 + _this9.gap * 2);
    // // 文字绘制
    // // this.drawKanji()
    // this.ctx.setStrokeStyle(this.textColor)
    // this.ctx.setFillStyle(this.textColor)
    // this.ctx.setTextAlign('center')
    // this.ctx.setFontSize(30)
    // this.ctx.fillText(`${this.i}%`, this.center.left, this.center.top + 10, 150)
    // this.ctx.draw(false)
    if (t === 100) {
      clearInterval(_this9.circularAni);
      _this9.value.valueArray = value;
      _this9.canChange = true;
    }
    t++;
  }, 1000 / this.frameRate);
};

Circular.prototype.threeCircularClicked = function (e) {
  // if (!this.canChange) {
  //   return
  // }
  var box = this.canvas.getBoundingClientRect();
  var clickX = (e.touches[0].clientX - box.left / 2) * this.canvas.width / box.width;
  var clickY = (e.touches[0].clientY - box.top / 2) * this.canvas.height / box.height;
  var distance = Math.sqrt((clickX * 2 - this.center.left) * (clickX * 2 - this.center.left) + (clickY * 2 - this.center.top) * (clickY * 2 - this.center.top));
  if (distance > this.radius - this.lineWidth / 2 && distance < this.radius + this.lineWidth / 2) {
    this.callback && this.callback[0]();
    this.setThreeCircularValue(this.value.valueArray, true);
    this.drawACircular(this.lineWidth, this.lineCap, 'rgba(255, 255, 255, 0.2)', this.value.valueArray[0], this.radius);
  } else if (distance > this.radius + this.lineWidth - this.lineWidth / 2 + 1 && distance < this.radius + this.lineWidth * 1.5 + 1) {
    this.callback && this.callback[1]();
    this.setThreeCircularValue(this.value.valueArray, true);
    this.drawACircular(this.lineWidth, this.lineCap, 'rgba(255, 255, 255, 0.2)', this.value.valueArray[1], this.radius + this.lineWidth + 1);
  } else if (distance > this.radius + this.lineWidth * 2 - this.lineWidth / 2 + 2 && distance < this.radius + this.lineWidth * 2.5 + 2) {
    this.callback && this.callback[2]();
    this.setThreeCircularValue(this.value.valueArray, true);
    this.drawACircular(this.lineWidth, this.lineCap, 'rgba(255, 255, 255, 0.2)', this.value.valueArray[2], this.radius + this.lineWidth * 2 + 2);
  }
};

Circular.prototype.threeCircularUp = function (e) {
  this.setThreeCircularValue(this.value.valueArray, true);
};

Circular.prototype.drawAPersonalCircular = function (lineWidth, lineCap, color, percent, radius) {
  this.ctx.setLineWidth(lineWidth);
  this.ctx.setStrokeStyle(color);
  this.ctx.setLineCap(lineCap);
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, radius, Math.PI * 0.73, Math.PI * ((0.73 + 1.54 * (percent / 100)) % 2), false);
  this.ctx.stroke();
};

Circular.prototype.setPersonalCircularValue = function (value) {
  var _this10 = this;

  if (value > 100) {
    value = 100;
    this.i = 100;
  }
  if (value < 0) {
    value = 0;
    this.i = 0;
  }
  this.value = value;
  if (this.circularAni) {
    clearInterval(this.circularAni);
  }
  var isNegative = this.value - this.i < 0;
  this.ctx.restore();
  this.circularAni = setInterval(function () {
    _this10.ctx.clearRect(0, 0, _this10.center.left * 2, _this10.center.top * 2);
    _this10.drawPersonalCircularBackground();
    _this10.drawAPersonalCircular(10, '', '#FFFFFF', _this10.i, _this10.radius * 0.8
    // var pos = getArcNewPos(this.i * 0.77 - 38.7, 100, 150, 150, 130)
    );var pos1 = getArcNewPos(_this10.i * 0.77 - 38.7, 100, _this10.center.left, _this10.center.top, _this10.radius - 4);
    var pos2 = getArcNewPos(_this10.i * 0.77 - 38.7 - 0.5, 100, _this10.center.left, _this10.center.top, _this10.radius + 6);
    var pos3 = getArcNewPos(_this10.i * 0.77 - 38.7 + 0.5, 100, _this10.center.left, _this10.center.top, _this10.radius + 6);
    _this10.ctx.setLineWidth(1);
    _this10.ctx.setStrokeStyle('#FFFFFF');
    _this10.ctx.beginPath();
    _this10.ctx.moveTo(pos1.x, pos1.y);
    _this10.ctx.lineTo(pos2.x, pos2.y);
    _this10.ctx.lineTo(pos3.x, pos3.y);
    _this10.ctx.setFillStyle('#FFFFFF');
    _this10.ctx.fill();
    _this10.ctx.stroke();
    if (_this10.i === _this10.value) {
      clearInterval(_this10.circularAni);
      return;
    } else {
      _this10.i = isNegative ? _this10.i - 1 : _this10.i + 1;
    }
  }, 1000 / this.frameRate);
};

Circular.prototype.drawPersonalCircularBackground = function () {
  this.ctx.clearRect(0, 0, this.center.left * 4, this.center.top * 4);
  this.ctx.setLineWidth(10);
  this.ctx.setStrokeStyle('rgba(255, 255, 255, 0.5)');
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, this.radius * 0.8, Math.PI * 0.73, Math.PI * 0.27, false);
  this.ctx.stroke();
  this.ctx.setStrokeStyle('rgba(255, 255, 255, 1)');
  this.ctx.setLineWidth(2);
  this.ctx.beginPath();
  this.ctx.arc(this.center.left, this.center.top, this.radius, Math.PI * 0.73, Math.PI * 0.27, false);
  this.ctx.stroke();
  this.ctx.setFillStyle('rgba(255, 255, 255, 255)');
  this.ctx.translate(this.center.top, this.center.left);
  this.setTranslated(this.center.top, this.center.left);
  for (var i = 0; i < 8; i++) {
    this.ctx.setLineWidth(2);
    this.ctx.rotate(45 * Math.PI / 180);
    if (i !== 7) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.radius * 0.8 - 5);
      this.ctx.lineTo(0, this.radius * 0.8 - 18);
      this.ctx.stroke();
    }
  }
  this.ctx.setStrokeStyle('rgba(255, 255, 255, 1)');
  this.setTranslateToZero();
};

function getArcNewPos(value, total, cx, cy, R) {
  var alpha = 360 / total * value; // 角度值
  var a = (90 - alpha) * Math.PI / 180;
  var x = cx + R * Math.cos(a);
  var y = cy - R * Math.sin(a);
  return { x: x, y: y, alpha: alpha };
};

Circular.prototype.setTranslateToZero = function () {
  if (this.translatedx !== 0 || this.translatedy !== 0) {
    this.ctx.translate(-this.translatedx, -this.translatedy);
  }
  this.translatedx = 0;
  this.translatedy = 0;
};

Circular.prototype.setTranslated = function (translatedx, translatedy) {
  this.translatedx = translatedx;
  this.translatedy = translatedy;
};