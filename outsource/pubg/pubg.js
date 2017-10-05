(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,276);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,70);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,70);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,49);


(lib.iskry = function() {
	this.initialize(img.iskry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo_big = function() {
	this.initialize(img.logo_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,48);


(lib.logo_game = function() {
	this.initialize(img.logo_game);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,48);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,47);


(lib.plecho2 = function() {
	this.initialize(img.plecho2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,53);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,82);


(lib.ruka2 = function() {
	this.initialize(img.ruka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,91);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,72);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,241);


(lib.vzryv = function() {
	this.initialize(img.vzryv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,172);// helper functions:

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


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ag4JoQiRgNh/hQQiAhQhKh9QhLh8gLiWQgLiVA5iGQA4iGBzhhQBzhhCNgiQClgoCrA5QCrA4BuCEQBHBUAlBqQAmBpgCBtQgCBugoBpQgoBohJBSQhgBtiMA4QhxAthzAAQgcAAgbgDg");
	this.shape.setTransform(61.9,61.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,123.7,123.8), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iskry();
	this.instance.parent = this;
	this.instance.setTransform(286,0);

	this.instance_1 = new lib.iskry();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,586,250), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AvFFWIAAqrIeLAAIAAKrg");
	this.shape.setTransform(96.6,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,193.3,68.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3333FF").s().p("AskFjIAAs3IXOAAIB7Opg");
	this.shape.setTransform(80.5,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,161,93.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_game();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,148,48), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap4DBIgUgCIgOgFIgOgGIgKgFIgIgHIgGgGIgGgFIgEgHIgGgGIgEgFIgCgHIgCgGIgCgFIgCgHIgCgGIAAgGIAAgGIgCgGIACgGIAAgGIAAgGIAAgGIACgGIACgGIACgGIACgGIAEgGIAEgGIAEgGIAGgGIAGgGIAGgGIAIgGIAMgFIAKgEIAGgCIAIgCIAUAAIAAgCIDpAAQgHgLgEgMQgNgmASgmQAJgUAOgNQAMgOAQgJIALgFIAMgHIAKgDIAGgDIAIgCIAUAAIAAgCIKBAAIAUACIAOAFIAOAFIAIAGIAIAHIAIAFIAGAGIAEAHIAEAFIAEAHIACAGIAEAFIACAGIACAHIAAAFIACAGIAAAHIAAAFIAAAHIAAAGIAAAFIgCAHIgCAGIgCAGIgCAGIgCAGIgEAGIgEAGIgEAGIgEAGIgCACIDPAAIATACIAPAEIANAGIAIAFIAJAGIAIAGIAGAGIADAGIAEAGIAFAGIABAGIAFAGIACAGIACAGIAAAGIACAGIAAAGIAAAGIAAAGIAAAGIAAAGIgCAGIgCAGIgCAHIgCAGIgDAFIgDAGIgFAHIgDAFIgFAGIgFAHIgIAFIgIAGIgKAHIgKADIgHACIgIADIgTACIzzAAg");
	this.shape.setTransform(73.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,147.4,38.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vzryv();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,320,172), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,437.8).s().p("A5dUFMAAAgoJMAy7AAAMAAAAoJg");
	this.shape.setTransform(163,128.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,326,257.1), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,40,82), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,22,47), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,54,91), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,18,53), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,99,241), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,52,49), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(9,13,0.726,0.726);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,13,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,13,134.3,50.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,350,276), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(59.6,66.6,1.28,1.28,0,0,0,61.8,61.8);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(99, 99, 1)];
	this.instance.cache(-2,-2,128,128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-69.5,-62.4,261,261), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,586,250), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_big();
	this.instance.parent = this;
	this.instance.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FF","#00CCFF"],[0,1],-80.5,-5.7,68.2,-5.7).s().p("AskFjIAAs3IXOAAIB7Opg");
	this.shape.setTransform(59.2,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.8,23.9,1,1,0,0,0,80.5,46.9);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,165,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.text();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(212.1,21.6,1,1,0,0,0,96.6,34.2);
	this.instance_3.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-22.7,-25,331.5,101), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(73.7,19.2,1,1,0,0,0,73.7,19.2);
	this.instance.filters = [new cjs.BlurFilter(25, 25, 2)];
	this.instance.cache(-2,-2,151,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-26,-26,203,94), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(74,24,1,1,0,0,0,74,24);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(5, 10, 5, 0))];
	this.instance.cache(-2,-2,152,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.2,24,1.086,1.086,0,0,0,73.6,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-31.8,-23,215,97), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,159,1,1,0,0,0,92.5,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:160.2},14,cjs.Ease.get(-1)).to({y:161.5},15,cjs.Ease.get(1)).to({y:160.3},15,cjs.Ease.get(-1)).to({y:159},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,137,134.3,50.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// golova.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(45.7,51.1,1,1,0,0,0,35.7,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.6,rotation:-1.8,y:50.6},14,cjs.Ease.get(-1)).to({rotation:-3.7,x:45.6,y:50.1},15,cjs.Ease.get(1)).wait(5).to({rotation:-1.8,y:50.5},15,cjs.Ease.get(-1)).to({regX:35.7,rotation:0,x:45.7,y:51.1},15,cjs.Ease.get(1)).wait(1));

	// tip.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,120.5,1,1,0,0,0,49.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:120},14,cjs.Ease.get(-1)).to({y:119.5},15,cjs.Ease.get(1)).wait(5).to({y:120},15,cjs.Ease.get(-1)).to({y:120.5},15,cjs.Ease.get(1)).wait(1));

	// plecho2.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,82.6,1,1,0,0,0,9,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1,x:5.1,y:82.2},14,cjs.Ease.get(-1)).to({rotation:2.5,y:81.7},15,cjs.Ease.get(1)).wait(5).to({rotation:1.1,y:82.1},15,cjs.Ease.get(-1)).to({rotation:0,x:5,y:82.6},15,cjs.Ease.get(1)).wait(1));

	// ruka2.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,124,1,1,0,0,0,43,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:13.1,rotation:-4.8,x:4.6,y:123.7},14,cjs.Ease.get(-1)).to({regX:42.9,rotation:-10.2,x:3.9,y:123.1},15,cjs.Ease.get(1)).wait(5).to({rotation:-5,x:4.5,y:123.6},15,cjs.Ease.get(-1)).to({regX:43,regY:13,rotation:0,x:5,y:124},15,cjs.Ease.get(1)).wait(1));

	// plecho.png
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79.4,81.3,1,1,0,0,0,1.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:10.4,rotation:1,y:81},14,cjs.Ease.get(-1)).to({rotation:2.2,y:80.4},15,cjs.Ease.get(1)).wait(5).to({regY:10.5,rotation:1,y:81},15,cjs.Ease.get(-1)).to({regY:10.3,rotation:0,y:81.3},15,cjs.Ease.get(1)).wait(1));

	// ruka.png
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(89,118,1,1,0,0,0,5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:2.3,x:88.5,y:117.5},14,cjs.Ease.get(-1)).to({rotation:4.7,x:88,y:117},15,cjs.Ease.get(1)).wait(5).to({regY:9.1,rotation:2.3,x:88.4,y:117.6},15,cjs.Ease.get(-1)).to({regY:9,rotation:0,x:89,y:118},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,0,162,241);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fire
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(211.6,137.6,0.77,0.77,0,0,0,150,86);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({regX:150.1,scaleX:0.86,scaleY:0.86,x:211.1,y:135.7,alpha:1},20).to({scaleX:1.11,scaleY:1.11,x:209.2,y:130},39).to({alpha:0.059},16).wait(1));

	// fire
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(211.6,137.6,0.77,0.77,0,0,0,150,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:1.08,x:209.4,y:130.7},54).to({regX:150.1,scaleX:1.11,scaleY:1.11,x:209.2,y:130,alpha:0.141},25).wait(34).to({regX:150.2,regY:86.2,scaleX:0.76,scaleY:0.76,x:211.8,y:137.7,alpha:0.059},0).to({regX:150,regY:86,scaleX:0.77,scaleY:0.77,x:211.6,y:137.6,alpha:0.75},16).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(176,137.5,1,1,0,0,0,163,128.5);
	this.instance_2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130));

	// bg
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176,137.6,0.931,0.931,0,0,0,175,138.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,9,329.5,257.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-135.3,alpha:0.602},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,586,250);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(81.4,74.3,0.336,0.336,0,0,0,61.8,61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:61.9,scaleX:0.72,scaleY:0.72,y:74.4},54,cjs.Ease.get(-1)).to({regY:62,scaleX:1.27,scaleY:1.27,x:81.5,y:74.6},55,cjs.Ease.get(1)).to({regY:62.1,scaleX:1.1,scaleY:1.1,y:74.7,alpha:0.102},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-0.7,158,157);


