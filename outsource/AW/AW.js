(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.america = function() {
	this.initialize(img.america);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,270);


(lib.AWlogo = function() {
	this.initialize(img.AWlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,57);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,52);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,52);


(lib.checkboxleo1 = function() {
	this.initialize(img.checkboxleo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,40);


(lib.checkboxM60A3Snow1 = function() {
	this.initialize(img.checkboxM60A3Snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,39);


(lib.germany = function() {
	this.initialize(img.germany);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,208);


(lib.Layer610 = function() {
	this.initialize(img.Layer610);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,350);


(lib.leo = function() {
	this.initialize(img.leo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,211);


(lib.m60ice = function() {
	this.initialize(img.m60ice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,203);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,29);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,29);


(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);// helper functions:

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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,31,29), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.852,0.852);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,254,24.7), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.852,0.852);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,207.1,24.7), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.germany();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,316,180.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBoIh8h3IALgKIgBAAIAUgUIBaBXICSiRIAgAgIiaCbIAAAAIgTAUg");
	this.shape.setTransform(15,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,29.9,20.8), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.checkboxleo1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,119.8,28.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.checkboxM60A3Snow1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,123,39), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHXDoQgsgKgigiQgVgUgNgZIgigJQgygPghgDQgfgEgrACIhKAGQhJAFiLABQiSABhEAFQjTAWhpAHQi5AMh9gnQhoghgmg/QgWgjAAgqQgBgrATglQASgkAjgZQAigZApgHQAxgJBOARQBqAYAVACQA0AFBJgMIB7gVQBVgMCWAEQCnAEBDgGQAvgDBfgMQBUgJA6AJQAlAFBLAWQBKAWAnAEQBIAJB2gWQCRgbAvgCQB0gFBBA2QA6AwgBBUQgBBSg8AsQgiAag4AKQgTAEhAAGQgZAggkAQQgdANg/AKQgkAGgRACQgeADgXgEQgMgBgLgEQgVAOgaAIQgbAJgaAAQgSAAgTgFg");
	this.shape.setTransform(112.3,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,224.7,47.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3UGlQgzgHgmgYQgtgcgcg6Qgfg/AEhEQgygQgog0Qgpg0gQhIQgRhLAPhRQAPhRApgsQAggjAwgLQAggIA5ABQFTADGogJQD9gEH9gPIXdgsQBUgCAqAEQBFAHA1AdQA+AiAtBEQAwBKALBcQAMBqgoBqQglBjhCA7Qg5AyhPAZQg1ARhbALQjfAakXAKQitAFlJABIlyABQniACjyADQmTAFlCAMIgrABQgfAAgTgCg");
	this.shape.setTransform(183.8,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,-15.1,367.6,84.7), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Layer610();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.762,0.762);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,343.1,266.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArNDGQh5gMhcgrQhrgxgZhMQgMgiAGglQAHgmAXgdQAWgdAkgPQAjgPAlADQAgAEAuAVQBEAgAIACQApAPA2AEQAlADA9gDQBlgFDEgRQBpgJAsgGQBUgKA/gOQBIgQATgDQA0gHAnAKQAYAHAmAUQAuAZAQAGQA7AXBigHQCKgKAYABIA4AFQAgAAAWgJQARgIAVgTIAkggQAfgXAogFQAogFAjAPQA3AaAVBDQATBBgZA6QgYA4g3AoQgxAlhBASQg0APhIAFIh/AEQimAEgigBQhygEhRgeIghgMQgSgHgOgDQgdgFgzAGIjpAYQjsAXhiAGQg3ACgxAAQhCAAg1gFg");
	this.shape.setTransform(107.1,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,214.3,40.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(-117,24);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-117,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,24,189,52);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(43.1,13.8,0.701,0.701,0,0,0,61.5,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,86.2,27.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(174.8,171.8,1,1,0,0,0,183.8,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.america();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-11,0,375,253.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(94.5,26,1,1,0,0,0,94.5,26);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-117,24,189,53), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(94.5,26,1,1,0,0,0,94.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24.9},14,cjs.Ease.get(-1)).to({y:22.4},15,cjs.Ease.get(1)).to({y:24.8},15,cjs.Ease.get(-1)).to({y:26},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,24,189,52);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,15.5,14.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,35,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.5,1.3,0.685,0.685);
	this.instance.alpha = 0.98;

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},110).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},37).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},1).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},110).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.67,scaleY:0.67,y:1.6,alpha:0.969},37).wait(1));

	// Слой 3
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.5,-12,0.866,0.866);
	this.instance_2.alpha = 0.66;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},73).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},73).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({scaleX:0.74,scaleY:0.74,x:15.6,y:-2.2,alpha:0.922},9).to({scaleX:0.86,scaleY:0.86,x:15.5,y:-11.6,alpha:0.672},27).wait(1));

	// Слой 2
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.5,-24.6,1.031,1.031);
	this.instance_4.alpha = 0.34;

	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},37).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},39).to({state:[{t:this.instance_4}]},72).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},37).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({scaleX:1.03,scaleY:1.03,y:-24.3,alpha:0.34},72).wait(1));

	// Слой 1
	this.instance_6 = new lib.Анимация1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(15.5,14.5,0.232,0.232);
	this.instance_6.alpha = 0.41;

	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},39).to({state:[{t:this.instance_7}]},110).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},110).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-39.5,32,57.4);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_8 = new lib.leo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12,0,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(145.8,155.6,1,1,0,0,0,112.4,23.7);
	this.instance_9.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance_9.cache(-2,-2,229,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// ДЫМ
	this.instance_10 = new lib.Символ11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(240.5,121,3.276,3.276,0,0,0,15.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11_1, new cjs.Rectangle(12,-56,280.9,254), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m60ice();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.3,128.5,1,1,0,0,0,107.1,20.3);
	this.instance_1.alpha = 0.84;
	this.instance_1.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_1.cache(-2,-2,218,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ДЫМ
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.5,104,3.276,3.276,0,0,0,15.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,-73,302.9,240.2), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-192.5,43.3,1,1,0,0,0,103.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.5},12,cjs.Ease.get(-0.5)).to({x:126.5},86).to({x:416.5},10,cjs.Ease.get(-0.5)).wait(106).to({x:-192.5},0).to({x:87.5},12,cjs.Ease.get(-0.5)).to({x:126.5},86).to({x:416.5},10,cjs.Ease.get(-0.5)).wait(97));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(467,10.3,1,1,0,0,0,127,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:147},12,cjs.Ease.get(-0.5)).to({x:127},86).to({x:-183},10,cjs.Ease.get(-0.5)).wait(106).to({x:467},0).to({x:147},12,cjs.Ease.get(-0.5)).to({x:127},86).to({x:-183},10,cjs.Ease.get(-0.5)).wait(97));

	// Слой 9
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,60.1,0.652,0.652,0,0,0,14.8,10.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(336).to({regX:15,regY:10.3,scaleX:0.15,scaleY:0.15,x:3.6,y:60},0).to({regX:14.9,regY:10.7,scaleX:0.79,scaleY:0.79,y:60.2,alpha:1},10).to({regX:14.8,regY:10.8,scaleX:0.61,scaleY:0.61,x:3.5,y:60.3},5).wait(52).to({y:323.8},10).wait(6));

	// tablo2
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-151.1,60,1,1,0,0,0,59.9,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319).to({x:49.7},13,cjs.Ease.get(0.5)).wait(71).to({y:323.5},15).wait(1));

	// leo
	this.instance_4 = new lib.Символ11_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(450.6,39.5,1,1,0,0,0,115.2,82.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319).to({x:189.3},10,cjs.Ease.get(0.5)).to({x:118},10,cjs.Ease.get(0.5)).wait(64).to({x:122.6},0).to({scaleX:1.34,scaleY:1.34,x:-312.4,y:22.5},15).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.5,60.1,0.652,0.652,0,0,0,14.8,10.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(128).to({regX:15,regY:10.3,scaleX:0.15,scaleY:0.15,x:3.6,y:60},0).to({regX:14.9,regY:10.7,scaleX:0.79,scaleY:0.79,y:60.2,alpha:1},10).to({regX:14.8,regY:10.8,scaleX:0.61,scaleY:0.61,x:3.5,y:60.3},5).to({_off:true},222).wait(54));

	// tablo1
	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-167.8,59.7,1,1,0,0,0,43.1,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(108).to({x:33},15,cjs.Ease.get(0.5)).wait(77).to({y:229.7},14).to({_off:true},151).wait(54));

	// m60ice
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(447.3,44.8,1,1,0,0,0,132.3,71.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(108).to({x:200.8},10,cjs.Ease.get(-0.51)).to({x:126.4},11,cjs.Ease.get(0.5)).wait(71).to({x:123.3},0).to({regX:132.2,regY:71.5,scaleX:1.63,scaleY:1.63,x:-286.8,y:13.7},14,cjs.Ease.get(-1)).to({_off:true},151).wait(54));

	// Слой 2
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(126.6,41.4,1,1,0,0,0,171.6,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(419));

	// flag_germany
	this.instance_9 = new lib.Символ17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(127,270.2,1,1,0,0,0,158,90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(319).to({y:-25.8},10).to({scaleX:1.39,scaleY:1.39},35,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},39,cjs.Ease.get(1)).to({alpha:0.461},8,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// flag_amerika
	this.instance_10 = new lib.Символ9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(127.5,287,1,1,0,0,0,166.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(108).to({y:11.8},16,cjs.Ease.get(0.5)).to({scaleX:1.46,scaleY:1.46},36,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},40,cjs.Ease.get(1)).to({alpha:0.5},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(204));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296,-99.8,924.3,529.4);


