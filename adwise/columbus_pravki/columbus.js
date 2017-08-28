(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.BTN = function() {
	this.initialize(img.BTN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,67);


(lib.BTN2 = function() {
	this.initialize(img.BTN2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,67);


(lib.dama = function() {
	this.initialize(img.dama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,305);


(lib.flash = function() {
	this.initialize(img.flash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,372);


(lib.karta = function() {
	this.initialize(img.karta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,278);


(lib.king = function() {
	this.initialize(img.king);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,49);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,56);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,142);


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,331);


(lib.s2 = function() {
	this.initialize(img.s2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,330);


(lib.s3 = function() {
	this.initialize(img.s3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,330);


(lib.s4 = function() {
	this.initialize(img.s4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,331);


(lib.s5 = function() {
	this.initialize(img.s5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,330);


(lib.sunduk = function() {
	this.initialize(img.sunduk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,201);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,103);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,95);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,204);


(lib.tuz = function() {
	this.initialize(img.tuz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,39);


(lib.valet = function() {
	this.initialize(img.valet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,40);// helper functions:

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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-171.2,0,171.2,0).s().p("A6vakMAAAg1HMA1fAAAMAAAA1Hg");
	this.shape.setTransform(171.2,170);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,342.4,340.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiDHYQhEgFgkgYQgggWgPgmQgPgmAIgmQAJgmAegbQAegcAngGQARgDAYACIAqADQAeADAhgBIArgDIgQgIQgQAAgPgDQgngJgugqQg+g3glg+QgohBgahsQgJglgBgbQgMgQgGgKQggg3ALg7QAGgdAQgZQARgZAZgOQAWgOAggGQAVgEAlgDQBZgIArABQBIACA3AUIAhAOQAVAIAOADQAMACAbABQAZACAOACQAeAHAZAWQAZAVALAdQALAegEAhQgDAggRAbQgLANgGAKQgCAngOA0QgNAygiBfQgSA3gSAaQgUAegoAeQgVAQgUAJIAFAAIAVACQALgCAMgBQAfgBAdAMQAdAMATAXQAUAXAIAeQAIAegGAeQgGAagRAWQgQAXgYANQgTALgUAEQgMAFgNADQgTADgagBIgugCQgQgBg4ADIhEACQgkAAgcgDg");
	this.shape.setTransform(34.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,68.4,94.9), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,204,0,0)","#FFCC00","rgba(255,204,0,0)"],[0,0.478,1],-25.2,0,25.3,0).s().p("Aj8JiIAAzDIH4AAIAATDg");
	this.shape.setTransform(25.3,61);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,50.5,122.1), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,128,103), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.BTN();
	this.instance.parent = this;

	this.instance_1 = new lib.BTN2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,67);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s1();
	this.instance.parent = this;
	this.instance.setTransform(0,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.s1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,-330,54,661), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.s2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.s2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,-329,54,659), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.s3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.s3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,-330,54,660), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.s4();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.s4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,-329,54,661), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.s5();
	this.instance.parent = this;
	this.instance.setTransform(1,-1937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.s5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-1607);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.s5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-1277);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.s5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.s5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,-287);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.instance_5 = new lib.s5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-617);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.s5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,-947);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(1,-1937,54,2309), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-13,10,0.748,0.748);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-13,10,113,71.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.valet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,49,40), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tuz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,43,39), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,36,36), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.king();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,54,49), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,328,372), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD4OzQgTgHgNgPQgMgQgEgUQgDgUAHgSQAHgUAegfQBShUAmglQBFhCA7gwIAYgVQAMgMAGgNQAGgNAAgUIgBghQgCgiALhPIAAgCQgUgcADgsQACgRAFgXIAJgnQgBgRADgNQADgMAHgLIADgKQALgiAVgRIAGgEIgCgEQgIgYAIgaQAHgZATgRQAKgIAUgMQAWgNAJgHQAmgeAQhOQAah2gOh5QgEgjgLgPIgMgMIgKgBQgLgBgfgIQg3gOhFgIQgtgFhSgGQj0gRhzgFQi8gIiZADQgCAXABANQAAAOADAXIAFAlQACAbAAA1QAAATAGBDQAEA1gCAhQgBAxgTAZIgIAKQgDALgGAKQgLATgZATQgGAHgJAHIgcAUQgSAWgdATQgcASgmASIgIAEIgRAMQhKAxg4AcQgkATgaABQAnCsAWCpQAFAiAKAMQAJAMAYAKQBRAkBIAVQAoALAMAFQAdALAQASQAWAYgCAkQgDAkgaATQgXARgjgBIgDAAQgDgEgJgGQgegTgzgPIhVgZQgYgIgigPIg4gbQgNgGgOgFQgJgDgKgCIgNgNIgFgIIgBgHQAAgLgEgNIgLgoIgJAAQgFgIgBgFIgDgFIgEgBIgFAAIgNgsIgFgOIAAgGIAIAAIABghIgBgIIgCgGQgBgEABgDIgDgCIgEgcIgCgKQgDgHABgFIgDgCQABgDgBgEIgCgGIAAgNIgEgWQgCgNABgDIgLAAIAAgIQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgMAAQgNhdgIgjIgJglQgEgVADgQQAEgXAOgQQADgNAHgLQALgRAWgMQANgHAdgLIAKgEIBkhAQA9gnAigQQATgJA0gTQAtgRAYgNIAlgTQACgqgBgUQgBgLgDgUIgEgfQgBgOAAgVIABgjIgCgkIgEgkQgFg6ADhcIABgXIgCgLQgDgNAAgTQAAgcAMgNQAKgLAQACQAIABAHADIACAAIBEgMQAdgEAMAHIAGAFQEXAFCxAIIAfACIAAhXQABgZAHgKQAIgMAQgCQAQgBAKALQALAMAAAhIAABVQDOAMCvAWQAsAFAZAJIAQAGQAZACAcANQAkATAWAbQATAXAMAfQARAsAFA5QADAngBBCQgCBrgNBCQgUBggwA+QghAqg5AmQgPAKgMAGQAIAZgFAiIgEAYIABAUQABAYgBAhIgHAAIgFAnIgDAYIgCAaQgOBFgBAgQgBAQAGAIQACAEAHAFIAAAEIgBACIgBADQgBACABAEIgBAHIgBACIgBAHQABAFgBAEIgDAGIAAAIIgDALIAAAGIgNAKQgPAIgDAEQgEAHABAPQACAVgEAMQgEAMgUATQgrApgcArQgVASgLALIgZAeQgQAUgJAKQggAighADQgJABgJgBIgKAKQgaAbgPAMQgaATgZAEIgJABQgPAAgOgHgABLstQgKgHgDgLQgDgLAGgNQAFgLALgIQAKgIAJACIACgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAQAJABAHAEQACgLAFgOQAIgWAJgKQAOgQAZgCQAWgDAWAJQAcALANAVIAEAKIAIACQAQAJABARQACASgOALQgOALgdgCQgUAAgKgHQgHgFgDgKQgDgJABgIIgGABQgDAagSAMQgKAGgMABQgJAAgIgFQgEALgKAIQgJAIgMACIgDABQgKAAgJgHg");
	this.shape.setTransform(91.3,95.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,182.7,190.7), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AY4YiQgogGgNgfQgKgXAJggIASg3QAOgpAGhQQATk7g5kzQgLg8gPgiIgUgmQgMgXgEgQQgIgfAKghQAKggAZgVQAKgIAfgTQAbgQAMgNQAagfAAg6QAAgugShOQgVhYgDgjQgCgeADg+QADg9gDggQgRhigHgwQgMhWAag0QgVgfgEgvQgEgfAEg2QAFhcAGguQAIhMARg6QASg9AEgWQAGgwgUgeQgQgZgWAAQgJAAgOAHQgRAIgGACQgOAEgXgFQgfgHgHAAQgQgBgVAHIgkAMQhAAShWgWQhEgSgbgjQgSgWgCgeQAAgGABgGIgZgMQhzg3g6gLQgEAlgYAdQgZAegjAJQgkAJgkgQQgjgQgPghQgOgeAEg9QAEhBgKgcQhZgMiIAdQjFApgeAEQhdAKh1gNQg/gHiUgZQiHgXhLgGQh1gJhdAPQAKA4ABAdQABAwgPAjQgRApgqATQgsAUgjgXQgNgIgUgZQgTgZgOgJQgZgQgiAFIgFABIABAAQAOALAJAQQAIARAAASQAAASgIAQQgJARgOAKQgZATgzACQhsAGhlgtQg+A8hFACQgTABgbgGIgagFQgRgDgPgEQgygKgygBIgQADQgOABgOgEIgCAAQADBVAPBWIAJA0QAFAeAAAXQABA+gcAmQgKANgLAJQAGAQADAWQAMBMgNBOQgDAYACAJQACAIAGAJIAKAPQAWAgACAoQADAngQAjIgNAWQgHAOgDAJQgHAUABAmIACDiQABA1gDAdQgEAtgMAiIgXA6QgKAhAKAYQAHAPARANQAJAHAYAOQA8AhAVAkQAOAZAAAbQgBAPgEAMIACAJQAEAcgMAYQgIAPgYAWQgZAYgIAMQgOAVgEAfQgCATAAAkIALKCQAAAfgCAQQgDAagKASQgLAUgUAMQgVAMgWgBQgXAAgUgNQgUgNgJgUQgHgQgBgVIAAgGQgNgNgHgSQgJgWAFgWQAEgYAVgTIAFgEQAChrgFiZQgIj3AEhoQACg4AIgjQAMgxAcgeIASgRIAJgIQgOAEgPgCQgZgDgUgRQgUgSgGgYQgDgOACgOQgMgQgIgQQgjhGAXhcQAEgRAKggQALggAEgRQAJgiACgtQABgZAAg3IgEjMQgBg/AKgfIAFgPQACgJgCgHQgCgFgLgPQgYghAKg3IAKgsQAGgcACgRQABgRgCgbIgDgrQgBg3AZgcQgIgVAEgWQACgIAIgVQAHgSABgLQABgMgHgcQgThOgFhnQgEhOALgrQAQhEAuggQAZgSAggDQAQgCAQAEQAIgDAKAAQAUAAARAJQASAKANASIAOgDIAFgBIAIgEQAMgEAMAAQAfgDAjAVIAJAFQAPgVAcgIQAVgGAWAFQAYgOAfgEQAlgFAmAKIAQgNIAugbIBDgqQAogXAggKQAogNAnAEQAqAEAdAXQgHggALghQALghAYgVQAggdBBgOQCOgeD2ArIDEAiQBuAQBVgDQBRgDCfggQCfgfBQgDQBcgEA3AcQAiASAWAgQAXAigDAkQBXgbCCA+IBlAxQA8AaAvAFIBGAIQAnAIARAYQAFAHADAIIAGgDQA0gRAxgEQA2gEAnANQBBAWA0BHQA8BTACBXQAAArgUBGQgXBTgEAeQgCAPgDBYQgCA/gOAlQAbAZAKAlQALAlgJAjQgDAKgJAYQgIAVgCAMQgFAaAIAlIAPA/QAHAngCBEQgDBOACAeQADAeAKArIAQBJQASBigMBjQgIBBgXAuQgdA5gwAWQBSFPgDFZQgBBbgIBHQAJAIAHALQAMAWgDAZQgCAagQASQgNAQgTAHIgJAWQgQAkgaAUQgYASgeAAIgPgBg");
	this.shape.setTransform(177.9,157);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,355.9,314.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiJAoQgRgDgDgLQgDgMANgLQANgLAWgGQAWgGARAEQASADADAMQADAKgOAMQgNAMgVAFQgOAEgLAAQgIAAgHgCgABCAFQgPgHgBgLQAAgMAQgIQAQgIAXAAQAWAAAPAJQARAHAAAMQAAALgQAHQgQAIgWAAQgXAAgQgIg");
	this.shape.setTransform(15.8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,31.7,8.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHYCwQg+gEgtgTIg0gaQgggQgXgGQgWgFgeACQgPAAgnAFQirATiugUQgfgEgLAAQgYgBgRAFQgPADgUALIgiARQgkASgwAJQglAHg0ACQiRAIiOgRQg9gIgsgKQg4gOgrgXIgkgTQgVgKgRgDQgWgEgrAHQgwAHgegBQgrgCgfgPQgkgRgSglQgSgmAQghQAHgOAMgLIgKgWQgKgSgDgKQgFgRAHgNQAEgHAHgEQAHgFAJABQASABAJAQIAGARQAEALALAUIACADQAXgGAggDQA/gHAjgBQA2AAAqAKQAdAIArATIBHAfQBIAbBfAIQA6AFBygBQAaAAAPgCQAWgEAPgKQALgHANgQQAQgUAGgFQAfgcA2gBQAggBBAAMQEMAxEKg4QAzgKASgDQAngEAdAGQAkAHAZAZQAbAcgCAhQBzAGA+gFQBigIBGgiQARgIAfgSQAdgPAWgGQAmgJA4AJIBgASIBAAFIAjAEQAEgIAJgIIAQgMQAKgHAFgHIAPgXQAJgOAKgEQANgGANAIQAOAHACAOQABAOgMAUQgSAcgaAVQAKAGAIAIQAZAYADAdQAEAoglAfQgiAcguAEQgfACg1gIQg+gKgXAAQg0gBhKAWQhSAbgqALQg1ANhDAGQgrAEhPADIg/ABQgcAAgTgBg");
	this.shape.setTransform(136.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,273,35.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],160,0,-160,0).s().p("A4/X1MAAAgvpMAx/AAAMAAAAvpg");
	this.shape.setTransform(482.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-160,0,160,0).s().p("A4/X1MAAAgvpMAx/AAAMAAAAvpg");
	this.shape_1.setTransform(160,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,642.5,305), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(34.2,47.5,1,1,0,0,0,34.2,47.5);
	this.instance.alpha = 0.512;
	this.instance.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance.cache(-2,-2,72,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-11,-11,94,120), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.623,0.623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.5,42.4,1,1,0,0,0,34.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-13.7,-16.1,93,120), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(25.2,61,1,1,0,0,0,25.2,61);
	this.instance.alpha = 0.34;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(19, 19, 1)];
	this.instance.cache(-2,-2,55,126);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:213.7,y:11.2},25,cjs.Ease.get(-1)).to({x:412.1,y:-41.2},26,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,98,170);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(144,33.5,1,1,0,0,0,144,33.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,288,67), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A02FOIhXhiIAAndIBLhZIAPgDMApFAAAIAiAFIBaBXIAAHdIhcBdIgfAFg");
	mask.setTransform(144.6,33.3);

	// Слой 3
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-35.8,25.3,1,1,15,0,0,25.2,61);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144,33.5,1,1,0,0,0,144,33.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(2.5,-0.1,284.4,66.9), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(54.7,52.6,0.274,0.274,0,0,0,24.5,19.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regY:20.1,scaleX:1,scaleY:1,rotation:-60,x:82.6,y:8,alpha:1},9).to({rotation:-135,y:-52},22).to({rotation:-150,x:82.5,y:-82,alpha:0},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.6,49.4,0.395,0.395,0,0,0,21.6,19.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regX:21.5,regY:19.6,scaleX:1,scaleY:1,rotation:-75,x:20.6,y:7.5,alpha:1},9).to({regX:21.4,rotation:-180,y:-52.5},23).to({regX:21.6,regY:19.4,rotation:-345,x:32.6,y:-72.6,alpha:0},5).to({_off:true},1).wait(8));

	// Слой 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.9,67.6,0.415,0.415,0,0,0,18.1,18.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:18,scaleX:1,scaleY:1,rotation:-75,x:82.1,y:18,alpha:1},9).to({regY:18.2,rotation:-120,x:72.2,y:-52.1},24).to({regY:18,rotation:-195,x:82.1,y:-72,alpha:0},5).to({_off:true},1).wait(16));

	// Слой 1
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.2,41.6,0.304,0.304,0,0,0,26.9,24.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-105,x:17,y:4.5,alpha:1},9).to({regX:27.1,regY:24.6,rotation:-195,x:27,y:-55.5},21).to({regX:27,regY:24.5,rotation:-360,alpha:0},5).to({_off:true},1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,34.2,16.4,14.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(174,180,1,1,0,0,0,164,186);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(10,-6,328,372), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(38,31.5,1,1,0,0,0,38,31.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(30, 20, -1, 0))];
	this.instance.cache(-2,-2,132,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,132,107), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sunduk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.8,96.9,0.955,0.955,0,0,0,91.3,95.4);
	this.instance_1.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_1.cache(-2,-2,187,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-11.4,-5.1,199,208), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(178,157.1,1,1,0,0,0,178,157.1);
	this.instance.alpha = 0.852;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,360,318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-10,-10,379,338), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(89.5,48.9,1,1,0,0,0,15.8,4.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:1},0).wait(1).to({alpha:0},0).wait(25).to({alpha:1},0).wait(1).to({alpha:0},0).wait(38).to({alpha:1},0).wait(1).to({alpha:0},0).wait(20));

	// Слой 1
	this.instance_1 = new lib.tip();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,204);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(94,102,1,1,0,0,0,94,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:104.4},14,cjs.Ease.get(-1)).to({y:107},15,cjs.Ease.get(1)).to({y:104.5},15,cjs.Ease.get(-1)).to({y:102},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,204);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(136.4,17.7,1,1,0,0,0,136.4,17.7);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-2,-2,277,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-7,-7,290,53), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.7,43.8,1,1,0,0,0,136.4,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-8.7,0,290,72.1), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(178.5,5,1,1,0,0,0,134.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Слой 1
	this.instance_1 = new lib.karta();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// Слой 8
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(177.3,131.9,0.984,0.984,0,0,0,177.9,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// Слой 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4YPJIAA+RMAwxAAAIAAeRg");
	var mask_graphics_149 = new cjs.Graphics().p("A4YPJIAA+RMAwxAAAIAAeRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:183.4,y:131}).wait(149).to({graphics:mask_graphics_149,x:183.4,y:131}).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59,161.8,1,1,0,0,0,27,165.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:136},4).to({y:324},10,cjs.Ease.get(-1)).to({y:492},10,cjs.Ease.get(1)).wait(126));

	// Слой 3
	this.instance_4 = new lib.Символ29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(118,109.3,1,1,0,0,0,27,165);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:115.5},0).to({y:83.5},5).to({y:270.7},10,cjs.Ease.get(-1)).to({y:437.9},10,cjs.Ease.get(1)).wait(121));

	// Слой 4
	this.instance_5 = new lib.Символ28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178,108.3,1,1,0,0,0,27,165);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({y:114.5},0).to({y:98.5},5).to({y:260.9},9,cjs.Ease.get(-1)).to({y:439.3},11,cjs.Ease.get(1)).wait(116));

	// Слой 5
	this.instance_6 = new lib.Символ27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(239,161.8,1,1,0,0,0,27,165.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({y:168},0).to({y:160},5).to({y:336},10,cjs.Ease.get(-1)).to({y:493.3},10,cjs.Ease.get(1)).wait(110).to({y:492},0).wait(1));

	// Слой 6
	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(298,173.3,1,1,0,0,0,27,165);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({y:173.5},0).to({y:155.5},5).to({y:889.3},55,cjs.Ease.get(-1)).to({y:1823.1},70,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-32.6,374,332);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(507.7,42.9,0.636,0.636,0,0,0,64,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(467,10.2,86,69), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(70,78.5,1,1,0,0,0,27,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.5,100,1,1,0,0,0,185.1,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},100).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.4,100.5,1,1,0,0,0,86,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.6,-67,328,372);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(561.7,46.8,1,1,0,0,0,43.7,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.8,scaleX:1.1,scaleY:1.1,x:561.8,y:46.9},9,cjs.Ease.get(-1)).to({regX:43.7,regY:28.9,scaleX:1.21,scaleY:1.21,x:561.7,y:47},10,cjs.Ease.get(1)).to({regX:43.6,scaleX:1.16,scaleY:1.16,x:561.6},10,cjs.Ease.get(-1)).to({regX:43.7,regY:28.8,scaleX:1,scaleY:1,x:561.7,y:46.8},10,cjs.Ease.get(1)).to({x:702.5},10).wait(40).to({x:561.7},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(703.6,64.9,1.345,1.345,0,0,0,507.7,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({regX:507.6,x:563.5},10).to({scaleX:1.47,scaleY:1.47},10,cjs.Ease.get(-1)).to({scaleX:1.59,scaleY:1.59,x:563.6},10,cjs.Ease.get(1)).to({scaleX:1.47,scaleY:1.47,y:65},10,cjs.Ease.get(-1)).to({scaleX:1.35,scaleY:1.35,x:563.5,y:64.9},10,cjs.Ease.get(1)).to({x:701.1},10).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(486.8,150.1,1,1,0,0,0,171.2,170);
	this.instance_2.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// Слой 2
	this.instance_3 = new lib.flag();
	this.instance_3.parent = this;
	this.instance_3.setTransform(489,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// Слой 1
	this.instance_4 = new lib.flag();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19.9,762.8,340.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(175.9,167.5,1,1,0,0,0,87.2,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:172.4},14,cjs.Ease.get(-1)).to({y:177.5},15,cjs.Ease.get(1)).to({y:172.5},15,cjs.Ease.get(-1)).to({y:168.9},7,cjs.Ease.get(1)).to({y:167.5},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328,372);


// stage content:
(lib.columbus = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(76.4,53.2,1,1,0,0,0,32.4,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(324,264.5,1,1,0,0,0,144,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sunduk
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(543,248,1,1,0,0,0,164,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// tip
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94,208,1,1,0,0,0,94,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// text
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(87.3,150.5,1,1,0,0,0,84.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// slot
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320.9,166,1,1,0,0,0,175.5,139);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,-1749.2,765.6,2335.8);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503932937559", id:"bg"},
		{src:"images/BTN.png?1503932937559", id:"BTN"},
		{src:"images/BTN2.png?1503932937559", id:"BTN2"},
		{src:"images/dama.png?1503932937559", id:"dama"},
		{src:"images/flag.png?1503932937559", id:"flag"},
		{src:"images/flash.png?1503932937559", id:"flash"},
		{src:"images/karta.png?1503932937559", id:"karta"},
		{src:"images/king.png?1503932937559", id:"king"},
		{src:"images/logo.png?1503932937559", id:"logo"},
		{src:"images/logo2.png?1503932937559", id:"logo2"},
		{src:"images/s1.jpg?1503932937559", id:"s1"},
		{src:"images/s2.jpg?1503932937559", id:"s2"},
		{src:"images/s3.png?1503932937559", id:"s3"},
		{src:"images/s4.jpg?1503932937559", id:"s4"},
		{src:"images/s5.png?1503932937559", id:"s5"},
		{src:"images/sunduk.png?1503932937559", id:"sunduk"},
		{src:"images/text1.png?1503932937559", id:"text1"},
		{src:"images/text2.png?1503932937559", id:"text2"},
		{src:"images/tip.png?1503932937559", id:"tip"},
		{src:"images/tuz.png?1503932937559", id:"tuz"},
		{src:"images/valet.png?1503932937559", id:"valet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;