// stage content:
(lib.pubg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(70.5,29,1,1,0,0,0,60.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo game
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,132.9,0.919,0.91,0,0,0,74.2,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(257.9,81.4,1,1,0,0,0,92.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149,129,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tip
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(229.6,159,0.855,0.855,0,0,0,49.6,120.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// svet
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(226.9,156.5,1,1,0,0,0,79.2,79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,126,1,1,0,0,0,175,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132,105,603.1,282);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507205258331", id:"bg"},
		{src:"images/btn1.jpg?1507205258331", id:"btn1"},
		{src:"images/btn2.jpg?1507205258331", id:"btn2"},
		{src:"images/golova.png?1507205258331", id:"golova"},
		{src:"images/iskry.png?1507205258331", id:"iskry"},
		{src:"images/logo_big.png?1507205258331", id:"logo_big"},
		{src:"images/logo_game.png?1507205258331", id:"logo_game"},
		{src:"images/plecho.png?1507205258331", id:"plecho"},
		{src:"images/plecho2.png?1507205258331", id:"plecho2"},
		{src:"images/ruka.png?1507205258331", id:"ruka"},
		{src:"images/ruka2.png?1507205258331", id:"ruka2"},
		{src:"images/text.png?1507205258332", id:"text"},
		{src:"images/tip.png?1507205258332", id:"tip"},
		{src:"images/vzryv.png?1507205258332", id:"vzryv"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;