(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.drak = function() {
	this.initialize(img.drak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,196);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,300);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,119);


(lib.hp = function() {
	this.initialize(img.hp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,37);


(lib.krylo1 = function() {
	this.initialize(img.krylo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,91);


(lib.krylo2 = function() {
	this.initialize(img.krylo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,117);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,227);


(lib.mech = function() {
	this.initialize(img.mech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.plashka = function() {
	this.initialize(img.plashka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,92);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,40);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,44);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,47);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,31);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,34);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,92);// helper functions:

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


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","rgba(255,153,0,0)"],[0,1],52.5,-30.3,-52.6,30.4).s().p("AqRS+MAAAgl7IUjAAMAAAAl7g");
	this.shape.setTransform(65.8,121.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,131.7,242.7), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("AgyATQgVgIAAgLQAAgLAVgHQAWgJAcAAQAeAAAVAJQAVAHAAALQAAALgVAIQgVAJgegBQgcABgWgJg");
	this.shape.setTransform(7.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,14.4,5.5), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvxAXrMAAAgvVMBfjAAAMAAAAvVg");
	this.shape.setTransform(305.8,151.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,611.7,303.1), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(-54,-1,1.23,1.23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-54,-1,353,41.8), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-50,-5,1.235,1.174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-50,-5,328.5,36.4), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,288.3,39.2), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(284.1,65.6,0.507,0.507,0,15,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,284.1,212.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(2,1,1).p("AhshsIDZAAIAADZIjZAAg");
	this.shape.setTransform(10.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-1,-1,23.9,23.9), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("МОЩНЫЙ УДАР", "bold 30px 'DINPro-Black'", "#FFFF00");
	this.text.lineHeight = 40;
	this.text.lineWidth = 227;
	this.text.parent = this;
	this.text.setTransform(24.3,29.5,0.19,0.19,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLG4QgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgEIgBgGIAAgQIAnAAIAAAJIgOAAIAAAHIgBAGQgBACgCACQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAgBABIgFABIgFgBgAgKGqIABADIADACIADgCIABgDIAAgGIgIAAgAAMGVIAAgKIgfAAIAAgKIAfAAIAAgKIAIAAIAAAegAgTFrIAGgCIAAgNIgGgCIAAgKIAnAPIAAAIIgnAOgAgFFnIAKgEIgKgDgAgMFNQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgCgEIgBgFIAAgSIAnAAIAAARIAAAGIgDADIgDADIgFABIgFgBIgDgEIgDAFIgFABIgFgBgAgKFAIABADIACABIADgBIABgDIAAgHIgHAAgAAFE/IABADIACABIADgBIAAgDIAAgGIgGAAgAgBEpIgHgBIgEgCIgDgCIgCgCIgBgCIgCgHIACgHIABgCIACgCIADgDIAEgBIAIgBIAHAAIAEABIADABIACADIACACIACACIABAHIgBAGIgCADIgCACIgCACIgDACIgHABgAgGEUIgDABIgBACIgBACIABACIABACIADABIAGABIACAAIAFgBIADgBIABgCIABgCIgBgCIgBgCIgDgBIgFgBIgCAAIgGABgAgMEDIgEgEIgDgEIgBgGIABgGIADgEIAEgEIAFgCIAAAKIgDACIgBAEIABADQABABAAAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgGIAHAAIAAAGIABADQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgCIAAgKIAFACIAFAEIACAEIABAGIgBAGIgCAEIgEADIgFACIgCgBIgDgBIgDgEIgBACIgCACIgCACIgDAAIgFgBgAgLDiIgEgDIgDgFIgBgFIAAgQIAnAAIAAAKIgOAAIAAAGIgBAGQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgDADIgFABIgFgBgAgKDUIABAEIADABQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAABAAIABgEIAAgFIgIAAgAgTC9IAAgKIAfAAIAAgHIgLAAIgKgBIgDgBIgDgCIgCgCIgBgCIgBgGIAAgDIAJAAIAAABIAAACIACADIAEABIAFAAIATAAIAAAbgAgBCYIgHgBIgEgBIgDgDIgCgCIgBgCIgCgHIACgGIABgDIACgCIADgDIAEgBIAIgBIAHABIAEAAIADACIACACIACACIACADIABAGIgBAHIgCACIgCACIgCACIgDABIgHACgAgGCDIgDABIgBACIgBACIABACIABACIADABIAGAAIACAAIAFAAIADgBIABgCIABgCIgBgCIgBgCIgDgBIgFgBIgCAAIgGABgAgTByIAAgKIAfAAIAAgLIgfAAIAAgKIAnAAIAAAfgAAIBEIACgCQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgDIgBgBIgDgCIgHAAIgGAAIgDACIgBABIgBADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIADACIAAAKIgGgCQgDgBgBgCIgDgFIgBgFIABgEIABgDQABgCACgDIAEgCIADgBIAIAAIAFAAIAEAAIAEABIADACIAEAFIABAHIgBAFQgBADgCACQgBACgDABIgFACgAgTAoIAAgKIAVAAIgVgMIAAgJIAnAAIAAAKIgVAAIAVAMIAAAJgAgTgLIAAgKIAnAAIAAAKgAgLgaQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgDgEIgBgGIAAgPIAnAAIAAAJIgOAAIAAAGIgBAGQgBADgCABQAAABgBAAQAAABgBAAQAAAAAAABQAAAAgBAAIgFABIgFgBgAgKgnIABADIADABIADgBIABgDIAAgGIgIAAgAgLg+IgEgDIgDgEIgBgGIAAgRIAnAAIAAAcIgIAAIAAgSIgGAAIAAAHIgBAGQgBACgCACIgDADIgFABIgFgBgAgKhMIABAEIADABIADgBIABgEIAAgGIgIAAgAgBhwIgHAAIgEgBIgDgCIgCgDIgBgDIgCgGIACgGIABgCIACgDIADgDIAEAAIAIgBIAHAAIAEABIADABIACACIACACIACADIABAGIgBAGIgCADIgCADIgCABIgDABIgHABgAgGiEIgDABIgBACIgBACIABADIABABIADABIAGAAIACAAIAFAAIADgBIABgBIABgDIgBgCIgBgCIgDgBIgFAAIgCAAIgGAAgAAMiTIAAgKIgfAAIAAgKIAfAAIAAgKIAIAAIAAAegAgTi3IAAgKIAOAAIgBgJIABgDIACgEIADgDIADAAIARAAIAAAKIgOAAIgDABIgBADIABAFIARAAIAAAKgAgTjoIAAgKIAVAAIgVgNIAAgJIAnAAIAAAKIgVAAIAVANIAAAJgAgTkQIAAgKIATAAIgKgFIAAgHIAKgGIgTAAIAAgKIAnAAIAAAKIgRAJIARAJIAAAKgAgTlEIAUgMIgUAAIAAgKIAUAAIgUgLIAAgVIAGgCIAAgNIgGgBIAAgLIAnAPIAAAHIgnAPIAVAMIASgLIAAALIgTAKIATAAIAAAKIgTAAIATAKIAAAMIgSgMIgVANgAgFl/IAKgDIgKgEgAgTmZIAAgKIAQAAIAAgKIgQAAIAAgKIAnAAIAAAKIgPAAIAAAKIAPAAIAAAKg");
	this.shape.setTransform(28.4,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	// Слой 1
	this.instance = new lib.plashka();
	this.instance.parent = this;
	this.instance.setTransform(41.3,0,0.449,0.449,89.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,41.7,102.5), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AAAiwQBJAAAzA0QAzAzACBHQAAABAAABQAAAAAAAAQAAABAAACQgCBHgzAzQgzA0hJAAQgEAAgFAAQhDgEgwgwQgzgzgBhHQAAgCAAgBQAAAAAAAAQAAgBAAgBQABhHAzgzQAwgwBDgDQAFgBAEAAg");
	this.shape.setTransform(26.5,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("AAVAFIChAAIBOAAAAGj8IAABOIAACnAkDAFIBYAAICkAAAAGASIAACgIAABL");
	this.shape_1.setTransform(26,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-1,-1,53.9,52.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAAAVQgGAAgFgHQgEgGAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgFAGgGAAIAAAAg");
	this.shape.setTransform(1.6,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,3.2,4.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,70.6,107.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.drak();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,258.9,177.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.krylo2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,142.2,105.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.krylo1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,158.4,82.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mech();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,83,71), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,10,40), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,15,44), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,52,92), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,46,58), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuBXIAAiuIAcAAIAABCIAMAAQALAAAHADQAIADAGAGQAFAFACAHQACAIABAKIAAAYQgBAKgCAIQgCAIgFAFQgGAGgIACQgHADgLAAgADKA/IAMAAQAIAAACgEQAEgEAAgJIAAgaQAAgJgEgEQgCgDgIgBIgMAAgAAYBXIAAiuIAbAAIAACWIAZAAIAAiWIAbAAIAACWIAXAAIAAiWIAcAAIAACugAgWBXIAAiuIAbAAIAACugAh4BXIAAiuIAcAAIAABCIANAAQAKAAAIADQAIADAFAGQAFAFADAHQACAIAAAKIAAAYQAAAKgCAIQgDAIgFAFQgFAGgIACQgIADgKAAgAhcA/IANAAQAHAAADgEQADgEAAgJIAAgaQAAgJgDgEQgDgDgHgBIgNAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgYAAIAAiuIAmAAIAUB8IAUh8IAmAAIAACug");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,51.1,17.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgXIg6AAIAAAXIgbAAIAAgwIALAAIAFgKIACgMIAGh/IBMAAIAACVIAMAAIAAAwgACHAcQgBAKgCAFQgBAFgEADIAkAAIAAh8IgYAAgAEYBMIAAh7IgiB7IgcAAIAAiuIAZAAIAABuIAghuIAfAAIAACugAAEBMIAAiuIBLAAIAAAZIgwAAIAAAxIAmAAIAAAYIgmAAIAAAzIAwAAIAAAZgAhhBMIAAiuIAqAAQAKAAAJACQAHADAFAFQAFAFACAHQADAIAAAKIAAAGQAAAOgEAIQgFAJgJAEQAFADAEADQAEAEADAFQAFAIAAAOIAAAOQAAAKgDAIQgDAIgFAFQgGAFgHADQgIADgKAAgAhFAzIAQAAQAHAAADgEQAEgEAAgJIAAgQQAAgMgEgEQgEgEgJAAIgNAAgAhFgbIAKAAQAJAAAEgEQAEgEAAgKIAAgKQAAgKgDgEQgEgEgGAAIgOAAgAiIBMIgGggIgiAAIgEAgIgZAAIAciuIAoAAIAcCugAiRAUIgOhXIgMBXIAaAAgAj2BMIAAhLIgfAAIAABLIgcAAIAAiuIAcAAIAABLIAfAAIAAhLIAdAAIAACug");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,61.1,19.9), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(65.8,121.4,1,1,0,0,0,65.8,121.4);
	this.instance.alpha = 0.289;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,136,247);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.477},24,cjs.Ease.get(-1)).to({alpha:0.672},25,cjs.Ease.get(1)).to({alpha:0.48},25,cjs.Ease.get(-1)).to({alpha:0.289},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,239,350);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(161.2,20.6,1,1,0,0,0,144.2,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19.5,scaleX:1.1,scaleY:1.1,rotation:-1.7,x:161.3,y:20.5},14).to({regY:19.6,scaleX:1,scaleY:1,rotation:0,x:161.2,y:20.6},10).to({regY:19.5,scaleX:1.1,scaleY:1.1,rotation:2,x:161.3,y:20.5},10).to({regY:19.6,scaleX:1,scaleY:1,rotation:0,x:161.2,y:20.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,1,288.3,39.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(10.9,10.9,1,1,0,0,0,10.9,10.9);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-3,-3,28,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-2,-2,29,29), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(10.9,10.9,1,1,0,0,0,10.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-2,-2,29,29), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(10.9,10.9,1,1,0,0,0,10.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},4).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,29,29);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 3
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,51.4,1,1,0,0,0,10.9,10.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:21,y:49.6,alpha:1},14).to({x:16.5,y:51.4,alpha:0},15).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.8,43.7,1,1,0,0,0,4.8,17.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.7,scaleX:1.46,scaleY:1.46,rotation:-90,x:20.4,y:36.7,alpha:1},14).to({regX:4.8,scaleX:1,scaleY:1,rotation:0,x:15.8,y:43.7,alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,26,49.1,102.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(25.9,25.3,1,1,0,0,0,25.9,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49,cjs.Ease.get(0.03)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,52.9,51.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(1.6,2.1,1,1,0,0,0,1.6,2.1);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 2)];
	this.instance.cache(-2,-2,7,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-4,-4,15,16), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(16.1,73.2,1,1,0,0,0,1.6,2.1);
	this.instance.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.48},11,cjs.Ease.get(-1)).to({alpha:1},13,cjs.Ease.get(1)).to({alpha:0.539},12,cjs.Ease.get(-1)).to({alpha:0.039},13,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.3,53.9,1,1,0,0,0,35.3,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.6,107.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay();
	}
	this.frame_59 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.gotoAndPlay(61);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(35).call(this.frame_95).wait(1));

	// krylo1.png
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(155.1,53.9,1,1,0,0,0,39.1,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9,y:44.8},14,cjs.Ease.get(-1)).to({regX:39.2,scaleX:1,scaleY:1,rotation:18.7,x:155.2,y:34.8},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.3,y:44.4},15,cjs.Ease.get(-1)).to({regX:39.1,scaleX:1,scaleY:1,rotation:0,x:155.1,y:53.9},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:15.2,y:33.6},8,cjs.Ease.get(-1)).to({regX:39.2,scaleX:1,scaleY:1,rotation:18.7,x:155.2,y:34.8},9,cjs.Ease.get(1)).to({regY:41.8,scaleX:1,scaleY:1,rotation:4.3,y:44.4},9,cjs.Ease.get(-1)).to({regX:39.1,regY:41.9,scaleX:1,scaleY:1,rotation:0,x:155.1,y:53.9},9,cjs.Ease.get(1)).wait(1));

	// krylo2.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.5,32.2,1,1,0,0,0,105.5,84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-11.3,x:118.6,y:22.9},14,cjs.Ease.get(-1)).to({regY:84.1,scaleX:1,scaleY:1,rotation:-23.7,y:13},15,cjs.Ease.get(1)).to({regY:84,scaleX:1,scaleY:1,rotation:-11.8,y:22.5},15,cjs.Ease.get(-1)).to({regY:84.2,scaleX:1,scaleY:1,rotation:0,x:118.5,y:32.2},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:-20.5,x:118.6,y:11.7},8,cjs.Ease.get(-1)).to({regY:84.1,scaleX:1,scaleY:1,rotation:-23.7,y:13},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:3.2,y:22.7},9,cjs.Ease.get(-1)).to({regY:84.2,scaleX:1,scaleY:1,rotation:0,x:118.5,y:32.2},9,cjs.Ease.get(1)).wait(1));

	// golova.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.3,87.2,1,1,0,0,0,43.3,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:43.2,regY:64.3,rotation:-7.1,y:78.1},14,cjs.Ease.get(-1)).to({rotation:-15,y:68.1},15,cjs.Ease.get(1)).to({rotation:-7.3,x:42.4,y:77.7},15,cjs.Ease.get(-1)).to({regX:43.3,regY:64.2,rotation:0,x:42.3,y:87.2},15,cjs.Ease.get(1)).wait(1).to({regX:43.2,regY:64.3,rotation:-7.1,y:66.8},8,cjs.Ease.get(-1)).to({rotation:-15,y:68.1},9,cjs.Ease.get(1)).to({rotation:-7.3,x:42.4,y:77.7},9,cjs.Ease.get(-1)).to({regX:43.3,regY:64.2,rotation:0,x:42.3,y:87.2},9,cjs.Ease.get(1)).wait(1));

	// drak.png
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.4,117.7,1,1,0,0,0,129.4,88.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:108.5},14,cjs.Ease.get(-1)).to({y:98.5},15,cjs.Ease.get(1)).to({y:108.1},15,cjs.Ease.get(-1)).to({y:117.7},15,cjs.Ease.get(1)).wait(1).to({y:97.2},8,cjs.Ease.get(-1)).to({y:98.5},9,cjs.Ease.get(1)).to({y:108.1},9,cjs.Ease.get(-1)).to({y:117.7},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-52,290.9,258.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay();
	}
	this.frame_39 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.gotoAndPlay(50);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(10).call(this.frame_49).wait(20).call(this.frame_69).wait(1));

	// ruka.png
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-84.2,49,1,1,0,0,0,1.8,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3,y:49.1},9,cjs.Ease.get(-1)).to({regX:1.7,rotation:7.2,x:-84.3,y:49},10,cjs.Ease.get(1)).to({rotation:3.8,x:-84.2},10,cjs.Ease.get(-1)).to({regX:1.8,rotation:0},10,cjs.Ease.get(1)).wait(1).to({regX:1.7,regY:10.9,rotation:-30,x:-84.3},9).to({regY:11,rotation:-20.2},10).to({regY:10.9,rotation:-30},10).wait(1));

	// mech.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-106.2,61.6,1,1,0,0,0,77,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:10.5,rotation:-1.3,y:61.7},9,cjs.Ease.get(-1)).to({rotation:-3.5},10,cjs.Ease.get(1)).to({rotation:-1.8,x:-106.1,y:61.6},10,cjs.Ease.get(-1)).to({regY:10.4,rotation:0,x:-106.2},10,cjs.Ease.get(1)).wait(1).to({rotation:68.7},9).to({rotation:63,y:61.7},10).to({rotation:68.7,y:61.6},10).wait(1));

	// plecho.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-101.2,41.6,1,1,0,0,0,5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:20.1,rotation:1.3,y:41.7},9,cjs.Ease.get(-1)).to({rotation:3.2},10,cjs.Ease.get(1)).to({regX:4.9,regY:20.2,rotation:1.6,x:-101.3,y:41.8},10,cjs.Ease.get(-1)).to({regX:5,regY:20,rotation:0,x:-101.2,y:41.6},10,cjs.Ease.get(1)).wait(31));

	// tip.png
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-94,74,1,1,0,0,0,26,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.2,21.6,115.2,100.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(39.5,197.9,56.2,38.2), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[92,330.7,87.8,330.4,84.8,327.3,81.4,323.9,81.4,319.1,81.4,314.3,84.8,310.8,87,308.6,89.8,307.8]}},9).to({guide:{path:[89.8,307.8,91.3,307.4,93.1,307.4,97.9,307.4,101.3,310.8,104.6,314.2,104.7,318.8]}},10).to({guide:{path:[104.7,318.9,104.7,319,104.7,319.2,104.7,324,101.3,327.4,97.9,330.9,93.1,330.9,92.5,330.9,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16_1, new cjs.Rectangle(26,217.9,91.7,38.2), null);


(lib.shape6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,7.2,2.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,18,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-6.7,26,16);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-501.8,34.5,0.765,0.705,0,0,0,143.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({x:147.1},20).to({x:187.6},30).to({x:147.1},31).to({x:-501.8},20).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-294.8,8.6,0.834,0.834,0,0,0,132.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({x:146.2},20).to({x:127.5},30).to({x:146.2},31).to({x:-294.8},20).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(146.1,21.2,1,1,0,0,0,163.1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({x:-261.9},20).wait(61).to({x:146.1},20).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-208.7,0,208.7,0).s().p("EggmAEwIAApfMBBNAAAIAAJfg");
	this.shape.setTransform(175.4,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-653.1,-11.1,1037.2,62.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.drak2 = new lib.Символ7();
	this.drak2.parent = this;
	this.drak2.setTransform(144,150,1,1,0,0,0,143,98);

	this.timeline.addTween(cjs.Tween.get(this.drak2).wait(100));

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-33.2,174.5,0.333,0.333,0,0,0,142.1,106.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regX:141.9,scaleX:0.55,scaleY:0.55,x:-55.4,y:184.2},3).to({regX:141.8,regY:106.3,scaleX:0.71,scaleY:0.71,x:-74.3,y:191},4).to({regY:106.4,scaleX:0.85,scaleY:0.85,x:-89.4,y:196},4).to({regX:141.7,scaleX:0.99,scaleY:0.99,x:-104.8,y:201.6},4).to({regY:106.5,scaleX:1.14,scaleY:1.14,x:-121,y:207.3},4).to({alpha:0},5).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290.9,258.5);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(28.6,17.9,1,1,0,0,0,25.9,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[28.7,17.9,29,18,29.2,18,31.5,18.6,30.8,21.1,30.1,23.6,19.8,28.2,9.5,32.8,1.1,36.1,-12.4,41.4,-23.6,44.4,-52.1,52.2,-75.4,48.2,-86.2,46.4,-93.3,42,-103.1,36.1,-107.4,24.6,-111.8,13.3,-108.4,2.3,-107.1,-1.9,-104.8,-5.2,-102.3,-8.9,-98.8,-11,-93.6,-14.1,-84.3,-14.2,-68,-14.6,-46.1,-9,-21.1,-1.7,-8.6,1.6,-4.6,2.6,7.9,5.6,18.2,8.1,24.3,9.8,35.6,13,51.3,18.6,60.1,21.9,77.9,28.6,110.4,40.3,132.5,42.6,145.1,43.9,164.4,43.2,176.4,42.7,183.8,41.5,194.3,39.8,202.1,35.7,207.2,33,210.9,29.2,214.9,25.1,216.4,20.1,218,14.9,216.8,6.3,216.3,2.2,215.5,-0.6,214.5,-4.4,212.7,-7.1,210.5,-10.5,206.9,-13,203.6,-15.3,199.4,-16.6,193.1,-18.6,183.1,-18.7,166.2,-18.9,146.8,-15.5,131.2,-12.8,111.2,-7.2,106.9,-6,76.1,3.2,54.9,9.5,41,12.7,40.7,12.8,40.4,12.9]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,-7.9,52.9,51.6);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,58.3,1,1,0,0,0,25.9,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[28.6,58.3,29,58.4,29.4,58.5,31.5,59.1,30.9,61.3,30.3,63.6,20.8,67.8,11.3,72.1,3.6,75.1,-8.8,80,-19.2,82.8,-45.3,89.9,-66.7,86.2,-76.7,84.5,-83.2,80.6,-92.2,75.1,-96.2,64.6,-100.2,54,-97.1,44,-95.9,40.2,-93.8,37.1,-91.4,33.7,-88.3,31.8,-83.5,29,-74.9,28.8,-60,28.5,-39.8,33.6,-16.8,40.3,-5.4,43.4,-1.7,44.3,9.8,47,19.3,49.2,24.9,50.8,35.3,53.8,49.7,59.1,57.8,62.1,74.2,68.2,104.1,79,124.4,81.1,136,82.2,153.7,81.6,164.7,81.2,171.5,80.1,181.2,78.5,188.3,74.8,193.1,72.2,196.4,68.8,200.1,65,201.5,60.4,203,55.5,201.9,47.6,201.4,44,200.7,41.3,199.7,37.9,198.1,35.4,196.1,32.3,192.8,30,189.7,27.9,185.9,26.7,180,24.8,170.9,24.8,155.3,24.6,137.5,27.7,123.2,30.2,104.8,35.3,100.9,36.4,72.6,44.8,53.2,50.6,40.4,53.5]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,32.5,52.9,51.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.mouse = new lib.Символ16_1();
	this.mouse.parent = this;
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({x:162},14).to({x:-3},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.493,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite7, new cjs.Rectangle(-7.5,-6.7,18,16), null);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ19_1();
	this.instance.parent = this;
	this.instance.setTransform(20.6,48.9,1,1,0,0,0,22.8,43.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.7,52.9,51.6);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.7,30.5,1,1,0,0,0,25.9,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,37.7,52.9,51.6);


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:40.1},4).to({scaleX:1,scaleY:1,rotation:80.2},4).to({scaleX:1,scaleY:1,rotation:180},10).to({scaleX:1,scaleY:1,rotation:189.8},1).to({scaleX:1,scaleY:1,rotation:229.9},4).to({scaleX:1,scaleY:1,rotation:360},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-6.7,18,16);


