(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,300);


(lib.bliki = function() {
	this.initialize(img.bliki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,86);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,86);


(lib.kubok = function() {
	this.initialize(img.kubok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,239);


(lib.kubok_r = function() {
	this.initialize(img.kubok_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,235);


(lib.logo_betsiti = function() {
	this.initialize(img.logo_betsiti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,35);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,131);


(lib.Shape1 = function() {
	this.initialize(img.Shape1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,36);


(lib.Shape2 = function() {
	this.initialize(img.Shape2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,50);


(lib.Shape3 = function() {
	this.initialize(img.Shape3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,48);// helper functions:

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
	this.shape.graphics.f("#FFCC00").s().p("Aj5KBQhBgdgog/Qgog/ABhHQABgmANguQAIgcAVg1ICmmuQAwh6AVhGIAahbQARg0AWghQAng7BCgfQBEgfBGALQBFALA3AyQA3AyAQBFQAQBHgaBpQgQA/gvB7IjLIVQgYBAgQAeQgaAzghAgQgxAyhKANQgXAEgWAAQgxAAgtgUg");
	this.shape.setTransform(39.4,66.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,78.8,132.3), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1EEF7").s().p("Egk+ATWIgEgBIgBAAIgEgEIADgEIAEAAIgBgCIAFACIACABIABACIABABQgCAFgEAAgAo1SkIgEAAIgDgBIAAgBIgBgBIAAgBIACgFIADAAIAAgBIAGABIACAAIABABIABACIAAADIgBACQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgEAlBASMIgEgBIAAAAIgBgBIgBgBIgBgBIAAgBIACgFIADAAIAAgBIAGABIACABIABADIAAAEIgDACgAqSGWQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgDIACgGIADAAIAAgBIAGABIABAAIABABIABADIgCAFIgDABIgBACIgCAAIgEgBgAX8FkIgBgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgBIgBgFIABgBIAAgBIACgBIAEABIABAAIADAEIACAEIgCADIgBABIAAABgABqEXIgFgBQgCgCAAgDIAAgDQABgFACgCIAFgBIAAgBIAFADIADADQABADAAAEQgBADgDABIgEACIgCgBgAJPB/IgDAAIgBgBIgCgCIABgEIAAgBIADgBIAAgBIAFABIACABIABADIAAADIgDACgAqYA9IgBgBQgCgCABgEIABgEIAAgCIACAAIACAAIACAAIABACIACAEIAAACIgCAEIgBABgA7sgZIAAAAIgBgBIgBgBIgBgBIAAgBIAAgFIACgDIADAAIACAAIACACIABADQAAADgDADIgBABgAhYlnIgBAAIgBgCIAAgCIABgEIADAAIAAgBIAGABIAAAAIABABIABADQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCACgEAiSgHJIgBgCQgBgDACgDIACgDQADgDACACIABgBQAEgBACAFQADAEgCAEIgCADIgEADQgEAAgFgFgAz3otIgCAAQgBgCAAgEIABgEIACgBIABgBIACAAIABABIABAAIACAEQABADgDAEIgBAAgAgjpmIAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAAgBIAAgCQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAgCIAGABIAAABIACAEIABABIgCAGIgBABgAq7ufIAAgBIgCgCIAAgDQAAgFABgBQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABIAAgCIAEABIABABIABABIABABQABADgCACIgDAEIgBABgADFxAIgFAAIgBgBIgCgBIAAgBIAAgBIABgFIADAAIAAgBIAHABIACABIACAFIgCACIgCABgEggsgRDIgEgBIAAAAIgBgBIAAgCIgBgBIAAgBIACgDIADAAIAAgBIAFABIACABIABABIAAACIAAACQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAgAMWyeQgIgCgCgFIgCgEIABgGIACgEQADgFAHAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAgBAAQAJACACACQADAEABAFQgBAFgCADQgBADgHADIgEABgEAhvgTIIgBgBIgBgCIgBgDIABgFIABgBIACgBIACAAIABABIABABIACAEQAAADgDADIAAABg");
	this.shape.setTransform(237.6,123.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,475.1,247.6), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYbfIgKgCIgSgGIgPgIIgMgHIgKgHIgIgIIgHgIIgIgHIgFgIIgFgHIgFgHIgDgIIgCgIIgDgHIgCgIIgDgHIAAgIIAAgHIAAgIIgCgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgJIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgGIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgIIAAgHIAAgHIAAgIIAAgHIACgIIAAgIIAAgHIADgHIAAgIIACgHIADgJIACgHIAFgIIAFgHIAFgHIAGgIIAHgIIAIgHIAHgIIAKgHIAPgHIANgGIAFgCIAKgCIAKgDIAYAAIAAgDIAZADIAKADIAPAEIASAIIAKAIIAKAHIAKAHIAIAIIAFAHIAFAIIAFAIIAFAHIACAHIADAIIAFAIIAAAIIACAHIADAIIAAAHIAAAHIACAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAJIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAJIAAAHIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAJIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIAAAIIAAAHIAAAHIAAAIIAAAHIAAAIIAAAIIgCAHIAAAHIAAAIIAAAHIgDAIIgCAIIgDAIIgCAHIgDAHIgFAIIgCAIIgFAHIgIAIIgFAHIgHAHIgKAIIgLAIIgMAHIgNAFIgFADIgKADIgKACIgZACIgYgCg");
	this.shape.setTransform(14.3,176.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,28.7,352.3), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bliki();
	this.instance.parent = this;
	this.instance.setTransform(-1200,0,1,1,0,0,180);

	this.instance_1 = new lib.bliki();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1200,0);

	this.instance_2 = new lib.bliki();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,180);

	this.instance_3 = new lib.bliki();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-1800,0,2400,300), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("    УДОБНОЕ\n МОБИЛЬНОЕ \nПРИЛОЖЕНИЕ", "25px 'Intro Regular Alt'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 224;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,228,164), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("         24/7 \nПОДДЕРЖКА", "25px 'Intro Regular Alt'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,179,83), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("      LIVE И\nVIP СТАВКИ", "25px 'Intro Regular Alt'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,168,110), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Shape3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,28,48), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Shape2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,53,50), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Shape1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,51,36), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADYCOIAFgXIhuAAIgFAXIgtAAIANhCIAHAAQAMAAAFgGQAFgFAEgOIArh/ICHAAIghCYIAUAAIgOBCgACeA1QgHATgHAFIA7AAIAXhtIgnAAgAzbCOIAEgXIhtAAIgFAXIgtAAIANhCIAIAAQALAAAFgGQAFgFAFgOIAph/ICIAAIghCYIAUAAIgOBCgA0WA1QgHATgGAFIA7AAIAXhtIgnAAgAmwB2QgSgJgIgHIgKgLIgIgOQgDgHgBgJQgCgJAAgJQAAgPADgOQACgNAHgLQAEgLAIgKQAHgJAKgIQAJgIAKgGQAKgGALgEQALgEALgCQALgCALAAQARAAAOAGIAOAGIAMAJIAKALQAFAHADAHQADAIABAJQACAJAAAJQAAAMgCANQgDAMgEALQgEALgGAKQgHAKgHAIQgJAIgJAGQgKAHgMAFQgMAEgNACQgNADgOAAQgRAAgOgFgAmEgbQgLAEgJAIQgJAJgGALQgFAMgCAQQAAAKADAIQADAIAFAFQAGAFAIADQAHACAIAAQALAAAKgEQAMgEAIgIQAKgJAGgLQAFgNAAgPQAAgKgDgHQgDgIgGgFQgEgFgIgDQgHgDgIAAQgLAAgKAEgAMmB2IAJgkIANgBQAFAAAEgDQAFgFAGgQIAqiFICKAAIgpDDIgzAAIAgiVIgrAAIgaBZQgHAVgIANQgHANgLAHQgKAGgPABIgHABQgMAAgQgDgAybB2IAJgkIANgBQAGAAADgDQAGgFAGgQIApiFICLAAIgqDDIgzAAIAhiVIgsAAIgaBZQgHAVgHANQgIANgKAHQgLAGgOABIgIABQgLAAgRgDgASkB4IAqjEIAzAAIgVBfIB8hgIAQAAIgqDEIg0AAIAWhlIh9BmgAEpB4IAqjEIAzAAIgVBfIB8hgIAQAAIgqDEIg0AAIAWhlIh9BmgAQEB3IAqjDIB7AAIgJAqIhHAAIgHAfIBBAAIgJAsIhBAAIgIAiIBKAAIgKAsgAKXB3IApjDIB8AAIgKAqIhHAAIgGAfIBBAAIgJAsIhCAAIgIAiIBLAAIgKAsgAIcB3IAhiWIgxAAIAJgtICSAAIgKAtIgvAAIggCWgAhQB3IAqjDIB5AAIgJAqIhHAAIgFAfIBAAAIgJAsIhBAAIgHAiIBJAAIgKAsgAkLB3IAqjDICNAAIgKAtIhbAAIgFAZIAkAAQAOAAAMAEQALADAIAHQAGAGAEAJQAEAJAAALQAAAPgEANQgGAOgJALQgGAFgGAEQgGAFgJADIgSAFQgKABgMAAgAjPBKIAkAAQALAAAHgHQAHgHAAgJQAAgHgEgDQgEgFgJAAIgkAAgApIB3IAhiVIg9AAIggCVIgzAAIApjDICjAAIgpDDgAtXB3IANg9IgbAAIgvA9Ig2AAIACgHIA2hEQgHgEgFgHQgFgGgCgIQgCgHAAgJQAAgHACgJQADgNAGgLQAIgLAKgJQAMgJANgFQAPgFASAAIBWAAIgpDDgAtjgdQgGADgDAEQgIAJAAALQAAAHADAFQAFAGAIAAIAjAAIALgvIghAAQgHAAgFACgAUShdQgJgDgIgGQgHgHgDgJQgCgLACgMIApAAQgBAHAEAEQAFADAIAAQAHAAAGgDQAHgEACgHIAoAAQgDANgHAKQgHAJgKAHQgJAGgMAEQgLADgLAAQgLAAgLgEg");
	this.shape.setTransform(112.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-27.4,-3.1,279.9,28.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyBBhQgSgJgIgHIgKgLIgIgOQgDgHgBgJQgBgJAAgJQAAgPADgNQACgNAGgMQAFgLAHgKQAIgJAJgIQAJgIAKgGQALgGALgEQAKgEAMgCQALgCALAAQAQAAAPAGIANAGIANAJIAKALQAEAHADAHQADAIACAJQABAJAAAKQAAAMgCAMQgCAMgEALQgEALgHAKQgGAKgIAIQgIAIgKAGQgKAHgMAFQgLAEgNACQgNADgOAAQgSAAgOgFgAxVgwQgLAEgIAIQgKAJgFAMQgGAMgBAPQgBAKAEAIQADAIAFAFQAGAFAHADQAHACAJAAQALAAAKgEQAMgEAIgIQAKgJAFgLQAGgNAAgOQAAgKgEgIQgDgIgFgFQgFgFgIgDQgGgDgJAAQgKAAgLAEgAIQBjQgJgCgIgDQgIgDgIgFQgHgFgFgGQgGgHgEgHQgFgIgCgKQgBgJAAgLQAAgLABgMQADgMAFgMQAFgKAGgKQAGgJAHgIQAIgIAIgGQAIgGAJgEQAJgFAJgDQANgEAbgCQAPAAAOAFQAPAEALAJQAFAEAEAGQAEAGAEAHQACAHABAIQACAJgBAKIgvAAQgBgJgEgFQgDgFgFgEQgEgDgIgBIgOgCQgMAAgLAFQgKAFgIAIQgHAIgGALQgFAKgCALQgCAKABAJQACAJAFAHQAFAGAIAEQAJADAKAAQAIAAAIgBQAHgCAGgEQAHgEAFgGQAGgGADgIIAxAAQgEALgFAJQgEAIgGAIIgMANIgPALQgOAJgRAFQgQAEgPAAgA4UBjQgIgCgJgDQgIgDgHgFQgHgFgGgGQgFgHgFgHQgEgIgCgKQgCgJAAgLQAAgLACgMQADgMAEgMQAFgKAHgKQAFgJAHgIQAIgIAJgGQAHgGAKgEQAJgFAJgDQANgEAagCQAQAAANAFQAPAEALAJQAFAEAEAGQAFAGADAHQADAHABAIQABAJAAAKIgwAAQAAgJgEgFQgDgFgFgEQgFgDgHgBIgPgCQgLAAgLAFQgKAFgJAIQgHAIgGALQgEAKgDALQgCAKABAJQADAJAFAHQAFAGAIAEQAJADAJAAQAIAAAIgBQAHgCAHgEQAHgEAEgGQAGgGADgIIAyAAQgEALgFAJQgEAIgHAIIgMANIgPALQgOAJgQAFQgQAEgQAAgAWBBjIApjEIAzAAIgUBgIB7hhIAQAAIgqDEIgzAAIAVhkIh9BlgAqJBjIAqjEIAzAAIgVBgIB8hhIAQAAIgqDEIg0AAIAWhkIh9BlgAUxBiIgehNIgaABIgPBMIg1AAIAqjDIA1AAIgRBOQAMAAAHgCQAHgCAFgFQAIgHAOgdQAFgLAHgHQAHgIAJgFQAKgEAMgBQANAAARADIgIAjQgKgCgGAEQgHADgDAJQgTApgRAMIAoBWIgCAHgAO0BiIgHgbIhIABIgRAaIg2AAIABgHICAi+IAaAAIAxC+IgCAHgAOmAeIgKgtIgeAtIAoAAgAK7BiIAhiWIgxAAIAKgtICRAAIgJAtIgwAAIggCWgADmBiIApjDIB7AAIgJAqIhHAAIgGAfIBBAAIgJAsIhCAAIgHAiIBKAAIgKAsgACJBiIAqjDIAzAAIgqDDgAgChhIAwAAIgMA7IAkAAQALAAASAGQAMAFAHAKQAHAKACALQACAMgDANQgCANgHAMQgHANgLAJQgLAKgOAGQgUAGgMAAIhWAAgAAzA1QAKAAAHgIQAHgGACgKQABgJgDgHQgFgHgKAAIgkAAIgKAvIAAAAIAAAAIAJAAIAcAAgAiJBiIARhOIg9AAIgRBOIgzAAIApjDIA0AAIgQBHIA+AAIAPhHIAzAAIgqDDgAsEBiIAgiWIgwAAIAKgtICRAAIgJAtIgwAAIggCWgA0YBiIAgiVIg9AAIgfCVIgzAAIApjDICjAAIgpDDgAvcBiIAqjDIBXAAQAIAAAIACQAHABAGADQAMAGAGALQAIAKABAOQACANgDAOQgEAOgGALQgGANgKAKQgQAMgKAEQgIADgJACQgJABgLAAIghAAIgLAzgAuWADIAjAAQAGAAAFgDQAEgBAEgEQAIgIACgMQADgLgEgIQgCgEgDgCQgDgDgGAAIgkAAgAP5BhIAqjDIBXAAQALAAAKAEQAJADAHAHQAGAGAEAJQADAJAAALQAAAHgCAHQgCAHgEAGQgGALgLAHQAIAEAFAJQADAJAAALQAAANgEAMQgGANgKAJQgKAKgOAFQgTAGgMAAgAQ1A1IAoAAQAHAAAGgFQAEgEABgGQADgIgDgGQgDgHgIAAIgnAAgARFgSIAfAAQAIAAAFgGQAFgFABgHQACgHgDgFQgDgFgHAAIgfAAgAm1BhIApjDIBXAAQALAAAKAEQAJADAHAHQAGAGAEAJQADAJAAALQAAAHgCAHQgCAHgDAGQgHALgKAHQAHAEAFAJQAEAJAAALQAAANgFAMQgGANgJAJQgLAKgNAFQgUAGgMAAgAl5A1IAoAAQAHAAAFgFQAEgEACgGQACgIgCgGQgEgHgHAAIgoAAgAlpgSIAfAAQAHAAAGgGQAEgFACgHQACgHgDgFQgDgFgIAAIgfAAg");
	this.shape.setTransform(133.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-28.1,3,324,20.4), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kubok_r();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,229,235), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kubok();
	this.instance.parent = this;
	this.instance.setTransform(13.7,0,0.947,0.947,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,156.4,234.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,313,86);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(413,-9);

	this.instance_1 = new lib.money();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186,-20);

	this.instance_2 = new lib.money();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,-20,680,151), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(39.4,66.2,1,1,0,0,0,39.4,66.2);
	this.instance.alpha = 0.141;
	this.instance.shadow = new cjs.Shadow("rgba(255,255,102,1)",0,0,4);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance.cache(-2,-2,83,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-17,-17,116,170), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aw1E6Qg/gCgChAIAAnvQAChAA/gCMAhrAAAQA/ACACBAIAAAEIAAHnIAAAEQgCBAg/ACg");
	var mask_graphics_54 = new cjs.Graphics().p("Aw1E6Qg/gCgChAIAAnvQAChAA/gCMAhrAAAQA/ACACBAIAAAEIAAHnIAAAEQgCBAg/ACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:128.6,y:30.7}).wait(54).to({graphics:mask_graphics_54,x:128.6,y:30.7}).wait(1));

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,16,1,1,0,0,0,39.4,66.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:133.7},14,cjs.Ease.get(-1)).to({x:320.2},15,cjs.Ease.get(1)).wait(26));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.5,43,1,1,0,0,0,156.5,43);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,-0.7,228.7,62.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(1559,119.1,0.801,0.801,0,0,0,300,150);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-123.8,-1.1,1923.2,240.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(842,150,1,1,0,0,0,900,150);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1803.9},194).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.8,-1.1,1923.2,240.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(764.1,169,0.571,0.571,0,0,0,114.2,82.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).to({regY:82.2,x:643.6},7,cjs.Ease.get(-1)).to({regY:82.1,x:523.1},7,cjs.Ease.get(1)).wait(49).to({regY:82.2,rotation:-4,x:524.8,y:273.9},7,cjs.Ease.get(-1)).to({rotation:-8,x:526.5,y:378.7},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(749.7,97.1,0.956,0.956,0,0,0,14,24.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).to({regX:14.1,x:629.3},7,cjs.Ease.get(-1)).to({regX:14,x:508.7},7,cjs.Ease.get(1)).wait(49).to({regX:14.1,scaleX:0.96,scaleY:0.96,rotation:-4,x:505.5,y:203.3},7,cjs.Ease.get(-1)).to({scaleX:0.96,scaleY:0.96,rotation:-8,x:502.3,y:309.4},7,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(722.6,145.8,0.571,0.571,0,0,0,89.6,41.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({_off:false},0).to({regX:89.7,x:561.1},7,cjs.Ease.get(-1)).to({regX:89.6,x:399.6},7,cjs.Ease.get(1)).wait(50).to({regX:89.8,rotation:-6.3,x:402.3,y:244.1},7,cjs.Ease.get(-1)).to({regX:89.7,regY:41.7,rotation:-15,x:405.9,y:375},7,cjs.Ease.get(1)).wait(4));

	// Слой 7
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(714.7,98,0.956,0.956,0,0,0,26.6,25.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).to({x:553.2},7,cjs.Ease.get(-1)).to({x:391.7},7,cjs.Ease.get(1)).wait(50).to({scaleX:0.96,scaleY:0.96,rotation:-6.3,x:389.3,y:197.8},7,cjs.Ease.get(-1)).to({scaleX:0.96,scaleY:0.96,rotation:-15,x:385.9,y:330.8},7,cjs.Ease.get(1)).wait(4));

	// Слой 9
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(731.1,153.5,0.571,0.571,0,0,0,84.1,55.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regX:84.2,x:525.8},7,cjs.Ease.get(-1)).to({regX:84.1,x:291.1},8,cjs.Ease.get(1)).wait(50).to({regX:84.2,rotation:-6.8,x:294.1,y:269.9},7,cjs.Ease.get(-1)).to({rotation:-15,x:297.2,y:402.7},8,cjs.Ease.get(1)).wait(6));

	// Слой 6
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(726.6,92.3,0.956,0.956,0,0,0,25.6,18.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({x:521.2,y:92.2},7,cjs.Ease.get(-1)).to({x:286.6,y:92.3},8,cjs.Ease.get(1)).wait(50).to({scaleX:0.96,scaleY:0.96,rotation:-6.8,x:282.1,y:210.1},7,cjs.Ease.get(-1)).to({scaleX:0.96,scaleY:0.96,rotation:-15,x:277,y:344.7},8,cjs.Ease.get(1)).wait(6));

	// text2
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(969.5,161,1,1,0,0,0,134.5,41.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({x:689.5},10,cjs.Ease.get(-1)).to({x:409.5},10,cjs.Ease.get(1)).wait(50).to({regX:134.6,regY:41.6,rotation:-7.3,x:409.7,y:371.2},10,cjs.Ease.get(-1)).to({regX:134.5,rotation:-14.7,x:409.6,y:581.2},10,cjs.Ease.get(1)).to({_off:true},1).wait(85));

	// text1
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(970.1,139.3,1,1,0,0,0,156,55);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:698.1},12,cjs.Ease.get(-1)).to({x:410.1},13,cjs.Ease.get(1)).wait(50).to({rotation:-7.3,y:319.4},10,cjs.Ease.get(-1)).to({regY:55.1,rotation:-15,y:499.4},10,cjs.Ease.get(1)).to({_off:true},1).wait(85));

	// razmytie
	this.instance_8 = new lib.Символ7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(731.5,117.5,1,1,0,0,0,114.5,117.5);
	this.instance_8.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:442.8},9,cjs.Ease.get(-1)).to({x:167.9},5,cjs.Ease.get(1)).to({x:133.5,alpha:0},5).wait(82).to({_off:true},1).wait(93));

	// kubok
	this.instance_9 = new lib.Символ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(678.2,117.2,1,1,0,0,0,78.2,117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:389.5},9,cjs.Ease.get(-1)).to({x:80.2},10,cjs.Ease.get(1)).to({y:115.8},13,cjs.Ease.get(-1)).to({y:114.2},14,cjs.Ease.get(1)).to({y:115.7},14,cjs.Ease.get(-1)).to({y:117.2},14,cjs.Ease.get(1)).to({y:115.8},13,cjs.Ease.get(-1)).to({y:114.2},14,cjs.Ease.get(1)).to({y:115.7},14,cjs.Ease.get(-1)).to({y:117.2},14,cjs.Ease.get(1)).to({y:115.8},13,cjs.Ease.get(-1)).to({y:114.2},14,cjs.Ease.get(1)).to({y:115.7},14,cjs.Ease.get(-1)).to({y:117.2,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,0,246,235);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(306.6,150.9,1,1,0,0,0,237.6,123.8);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-2,-2,479,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(272.2,150.6,1,1,0,0,0,14.3,176.2);
	this.instance_1.filters = [new cjs.BlurFilter(24, 24, 1)];
	this.instance_1.cache(-2,-2,33,356);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(671.3,0,1.013,1.013,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-49,0,1.013,1.013);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-49,-37.6,720.3,379), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(272.6,152,1,1,0,0,0,310.6,152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu8AXwMAAAgvfMBd5AAAMAAAAvfg");
	this.shape.setTransform(300.5,152);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-87,-37.6,720.3,379), null);


