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


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,287,34), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,266,31), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({alpha:0},15).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.8,43.7,1,1,0,0,0,4.8,17.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.7,scaleX:1.46,scaleY:1.46,rotation:-90,x:15.9,y:38.5,alpha:1},14).to({regX:4.8,scaleX:1,scaleY:1,rotation:0,x:15.8,y:43.7,alpha:0},15).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9,y:44.8},14,cjs.Ease.get(-1)).to({regX:39.2,scaleX:1,scaleY:1,rotation:18.7,x:155.2,y:34.8},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.3,y:44.4},15,cjs.Ease.get(-1)).to({regX:39.1,scaleX:1,scaleY:1,rotation:0,x:155.1,y:53.9},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:15.2,y:44.8},8,cjs.Ease.get(-1)).to({regX:39.2,scaleX:1,scaleY:1,rotation:18.7,x:155.2,y:34.8},9,cjs.Ease.get(1)).to({regY:41.8,scaleX:1,scaleY:1,rotation:4.3,y:44.4},9,cjs.Ease.get(-1)).to({regX:39.1,regY:41.9,scaleX:1,scaleY:1,rotation:0,x:155.1,y:53.9},9,cjs.Ease.get(1)).wait(1));

	// krylo2.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.5,32.2,1,1,0,0,0,105.5,84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-11.3,x:118.6,y:22.9},14,cjs.Ease.get(-1)).to({regY:84.1,scaleX:1,scaleY:1,rotation:-23.7,y:13},15,cjs.Ease.get(1)).to({regY:84,scaleX:1,scaleY:1,rotation:-11.8,y:22.5},15,cjs.Ease.get(-1)).to({regY:84.2,scaleX:1,scaleY:1,rotation:0,x:118.5,y:32.2},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:-20.5,x:118.6,y:23},8,cjs.Ease.get(-1)).to({regY:84.1,scaleX:1,scaleY:1,rotation:-23.7,y:13},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:3.2,y:22.7},9,cjs.Ease.get(-1)).to({regY:84.2,scaleX:1,scaleY:1,rotation:0,x:118.5,y:32.2},9,cjs.Ease.get(1)).wait(1));

	// golova.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.3,87.2,1,1,0,0,0,43.3,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:43.2,regY:64.3,rotation:-7.1,y:78.1},14,cjs.Ease.get(-1)).to({rotation:-15,y:68.1},15,cjs.Ease.get(1)).to({rotation:-7.3,x:42.4,y:77.7},15,cjs.Ease.get(-1)).to({regX:43.3,regY:64.2,rotation:0,x:42.3,y:87.2},15,cjs.Ease.get(1)).wait(1).to({regX:43.2,regY:64.3,rotation:-7.1,y:78.1},8,cjs.Ease.get(-1)).to({rotation:-15,y:68.1},9,cjs.Ease.get(1)).to({rotation:-7.3,x:42.4,y:77.7},9,cjs.Ease.get(-1)).to({regX:43.3,regY:64.2,rotation:0,x:42.3,y:87.2},9,cjs.Ease.get(1)).wait(1));

	// drak.png
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.4,117.7,1,1,0,0,0,129.4,88.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:108.5},14,cjs.Ease.get(-1)).to({y:98.5},15,cjs.Ease.get(1)).to({y:108.1},15,cjs.Ease.get(-1)).to({y:117.7},15,cjs.Ease.get(1)).wait(1).to({y:108.5},8,cjs.Ease.get(-1)).to({y:98.5},9,cjs.Ease.get(1)).to({y:108.1},9,cjs.Ease.get(-1)).to({y:117.7},9,cjs.Ease.get(1)).wait(1));

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


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-501.8,34.5,0.765,0.705,0,0,0,143.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({x:147.1},20).to({x:201.1},30).to({x:147.1},31).to({x:-501.8},20).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-294.8,8.6,0.834,0.834,0,0,0,132.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({x:146.2},20).to({x:119.2},30).to({x:146.2},31).to({x:-294.8},20).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-611.8,-11.1,995.9,60.8);


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
	this.instance.setTransform(28.1,20.1,1,1,0,0,0,25.9,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[28.2,20.1,29.2,20.2,30.2,20.5,33.1,21.3,32.2,24.4,31.4,27.6,18.1,33.5,4.9,39.5,-5.9,43.7,-23.2,50.5,-37.6,54.4,-74.1,64.3,-103.9,59.2,-117.8,56.8,-126.9,51.3,-139.5,43.6,-145.1,29,-150.6,14.4,-146.3,0.3,-144.7,-5.1,-141.7,-9.4,-138.4,-14.1,-134,-16.8,-127.3,-20.7,-115.4,-20.9,-94.5,-21.4,-66.4,-14.2,-34.3,-4.9,-18.3,-0.6,-13.2,0.7,2.8,4.5,16,7.7,23.9,9.9,38.4,14,58.5,21.3,69.9,25.5,92.7,34,134.4,49.1,162.7,52,178.9,53.6,203.6,52.7,219,52.2,228.5,50.6,242,48.4,251.9,43.2,258.6,39.7,263.2,34.9,268.4,29.5,270.3,23.2,272.4,16.4,270.9,5.4,270.2,0.2,269.2,-3.5,267.8,-8.3,265.6,-11.8,262.8,-16.1,258.2,-19.3,253.9,-22.3,248.6,-23.9,240.4,-26.5,227.6,-26.6,205.9,-26.9,181,-22.5,161,-19,135.4,-11.9,129.9,-10.3,90.4,1.4,63.2,9.5,45.4,13.7,43.2,14.2,41.4,14.5,40.6,14.6,39.6,14.5]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-5.7,52.9,51.6);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.1,20.1,1,1,0,0,0,25.9,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[28.2,20.1,29.2,20.2,30.2,20.5,33.1,21.3,32.2,24.4,31.4,27.6,18.1,33.5,4.9,39.5,-5.9,43.7,-23.2,50.5,-37.6,54.4,-74.1,64.3,-103.9,59.2,-117.8,56.8,-126.9,51.3,-139.5,43.6,-145.1,29,-150.6,14.4,-146.3,0.3,-144.7,-5.1,-141.7,-9.4,-138.4,-14.1,-134,-16.8,-127.3,-20.7,-115.4,-20.9,-94.5,-21.4,-66.4,-14.2,-34.3,-4.9,-18.3,-0.6,-13.2,0.7,2.8,4.5,16,7.7,23.9,9.9,38.4,14,58.5,21.3,69.9,25.5,92.7,34,134.4,49.1,162.7,52,178.9,53.6,203.6,52.7,219,52.2,228.5,50.6,242,48.4,251.9,43.2,258.6,39.7,263.2,34.9,268.4,29.5,270.3,23.2,272.4,16.4,270.9,5.4,270.2,0.2,269.2,-3.5,267.8,-8.3,265.6,-11.8,262.8,-16.1,258.2,-19.3,253.9,-22.3,248.6,-23.9,240.4,-26.5,227.6,-26.6,205.9,-26.9,181,-22.5,161,-19,135.4,-11.9,129.9,-10.3,90.4,1.4,63.2,9.5,45.4,13.7,43.2,14.2,41.4,14.5,40.6,14.6,39.6,14.5]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-5.7,52.9,51.6);


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
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,52.9,51.6);


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
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,52.9,51.6);


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

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.8,147.9,1301.7,360.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1505483458691", id:"bg"},
		{src:"images/drak.png?1505483458691", id:"drak"},
		{src:"images/fire.png?1505483458691", id:"fire"},
		{src:"images/golova.png?1505483458691", id:"golova"},
		{src:"images/hp.png?1505483458691", id:"hp"},
		{src:"images/krylo1.png?1505483458691", id:"krylo1"},
		{src:"images/krylo2.png?1505483458691", id:"krylo2"},
		{src:"images/logo.png?1505483458691", id:"logo"},
		{src:"images/mech.png?1505483458691", id:"mech"},
		{src:"images/mouse.png?1505483458691", id:"mouse"},
		{src:"images/plashka.png?1505483458691", id:"plashka"},
		{src:"images/plecho.png?1505483458691", id:"plecho"},
		{src:"images/ruka.png?1505483458691", id:"ruka"},
		{src:"images/text1.png?1505483458691", id:"text1"},
		{src:"images/text2.png?1505483458691", id:"text2"},
		{src:"images/text3.png?1505483458691", id:"text3"},
		{src:"images/tip.png?1505483458691", id:"tip"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;