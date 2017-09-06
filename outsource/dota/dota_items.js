(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,68);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,68);


(lib.Dota2ItemsStore = function() {
	this.initialize(img.Dota2ItemsStore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,48);


(lib.dota_logo = function() {
	this.initialize(img.dota_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.logo_big = function() {
	this.initialize(img.logo_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,36);


(lib.mech = function() {
	this.initialize(img.mech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,173);


(lib.Particules = function() {
	this.initialize(img.Particules);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,250);


(lib.skelet = function() {
	this.initialize(img.skelet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,199);


(lib.svechenie = function() {
	this.initialize(img.svechenie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,167);// helper functions:

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


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AHcJ4QgpgSggggIgWAAQg8gBg0gaQgsgXggglIgRgDQhGgLg4gxQgtgngVgyQgxgOgpghQgSgOgPgSIAAABIhCBBQgXAZgvA2QgtA0gZAaQhZBZhYAVQhMAShNgfQhNgfgqhCQgrhBAEhTQADhTAwg+QAQgWAegbQAhgeAQgQQAagZBGhVQA6hIArgiQApggAvgSQAUgHAUgFQAPg5AnguIABgBQgOgOgIgSQgGgOgBgMIgBgQQAAgPACgHQACgPAJgOQAFgKAJgKQARgSAYgJQgDgMACgOQAEgXAQgPQAOgOAUgDIABgHQACgSAMgNQAMgMASgEQAMgCALADQgIgFgFgIQgCgFgBgHQgCgRALgMQAKgJAQAAQARAAALALQAJAIAAAOQAAANgIAJQgHAKgNADQgIABgIgBQAOAHAIAPQAJAPgCARQgCARgMANQgHAIgIAEQAEAOgDAPQgDAUgPAQQAMAOAGARIAFASIAQgGQAngNApAIQAXAFASAKQAGgZAQgSQAHgIAIgHQgMgRgCgUQgBgWAMgUQAGgLAKgIIgFgEQgNgNAAgTQAAgTAOgNIAJgGIgBgBQgIgCgFgHQgEgHAAgIQABgIAGgGQAGgGAIgBIAEgBQAIAAAHAGQAGAGACAIQABAIgFAIIgDAEQANAAALAGQALAFAGAMQAHALAAAMQgBAMgFAKQAQAEAMAMQAUAUACAbQACASgHARIgEAIIAMAKQAUASAIAaQAJAbgGAaQgEAXgPATQgPAUgVALIgGADQAeAdATAmQAWAsADAzQAaAWASAeQAKAQAIASIAYAHQAxATAjAjQA6gMA5AQQBFATAzA4IAOAQIAbAJQBDAZAtA7QAtA8AGBHQAGBGghBDQgiBDg9AkQg0AfhAAEIgPAAQg3AAgxgVg");
	this.shape.setTransform(83.5,65.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,166.9,130.7), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.svechenie();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,194,167), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Particules();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,297,250), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FF","#3399FF"],[0,1],-59.6,0,59.6,0).s().p("ApTEFIAAoJIQnAAICAIJg");
	this.shape.setTransform(59.6,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,119.2,52.2), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0)","#FFCC00","rgba(255,255,204,0)"],[0,0.482,1],-27.3,-4.6,27.2,4.7).s().p("ABKGPInFhNQgtgHAMgdIEZqXQAMgdAuAHIHFBNQAtAIgMAdIkZKXQgJAXgeAAQgJAAgKgCg");
	this.shape.setTransform(26.6,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-15,0,83.1,80.2), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuIEEIiEoJMAgZAAAIAAILg");
	this.shape.setTransform(103.7,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,207.4,52.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(58,21,0.676,0.676);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58,22,0.676,0.676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,21,121.7,46);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AAAMVQnNAAlGjnQlHjnAAlHIABgNQAHk/E/jiQFGjnHNABQHOgBFGDnQFGDoABFGQgBFHlGDnQk8Dgm7AHIgdAAg");
	this.shape.setTransform(151.8,101.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(40.4,22.8,222.9,157.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFCC").ss(3,1,1).p("AjkApQgOgQgBgUQgBgvBPgfQBOggBaABQBbAABLAoQBLAnAAAuQAAAagUARAA7BoQgPABgdAAQgsgBghgD");
	this.shape.setTransform(24.4,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-1.5,-1.5,51.8,24), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABMAXQgHgHAAgKQAAgJAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgKAAgHgHgAhtALQgHgHAAgJQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAJgHAHQgHAHgKAAQgKAAgHgHg");
	this.shape.setTransform(11.7,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,23.4,6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mech();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,129,173), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(80,67.4,0.883,0.883,0,0,0,83.5,65.3);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance.cache(-2,-2,171,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-8.7,-5.3,181,150), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(97,83.5,1,1,0,0,0,97,83.5);
	this.instance.alpha = 0.602;
	this.instance.shadow = new cjs.Shadow("rgba(255,255,102,1)",0,0,17);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-9,-9,216,189), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(148.5,125,1,1,0,0,0,148.5,125);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,297,250), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(148.5,210,1,1,0,0,0,148.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:92,alpha:0},59).wait(1).to({y:260,alpha:1},0).to({y:92,alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,85,297,250);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(26.3,40.1,1,1,0,0,0,26.3,40.1);
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-17,-2,87,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-20,-5,97,94), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Dota2ItemsStore();
	this.instance.parent = this;
	this.instance.setTransform(142,-2,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.dota_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.logo_big();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(184.8,11.5,1,1,0,0,0,101.7,26.2);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(36.3,11.5,1,1,0,0,0,59.6,26.1);
	this.instance_4.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-23.3,-14.7,313.8,52.5), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFNDLIgHgCQgLgGgGgBQgNgDgSAMInqAAIgJgNQgIgKgIgCIgMgDQghgEgRABQgSABgVAGQgLACgKAFQgKAFgIAGQgEADgCADIjFAAIAAivIAFgBQADAAAFgEIAHgHQADgCABgEQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBIACgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgMgDgKgDIAAjCIAzAAIABACIAHAFIAHAHIAIABQAaABALgDQAOgEAJgJIGnAAQABAEAFAEQAHAGAKAEQAVALAbgJQATgFASgPIHvAAIAABcQgFAAgCACIgEAGQgIAUAPAgIAEAIIAAD0IgTgFIgUgCQgKAAgGACQgGACgDAEgAjjDLIAAgBIABABg");
	mask.setTransform(118.8,43.3);

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(19.7,42.2,1,1,0,0,0,26.3,40.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:132.8},29,cjs.Ease.get(-1)).to({x:249.7},30,cjs.Ease.get(1)).wait(21));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,34,1,1,0,0,0,90,34);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,21,121.7,47);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(90,34,1,1,0,0,0,90,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:33.1},14,cjs.Ease.get(-1)).to({y:32},15,cjs.Ease.get(1)).to({y:33},15,cjs.Ease.get(-1)).to({y:34},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-2.9,206.3,94);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(93,71.8,1,1,0,0,0,133.3,94.5);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(255, 255, 1)];
	this.instance.cache(38,21,227,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-128,-128,482,417), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(141.6,101.8,1,1,0,0,0,111.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.707},14,cjs.Ease.get(-1)).to({alpha:0.391},15,cjs.Ease.get(1)).to({alpha:0.695},15,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.9,-105.2,483,418);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(25.8,12.4,1,1,0,0,0,24.4,10.5);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,153,1)",0,0,8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-4.1,-3.6,63,35), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(25.5,11.5,1,1,0,0,0,25.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-4.1,-3.6,63,35), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(11.7,3,1,1,0,0,0,11.7,3);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,10);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,27,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-8,-8,43,26), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(11.7,3,1,1,0,0,0,11.7,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-8,-8,43,26), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(25.5,11.5,1,1,0,0,0,25.5,11.5);
	this.instance.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.512},14,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).to({alpha:0.531},15,cjs.Ease.get(-1)).to({alpha:0.051},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-3.6,63,35);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(90.1,50.2,1,1,0,0,0,11.7,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.711},9,cjs.Ease.get(-1)).to({alpha:0.391},10,cjs.Ease.get(1)).to({alpha:0.695},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.skelet();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Слой 3
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.5,73,1,1,0,0,0,83.5,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.715},9,cjs.Ease.get(-1)).to({alpha:0.398},10,cjs.Ease.get(1)).to({alpha:0.699},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,199);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(97,83.5,1,1,0,0,0,97,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-9,-9,216,189), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mech.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,135.5,1,1,0,0,0,112.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.3,y:136.6},14,cjs.Ease.get(-1)).to({rotation:-9,y:137.5},15,cjs.Ease.get(1)).to({rotation:-4.3,y:136.6},15,cjs.Ease.get(-1)).to({rotation:0,y:135.5},15,cjs.Ease.get(1)).wait(1));

	// nimb.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,-16.5,1,1,0,0,0,25.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-15.5},14,cjs.Ease.get(-1)).to({y:-14.5},15,cjs.Ease.get(1)).to({y:-15.5},15,cjs.Ease.get(-1)).to({y:-16.5},15,cjs.Ease.get(1)).wait(1));

	// skelet.png
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(35,62.5,1,1,0,0,0,104,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:63.5},14,cjs.Ease.get(-1)).to({y:64.5},15,cjs.Ease.get(1)).to({y:63.5},15,cjs.Ease.get(-1)).to({y:62.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45,-17.5,1,1,0,0,0,97,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-15.1,alpha:0.711},14,cjs.Ease.get(-1)).to({y:-12.5,alpha:0.398},15,cjs.Ease.get(1)).to({y:-15,alpha:0.699},15,cjs.Ease.get(-1)).to({y:-17.5,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-110,320,272);


// stage content:
(lib.dota_items = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(59.5,26,1,1,0,0,0,45.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(203,208,1,1,0,0,0,90,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// svet
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158.4,250.1,1,1,0,0,0,133.3,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// skelet
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(268,192.5,1,1,0,0,0,104,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// iskry
	this.instance_4 = new lib.Символ23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.5,125,1,1,0,0,0,148.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-49,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.2,95,483,498.4);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1504711301047", id:"bg"},
		{src:"images/btn1.png?1504711301047", id:"btn1"},
		{src:"images/btn2.png?1504711301048", id:"btn2"},
		{src:"images/Dota2ItemsStore.png?1504711301048", id:"Dota2ItemsStore"},
		{src:"images/dota_logo.png?1504711301048", id:"dota_logo"},
		{src:"images/logo_big.png?1504711301048", id:"logo_big"},
		{src:"images/mech.png?1504711301048", id:"mech"},
		{src:"images/Particules.png?1504711301048", id:"Particules"},
		{src:"images/skelet.png?1504711301048", id:"skelet"},
		{src:"images/svechenie.png?1504711301048", id:"svechenie"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;