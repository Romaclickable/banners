(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,350);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,64);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,64);


(lib.flash = function() {
	this.initialize(img.flash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,53);


(lib.iskry = function() {
	this.initialize(img.iskry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,222);


(lib.l1 = function() {
	this.initialize(img.l1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,109);


(lib.l = function() {
	this.initialize(img.l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,98);


(lib.nogi = function() {
	this.initialize(img.nogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,70);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,112);


(lib.p = function() {
	this.initialize(img.p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,89);


(lib.rpgstash = function() {
	this.initialize(img.rpgstash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,70);


(lib.rune_logo = function() {
	this.initialize(img.rune_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,73);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,146);// helper functions:

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
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,400,350), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(255,245,178,0)"],[0,1],-54.5,0,54.6,0).s().p("AmYBfQgjgCgVgEQgegIgTgQQgRgOgIgWQgJgVADgVQADgWAOgSQAOgTAUgJQAPgHAUgCQAMgCAZAAIKHgIQAIAYANASQARAXAbALQAcAMAcgDQAdgDAYgQQAZgRAOgZQAGgLAFgOIAOABQAdAFATAOQARAMAJAVQAJAUgCAVQgBAUgMATQgLASgSAMQgbARg5AFQgvAFhfADQjkAIhyABIhUABQiNAAh2gHg");
	this.shape.setTransform(54.6,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(255,245,178,0)"],[0,1],-13.3,0,13.4,0).s().p("Ag5CiQgbgMgRgXQgNgRgIgYIgEgRQgEgYgCgpQgCgpAFgZQAHglAXgTQAMgKAUgHIAjgLIAhgOQAVgIAPgBQAhgDAcAWQAdAXAFAhQAEAUgFAbIgLAvIgLA4QgDAQgFAMQgFAPgGALQgOAZgZAQQgYARgcACIgMABQgWAAgWgJg");
	this.shape_1.setTransform(89.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,109.1,45.9), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iskry();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,490,222), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,73,53), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,245,178,0)","#FFE92C","rgba(255,247,182,0)","#000000"],[0,0.478,1,1],-17.6,-4.7,17.6,4.7).s().p("AkZFcIDUsWIFfBeIjUMXg");
	this.shape.setTransform(28.2,44.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,56.4,88.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("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");
	this.shape.setTransform(90.7,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHTAPIAbAAIAAAjIgbAUgAkBAPIAbAAIAAAjIgbAUgAmvBFIAAhtIAZAAIAAAGQADgDAEgCQAGgCAGAAQAGAAAFACQAFACAFADQACADABAFIADAIIABATIgBASIgDAJQgBAFgCADQgFADgFACQgFACgGAAQgGAAgFgCQgEgBgEgEIAAAhgAmRgRQgCABAAADQgCAEgBAKQABAKACAEQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQADABADAAQADAAACgBIAEgEQACgEAAgKQAAgKgCgEIgEgEQgCgBgDAAQgDAAgDABgANzApIgIgDIgJgHIAQgRQAIAIANAAQADAAADgCQAEgCAAgCIAAgEQgCgBgEAAIgNgBQgFgBgEgCQgFgBgDgDQgDgDgCgDQgCgFAAgGQAAgGAEgFQACgGAEgDQAGgDAFgCQAHgCAFAAQALAAAHACIAJADIAHAFIgQAQQgEgEgEAAIgKgCQgEABgDACQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQgBADAGABIANACQAGAAAFACQAFACADAEQADACACAEQABAFABAFQAAAHgDAGIgIAJIgMAEQgHACgHAAQgMgBgHgBgAKiApQgIgCgFgDIgEgHQgEgCgBgFIgDgKIAAgLQAAgHACgLQADgIAFgFQAFgGAGgDQAIgCAIAAQAIAAAIADQAHADAFAFQAEAFADAIQACAHAAAJIAAAKIgyAAQAAAFAEAEQAFAEAGAAQAGAAAEgDIAHgEIAQAOQgJAJgFABIgJADIgKABQgIAAgGgCgAK6gHQAAgEgCgDQAAgDgDgBQgEgCgDgBQgFABgDACIgDAEIgCAHIAZAAIAAAAgAGPApIgJgDIgJgHIARgRQAHAIANAAQAEAAADgCQAEgCAAgCIgBgEQgCgBgDAAIgNgBQgGgBgEgCIgHgEQgDgDgCgDQgCgFAAgGQAAgGADgFQACgGAGgDQAEgDAGgCQAGgCAGAAQAMAAAGACIAIADIAHAFIgQAQQgCgEgGAAIgJgCQgEABgDACQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAADAGABIANACQAGAAAGACQAEACADAEQADACABAEQACAFAAAFQAAAHgDAGQgDAFgEAEIgMAEQgHACgHAAQgMgBgHgBgACqApQgEgBgEgEQgFgFgCgGIgBgNIAAg0IAaAAIAAAxQAAAGADADQADACAEAAQADAAACgCQAFgDAAgGIAAgxIAaAAIAABSIgaAAIAAgGQgDADgGACQgEACgGAAQgGAAgFgCgABdAqIgHgDQgGgCgFgFQgFgFgCgIQgCgGAAgMQAAgMACgHQACgHAFgGQAFgEAGgCIAHgDIAJgBQAHAAAKAEQAGACAEAEQAFAGADAHQABAHAAAMQAAAMgBAGQgDAIgFAFQgEAFgGACQgKAEgHAAIgJgBgABfgPQgCACgBAEIAAAKIAAAKQABAFACACQADACAEAAQAFAAACgCQADgCAAgFIABgKIgBgKQAAgEgDgCQgCgDgFAAQgEAAgDADgAASApQgHgCgGgDIgEgGIgEgIIgDgKIgBgLIABgMIADgKIAEgHQACgDACgDQAGgEAHgCIAMgBQAIAAAHACQAHADAFAFIgRASIgEgEIgGgBQgFAAgDADQgDACAAAFIgBAJIABAJQAAAFADACQADADAFAAIAGgBIAEgEIARARQgFAGgHACQgHADgIAAQgHAAgFgCgAg3ApQgHgCgFgDIgFgGIgFgIIgCgKQgBgFAAgGQAAgHABgFIACgKIAFgHQACgDADgDQAFgEAHgCIAMgBQAIAAAIACQAGADAGAFIgRASIgFgEQgDgBgDAAQgEAAgDADQgDACAAAFQgCADAAAGQAAAFACAEQAAAFADACQADADAEAAQADAAADgBIAFgEIARARQgGAGgGACQgIADgIAAQgGAAgGgCgAlAApQgJgCgFgDIgFgHIgEgHIgDgKQgBgFAAgGQAAgHADgLQADgIAEgFQAGgGAGgDQAIgCAHAAQAKAAAHADQAHADAEAFQAGAFABAIQADAHAAAJIAAAKIgyAAQAAAFAEAEQAEAEAHAAQAGAAAEgDIAHgEIAPAOQgJAJgEABQgEACgEABIgLABQgIAAgFgCgAkqgHIgBgHQAAgDgDgBQgDgCgFgBQgDABgEACQgCABgBADQgCADAAAEIAYAAIAAAAgApCAqIgIgCQgHgDgFgHQgFgDgDgGQgCgFgBgGIgBgWIAAgMIABgLQABgHACgEQADgGAFgEQAFgGAHgDIAIgDIAJgBQAJABAGACQAIACAEAFQAHAEADAHQAEAHABAIIgbAAQgCgFgCgDQgEgDgGAAIgHABQgCABgCADQgCACgBAFIgBAUIABATQABAFACACQACADACABIAHABQAGAAAEgDQACgDACgGIAbAAQgBAJgEAHQgDAGgHAFQgEAEgIADQgGACgJAAgArDApQgHgCgFgDIgGgHQgCgCgCgFIgDgKIgBgLQABgHACgLQACgIAGgFQAEgGAIgDQAHgCAHAAQAJAAAHADQAIADAEAFQAGAFABAIQADAHAAAJIAAAKIgxAAQAAAFADAEQAFAEAGAAQAGAAAEgDIAHgEIAPAOQgIAJgFABIgIADIgLABQgIAAgGgCgAqrgHQAAgEgCgDQgBgDgCgBQgDgCgFgBQgEABgDACIgEAEIAAAHIAYAAIAAAAgAn3ApQgGgCgDgDQgEgFgBgEQgCgFAAgGQAAgFACgEQABgFADgCIAJgGQAGgBAHAAIARAAIAAgCQgBgGgCgDQgDgCgHAAQgEAAgDACIgGAEIgQgQIAHgFIAGgEQAHgCALAAQAJAAAGACQAHABAFAEQAEAEADAGQACAFAAAIIAAA1IgZAAIAAgGQgEAEgEABQgDACgHAAQgGAAgFgCgAntAKQgCACAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAABABAAQACACAEAAQAHABAEgEQACgCAAgGIAAgCIgNAAQgEAAgCABgAM+AqIAAgxQAAgGgEgDQgDgCgDAAQgEAAgDACQgDADAAAGIAAAxIgZAAIAAgxQAAgGgFgDQgDgCgDAAQgDAAgDACQgEADAAAGIAAAxIgZAAIAAhSIAYAAIAAAGQAEgDAFgCQAGgCAFAAQAGAAAFACQAFACAEAEQAGgEAEgCQAGgCAHAAQAGAAAGACQAFABAEAEQAEAFACAGQADAGAAAHIAAA0gAJwAqQgHAAgFgCQgFgCgDgEIgFgIQgBgEAAgFIAAgjIgIAAIAAgTIAIAAIAAgXIAZAAIAAAXIANAAIAAATIgNAAIAAAiQAAAEAFAAIAIAAIAAAWgAIkAqIAAhuIAcAAIAABugAFqAqQgIAAgFgCQgEgCgDgEQgEgDgCgFIAAgJIAAgjIgIAAIAAgTIAIAAIAAgXIAZAAIAAAXIAMAAIAAATIgMAAIAAAiQgBAEAGAAIAHAAIAAAWgAEiAqIAAgxQAAgGgEgDQgCgCgEAAQgEAAgDACQgDADAAAGIAAAxIgaAAIAAhSIAZAAIAAAGQAEgDAFgCQAFgCAGAAQAFAAAFACQAEABAEAEQAFAFACAGQACAFAAAIIAAA0gAhyAqIgGgQIghAAIgGAQIgcAAIAnhuIAWAAIAoBugAh/ADIgJgcIgKAcIATAAgAsiAqIAAhSIAYAAIAAAGQAEgCAEgDQAGgCAGAAQAHAAAEACQAEACAFADIgUAUQgEgFgFABQgDAAgDACQgDADgBAGIAAAxgAtPAqIAAhPIAZAAIAABPgAuqAqIAAhuIBMAAIAAAZIgxAAIAAATIAqAAIAAAYIgqAAIAAAqgAtPgxIAAgUIAZAAIAAAUg");
	this.shape_1.setTransform(90.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-3.3,2.8,187.9,42.3), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCF56","#FFF7B6","#000000"],[0,1,1],-30.5,59.5,34.2,-59.5).s().p("ArqHoIAAvPIVJAAICMPPg");
	this.shape.setTransform(74.4,43.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-0.3,-5.6,149.4,97.7), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(0,5,0.916,0.916);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,5,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,156.6,58.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAoAQQgGgGAAgKQAAgJAGgHQAGgGAJAAQAJAAAGAGQAHAHAAAJQAAAKgHAGQgGAHgJAAQgJAAgGgHgAhGAQQgGgHAAgJQAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAAJgGAHQgGAGgJABQgJgBgGgGg");
	this.shape.setTransform(6.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-1,-0.7,15.4,4.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nogi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,97,70), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,42,109), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,63,98), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,41,112), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,65,89), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(176,150,1,1,0,0,0,200,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99,x:175.8,y:150.1},19,cjs.Ease.get(-1)).to({regX:199.9,regY:174.9,scaleX:0.97,scaleY:0.97,x:175.1},20,cjs.Ease.get(1)).wait(20).to({regX:199.8,scaleX:0.98,scaleY:0.98,x:175.3},20,cjs.Ease.get(-1)).to({regX:200,regY:175,scaleX:1,scaleY:1,x:176,y:150},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-25,400,350);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(244.1,125.1,0.874,0.874,0,0,0,245,111);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(30,28.1,428.2,194), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(28.2,52.3,1,1,0,0,0,28.2,44.3);
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,8,56.4,88.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(56.5,52.5,1,1,0,0,0,36.5,26.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},14).to({rotation:165},5).to({regX:36.4,scaleX:0.22,scaleY:0.22,alpha:0},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.5,37.5,1,1,0,0,0,36.5,26.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({alpha:1},14).to({rotation:165},5).to({regX:36.4,scaleX:0.22,scaleY:0.22,alpha:0},5).to({_off:true},1).wait(30));

	// Слой 2
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(110.5,32.5,1,1,0,0,0,36.5,26.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).to({rotation:165},5).to({regX:36.4,scaleX:0.22,scaleY:0.22,alpha:0},5).to({_off:true},1).wait(59));

	// Слой 1
	this.instance_3 = new lib.rpgstash();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84));

	// Слой 5
	this.instance_4 = new lib.Символ24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.7,37.3,1,1,0,0,0,54.6,22.9);
	this.instance_4.alpha = 0.551;
	this.instance_4.filters = [new cjs.BlurFilter(22, 22, 1)];
	this.instance_4.cache(-2,-2,113,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84));

	// Слой 2
	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(64.6,34.6,1,0.874,0,0,0,74.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84));

	// Слой 3
	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(250.5,28.1,1.772,0.652,0,0,0,74.8,45.9);
	this.instance_6.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-10.6,392.4,86.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AomDhQhRgBg5g7Qg6g8AAhUIAAgpQAAhVA6g7QA5g8BRABIRNAAQBRgBA6A8QA5A7AABVIAAApQAABUg5A8Qg6A7hRABg");
	mask.setTransform(78.6,27.9);

	// Слой 3
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,20,1,1,0,0,0,28.2,44.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:74.3},29,cjs.Ease.get(-1)).to({x:204.5},30,cjs.Ease.get(1)).wait(21));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.5,32,1,1,0,0,0,85.5,32);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,156.6,58.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(85.5,32,1,1,0,0,0,85.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-79.7,-16.3,236.3,88.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(6.7,1.4,1,1,0,0,0,6.7,1.4);
	this.instance.shadow = new cjs.Shadow("rgba(255,204,51,1)",0,0,0);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(-3,-3,19,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-7,-6.7,31,19), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(6.7,1.4,1,1,0,0,0,6.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-7,-6.7,31,19), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(58.8,72.3,1,1,0,0,0,6.7,1.4);
	this.instance.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.559},19,cjs.Ease.get(-1)).to({regX:6.8,regY:1.6,scaleX:1.21,scaleY:1.21,x:58.7,y:72.4,alpha:1},20,cjs.Ease.get(1)).to({regX:6.7,regY:1.4,scaleX:1,scaleY:1,x:58.8,y:72.3,alpha:0.57},20,cjs.Ease.get(-1)).to({alpha:0.141},20,cjs.Ease.get(1)).wait(21));

	// Слой 1
	this.instance_1 = new lib.telo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,146);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p.png
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-27.4,159.2,1,1,0,0,0,25.6,75.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3,y:159.3},19,cjs.Ease.get(-1)).to({regX:25.4,rotation:-6.2,x:-27.5},20,cjs.Ease.get(1)).wait(20).to({rotation:-3},20,cjs.Ease.get(-1)).to({regX:25.6,rotation:0,x:-27.4,y:159.2},20,cjs.Ease.get(1)).wait(1));

	// p-1.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.2,50.1,1,1,0,0,0,31.2,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.1},19,cjs.Ease.get(-1)).to({rotation:8.7,x:18.3},20,cjs.Ease.get(1)).wait(20).to({rotation:4.3,y:50.2},20,cjs.Ease.get(-1)).to({rotation:0,x:18.2,y:50.1},20,cjs.Ease.get(1)).wait(1));

	// l.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(131.6,164,1,1,0,0,0,39.1,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:3,x:131.7},19,cjs.Ease.get(-1)).to({rotation:6.2,x:131.6},20,cjs.Ease.get(1)).wait(20).to({rotation:3},20,cjs.Ease.get(-1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

	// l-1.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.7,43.6,1,1,0,0,0,6.2,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4},19,cjs.Ease.get(-1)).to({rotation:-8.5},20,cjs.Ease.get(1)).wait(20).to({rotation:-4.1},20,cjs.Ease.get(-1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,35.9,0,-35.8).s().p("A79FlIAArJMA37AAAIAALJg");
	this.shape.setTransform(-16.6,142.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// Слой 7
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(45.5,108.2,1,1,0,0,0,48.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:47.1,y:109.8},19,cjs.Ease.get(-1)).to({x:48.8,y:111.5},20,cjs.Ease.get(1)).wait(20).to({x:47.2,y:109.9},20,cjs.Ease.get(-1)).to({x:45.5,y:108.2},20,cjs.Ease.get(1)).wait(1));

	// telo.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(38,47,1,1,0,0,0,45,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.05,scaleY:1.05,y:47.1},19,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11,x:38.1,y:47},20,cjs.Ease.get(1)).wait(20).to({regY:72.9,scaleX:1.05,scaleY:1.05,y:47.1},20,cjs.Ease.get(-1)).to({regX:44.9,scaleX:1.01,scaleY:1.01,x:38,y:47},12,cjs.Ease.get(1)).to({regX:45,regY:73,scaleX:1,scaleY:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.5,-26,357.9,206);


