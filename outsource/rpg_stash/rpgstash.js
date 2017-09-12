(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bashka = function() {
	this.initialize(img.bashka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,226);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,300);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,73);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,73);


(lib.CompleteRotMGShop = function() {
	this.initialize(img.CompleteRotMGShop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,17);


(lib.flash = function() {
	this.initialize(img.flash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,53);


(lib.madgod_logo = function() {
	this.initialize(img.madgod_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,120);


(lib.Potions = function() {
	this.initialize(img.Potions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,16);


(lib.rpgstash_1 = function() {
	this.initialize(img.rpgstash_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,67);// helper functions:

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


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,73,53), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.CompleteRotMGShop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,168,17), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Potions();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,168,16), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.madgod_logo();
	this.instance.parent = this;
	this.instance.setTransform(14,2,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(14,2,111,106.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,204,0,0)","#FFCC00","rgba(255,204,0,0)"],[0,0.498,1],-30.9,-8.3,30.9,8.2).s().p("Am1GQIECvFIJpCmIkCPFg");
	this.shape.setTransform(43.8,56.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,87.7,113.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(52,10,0.709,0.709);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,11,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,10,144,51.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEGCLQghgKgRgbQgMgRgDgVQgDgWAGgUQAKgdAcgTQAcgTAfADQAgACAZAXQAYAWAFAgQAEAfgRAdQgRAdgdAMQgQAGgQAAQgPAAgPgFgAk9AnQghgKgRgbQgMgQgDgVQgDgWAGgUQAKgeAcgTQAcgTAfADQAgACAZAXQAYAXAFAgQAEAfgRAdQgRAcgdAMQgQAGgQAAQgPAAgPgFg");
	this.shape.setTransform(41.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(3,1,76.8,28.8), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,50,0,-49.9).s().p("A6KHCIAAuDMA0VAAAIAAODg");
	this.shape.setTransform(129.5,181.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.bashka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-38,0,335,226.1), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsXMYQlIlIAAnQQAAnPFIlIQFIlIHPAAQHQAAFIFIQFIFIAAHPQAAHQlIFIQlIFInQAAQnPAAlIlIg");
	this.shape.setTransform(112,112);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,224,224), null);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B99D2B","#EBD021"],[0,1],-92.5,42.7,92.4,-42.8).s().p("Av7FjIAArFIf3AAIAALFg");
	this.shape.setTransform(102,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._8, new cjs.Rectangle(0,0,204,71.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(56.5,52.5,1,1,0,0,0,36.5,26.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},14).to({rotation:165},5).to({regX:36.4,scaleX:0.22,scaleY:0.22,alpha:0},5).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.5,37.5,1,1,0,0,0,36.5,26.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({alpha:1},14).to({rotation:165},5).to({regX:36.4,scaleX:0.22,scaleY:0.22,alpha:0},5).to({_off:true},1).wait(31));

	// Слой 2
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(110.5,32.5,1,1,0,0,0,36.5,26.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).to({rotation:165},5).to({regX:36.4,scaleX:0.22,scaleY:0.22,alpha:0},5).to({_off:true},1).wait(60));

	// Слой 1
	this.instance_3 = new lib.rpgstash_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,67);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Potions.png
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(395,-112.7,0.893,0.893,0,0,0,84,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Complete RotMG Shop.png
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(395,-93.6,0.893,0.893,0,0,0,84,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(320,-119.9,150,34), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-63.7,146.1,0.942,0.942,0,0,0,84,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,43.5,1,1,0,0,0,60,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B99D2B","#EBD021"],[0,1],-57.6,57.6,57.7,-57.6).s().p("AsuG9IAAt5IZdAAIjcN5g");
	this.shape.setTransform(76.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance_2 = new lib._8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218,35.5,1,1,0,0,0,102,35.5);
	this.instance_2.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-5,0,325,89.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(43.8,56.6,1,1,0,0,0,43.8,56.6);
	this.instance.alpha = 0.391;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,87.7,113.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(43.8,75.6,1,1,0,0,0,43.8,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,19,87.7,113.2), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArPEDIAAoFIWfAAIAAIFg");
	mask.setTransform(124,35.9);

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(7,18.2,1,1,0,0,0,43.8,56.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:148.1},24,cjs.Ease.get(-1)).to({x:295},25,cjs.Ease.get(1)).wait(31));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.5,36.5,1,1,0,0,0,101.5,36.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,10,144,52.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(101.5,36.5,1,1,0,0,0,101.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:35.1},19,cjs.Ease.get(-1)).to({y:31.5},20,cjs.Ease.get(1)).to({y:35},20,cjs.Ease.get(-1)).to({y:36.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-19.4,232.8,113.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(38.4,14.3,1,1,0,0,0,38.4,14.3);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(33, 33, 1)];
	this.instance.cache(1,-1,81,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-14,-16,114,66), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(212.6,120.5,1,1,0,0,0,38.4,14.3);
	this.instance.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.535},19,cjs.Ease.get(-1)).to({alpha:1},20,cjs.Ease.get(1)).to({alpha:0.547},20,cjs.Ease.get(-1)).to({alpha:0.09},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.5,113,1,1,0,0,0,131.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,226.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(112,112,1,1,0,0,0,112,112);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(243, 243, 1)];
	this.instance.cache(-2,-2,228,228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-122,-122,472,472), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(175,154.1,1,1,0,0,0,112,112);
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.621},19,cjs.Ease.get(-1)).to({alpha:0.789},20,cjs.Ease.get(1)).to({alpha:0.633},20,cjs.Ease.get(-1)).to({alpha:0.262},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-79.9,472,472);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(167.5,113,1,1,0,0,0,167.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:117.9},19,cjs.Ease.get(-1)).to({y:121},20,cjs.Ease.get(1)).to({y:118},20,cjs.Ease.get(-1)).to({y:113},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,226.1);


// stage content:
(lib.rpgstash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// header
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(71.5,35.5,1,1,0,0,0,81.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56,193,1,1,0,0,0,65,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.5,214.5,1,1,0,0,0,101.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// tip
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.5,141,1,1,0,0,0,167.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(152,127,1,1,0,0,0,175,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,22,472,472);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bashka.png?1505228592504", id:"bashka"},
		{src:"images/bg.jpg?1505228592504", id:"bg"},
		{src:"images/btn1.png?1505228592504", id:"btn1"},
		{src:"images/btn2.png?1505228592504", id:"btn2"},
		{src:"images/CompleteRotMGShop.png?1505228592504", id:"CompleteRotMGShop"},
		{src:"images/flash.png?1505228592504", id:"flash"},
		{src:"images/madgod_logo.png?1505228592504", id:"madgod_logo"},
		{src:"images/Potions.png?1505228592504", id:"Potions"},
		{src:"images/rpgstash_1.png?1505228592504", id:"rpgstash_1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;