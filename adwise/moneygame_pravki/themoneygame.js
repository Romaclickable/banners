(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,70);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,70);


(lib.glaz = function() {
	this.initialize(img.glaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,7);


(lib.glaz2 = function() {
	this.initialize(img.glaz2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,6);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,96);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,36);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,142);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,163);


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,150);


(lib.s2 = function() {
	this.initialize(img.s2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,151);


(lib.s3 = function() {
	this.initialize(img.s3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,149);


(lib.s4 = function() {
	this.initialize(img.s4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,150);


(lib.s5 = function() {
	this.initialize(img.s5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,150);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,48);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,44);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,202);


(lib.vorishka = function() {
	this.initialize(img.vorishka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,204);// helper functions:

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


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A1PkTMAqfAAAIAAInMgqfAAAg");
	this.shape.setTransform(136,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-2,-2,276.1,59.2), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACpAeQgTgEgMgNQgEgEABgEQAAgDAFgCIAMgDIAQgBIASAAIAIABQADACACAGQABAJADADIAFAEQADADgCADQgCACgCAAQgKADgKAAQgIAAgIgCgAijAIIgVgJIgLgDQgGgBgEgDQgFgDACgDIAEgEQAHgDAJAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAHgDQAWgBAFABIALADIAJACQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIgBAGQAAADAEAHQADAFAAAFQgBACgDACQgDABgCgCQAAAEgGABIgDAAQgIAAgKgFg");
	this.shape.setTransform(17.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.glaz2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.701,0.701);

	this.instance_1 = new lib.glaz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,2,0.717,0.717);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACZAfIgJgBQgEgBgBgBQgBgDACgDIAEgEQACgCABgHIAAgKIAAgGQABgCAGAAIAUAFQALADAFAHIAEAGIAEAEQACAEgHAGQgJAFgRAAIgOAAgAi/AKQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgEgCACgEIAEgFQAFgGAAgJQAAgHABgCQADgEAHAAIAKADQAYAKAHAGQAHAFgCAGQgBACgFADQgGAEgKABIgSABg");
	this.shape_1.setTransform(29.9,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-3.5,-0.1,53.3,7.1), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AlpC3IAAkIILTk4IAAMUg");
	this.shape.setTransform(33.6,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-2.6,-22.1,72.4,78.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABqAyQgDgVACgGQABgHAegJQAdgJgCARQgCASgDAHQgCAIgHAFQgGAFgJAFIgSAGIgBAAQgHAAgCgTgAhYAqQgfgHgTgXQgTgWgEgZQgFgZAegGQAegHAnASQAmARAWARQAUAQgKAQQgKARgZALQgQAGgRAAQgLAAgMgDg");
	this.shape.setTransform(16.3,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,32.6,13.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vorishka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,265,204), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(63,62,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(63,62,267.5,39), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,302,48), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.s5();
	this.instance.parent = this;
	this.instance.setTransform(0,-1500);

	this.instance_1 = new lib.s5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1350);

	this.instance_2 = new lib.s5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_3 = new lib.s5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-1050);

	this.instance_4 = new lib.s5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-900);

	this.instance_5 = new lib.s5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-750);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 3
	this.instance_6 = new lib.s5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-600);

	this.instance_7 = new lib.s5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-450);

	this.instance_8 = new lib.s5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 2
	this.instance_9 = new lib.s5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 1
	this.instance_10 = new lib.s5();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 4
	this.instance_11 = new lib.s5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,-1500,53,1799), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.s4();
	this.instance.parent = this;
	this.instance.setTransform(0,-297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.s4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.s4();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.s4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,-297,54,595), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.s3();
	this.instance.parent = this;
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.s3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-298);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.s3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.s3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,-298,52,597), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.s2();
	this.instance.parent = this;
	this.instance.setTransform(0,-298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.s2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.s2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.s2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,-298,51,597), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.s1();
	this.instance.parent = this;
	this.instance.setTransform(0,-299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.s1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.s1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.s1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,-299,54,597), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ramka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,280,163), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,70);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,230,202), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],181,0,-181,0).s().p("A8RYnMAAAgxNMA4jAAAMAAAAxNg");
	this.shape.setTransform(483.1,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-180,0,180,0).s().p("A8HYnMAAAgxNMA4PAAAMAAAAxNg");
	this.shape_1.setTransform(167,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-13,-5,677.1,315.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(136,27.6,1,1,0,0,0,136,27.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-18,-18,312,95), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(47.3,24.9,1,1,0,0,0,41,24.9);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,22);
	this.instance.filters = [new cjs.BlurFilter(17, 17, 1)];
	this.instance.cache(-5,-24,76,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-29.3,-55.1,143,148), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(159.1,38.4,1,1,0,0,0,16.2,6.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({alpha:1},0).wait(1).to({alpha:0},0).wait(13).to({alpha:1},0).wait(1).to({alpha:0},0).wait(29).to({alpha:1},0).wait(1).to({alpha:0},0).wait(9).to({alpha:1},0).wait(1).to({alpha:0},0).wait(20));

	// Слой 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(304.2,177.4,1,1,0,0,0,41,24.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({alpha:1},5).to({alpha:0},1).to({alpha:1},1).wait(27).to({alpha:0},1).to({alpha:1},1).to({alpha:0},4).to({alpha:1},43).to({alpha:0},1).to({alpha:1},1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.5,102,1,1,0,0,0,132.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376.9,246.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-225.6,42.5,1,1,0,0,0,225.4,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:191.4},10).to({scaleX:1.08,scaleY:1.08,x:192.9,y:42.6},12,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16,x:194.5},13,cjs.Ease.get(1)).to({regX:225.3,scaleX:1.09,scaleY:1.09,x:192.9},12,cjs.Ease.get(-1)).to({regX:225.4,scaleX:1,scaleY:1,x:191.4,y:42.5},13,cjs.Ease.get(1)).to({x:-228.6},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.6,66,0.942,0.942,0,0,0,181.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:0.97},11,cjs.Ease.get(-1)).to({regY:57.1,scaleX:1.04,scaleY:1.04,x:191.7},13,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,x:189.7},12,cjs.Ease.get(-1)).to({regY:57,scaleX:0.94,scaleY:0.94,x:189.6},13,cjs.Ease.get(1)).to({x:-226.4},10).wait(50).to({x:189.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388,12,691.1,45.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(140.6,82.6,1,1,0,0,0,136,27.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({alpha:1},5).wait(25).to({alpha:0.699},5).to({alpha:1},5).to({alpha:0.699},15).to({alpha:1},5).to({alpha:0.699},5).to({alpha:1},20).to({alpha:0.699},5).to({alpha:1},5).wait(6).to({alpha:0},14).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,81.5,1,1,0,0,0,140,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145));

	// Слой 8
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145));

	// logo (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1MLvIAA3dMAqZAAAIAAXdg");
	var mask_graphics_130 = new cjs.Graphics().p("A1MLvIAA3dMAqZAAAIAAXdg");
	var mask_graphics_144 = new cjs.Graphics().p("A1MLvIAA3dMAqZAAAIAAXdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:140.7,y:80.6}).wait(130).to({graphics:mask_graphics_130,x:140.7,y:80.6}).wait(14).to({graphics:mask_graphics_144,x:140.7,y:80.6}).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(32,81,1,1,0,0,0,27,75);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:73.5},4).to({y:217},7,cjs.Ease.get(-1)).to({y:380.3},8,cjs.Ease.get(1)).wait(126));

	// Слой 3
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.5,32.8,1,1,0,0,0,25.5,75.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:25.3},5).to({y:168.4},7,cjs.Ease.get(-1)).to({y:332},8,cjs.Ease.get(1)).wait(121));

	// Слой 4
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(139,80.5,1,1,0,0,0,26,74.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({y:73},5).to({y:215.5},7,cjs.Ease.get(-1)).to({y:378.3},8,cjs.Ease.get(1)).wait(116));

	// Слой 5
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(193.3,81,1,1,0,0,0,27,75);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({y:73.5},5).to({y:214.9},7,cjs.Ease.get(-1)).to({y:376.5},8,cjs.Ease.get(1)).wait(111));

	// Слой 6
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.5,81,1,1,0,0,0,26.5,75);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({y:73.5},5).to({y:784.7},50,cjs.Ease.get(-1)).to({y:1581.2},56,cjs.Ease.get(1)).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-38,281,201);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(140.5,35,1,1,0,0,0,140.5,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:31.7},9,cjs.Ease.get(-1)).to({y:30},10,cjs.Ease.get(1)).to({y:31.5},10,cjs.Ease.get(-1)).to({y:35},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,71);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ACsAeQgUgDgZgKQgYgKACgDQACgEASgEQARgFAjACQAiACAPAGQAOAHgFAJQgFAKgTADQgKACgKAAIgTgCgAjTABQgagHACgHQABgHAXgGQAWgFAcAAQAcAAARAIQARAHABAMQABAKgYABIgsACIgDAAQgTAAgYgIg");
	var mask_graphics_49 = new cjs.Graphics().p("ACsAeQgUgDgZgKQgYgKACgDQACgEASgEQARgFAjACQAiACAPAGQAOAHgFAJQgFAKgTADQgKACgKAAIgTgCgAjTABQgagHACgHQABgHAXgGQAWgFAcAAQAcAAARAIQARAHABAMQABAKgYABIgsACIgDAAQgTAAgYgIg");
	var mask_graphics_84 = new cjs.Graphics().p("ACsAeQgUgDgZgKQgYgKACgDQACgEASgEQARgFAjACQAiACAPAGQAOAHgFAJQgFAKgTADQgKACgKAAIgTgCgAjTABQgagHACgHQABgHAXgGQAWgFAcAAQAcAAARAIQARAHABAMQABAKgYABIgsACIgDAAQgTAAgYgIg");
	var mask_graphics_99 = new cjs.Graphics().p("ACsAeQgUgDgZgKQgYgKACgDQACgEASgEQARgFAjACQAiACAPAGQAOAHgFAJQgFAKgTADQgKACgKAAIgTgCgAjTABQgagHACgHQABgHAXgGQAWgFAcAAQAcAAARAIQARAHABAMQABAKgYABIgsACIgDAAQgTAAgYgIg");
	var mask_graphics_114 = new cjs.Graphics().p("ACsAeQgUgDgZgKQgYgKACgDQACgEASgEQARgFAjACQAiACAPAGQAOAHgFAJQgFAKgTADQgKACgKAAIgTgCgAjTABQgagHACgHQABgHAXgGQAWgFAcAAQAcAAARAIQARAHABAMQABAKgYABIgsACIgDAAQgTAAgYgIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:126.5,y:71.2}).wait(49).to({graphics:mask_graphics_49,x:126.5,y:71.2}).wait(35).to({graphics:mask_graphics_84,x:126.5,y:71.2}).wait(15).to({graphics:mask_graphics_99,x:126.5,y:71.2}).wait(15).to({graphics:mask_graphics_114,x:126.5,y:71.2}).wait(47));

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(128.4,71.5,1,1,0,0,0,24.2,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:126.6},24,cjs.Ease.get(-1)).to({x:124.6},25,cjs.Ease.get(1)).to({x:127.2},17,cjs.Ease.get(-1)).to({x:129.8},18,cjs.Ease.get(1)).to({y:72.3},15).to({y:71.6},7,cjs.Ease.get(-1)).to({y:70.7},8,cjs.Ease.get(1)).wait(47));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.5,101,1,1,0,0,0,115,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,0,230,202);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(132.5,102,1,1,0,0,0,132.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:238.5,y:14},19).to({x:247.5,y:13.1},5).to({x:256.5,y:14.9},5).to({x:265.5,y:13.1},5).to({x:274.5,y:14.9},5).to({x:292.5,y:13.1},5).to({x:310.5,y:14.9},5).to({x:328.5,y:13.1},5).to({x:346.5,y:14.9},5).to({x:373.5,y:32.9},10).to({x:409.5,y:51.8},5).to({x:436.5,y:132.8},5).to({x:491.4,y:12.2},31,cjs.Ease.get(-1)).wait(19).to({x:455.4,y:335.3},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376.9,246.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(115,101,1,1,0,0,0,115,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:103.9},14,cjs.Ease.get(-1)).to({y:107},15,cjs.Ease.get(1)).to({y:104},15,cjs.Ease.get(-1)).to({y:101},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.gold();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214,89);

	this.instance_2 = new lib.gold();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-45,86);

	this.instance_3 = new lib.gold();
	this.instance_3.parent = this;
	this.instance_3.setTransform(245,135);

	this.instance_4 = new lib.gold();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194,114);

	this.instance_5 = new lib.gold();
	this.instance_5.parent = this;
	this.instance_5.setTransform(154,83);

	this.instance_6 = new lib.gold();
	this.instance_6.parent = this;
	this.instance_6.setTransform(138,114);

	this.instance_7 = new lib.gold();
	this.instance_7.parent = this;
	this.instance_7.setTransform(25,63);

	this.instance_8 = new lib.gold();
	this.instance_8.parent = this;
	this.instance_8.setTransform(8,89);

	this.instance_9 = new lib.gold();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-9,114);

	this.instance_10 = new lib.gold();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-28,44);

	this.instance_11 = new lib.gold();
	this.instance_11.parent = this;
	this.instance_11.setTransform(118,39);

	this.instance_12 = new lib.gold();
	this.instance_12.parent = this;
	this.instance_12.setTransform(169,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,0,366,231);