// stage content:
(lib.runescape = function(mode,startPosition,loop) {
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

	// runescape
	this.instance = new lib.rune_logo();
	this.instance.parent = this;
	this.instance.setTransform(13,107,0.906,0.906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.3,17.5,1,1,0,0,0,90.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.1,36.4,1,1,0,0,0,60.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// btn
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.9,236.2,1,1,0,0,0,85.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(183,187,1,1,0,0,0,245,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// chert
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(239,183.6,1,1,0,0,0,45,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(175,142,1,1,0,0,0,175,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.7,107,465.6,350);
// library properties:
lib.properties = {
	width: 350,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1505722528982", id:"bg"},
		{src:"images/btn.png?1505722528982", id:"btn"},
		{src:"images/btn2.png?1505722528982", id:"btn2"},
		{src:"images/flash.png?1505722528983", id:"flash"},
		{src:"images/iskry.png?1505722528983", id:"iskry"},
		{src:"images/l1.png?1505722528983", id:"l1"},
		{src:"images/l.png?1505722528983", id:"l"},
		{src:"images/nogi.png?1505722528983", id:"nogi"},
		{src:"images/p1.png?1505722528983", id:"p1"},
		{src:"images/p.png?1505722528983", id:"p"},
		{src:"images/rpgstash.png?1505722528983", id:"rpgstash"},
		{src:"images/rune_logo.png?1505722528983", id:"rune_logo"},
		{src:"images/telo.png?1505722528983", id:"telo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;