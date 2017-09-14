(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bluecase_1 = function() {
	this.initialize(img.bluecase_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,142);


(lib.flash2 = function() {
	this.initialize(img.flash2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,103);


(lib.FlipKnifeΙDoppler = function() {
	this.initialize(img.FlipKnifeΙDoppler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,119);


(lib.Glow7 = function() {
	this.initialize(img.Glow7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,144);


(lib.GutKnifeΙFade = function() {
	this.initialize(img.GutKnifeΙFade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,113);


(lib.OPEN = function() {
	this.initialize(img.OPEN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,138);


(lib.OPEN2 = function() {
	this.initialize(img.OPEN2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,138);// helper functions:

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


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.OPEN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.473,0.473);

	this.instance_1 = new lib.OPEN2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,65.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.FlipKnifeΙDoppler();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,102.6,83.6), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GutKnifeΙFade();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,106.1,79.4), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Glow7();
	this.instance.parent = this;
	this.instance.setTransform(33.8,0,0.906,0.906,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,158.1,159.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,333,103), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AFhC0QlrgclQhfQgmgKgUgIQgfgNgWgQQgagSgPgaQgQgcACgdQABgWALgUQAMgTASgMQASgMAXgDQAWgDAVAHQANAEATALIAgASQAXAMAtALQE2BSFIAYQAeACAQADQAZAFARAKQATANAMAVQALAWAAAXQgBAXgMAVQgMAVgUAMQgWAPghADIgVAAQgRAAgXgBg");
	this.shape.setTransform(51.3,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,102.7,36.3), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(32.1,32.6,1,1,0,0,0,32.1,32.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,64.4,65.3), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(32.1,32.6,1,1,0,0,0,32.1,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.2},19,cjs.Ease.get(-1)).to({y:25.6},20,cjs.Ease.get(1)).to({y:29.1},20,cjs.Ease.get(-1)).to({y:32.6},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,65.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Gut Knife Ι Fade.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(32,41.6,1,1,0,0,0,53,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:40.7},14,cjs.Ease.get(-1)).to({y:39.6},15,cjs.Ease.get(1)).to({y:40.6},15,cjs.Ease.get(-1)).to({y:41.6},15,cjs.Ease.get(1)).wait(15));

	// Flip Knife Ι Doppler.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.2,37.8,1,1,0,0,0,51.2,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({y:36.9},14,cjs.Ease.get(-1)).to({y:35.8},15,cjs.Ease.get(1)).to({y:36.8},15,cjs.Ease.get(-1)).to({y:37.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-4,215.6,85.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(79,79.7,1,1,0,0,0,79,79.7);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,158.1,159.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(175.1,54.4,1,1,0,0,0,166.5,51.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(8.6,2.9,333,103), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(51.4,18.2,1,1,0,0,0,51.4,18.2);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 2)];
	this.instance.cache(-2,-2,107,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-21,-21,148,82), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(97.7,24.3,1,1,0,0,0,79,79.7);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:79.6,scaleX:1.19,scaleY:1.19,x:97.8,y:24.2,alpha:1},39).to({regY:79.7,scaleX:1,scaleY:1,x:97.7,y:24.3,alpha:0.5},40).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.8,98.6,0.595,0.595,0,0,0,166.4,51.6);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:166.3,alpha:0.691},19,cjs.Ease.get(-1)).to({regX:166.4,alpha:0.898},20,cjs.Ease.get(1)).to({regX:166.3,alpha:0.699},20,cjs.Ease.get(-1)).to({regX:166.4,alpha:0.398},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.bluecase_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// Слой 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.8,97.5,1,1,0,0,0,51.4,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-55.4,209,195.7);


// stage content:
(lib.bluecase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(124.1,54.6,1,1,0,0,0,32.1,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// knifes
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.5,74.5,1,1,0,0,0,75.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// case
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.9,124,1,1,0,0,0,94.9,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.9,103.6,222.7,195.7);
// library properties:
lib.properties = {
	width: 240,
	height: 192,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/bluecase_1.png?1505379710528", id:"bluecase_1"},
		{src:"images/flash2.png?1505379710528", id:"flash2"},
		{src:"images/FlipKnifeΙDoppler.png?1505379710528", id:"FlipKnifeΙDoppler"},
		{src:"images/Glow7.png?1505379710528", id:"Glow7"},
		{src:"images/GutKnifeΙFade.png?1505379710528", id:"GutKnifeΙFade"},
		{src:"images/OPEN.png?1505379710528", id:"OPEN"},
		{src:"images/OPEN2.png?1505379710528", id:"OPEN2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;