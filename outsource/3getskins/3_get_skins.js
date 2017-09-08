(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.andbecome = function() {
	this.initialize(img.andbecome);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,21);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,274);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,57);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,57);


(lib.getskins = function() {
	this.initialize(img.getskins);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,26);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,20);


(lib.h1z1_logo = function() {
	this.initialize(img.h1z1_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,38);


(lib.king = function() {
	this.initialize(img.king);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,58);


(lib.kosti = function() {
	this.initialize(img.kosti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.lev_plecho = function() {
	this.initialize(img.lev_plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,34);


(lib.lev_ruka = function() {
	this.initialize(img.lev_ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,34);


(lib.logo_big = function() {
	this.initialize(img.logo_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,50);


(lib.prav_plecho = function() {
	this.initialize(img.prav_plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,31);


(lib.prav_ruka = function() {
	this.initialize(img.prav_ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,34);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,148);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.king();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,109.6,54.8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.andbecome();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,108.7,19.9), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.getskins();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,109.6,24.6), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3366FF","#3366CC"],[0,1],-177.2,0,177.3,0).s().p("A7sD4IAAnvMA3ZAAAIAAHvg");
	this.shape.setTransform(177.3,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,354.6,49.6), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB782E").s().p("A92VBMAAAgqBMA7tAAAMAAAAqBg");
	this.shape.setTransform(191.1,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,382.3,269), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AlXFYQiOiPAAjJQAAjJCOiOQCOiODJAAQDJAACPCOQCOCOAADJQAADJiOCPQiPCOjJAAQjJAAiOiOg");
	this.shape.setTransform(48.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,97.2,97.2), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,204,0,0)","#FFCC00","rgba(255,153,0,0)"],[0,0.471,1],-18.7,0,18.8,0).s().p("Ai7FoIAArQIF3AAIAALQg");
	this.shape.setTransform(18.8,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,37.5,72.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(58,12,0.654,0.654);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58,13,0.654,0.654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,12,108.7,37.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,17,20), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev_plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,17,34), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev_ruka();
	this.instance.parent = this;
	this.instance.setTransform(1,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(1,-2,20,34), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav_plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,13,31), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav_ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,27,34), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,81,148), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6600","rgba(255,153,0,0)"],[0,1],-80,0,80,0).s().p("AsfVBMAAAgqBIY/AAMAAAAqBg");
	this.shape.setTransform(80,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,160,269), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kosti();
	this.instance.parent = this;
	this.instance.setTransform(-160,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-35,320,70);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kosti();
	this.instance.parent = this;
	this.instance.setTransform(-160,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-35,320,70);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get skins.png
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(24.8,2.2,1,1,0,0,0,54.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,x:24.9,y:0.6},14).to({scaleX:1,scaleY:1,x:24.8,y:2.2},15).wait(31));

	// and become.png
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.3,28.9,1,1,0,0,0,54.3,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({regY:10,scaleX:1.07,scaleY:1.07,x:24.4,y:29},15).to({regY:9.9,scaleX:1,scaleY:1,x:24.3,y:28.9},15).wait(16));

	// king.png
	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.8,71.4,1,1,0,0,0,54.8,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({scaleX:1.06,scaleY:1.06},15).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-10,109.6,108.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(177.2,24.8,1,1,0,0,0,177.2,24.8);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,354.6,49.6), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_big.png
	this.instance = new lib.logo_big();
	this.instance.parent = this;
	this.instance.setTransform(-145,4,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// h1z1_logo.png
	this.instance_1 = new lib.h1z1_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,4,0.874,0.874);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16,18.5,1,0.855,0,0,0,177.2,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-193.2,-2.7,354.5,42.4), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(191.1,134.5,1,1,0,0,0,191.1,134.5);
	this.instance.alpha = 0.18;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,382.3,269), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(48.6,48.6,1,1,0,0,0,48.6,48.6);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(90, 90, 1)];
	this.instance.cache(-2,-2,101,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-45,-45,191,191), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(48.6,48.6,1,1,0,0,0,48.6,48.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12,x:48.7,y:48.7,alpha:0.238},24,cjs.Ease.get(-1)).to({scaleX:1.24,scaleY:1.24,alpha:0.488},25,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,alpha:0.246},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:48.6,y:48.6,alpha:0},25,cjs.Ease.get(1)).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,191,191);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(18.8,36.2,1,1,9.2,0,0,18.8,36.1);
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-5.5,-2.5,48.6,77.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoeC7IAAl1IQ9AAIAAF1g");
	mask.setTransform(112.3,30.7);

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(16.8,27.7,1,1,0,0,0,18.8,36.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127},24,cjs.Ease.get(-1)).to({x:241.8},25,cjs.Ease.get(1)).wait(26));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83,28.5,1,1,0,0,0,83,28.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,12,108.7,38.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// telo.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(30.9,81.4,1,1,0,0,0,40.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:81.3},9,cjs.Ease.get(-1)).to({y:81.1},10,cjs.Ease.get(1)).wait(15).to({y:81.3},10,cjs.Ease.get(-1)).to({y:81.4},10,cjs.Ease.get(1)).wait(1));

	// prav_ruka.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.4,-4.8,1,1,-8,0,0,21.6,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.5,x:42.2,y:-5.6},9,cjs.Ease.get(-1)).to({rotation:14.2,x:41.9,y:-6.4},10,cjs.Ease.get(1)).to({regY:29.9,rotation:22.7,x:42,y:-6.1},5).wait(10).to({y:-6.5},0).to({regX:21.5,rotation:7.3,x:42.1,y:-5.6},10,cjs.Ease.get(-1)).to({regX:21.6,regY:30,rotation:-8,x:42.4,y:-4.8},10,cjs.Ease.get(1)).wait(1));

	// prav_plecho.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38,14.8,1,1,15,0,0,6.5,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:19.5,scaleX:1,scaleY:1,rotation:11,y:13.9},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:6.8,x:37.9,y:13.7},10,cjs.Ease.get(1)).wait(15).to({regX:6.6,regY:19.4,scaleX:1,scaleY:1,rotation:10.8,x:38,y:13.9},10,cjs.Ease.get(-1)).to({regX:6.5,regY:19.6,scaleX:1,scaleY:1,rotation:15,y:14.8},10,cjs.Ease.get(1)).wait(1));

	// lev_ruka.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.4,55,1,1,0,0,0,17.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.5,x:8.6,y:54.9},9,cjs.Ease.get(-1)).to({regY:1.9,rotation:-7.5,x:7.7,y:54.8},10,cjs.Ease.get(1)).to({regX:17.7,rotation:-15.7,x:6.1},5).wait(10).to({rotation:-7.8,x:7.8,y:55},10,cjs.Ease.get(-1)).to({regX:17.8,regY:1.8,rotation:0,x:9.4},10,cjs.Ease.get(1)).wait(1));

	// lev_plecho.png
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.9,32.8,1,1,-15,0,0,8.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:8.6,scaleX:1,scaleY:1,rotation:-11.6,x:5.1,y:32.7},9,cjs.Ease.get(-1)).to({regX:8.4,scaleX:1,scaleY:1,rotation:-8,x:4.9,y:32.5},10,cjs.Ease.get(1)).to({regY:8.5,rotation:-4.6,x:5,y:32.6},5).wait(10).to({scaleX:1,scaleY:1,rotation:-9.8,y:32.7},10,cjs.Ease.get(-1)).to({regX:8.5,regY:8.4,scaleX:1,scaleY:1,rotation:-15,x:4.9,y:32.8},10,cjs.Ease.get(1)).wait(1));

	// golova.png
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.4,14.2,1,1,0,0,0,13,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4,y:14.1},9,cjs.Ease.get(-1)).to({rotation:8.4,y:13.9},10,cjs.Ease.get(1)).wait(15).to({regX:13.1,rotation:4.1,x:22.5,y:14.2},10,cjs.Ease.get(-1)).to({regX:13,rotation:0,x:22.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_6 = new lib.Анимация1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1,160);

	this.instance_7 = new lib.Анимация4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-35.2,320,230.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,463.4).s().p("A9nUFMAAAgoJMA7PAAAMAAAAoJg");
	this.shape.setTransform(140.4,128.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(51.4,135.3,1.3,1,0,0,0,80,134.6);
	this.instance.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.1,134.5,1,1,0,0,0,191.1,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-52.6,0,402.6,274), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(160,134.5,1,1,0,0,0,160,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:163.2},24,cjs.Ease.get(-1)).to({x:163.8},25,cjs.Ease.get(1)).to({x:163.3},25,cjs.Ease.get(-1)).to({x:160},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,0,402.6,274);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(201.5,109.6,1,1,0,0,0,40.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:198.3},24,cjs.Ease.get(-1)).to({x:197.1},25,cjs.Ease.get(1)).to({x:198.3},25,cjs.Ease.get(-1)).to({x:201.5},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,320,230.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(25,16.5,1,1,0,0,0,83,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.3},19,cjs.Ease.get(-1)).to({y:14},20,cjs.Ease.get(1)).to({y:15.3},20,cjs.Ease.get(-1)).to({y:16.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.6,-22.9,174.3,77.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(79.5,27.7,1,1,0,0,0,21.5,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-7.6,-10.9,174.3,77.2), null);


// stage content:
(lib._3_get_skins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(208,216.5,1,1,0,0,0,83,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104,109,1,1,0,0,0,58,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// tip
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158,152.7,1,1,0,0,0,160,115.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// logo
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(226,19,1,1,0,0,0,64,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// flash
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(182.4,108.2,1,1,0,0,0,48.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(174.6,130.5,1,1,0,0,0,160,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112,121,402.6,274);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/andbecome.png?1504860949718", id:"andbecome"},
		{src:"images/bg.jpg?1504860949718", id:"bg"},
		{src:"images/btn1.jpg?1504860949718", id:"btn1"},
		{src:"images/btn2.jpg?1504860949718", id:"btn2"},
		{src:"images/getskins.png?1504860949718", id:"getskins"},
		{src:"images/golova.png?1504860949718", id:"golova"},
		{src:"images/h1z1_logo.png?1504860949718", id:"h1z1_logo"},
		{src:"images/king.png?1504860949718", id:"king"},
		{src:"images/kosti.png?1504860949718", id:"kosti"},
		{src:"images/lev_plecho.png?1504860949718", id:"lev_plecho"},
		{src:"images/lev_ruka.png?1504860949718", id:"lev_ruka"},
		{src:"images/logo_big.png?1504860949718", id:"logo_big"},
		{src:"images/prav_plecho.png?1504860949718", id:"prav_plecho"},
		{src:"images/prav_ruka.png?1504860949718", id:"prav_ruka"},
		{src:"images/telo.png?1504860949718", id:"telo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;