// stage content:
(lib.AW = function(mode,startPosition,loop) {
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

	// logo
	this.instance = new lib.AWlogo();
	this.instance.parent = this;
	this.instance.setTransform(62,10,0.871,0.871);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.1,218.2,0.917,0.917,0,0,0,-23.9,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125.5,1,1,0,0,0,127,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4mUtMAAAgpZMAxNAAAMAAAApZg");
	this.shape.setTransform(151.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,118.1,924.3,535.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/america.jpg?1516968635492", id:"america"},
		{src:"images/AWlogo.png?1516968635492", id:"AWlogo"},
		{src:"images/btn1.png?1516968635492", id:"btn1"},
		{src:"images/btn2.png?1516968635492", id:"btn2"},
		{src:"images/checkboxleo1.png?1516968635492", id:"checkboxleo1"},
		{src:"images/checkboxM60A3Snow1.png?1516968635492", id:"checkboxM60A3Snow1"},
		{src:"images/germany.jpg?1516968635492", id:"germany"},
		{src:"images/Layer610.png?1516968635492", id:"Layer610"},
		{src:"images/leo.png?1516968635492", id:"leo"},
		{src:"images/m60ice.png?1516968635492", id:"m60ice"},
		{src:"images/text1.png?1516968635492", id:"text1"},
		{src:"images/text2.png?1516968635492", id:"text2"},
		{src:"images/Растровоеизображение1.png?1516968635492", id:"Растровоеизображение1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;