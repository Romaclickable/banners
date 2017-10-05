(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,268);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,55);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,55);


(lib.iskry = function() {
	this.initialize(img.iskry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.King4RSlogo2 = function() {
	this.initialize(img.King4RSlogo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,39);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,71);


(lib.RS_logo = function() {
	this.initialize(img.RS_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,51);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,150);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,213);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,55);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,255);// helper functions:

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
	this.instance = new lib.RS_logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.853,0.853);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,157,43.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("Ah2LiQjggkigiRQigiQg6jbQg7jaBDjNQBCjNCwiOQCwiPDWgYQDVgXDKBmQDLBmBsC6QAzBXAaBiQAbBigBBjQgCDYh8C9Qh8C9jFBXQiMA9iZAAQg+AAhBgKg");
	this.shape.setTransform(74.9,74.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,149.8,149.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1B1B1B","#333333"],[0,1],-104.3,27.9,104.3,-28).s().p("A5OEsIAApXMAydAAAIAAJXg");
	this.shape.setTransform(161.5,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,323,60), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.King4RSlogo2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,150,31.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApMB9IgWgCIgUgGIgPgHIgPgHIgIgIIgHgIIgIgHIgHgIIgFgHIgDgHIgFgIIgCgIIgDgHIAAgIIgCgHIAAgHIAAgIIgDgHIADgHIAAgIIAAgHIACgHIADgIIACgIIADgHIAFgIIAFgHIAFgHIAHgIIAIgIIAHgHIANgIIAPgHIAMgFIANgCIAWAAIAAgDISbAAIAXADIARAEIASAIIAMAHIAKAIIAIAIIAHAHIAFAHIAFAIIADAHIAFAIIACAIIADAHIACAHIADAIIAAAHIAAAIIAAAHIAAAHIAAAHIgDAIIAAAIIgCAHIgFAIIgDAHIgFAHIgCAIIgFAIIgIAHIgHAIIgKAHIgKAHIgPAIIgNAFIgMADIgXACIybAAg");
	this.shape.setTransform(71.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,142.8,25), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-70.5,0,70.5,0).s().p("ArAWWMAAAgsrIWBAAMAAAAsrg");
	this.shape.setTransform(70.5,143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,141,286), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iskry();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,300,250), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,350,268), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,55);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,110.2,228.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,70.8,190.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;
	this.instance.setTransform(2,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(2,0,46.6,63.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(3,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(3,0,112,134.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-65,0,65,0).s().p("AqJUeMAAAgo7IUTAAMAAAAo7g");
	this.shape.setTransform(112.2,60.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(75,74.8,0.613,0.613,0,0,0,75,74.8);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(139, 139, 1)];
	this.instance.cache(-2,-2,154,154);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,y:74.9},19,cjs.Ease.get(-1)).to({regX:74.9,scaleX:1,scaleY:1,x:74.9,y:74.8},20,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75,x:75},20).wait(20).to({regX:75,scaleX:0.61,scaleY:0.61},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-111,379,379);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(126,-1,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,17.7,0.8,0.8,0,0,0,75,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.5,16.1,1,1,0,0,0,161.5,30);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-24,-13.9,323,60), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(78.5,21.8,1,1,0,0,0,78.5,21.8);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(48, -19, 0, 0))];
	this.instance.cache(-2,-2,161,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.7,28.8,1,1,0,0,0,71.4,12.5);
	this.instance_1.alpha = 0.852;
	this.instance_1.filters = [new cjs.BlurFilter(35, 35, 1)];
	this.instance_1.cache(-2,-2,147,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-15.7,-1.7,183,65), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(175,134,1,1,0,0,0,175,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,350,268), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,300,250), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(279.6,137.1,1,1,0,0,0,70.5,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:271.6},54,cjs.Ease.get(-1)).to({x:279.6},51,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175,134,1,1,0,0,0,175,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:167},54,cjs.Ease.get(-1)).to({x:175},51,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.9,350.1,286);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(36.8,125,0.8,0.8,0,0,0,91,27.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:90.9,regY:27.6,y:126},14,cjs.Ease.get(-1)).to({regX:91,regY:27.5,y:127.8},15,cjs.Ease.get(1)).to({regX:90.9,regY:27.6,y:126.1},15,cjs.Ease.get(-1)).to({regX:91,regY:27.5,y:125},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,103,145.6,44);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka.png
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(91.9,141.2,1,1,0,0,0,17.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18,rotation:-4.3,x:92,y:140.7},14,cjs.Ease.get(-1)).to({regX:17.9,rotation:-9.2,x:91.9,y:140.2},15,cjs.Ease.get(1)).wait(5).to({rotation:-4.5,x:92,y:140.7},15,cjs.Ease.get(-1)).to({rotation:0,x:91.9,y:141.2},15,cjs.Ease.get(1)).wait(1));

	// plecho.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.2,91.8,1,1,0,0,0,33.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.8,y:91.4},14,cjs.Ease.get(-1)).to({rotation:8.3,y:90.8},15,cjs.Ease.get(1)).wait(5).to({regY:12.9,rotation:4,x:115.3,y:91.4},15,cjs.Ease.get(-1)).to({regY:12.8,rotation:0,x:115.2,y:91.8},15,cjs.Ease.get(1)).wait(1));

	// shield.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.4,183.4,1,1,0,0,0,35.4,104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0.8,x:180.7,y:182.3},14,cjs.Ease.get(-1)).to({rotation:1.7,x:182,y:181},15,cjs.Ease.get(1)).wait(5).to({rotation:0.8,x:180.8,y:182.3},15,cjs.Ease.get(-1)).to({rotation:0,x:179.4,y:183.4},15,cjs.Ease.get(1)).wait(1));

	// tip.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.1,161.2,1,1,0,0,0,55.1,114.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:160.7},14,cjs.Ease.get(-1)).to({y:160.2},15,cjs.Ease.get(1)).wait(5).to({y:160.7},15,cjs.Ease.get(-1)).to({y:161.2},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77,47,137.8,228.4);


// stage content:
(lib.runescape_rpgstash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(88,24.9,1,1,0,0,0,75,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo_game
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,121.3,1,1,0,0,0,78.5,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137,114.9,1,1,0,0,0,91,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// iskry
	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tip
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(141,135.5,1,1,0,0,0,62.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// svet
	this.instance_5 = new lib.Символ19();
	this.instance_5.parent = this;
	this.instance_5.setTransform(235.8,143.7,1,1,0,0,0,74.9,74.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(154,126,1,1,0,0,0,175,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129,111.1,376.9,297.3);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507212266382", id:"bg"},
		{src:"images/btn1.png?1507212266382", id:"btn1"},
		{src:"images/btn2.png?1507212266382", id:"btn2"},
		{src:"images/iskry.png?1507212266382", id:"iskry"},
		{src:"images/King4RSlogo2.png?1507212266382", id:"King4RSlogo2"},
		{src:"images/plecho.png?1507212266382", id:"plecho"},
		{src:"images/RS_logo.png?1507212266382", id:"RS_logo"},
		{src:"images/ruka.png?1507212266382", id:"ruka"},
		{src:"images/shield.png?1507212266382", id:"shield"},
		{src:"images/text.png?1507212266382", id:"text"},
		{src:"images/tip.png?1507212266382", id:"tip"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;