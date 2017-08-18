(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arow = function() {
	this.initialize(img.arow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,127);


(lib.asimov = function() {
	this.initialize(img.asimov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,86);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,52);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,52);


(lib.flash_asimov = function() {
	this.initialize(img.flash_asimov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,122);


(lib.flash_knife = function() {
	this.initialize(img.flash_knife);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,128);


(lib.Flash_money = function() {
	this.initialize(img.Flash_money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,128);


(lib.knife = function() {
	this.initialize(img.knife);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,92);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,41);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,54);


(lib.platezhki = function() {
	this.initialize(img.platezhki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,13);


(lib.sell = function() {
	this.initialize(img.sell);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,23);// helper functions:

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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Flash_money();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-39,-36,149,128), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.knife();
	this.instance.parent = this;
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.flash_knife();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-3,-27,149,134), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.asimov();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.flash_asimov();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,-22,156,122), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,155,127), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApsETIAAolIRsAAIBtIlg");
	this.shape.setTransform(62.1,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,124.2,55.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("At3ETIhtolIfJAAIAAIlg");
	this.shape.setTransform(99.7,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,199.4,55.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,0,0)","#FFCC00","rgba(255,255,0,0)"],[0,0.467,1],-16.3,0,16.4,0).s().p("AiEFpQgeAAAAgeIAAqWQAAgeAeAAIEJAAQAeAAAAAeIAAKWQAAAegeAAg");
	this.shape.setTransform(16.3,36.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,32.7,72.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+BqQgLgEgGgHQgHgHgFgKQgDgJAAgNIAAgOIAkAAIAAAQQAAALAGAFQAEAEAKAAQAJAAAFgEQAGgFgBgLQAAgIgDgHQgDgHgFgGQgGgGgUgRQgSgNgHgLQgGgIgCgJQgEgKAAgLQAAgMAEgKQADgKAHgHQAIgHAKgEQAKgDAOAAQAOAAAKADQALAEAHAHQAHAHAEAKQAEAKAAAMIAAAHIgkAAIAAgJQAAgLgGgFQgEgFgJAAQgKAAgFAFQgFAFAAALQAAAIAEAHQACAHAGAGIAaAXQARANAIALQAFAIADAJQAEAKAAALQAAANgEAJQgDAKgIAHQgHAHgLAEQgKADgOAAQgOAAgLgDgAHYBrIAAhHIgwiOIAoAAIAdBiIAdhiIAkAAIgvCOIAABHgAFABrIAAjVIAmAAIAAC2IA/AAIAAAfgADhBrIAAi2IgoAAIAAgfIB2AAIAAAfIgoAAIAAC2gACBBrIgviaIAACaIgiAAIAAjVIAwAAIAnB/IAAh/IAiAAIAADVgAgHBrIgHgnIguAAIgGAnIgjAAIAmjVIA4AAIAmDVgAgSAnIgShrIgTBrIAlAAgAi6BrIAAi2IgoAAIAAgfIB2AAIAAAfIgnAAIAAC2gAmbBrIgviaIAACaIgiAAIAAjVIAwAAIAnB/IAAh/IAiAAIAADVgAouBrIAAjVIAnAAIAADVg");
	this.shape.setTransform(55.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,111.7,21.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH8BIQgHgCgEgFQgFgFgCgHQgDgGAAgJIAAgJIAXAAIAAAKQAAAIAEADQADADAGAAQAGAAADgDQAEgDAAgIQAAgFgCgFQgCgEgEgEQgDgFgNgLQgLgJgFgHQgEgGgCgGQgCgGAAgIQAAgJACgGQADgHAEgFQAFgEAGgDQAHgCAJAAQAJAAAGACQAHADAFAEQAEAFACAHQADAGAAAJIAAAFIgXAAIAAgGQAAgIgEgDQgCgEgGAAQgGAAgEAEQgDADAAAIQAAAFACAFIAGAJIAQAPQAMAJAFAHIAFAMQACAGAAAIQAAAJgDAGQgCAHgEAFQgFAFgHACQgGACgJAAQgJAAgHgCgADGBIQgHgCgEgFQgFgFgCgHQgDgGAAgJIAAgJIAXAAIAAAKQAAAIAEADQADADAGAAQAGAAADgDQAEgDAAgIQAAgFgCgFQgCgEgEgEQgDgFgNgLQgLgJgFgHQgEgGgCgGQgCgGAAgIQAAgJACgGQADgHAEgFQAFgEAGgDQAHgCAJAAQAJAAAGACQAHADAFAEQAEAFADAHQACAGAAAJIAAAFIgXAAIAAgGQAAgIgEgDQgCgEgGAAQgGAAgDAEQgEADAAAIQAAAFACAFIAGAJIAQAPQAMAJAFAHQADAGACAGQACAGAAAIQAAAJgCAGQgDAHgEAFQgFAFgHACQgGACgJAAQgJAAgHgCgAgBBIQgHgCgEgFQgFgFgCgHQgCgGAAgJIAAhLQAAgJACgGQACgHAFgFQAEgEAHgDQAGgCAJAAQAJAAAHACQAHADAEAEQAFAFACAHQACAGAAAJIAAAOIgXAAIAAgPQAAgIgDgDQgDgEgGAAQgGAAgEAEQgDADAAAIIAABNQAAAIADADQAEADAGAAQAGAAADgDQADgDAAgIIAAgbIgLAAIAAgTIAiAAIAAAtQAAAJgCAGQgCAHgFAFQgEAFgHACQgHACgJAAQgJAAgGgCgAlsBIQgHgCgFgFQgEgFgCgHQgDgGAAgJIAAhLQAAgJADgGQACgHAEgFQAFgEAHgDQAHgCAJAAQAIAAAHACQAHADAFAEQAEAFADAHQACAGAAAJIAAAOIgXAAIAAgPQAAgIgDgDQgEgEgGAAQgGAAgDAEQgDADAAAIIAABNQAAAIADADQADADAGAAQAGAAAEgDQADgDAAgIIAAgUIAXAAIAAATQAAAJgCAGQgDAHgEAFQgFAFgHACQgHACgIAAQgJAAgHgCgAHBBJIgehpIAABpIgWAAIAAiRIAeAAIAZBXIAAhXIAWAAIAACRgAFjBJIAAiRIAYAAIAACRgAE/BJIgXg6IgIANIAAAtIgYAAIAAiRIAYAAIAABAIAghAIAYAAIgiBBIAiBQgABCBJIAAiRIBCAAIAAAVIgqAAIAAApIAhAAIAAATIghAAIAAArIAqAAIAAAVgAg+BJIgehpIAABpIgWAAIAAiRIAfAAIAZBXIAAhXIAVAAIAACRgAiVBJIgFgbIgdAAIgFAbIgWAAIAZiRIAkAAIAYCRgAidAbIgLhJIgMBJIAXAAgAj2BJIAAg/IgbAAIAAA/IgZAAIAAiRIAZAAIAAA/IAbAAIAAg/IAZAAIAACRgAmkBJIgUg6IgUA6IgXAAIAbhKIgZhHIAZAAIASA2IATg2IAWAAIgZBHIAbBKgAovBJIAAiRIBCAAIAAAVIgqAAIAAApIAiAAIAAATIgiAAIAAArIAqAAIAAAVg");
	this.shape.setTransform(56,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,112,14.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,52);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0)").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,-125,0,125).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1,-1,302,252), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,195.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,300,250), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		var _this = this;
		_this.stop();
		setTimeout(function(){
			_this.play();
		}, 2000)
	}
	this.frame_29 = function() {
		var _this = this;
		_this.stop();
		setTimeout(function(){
			_this.play();
		}, 2000)
	}
	this.frame_39 = function() {
		var _this = this;
		_this.stop();
		setTimeout(function(){
			_this.play();
		}, 2000)
	}
	this.frame_49 = function() {
		var _this = this;
		_this.stop();
		setTimeout(function(){
			_this.play();
		}, 2000)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(1));

	// money
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(77,63,1,1,0,0,0,31,27);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:31.2,regY:26.9,scaleX:0.12,scaleY:0.12,x:77.1},0).to({scaleX:0.56,scaleY:0.56,alpha:0.5},5,cjs.Ease.get(-1)).to({regX:31,regY:27,scaleX:1,scaleY:1,x:77,alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).wait(5).to({regX:31.2,regY:26.9,scaleX:0.12,scaleY:0.12,x:77.1},0).to({scaleX:0.56,scaleY:0.56,alpha:0.5},5,cjs.Ease.get(-1)).to({regX:31,regY:27,scaleX:1,scaleY:1,x:77,alpha:1},5,cjs.Ease.get(1)).wait(1));

	// knife
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.5,67,1,1,0,0,0,69.5,46);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({regX:69.4,regY:46.1,scaleX:0.16,scaleY:0.16,y:67.1},0).to({regX:69.5,regY:46.2,scaleX:0.58,scaleY:0.58,x:79.6},5,cjs.Ease.get(-1)).to({regY:46,scaleX:1,scaleY:1,x:79.5,y:67,alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).to({_off:true},1).wait(5));

	// asimov
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.7,63,1,1,0,0,0,71.5,43);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regX:71.3,regY:43.1,scaleX:0.11,scaleY:0.11,y:63.1},0).to({regX:71.4,regY:43.2,scaleX:0.56,scaleY:0.56,x:74.8,alpha:0.5},5,cjs.Ease.get(-1)).to({regX:71.5,regY:43,scaleX:1,scaleY:1,x:74.7,y:63,alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).to({_off:true},1).wait(25));

	// Слой 1
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.5,63.5,1,1,0,0,0,77.5,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:360},9,cjs.Ease.get(-1)).wait(10).to({rotation:720},10,cjs.Ease.get(-1)).to({rotation:1080},10,cjs.Ease.get(-1)).to({rotation:1440},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,159.2,134);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(207.8,27.4,1,1,0,0,0,99.7,27.5);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.6,27.5,1,1,0,0,0,62.1,27.5);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-4.5,-0.1,312,55.2), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(16.3,36.1,1,1,0,0,0,16.3,36.1);
	this.instance.alpha = 0.602;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,37,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-5,-5,46,86), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sell();
	this.instance.parent = this;
	this.instance.setTransform(109,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-8,0.955,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.1,12.8,1,1,0,0,0,56.6,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-19,-14.9,312,55.2), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(56.6,-44.2,1,1,0,0,0,55.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-40.9},12,cjs.Ease.get(-1)).to({y:-37.7},12,cjs.Ease.get(1)).to({y:-41.1},13,cjs.Ease.get(-1)).to({y:-44.2},12,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57,-75.6,1,1,0,0,0,56,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-78.8},12,cjs.Ease.get(-1)).to({y:-82.1},12,cjs.Ease.get(1)).to({y:-78.7},13,cjs.Ease.get(-1)).to({y:-75.6},12,cjs.Ease.get(1)).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoWCTQgeAAAAgeIAAjpQAAgeAeAAIQtAAQAeAAAAAeIAADpQAAAegeAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AoWCTQgeAAAAgeIAAjpQAAgeAeAAIQtAAQAeAAAAAeIAADpQAAAegeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:55.5,y:32.6}).wait(49).to({graphics:mask_graphics_49,x:55.5,y:32.6}).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55.2,24,1,1,15,0,0,16.3,36.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:14.8,x:43.5},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:15,x:146.3},25,cjs.Ease.get(1)).wait(1));

	// btn.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(36.3,29.1,0.647,0.647,0,0,0,56,17.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-83,113,130.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0)").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1,-1,302,252), null);


// stage content:
(lib.gamerall_exchangeskins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(52,26,1,1,0,0,0,40,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// spin
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.5,142.5,1,1,0,0,0,77.5,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// text
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(228,179,1,1,0,0,0,56,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// platezhki
	this.instance_3 = new lib.platezhki();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22,227);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.4,125.7,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(143,120.1,312,256.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arow.png?1503055837745", id:"arow"},
		{src:"images/asimov.png?1503055837745", id:"asimov"},
		{src:"images/bg.jpg?1503055837745", id:"bg"},
		{src:"images/btn.png?1503055837745", id:"btn"},
		{src:"images/btn2.png?1503055837745", id:"btn2"},
		{src:"images/flash_asimov.png?1503055837745", id:"flash_asimov"},
		{src:"images/flash_knife.png?1503055837745", id:"flash_knife"},
		{src:"images/Flash_money.png?1503055837745", id:"Flash_money"},
		{src:"images/knife.png?1503055837745", id:"knife"},
		{src:"images/logo.png?1503055837745", id:"logo"},
		{src:"images/money.png?1503055837745", id:"money"},
		{src:"images/platezhki.png?1503055837745", id:"platezhki"},
		{src:"images/sell.png?1503055837745", id:"sell"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;