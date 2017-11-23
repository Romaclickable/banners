(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,283);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,49);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,49);


(lib.Items = function() {
	this.initialize(img.Items);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,29);


(lib.lev = function() {
	this.initialize(img.lev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,147);


(lib.logo_big = function() {
	this.initialize(img.logo_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,38);


(lib.logo_tf = function() {
	this.initialize(img.logo_tf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,33);


(lib.prav = function() {
	this.initialize(img.prav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,144);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,182);


(lib.Store = function() {
	this.initialize(img.Store);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,30);


(lib.TF2 = function() {
	this.initialize(img.TF2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,29);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,365);// helper functions:

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
	this.instance = new lib.prav();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,118,144), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,134,147), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,64.7,82.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,80.2,166.3), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Items();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,86,29), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Store();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,94,30), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.TF2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,53,29), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIuCSIgbgJQgRgGgKgCQgUgDgJgCQgRgEgHgKQgGgJACgMQADgMAJgGQAJgFASAAQAaABAYAGIAbAJQAQAFALABIAaABQAQAAAJACQANADAJALQAJALgEAMQgGAUgmABIgXABQgcAAgPgEgAgSB8QgVgBgHgDQgQgGgDgNQgCgIAFgJQAEgJAIgFQANgHAXAAIASAAQAKAAAIgDQAOgDAYgPQAYgLAaACQAUACAKALQAHAJgCALQgBAMgIAHQgHAFgNADIgWAEIgSAIIgSAJQgQAHgWACIgXABIgPAAgAoNgZQgUgEgIgQQgFgKAFgMQAEgLAJgEIgIABIgjABIgjAAQghABgMgOQgFgHAAgKQAAgKAFgHQALgMAbgBIAlAAQAXAAAPgEIASgEQALgCAHACQAKADAGAJQAGAJgBAKQgCARgSAKIgKAEIATABQAdACAugJQAagGANAAQASAAAMAJIgBgHQgCgOAKgKQAIgHAOgCIAYAAQAWABAFACQAIAEAFAHQAEAIAAAIQAAAIgFAHQgFAIgHADQgFACgRABIgZAAQgKAAgKgFIgBAAQACAEAAAFQACALgGAIQgJAMgcADIhnAIIgTABQgKAAgGgCg");
	this.shape.setTransform(66.9,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,133.9,29.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(51,51,51,0)","#000000"],[0,1],0,0,0,0,0,199.5).s().p("A39T7MAAAgn1MAv7AAAMAAAAn1g");
	this.shape.setTransform(153.4,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,306.7,255), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#333333","#000000"],[0,1],-2.2,34,0,-2.2,34,153.9).s().p("A3tD7IAAn1MAvbAAAIAAH1g");
	this.shape.setTransform(151.8,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,303.6,50.2), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,49);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgFAOQgFgCgBgGQgCgFADgEQACgGAFgDQAEgDAFACQAFACABAFQACAFgDAGQgDAFgFADQgDACgCAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.4,2.6,3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,2.6,3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(1.2,1.4,1,1,0,0,0,1.2,1.4);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-2,-2,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-2,-2,10,10), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(52.7,16,1,1,0,0,0,1.2,1.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:1.4,scaleX:2.11,scaleY:0.69,x:239.1,y:-6.1},5).to({_off:true},1).wait(25));

	// Слой 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,20,1,1,0,0,0,1.2,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({regX:1.4,scaleX:2.11,scaleY:0.69,x:233.5,y:-2.1},5).to({_off:true},1).wait(30));

	// Слой 2 - копия: 2
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.3,27,1,1,0,0,0,1.2,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:1.4,scaleX:2.11,scaleY:0.69,x:233.7,y:4.9},5).to({_off:true},1).wait(35));

	// Слой 2 - копия
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.1,30.4,1,1,0,0,0,1.2,1.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:1.4,scaleX:2.11,scaleY:0.69,x:239.5,y:8.3},5).to({_off:true},1).wait(40));

	// Слой 2 - копия: 2
	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.1,28.2,1,1,0,0,0,1.2,1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regX:1.4,scaleX:2.11,scaleY:0.69,x:237.1,y:14.3},5).to({_off:true},1).wait(45));

	// Слой 2
	this.instance_5 = new lib.Символ18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(57.3,18.2,1,1,0,0,0,1.2,1.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({regX:1.4,scaleX:2.11,scaleY:0.69,x:236.3,y:-1.7},5).to({_off:true},1).wait(50));

	// Слой 1
	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(32.3,41.5,1,1,0,0,0,32.3,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.7,82.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(32.3,56.6,1,1,0,0,0,32.3,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.2},9).to({rotation:0},10).wait(1));

	// tip
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.1,78.1,1,1,0,0,0,40.1,83.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:70.5},4).to({x:70},5).to({x:70.5},5).to({x:70.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,110.2,166.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TF2.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-22.7,15.7,0.86,0.86,0,0,0,26.4,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13.2},9,cjs.Ease.get(-1)).to({y:15.7},10,cjs.Ease.get(1)).wait(19));

	// Store.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.5,16,0.86,0.86,0,0,0,47.1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:13.5},9,cjs.Ease.get(-1)).to({y:16},10,cjs.Ease.get(1)).wait(10));

	// Items.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.6,15.7,0.86,0.86,0,0,0,43,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({y:13.2},9,cjs.Ease.get(-1)).to({y:15.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,3.1,215,25.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(176.8,154,1,1,0,0,0,153.3,127.5);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.391},19).to({alpha:0.602},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,283);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_tf.png
	this.instance = new lib.logo_tf();
	this.instance.parent = this;
	this.instance.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo_big.png
	this.instance_1 = new lib.logo_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-131,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.3,13.6,1,1,0,0,0,151.8,25.1);
	this.instance_2.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-145.5,-11.5,303.6,50.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(68.5,24.5,1,1,0,0,0,68.5,24.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,137,50), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// centr.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(54,81,1,1,0,0,0,54,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// prav.png
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149,78,1,1,0,0,0,59,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:77.6},19).to({y:78},20).wait(1));

	// lev.png
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16,73.5,1,1,0,0,0,67,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:73.1},19).to({y:73.5},20).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.3,148.2,1,1,0,0,0,66.9,15);
	this.instance_3.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_3.cache(-2,-2,138,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-5,291,175.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(68.5,24.5,1,1,0,0,0,68.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},9,cjs.Ease.get(-1)).to({regY:24.4,scaleX:1.07,scaleY:1.07,x:68.6,y:24.4},10,cjs.Ease.get(1)).to({regX:68.4,scaleX:1.03,scaleY:1.03,y:24.5},10,cjs.Ease.get(-1)).to({regX:68.5,regY:24.5,scaleX:1,scaleY:1,x:68.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,49);


// stage content:
(lib.TF2_store_items = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(136,67,1,1,0,0,0,47,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216.5,29,1,1,0,0,0,72.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(219.5,214,1,1,0,0,0,68.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// tipy
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154,168.1,0.95,0.95,0,0,0,67,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,113.5,1,1,0,0,0,175,141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,97,350,283);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1511452139325", id:"bg"},
		{src:"images/btn.png?1511452139325", id:"btn"},
		{src:"images/btn2.png?1511452139325", id:"btn2"},
		{src:"images/Items.png?1511452139325", id:"Items"},
		{src:"images/lev.png?1511452139325", id:"lev"},
		{src:"images/logo_big.png?1511452139325", id:"logo_big"},
		{src:"images/logo_tf.png?1511452139325", id:"logo_tf"},
		{src:"images/prav.png?1511452139325", id:"prav"},
		{src:"images/ruka.png?1511452139325", id:"ruka"},
		{src:"images/Store.png?1511452139325", id:"Store"},
		{src:"images/TF2.png?1511452139325", id:"TF2"},
		{src:"images/tip.png?1511452139325", id:"tip"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;