// stage content:
(lib.betcity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 15;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.logo_betsiti();
	this.instance.parent = this;
	this.instance.setTransform(312,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(450.5,257,1,1,0,0,0,156.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// money
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.5,302.5,1,1,0,0,0,133.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// kubok_text
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(106.2,141.3,1,1,0,0,0,78.2,117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-239.5,150,1,1,0,0,0,900,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-29.9,152.1,1,1,0,0,0,-31,152);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0)").ss(1,1,1).p("Egu8gXvMBd5AAAMAAAAvfMhd5AAAg");
	this.shape.setTransform(301.5,152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.fon}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1021.3,112.5,2195.4,405.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1502704716931", id:"bg"},
		{src:"images/bliki.jpg?1502704716931", id:"bliki"},
		{src:"images/btn1.png?1502704716931", id:"btn1"},
		{src:"images/btn2.png?1502704716931", id:"btn2"},
		{src:"images/kubok.png?1502704716931", id:"kubok"},
		{src:"images/kubok_r.png?1502704716931", id:"kubok_r"},
		{src:"images/logo_betsiti.png?1502704716931", id:"logo_betsiti"},
		{src:"images/money.png?1502704716931", id:"money"},
		{src:"images/Shape1.png?1502704716931", id:"Shape1"},
		{src:"images/Shape2.png?1502704716931", id:"Shape2"},
		{src:"images/Shape3.png?1502704716931", id:"Shape3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;