(lib.sprite9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.sprite8();
	this.instance.parent = this;
	this.instance.setTransform(-98,82.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1386.2,y:-361.6},92).to({x:0,y:116.4},1).to({x:-84,y:87.5},6).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.sprite8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-168,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1386.2,y:-555.6},87).to({x:0,y:-77.6},1).to({x:-154,y:-130.7},11).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.sprite8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-266,-246.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-1386.2,y:-633.2},80).to({x:0,y:-155.2},1).to({x:-252,y:-242.1},18).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.sprite8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-378,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-1386.2,y:-381},72).to({x:0,y:97},1).to({x:-364,y:-28.5},26).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.sprite8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-532,-319.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-1386.2,y:-613.8},61).to({x:0,y:-135.8},1).to({x:-518,y:-314.4},37).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_5 = new lib.sprite8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-686.1,-178.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-1386.2,y:-419.8},50).to({x:0,y:58.2},1).to({x:-672.1,y:-173.5},48).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_6 = new lib.sprite8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-878.9,-386.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-1425,y:-575},39).to({x:-38.8,y:-97},1).to({x:-864.9,y:-381.8},59).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_7 = new lib.sprite8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1041.5,-546.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-1405.6,y:-672},26).to({x:-19.4,y:-194},1).to({x:-1027.5,y:-541.6},72).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_8 = new lib.sprite8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1262.3,-376.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-1444.4,y:-439.2},13).to({x:-58.2,y:38.8},1).to({x:-1248.3,y:-371.6},85).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_9 = new lib.sprite8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(19.4,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-1366.8,y:-439.2},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1269.9,-553.2,1300.7,647.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// частицы - хтмл
	this.instance = new lib.sprite9();
	this.instance.parent = this;
	this.instance.setTransform(806.6,-34.2,0.722,0.722,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-111.5,-99.7,943.5,470.2), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(305.8,151.5,1,1,0,0,0,305.8,151.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.262},14).to({alpha:0},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.17,scaleY:1.17,x:300.1,y:126.7},14).to({scaleX:1,scaleY:1,x:300,y:150},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-99.7,943.5,470.2);


