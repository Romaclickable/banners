(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._case = function() {
	this.initialize(img._case);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,159);


(lib.gamerall184xmas = function() {
	this.initialize(img.gamerall184xmas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,69);


(lib.hover = function() {
	this.initialize(img.hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,64);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,161);


(lib.normal = function() {
	this.initialize(img.normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,62);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,163);// helper functions:

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


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhTGRQg/gLgrgbQgzgigYg4QgKgWgEgWQgVARgbAFQgjAGgYgUQgKAGgMADQgVAGgWgGQgXgGgPgQQgVgbAFgjQAFgeAYgbQAPgQAUgKQAUgKAWAAQAKAAAJADQgCgLgBgNQgBgUADgcIAAgEQgEgvACgaQADgpANgeIAEgHQABgpACgMQACgXANgqQALgjALgSQAkg7BmgQQAugGBEAAQA0ABAXAIIAYAKQAmAFAeAHQAxAMARAaIACADIAPgDQAUgDASAHQASgBARAHQAQAGAKAMQAHADAGAFQAOAMAGATQAGASgCATQgDAYgOAUQAMAEALAJQALAKALAUIATAhIAOATQATAAAVAHQApANAXAiQAXAhACAqQABApgUAkQgYArgwAdQghASg3ATIgHAKIgkAuIgZAjQgPATgOAMQgaAWguARQhFAZhKACIgPAAQgrAAgogHgAh8BoQASAQAKAhQAJAZAFAHQAKAMAfALQAYAHANABQAMACAbgCIAcABQARAAALgDQAhgIAdgmIAWggIAFgHIAAgCQALgeAbgWQANgKAOgHIgCgBQgmgjgUglQgXgtAGgqQAEgWALgTQgOgFgKgJIgBgBQgbAAgVgSQgKgJgGgLQgbAIgkgBQgXABgXgGIgNgDIgtgIQgmgGgcADQgLABgFAFQgGAFgDAOQgFAZgLAaQgCAggCASIgCATIAFAFQANAPAFAUQAEAUgFASQgKAlgkAaIgHAGIgMAQIgLALIAAABIAIgGQAZgSAegBIAFAAQAcAAAUARg");
	this.shape.setTransform(50.6,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,101.2,81.6), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCC66","#FFCC33","#FFCC99"],[0,0.314,0.714,1],-11.2,0,11.3,0).s().p("AhwEkIAApHIDhAAIAAJHg");
	this.shape.setTransform(11.3,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,22.6,58.4), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.normal();
	this.instance.parent = this;
	this.instance.setTransform(-1,-7,0.674,0.671);

	this.instance_1 = new lib.hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-7,0.673,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-7,163,41.6);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib._case();
	this.instance.parent = this;
	this.instance.setTransform(-76,-46,0.708,0.708);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.right();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42,-45,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.left();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-101,-51,0.609,0.609);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-51,212,117.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.gamerall184xmas();
	this.instance.parent = this;
	this.instance.setTransform(58.9,10.2,1.253,1.245,0,0,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.3,47.9,1,1,0,0,0,50.6,40.8);
	this.instance_1.alpha = 0.691;
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-2,-2,105,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(58.9,-2.1,116.8,98.2), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AALCMIgEgBQgRgDgLgGIgKgFQgagOgVgiQgDgGgCgGIAAAAIgCAAIgBABIgBAAIAAAAIgBABIgCACIgCgBIgBAAIgDAAIAAAAIgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCABIgCAAIgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgCgCIgCAAIgCAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEgCIAAgBIgBgBIAAAAIgDAAIgDgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIgCAAIgBABIgCgBIgCgBIAAgBQgDABgCgDIgCgDIAAAAIgBgBIgCgCIgDABIgEgDIAAgBIAAgDIgBgBIAAgDIABgBIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAIgCgBIAAgBIgDgCIAAgCIAAgDIAAAAIAAgDIAAgCIABgBIACgCIAAAAIAAAAIABgBIgBgBIAAgCIAAgCIABgBIADgCIABAAIAAAAIAAgBIABgBIABgCIACgBIABgDIABgCIAAAAIADgCIADAAIABgCIADgBIABgBIADACIABgBIABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADAAIAAAAIACAAIADAAIAAABIABAAIAAgBIACAAIAAgFIACgRIgBgSIAAgXQABgaAFgMIAFgJIAEgLQAEgIAKgFQAKgDAIgBQAngFAiALIAVAIQATAHAIAGQAHAEAEAFQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAABIABABIAEABIAAABIABgBQAEgBACAEIAAABQAEgCADAEIAAABQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIACABIABgBIADgBIAEABIABACIAAADIgBACIABACIAAAAIABAAIABgBIADACIABABIABADIABAAIADABIABACIABADIgBACIAAABIgBABIgBACQADAAACADIAAACQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABABIAAABIABACIgBACIABAAIABACIABADIgBACIgBABIgCABIAAAAIABADIABACIAAgBIABACQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBACIABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAABIACACIAAABIABACIAAABIACABQAAABAAAAQAAABAAAAQABAAgBAAQAAABAAAAIABAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAIABAAIAAADIABAAIAAACIAAAAIAAACIABACIABAAIAFABIAEABIAMAIIABACQAUARgDAfQgCAYgQAKIAAABIgBABIgFADIgFABIgCABIgBABIgCAAIgBAAIgDAAIgCABIgBAAIgDAAIgDAAIgFABIgEACIAAABIgCABIgDAGQgEAGgIAGIgIAGIgQAJIgKAEIgGABIgHACIgNABIgNAAIgJAAg");
	mask.setTransform(66.7,52);

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-2.4,49,1.386,1.122,0,27,0,11.3,29.2);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,27,62);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.4,scaleY:1.12,skewX:26.8,x:65,y:51.4},24,cjs.Ease.get(-1)).to({regX:11.3,scaleY:1.12,skewX:27,x:135.1,y:54},25,cjs.Ease.get(1)).wait(30).to({alpha:0.699},0).wait(1).to({x:-2.4,y:49},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.2,52.2,0.328,0.331,0,-0.2,11,116.5,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:116.6,skewX:0,skewY:10.8,x:67.3},24,cjs.Ease.get(-1)).to({regX:116.5,skewX:-0.2,skewY:11,x:67.2},25,cjs.Ease.get(1)).wait(32));

	// Слой 1
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},24,cjs.Ease.get(-1)).to({startPosition:0},25,cjs.Ease.get(1)).to({startPosition:0},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-0.5,212,117.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(81,20.5,1,1,0,0,0,81,20.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.8},9,cjs.Ease.get(-1)).to({y:24.3},10,cjs.Ease.get(1)).to({y:22.9},10,cjs.Ease.get(-1)).to({y:20.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-7,163,43.2);


// stage content:
(lib.christmas_case = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(115,74.2,1,1,0,0,0,82,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// case
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.7,46.2,0.897,0.897,0,0,0,80.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118,65.3,206.3,125.5);
// library properties:
lib.properties = {
	width: 230,
	height: 130,
	fps: 24,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/_case.png?1513952171774", id:"_case"},
		{src:"images/gamerall184xmas.png?1513952171774", id:"gamerall184xmas"},
		{src:"images/hover.png?1513952171774", id:"hover"},
		{src:"images/left.png?1513952171774", id:"left"},
		{src:"images/normal.png?1513952171774", id:"normal"},
		{src:"images/right.png?1513952171774", id:"right"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;