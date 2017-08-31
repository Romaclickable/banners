(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.flash = function() {
	this.initialize(img.flash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,108);


(lib.godrays = function() {
	this.initialize(img.godrays);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,264);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,97);


(lib.molot = function() {
	this.initialize(img.molot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,164);


(lib.OPEN = function() {
	this.initialize(img.OPEN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,75);


(lib.OPEN2 = function() {
	this.initialize(img.OPEN2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,75);


(lib.sapogi = function() {
	this.initialize(img.sapogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,77);


(lib.shlem = function() {
	this.initialize(img.shlem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,100);


(lib.sunduk = function() {
	this.initialize(img.sunduk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,227);// helper functions:

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


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1515").s().p("AsfK5QlMkhABmYQgBmYFMkhQFLkgHUAAQHVAAFMEgQFKEhAAGYQAAGYlKEhQlMEhnVAAQnUAAlLkhg");
	this.shape.setTransform(128.4,120.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(15.2,22.1,226.3,197.3), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.molot();
	this.instance.parent = this;
	this.instance.setTransform(10.7,0,1,1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,158.4,173.3), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shlem();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,121,100), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,89.3,67), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("ACQHBQhigfhAhIIgFgGQhKA9hcARQhrAUhpgsQhqgsg9hZQg9hagChzQgBhxA6hcQAwhMBQgvQBNgtBagDIAQgUQA7hDBOggQBfgoBpAQQBqAQBPBCQA4AwAiBCIAbAIQBgAgBBBJQBBBJAVBjQAVBkgfBdQgeBchMBFQhLBEhgAUQglAIgmAAQg6AAg7gTg");
	this.shape.setTransform(63.2,46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,126.3,93.7), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sunduk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,225,227), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFE104","rgba(255,255,255,0)"],[0,0.478,1],-38.1,0,38.2,0).s().p("Al9IuIAAxbIL7AAIAARbg");
	this.shape.setTransform(38.2,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,76.3,111.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.OPEN();
	this.instance.parent = this;

	this.instance_1 = new lib.OPEN2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,75);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sapogi();
	this.instance.parent = this;
	this.instance.setTransform(-44.8,-35.6,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-35.6,89.7,71.2);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.godrays();
	this.instance.parent = this;
	this.instance.setTransform(160,132,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-132,320,264);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(88,85,0.942,0.942,0,0,0,120.5,120.6);
	this.instance.filters = [new cjs.BlurFilter(115, 115, 1)];
	this.instance.cache(13,20,230,201);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A4+UMMAAAgoXMAx9AAAMAAAAoXg");
	this.shape.setTransform(101.4,84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(118.9,122.6,1,1,0,0,0,97.5,85);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-47.8,-28.2,333,306), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.9,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,89.7,71.2), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(21.3,112.1,0.086,0.086,0,0,0,44.6,33.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({regY:33.5,scaleX:1,scaleY:1,x:21.2,alpha:1},4).to({regX:44.5,regY:33.4,rotation:105,x:21.3},2).to({regX:44.6,regY:33.6,scaleX:0.09,scaleY:0.09,rotation:0,alpha:0},3).to({_off:true},1).wait(30));

	// Слой 7
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.7,24.5,0.086,0.086,0,0,0,44.6,33.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({regY:33.5,scaleX:1,scaleY:1,x:29.6,alpha:1},4).to({regX:44.5,regY:33.4,rotation:105,x:29.7},2).to({regX:44.6,regY:33.6,scaleX:0.09,scaleY:0.09,rotation:0,alpha:0},3).to({_off:true},1).wait(52));

	// Слой 6
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(215.7,42.5,0.086,0.086,0,0,0,44.6,33.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regY:33.5,scaleX:1,scaleY:1,x:215.6,alpha:1},4).to({regX:44.5,regY:33.4,rotation:105,x:215.7},2).to({regX:44.6,regY:33.6,scaleX:0.09,scaleY:0.09,rotation:0,alpha:0},3).to({_off:true},1).wait(71));

	// Слой 5
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.7,24.5,0.086,0.086,0,0,0,44.6,33.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:33.5,scaleX:1,scaleY:1,x:143.6,alpha:1},4).to({regX:44.5,regY:33.4,rotation:105,x:143.7},2).to({regX:44.6,regY:33.6,scaleX:0.09,scaleY:0.09,rotation:0,alpha:0},3).to({_off:true},1).wait(90));

	// shlem.png
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(123.5,8,1,1,0,0,0,60.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({y:7.4},12,cjs.Ease.get(-1)).to({y:6.8},13,cjs.Ease.get(1)).to({y:7.4},12,cjs.Ease.get(-1)).to({y:8},13,cjs.Ease.get(1)).wait(41));

	// sapogi.png
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(33.9,41.6,1,1,0,0,0,44.9,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:40.8},11,cjs.Ease.get(-1)).to({y:39.8},13,cjs.Ease.get(1)).to({y:40.7},12,cjs.Ease.get(-1)).to({y:41.6},13,cjs.Ease.get(1)).wait(51));

	// molot.png
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(174,92,1,1,0,0,0,79.2,86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({y:91.4},12,cjs.Ease.get(-1)).to({y:90.8},13,cjs.Ease.get(1)).to({y:91.4},12,cjs.Ease.get(-1)).to({y:92},13,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-42,264.2,220.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(61.5,44.6,1.081,1.081,0,0,0,63.1,46.8);
	this.instance.filters = [new cjs.BlurFilter(56, 56, 1)];
	this.instance.cache(-2,-2,130,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-34.7,-34,195,161), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AI1N0I5rkTIqhg5UAgXgvVAWYA0hg");
	var mask_graphics_99 = new cjs.Graphics().p("AI1M7I5rkTIqhg6UAf4gruAW3Aw7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:110.4,y:55.9}).wait(99).to({graphics:mask_graphics_99,x:110.4,y:61.6}).wait(1));

	// Слой 2
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(100.4,131,1,1,0,0,0,1.4,7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

	// Слой 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AwZGKICJg2QQZ+/ORfaInLEWg");
	mask_1.setTransform(108.3,77);

	// Слой 4
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.5,112,1,1,0,0,0,63.1,46.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.75},24,cjs.Ease.get(-1)).to({alpha:0.691},25,cjs.Ease.get(1)).to({alpha:0.75},25,cjs.Ease.get(-1)).to({alpha:1},25,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_2 = new lib.gold();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// Слой 1
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(112.5,113.5,1,1,0,0,0,112.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-8,320,236);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(41.5,68.3,1,1,0,0,0,38.1,55.8);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance.cache(-2,-2,80,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-9.6,-0.5,106,142), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqlFZQhjAAAAhnIAAnkQAAhmBjAAIVLAAQBjAAAABmIAAHkQAABnhjAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AqlFZQhjAAAAhnIAAnkQAAhmBjAAIVLAAQBjAAAABmIAAHkQAABnhjAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:79.7,y:37.4}).wait(49).to({graphics:mask_graphics_49,x:79.7,y:37.4}).wait(51));

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,32.9,1,1,15,0,0,38.1,55.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:55.7,scaleX:1,scaleY:1,rotation:14.8,x:96.1},24,cjs.Ease.get(-1)).to({regY:55.8,scaleX:1,scaleY:1,rotation:15,x:253},25,cjs.Ease.get(1)).wait(51));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,37.5,1,1,0,0,0,80,37.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2.9,155.4,69);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(80,37.5,1,1,0,0,0,80,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:38.9},9,cjs.Ease.get(-1)).to({y:40.5},10,cjs.Ease.get(1)).to({y:39},10,cjs.Ease.get(-1)).to({y:37.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-30.9,278.7,156);


// stage content:
(lib._1case = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(170,227.5,1,1,0,0,0,80,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// item
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125,150,1,1,0,0,0,74,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sunduk
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(175.5,134.5,1,1,0,0,0,112.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(174.8,138.8,1,1,0,0,0,120.6,120.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.3,128.5,377.4,327.6);
// library properties:
lib.properties = {
	width: 350,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/flash.png?1504183388085", id:"flash"},
		{src:"images/godrays.png?1504183388085", id:"godrays"},
		{src:"images/gold.png?1504183388085", id:"gold"},
		{src:"images/molot.png?1504183388085", id:"molot"},
		{src:"images/OPEN.png?1504183388085", id:"OPEN"},
		{src:"images/OPEN2.png?1504183388085", id:"OPEN2"},
		{src:"images/sapogi.png?1504183388085", id:"sapogi"},
		{src:"images/shlem.png?1504183388085", id:"shlem"},
		{src:"images/sunduk.png?1504183388085", id:"sunduk"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;