// stage content:
(lib.themoneygame = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(1,198,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.5,56,1,1,0,0,0,181.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// slot
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(491,128.5,1,1,0,0,0,140,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// btn
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(491.5,259,1,1,0,0,0,140.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tip
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(121,208,1,1,0,0,0,115,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// vor
	this.instance_5 = new lib.Символ21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-101.5,294,1,1,0,0,0,132.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-1294.5,1052.1,1885.3);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503935789260", id:"bg"},
		{src:"images/btn.png?1503935789260", id:"btn"},
		{src:"images/btn2.png?1503935789260", id:"btn2"},
		{src:"images/glaz.png?1503935789260", id:"glaz"},
		{src:"images/glaz2.png?1503935789260", id:"glaz2"},
		{src:"images/gold.png?1503935789260", id:"gold"},
		{src:"images/logo.png?1503935789260", id:"logo"},
		{src:"images/logo2.png?1503935789260", id:"logo2"},
		{src:"images/ramka.png?1503935789260", id:"ramka"},
		{src:"images/s1.jpg?1503935789260", id:"s1"},
		{src:"images/s2.png?1503935789260", id:"s2"},
		{src:"images/s3.jpg?1503935789260", id:"s3"},
		{src:"images/s4.jpg?1503935789260", id:"s4"},
		{src:"images/s5.jpg?1503935789260", id:"s5"},
		{src:"images/text1.png?1503935789260", id:"text1"},
		{src:"images/text2.png?1503935789260", id:"text2"},
		{src:"images/tip.png?1503935789260", id:"tip"},
		{src:"images/vorishka.png?1503935789260", id:"vorishka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;