// stage content:
(lib.dragonknight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		 
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel2.x = stage.mouseX;
			this.pricel2.y = stage.mouseY;
		}
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		    this.pricel.gotoAndPlay(1);
			this.pricel2.gotoAndPlay(1);
			this.mouse.gotoAndPlay(1);
			this.plashka.gotoAndPlay(1);
			this.tip.gotoAndPlay(50);
			this.drak.drak2.gotoAndPlay(61);
			this.bg.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		    this.pricel.gotoAndPlay(6);
			this.pricel2.gotoAndPlay(6);
			this.mouse.gotoAndPlay(15);
			this.plashka.gotoAndPlay(16);
			this.tip.gotoAndPlay(1);
			this.drak.drak2.gotoAndPlay(1);
			this.bg.gotoAndPlay(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(174.2,28.6,1,1,0,0,0,144.2,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ20_1();
	this.pricel2.parent = this;
	this.pricel2.setTransform(685.6,267.3,1.3,1.3,0,0,0,26,25.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel
	this.pricel = new lib.Символ18_1();
	this.pricel.parent = this;
	this.pricel.setTransform(262.9,100.5,1.473,1.473,0,0,0,26,25.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// hp
	this.instance_1 = new lib.hp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(426,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// drak
	this.drak = new lib.Символ28();
	this.drak.parent = this;
	this.drak.setTransform(482.5,132.4,1,1,0,0,0,145.5,129.2);

	this.timeline.addTween(cjs.Tween.get(this.drak).wait(1));

	// tip
	this.tip = new lib.Символ1();
	this.tip.parent = this;
	this.tip.setTransform(300.5,151,1,1,0,0,0,41.5,46);

	this.timeline.addTween(cjs.Tween.get(this.tip).wait(1));

	// Слой 2
	this.mouse = new lib.Символ42();
	this.mouse.parent = this;
	this.mouse.setTransform(525.5,173,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// Слой 3
	this.plashka = new lib.Символ21_1();
	this.plashka.parent = this;
	this.plashka.setTransform(305,230);

	this.timeline.addTween(cjs.Tween.get(this.plashka).wait(1));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,226,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(550.2,114.7,1,1,0,0,0,65.8,121.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg = new lib.Символ35();
	this.bg.parent = this;
	this.bg.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323.1,50.3,1455.1,470.2);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1505486628782", id:"bg"},
		{src:"images/drak.png?1505486628782", id:"drak"},
		{src:"images/fire.png?1505486628782", id:"fire"},
		{src:"images/golova.png?1505486628782", id:"golova"},
		{src:"images/hp.png?1505486628782", id:"hp"},
		{src:"images/krylo1.png?1505486628782", id:"krylo1"},
		{src:"images/krylo2.png?1505486628782", id:"krylo2"},
		{src:"images/logo.png?1505486628782", id:"logo"},
		{src:"images/mech.png?1505486628782", id:"mech"},
		{src:"images/mouse.png?1505486628782", id:"mouse"},
		{src:"images/plashka.png?1505486628782", id:"plashka"},
		{src:"images/plecho.png?1505486628782", id:"plecho"},
		{src:"images/ruka.png?1505486628782", id:"ruka"},
		{src:"images/text1.png?1505486628782", id:"text1"},
		{src:"images/text2.png?1505486628782", id:"text2"},
		{src:"images/text3.png?1505486628782", id:"text3"},
		{src:"images/tip.png?1505486628782", id:"tip"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;