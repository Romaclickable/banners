(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,250);


(lib.ch = function() {
	this.initialize(img.ch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,94);


(lib.King = function() {
	this.initialize(img.King);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,189);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,86);


(lib.moneta = function() {
	this.initialize(img.moneta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,40);


(lib.moneta2 = function() {
	this.initialize(img.moneta2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,256);


(lib.monetes = function() {
	this.initialize(img.monetes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,280);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,31);


(lib.ruka1 = function() {
	this.initialize(img.ruka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,37);


(lib.ruka2 = function() {
	this.initialize(img.ruka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.SM = function() {
	this.initialize(img.SM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,314);


(lib.SM2 = function() {
	this.initialize(img.SM2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,434,255);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,48);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,44);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,44);// helper functions:

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


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,92.1,69), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJ0CeQgPgIgHgQQgIgPADgRQABgLAHgNIANgWQgKACgPAIQgRAJgIACQgRAFgSgHQgRgHgJgPQgHgKgBgLIgRAAIh2gCQgpgBgSgMIgEgCIgHAFQgWAPgZgJIAAAAIgUgDIgpgHIgDAAIgiABQgUAAgJgDQgIgDgHgFIgLgBQgSgDgMgCIAAANQgCANgJALQgJAMgNAFQgbALgYgRQgYgRgBgdQgIgCgKAFIgPALQgNAIgRAAQgSAAgNgKIgHgFIgDAEQgMANgUAEQgUADgPgKIgNgJQgFgBgKABIgeAFQgpAIgNAUQgEAEgEAKIgIAPQgIAMgNAHQgNAHgOgBQgOgBgMgIQgLgHgHgKQgJACgJgBQgQgCgNgLQgMgKgFgPQgKABgLgDQgTgGgKgPQgKgOAAgSQABgQAJgNIgNAEQgJAEgQAKQgiAVgKAQIgNAaQgHAMgNAHQgNAHgOAAQgOAAgNgIQgMgHgHgMQgKgTAEgWQAEgTAMgVQAdgtBFgoQAegQASgFQAdgHAWALQAKAFAHAJQAIgGALgHQAUgKAGgCQANgEASABQASABANAFQAQAGAMANQAMANAFAQQAGAXgGAWIAEgCQAkgTAtgHQAegGAfABQAdAAARAJQAPAHAJAOQALgNATgKQAxgaAwALQAYAFAUAQIAFAFIAAgBQAIgNAMgGQAWgMAtAHIBOALQAiABAYACQAVAEAHADQALAFAHAIQALgKAOgCQAIgCAMABIATADQAWACAcAAIBBABQAbAAAMAFQAQAGAKAPQAFAIACAJQAWgLANgEQANgEAcgCQAYgCAPAEQAOADARAKQAbAQAJARQAGAMAAAdQAAAjgIAPIgPAYIgNAXQgIAOgJAHQgMALgSABIgGABQgNAAgMgHg");
	this.shape.setTransform(74.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,148.4,32.9), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APLCgQgagFgMgWQgLgRAFgVQACgIADgHIgEgCIgCADIgBAGQgCASgLALQgTAUghgEQgdgDgTgTIgDgEQgNAEgRgBQgngBgXgaQgIgKgEgLIgFAGQgVATgfgEQgggEgQgaQgIgNgBgPQAAgPAHgMIAGgJIgCgDIgLAHIgGADIABAEQADAMgEAMQgDANgJAJQgJAKgMAEQgUAHgcgIIgEgBIgEAFQgMAOgUAEQgUAEgQgKQgRgJgHgUQgHgTAHgSQAHgQARgKIgBgBIgKAFQgJAJgLAEQgIARgUAIQgTAJgTgFQgUgFgNgRQgNgPgBgVIAAgDIgLgDIgRgBIg2AAIglAGQgVAEgOgFQgPgFgJgNIgCACQgKAOgOAGQgMAEgQAAIgegBQgfgBgrAIQgcAEgMgBQgRgDgOgLQgHAFgIACQgGACgMAAQAHANAAAMQAAAYgUARQgTAPgZgCQgLgBgKgEQgKADgMABQgKAAgVgCQgbgDgOgHQgNgIgHgNIgCgDQgHAHgJAFIgGADQgBAIgDAIQgLAageAGQgYAFgVgLQgZgPgFgZQgDgNADgNQAEgNAIgJQgFACgFABIgGACQgXAIgRgCQgJgBgIgDQAGAOAAAWQABAngTAUQgSATgagDQgZgDgOgWQgKgQAAggQAAgRAEgNIgDgCIgEANQgKATgSAIQgKAFgQAAIgbgBIgQAAQgJAAgHgCIgCgBIgFAIIgKATQACAIgBAKQgCAKgFAJQgIANgNAIQgOAIgQAAQgVAAgfgVQgigWgggiQgKgLgEgHIgCgGIgEgGQgLAOgRAJQgQAJgTABQgSAAgRgIQgRgIgLgOQgLgPgCgTQgDgSAHgRQAHgTAYgXQBBg/A4gKQATgDANACQAVAFASAQQALAKAHAIQAJgVAKgJQAJgKANgFQANgEAOACQAHABAHADIAEAAQARABAMAKQAMAJAGAQQAFAPgDAPIAAACQAWgJAUAJQAQAGAJAQIAFAKQADgIAFgHQANgQAWgEQAWgDARAMIAGAFQACgKAHgKQAJgMANgGQAKgEALAAIAHgBQALgFANABQARABAOAMIAHAGQAOgIAUABQASABAPAHQAdAGAPAPQAQgRAcgMQAegOAigDQAYgCAvABQAaAAAJACQAJADAIAFQAFgEAGgCQAJgDAYgBIA8gFQAYgEATAAQASABAOADQAPACALAFQALAFAJALIABgCQAJgPAOgHQALgGAYgDQAOgCAtgBIAnAAQAgAAAQADQAaAFAOASQAEAFADAGIAKgHIADgBIAKgGQAngSAlAHQATAEAQALQALAJAHALQALgKAQgDQATgEASAGQAYAGAMAPIAGAJQANgMAegHQAjgIAUADQAgAFAQAWIAFAJQAGgGAGgCQAGgDAPgCQA4gFAqAUQAWAKAMAPIAGAKQAMgFAPgDQAfgGAgACQAWABAPAFIAKACQASAFANAKQAPAMAFAOQACAHABANQADAXgGAUQgIAXgQAMQgPALgXADQgNACgKAAIgBADQgFANgKAKQgKAJgOAEQgIADgIAAIgLgBg");
	this.shape.setTransform(112.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,225.4,32.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJSCqQgVgDgPgMQgEgEgDAAQgDgBgFADQgUAKgXgDQgXgDgQgPQgJgIgGgKIgMADQgbAGgVgMIgIgEQgFgBgHAEQgVAKgYgEQgYgFgQgQIgDgCIgJgEQgTgJgLgRQgHgLgDgMQgXAJgWgEQgOgCgEABIgQAFQgTAIgVgFQgOgDgKgHIgDAHQgLAYgYALQgWALgZgFQgZgFgQgRIgIgHQgCgBgKAAIgQgBIgUAFQgJACgIgBIgLAIQgNAJgQACQgQADgPgEIgDgBIgEAAQgOABgNgDQgOgFgGABQgFAAgGADIgLAHQgVANgVABQgWABgUgMQgUgMgKgUQgKgUAEgXQABgKAEgJIgPACIgBAGQgBAUgLAPQgLATgVAJQgVAJgVgDQgWgEgRgPQgRgPgFgVIgCgPIgJALQgOAMgOAFIgDACQgeAPgggOQgfgPgLgfQgIgdAMgZQADgPAJgOQAHgIAIgHQAIgKAMgJQAngdBFgCQAsgBApAIIAQABIALgBIAQgLQASgOAZAAQAYgBATAMQATANAJAXQAJAXgGAWIgDALQAWgGAhAAQAYAAAQAEQAMAEALAGQAMgTATgIQAYgKAWAFIANAEIADAAIANABIAMABIAXgCQAXgCAWAIQARAHANALQAEgMAHgJIAHgIQAEgQAKgMQAOgQAVgHIANgJQAagOAjgBQAjgCAcAKIAKAEQAcAMAPAXQALAQACAUQADAPgDAPQAngHAxAFQAdAEANAGQAOAHAKALQANAJAJAMQAfgOApgCQAsgCAaAPQAfAPAMAiQAMAggLAjQgGATgNAQQgOAPgRAIQgOAFgPAAIgKAAg");
	this.shape.setTransform(68.8,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,137.7,34.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJCEGQgVgMgPgUQgPgUgFgXQgFgUAFgUIgIgHQgQgQgFgTQgDgLABgOQAAgLAEgMQAFgQAMgNIAJgIQgFgKgDgDQgLgKgWgIIghgIQgVgEgMgGQgYgMgOgZIgEgKIgMACQgPABgTgGIgigLQhKgZhhgGQg9gEhxADQhfACgxADQg2ADgaALIgZANQgQAJgKADIgMAEQgJALgOAIQgIAEgPAFIgYAJQgLAFgTANQgTANgLAFIgZAJQgPAGgIAGIgIAIIAGAFQAOANAHATQAHATgDATQgDAUgMAQIgDAFQAHAZgIAYQgGAQgNARQgMARgPAKQgPALgYAGQgkAMgdgCQglgBgZgTQgZgSgHgdQgJgcAOgcQALgXAZgNQAZgMAaAEQAJACAEgBIADgBQgDgJAAgIIAAgNIACgLIAAgBQgXgOgKgaQgIgUADgSIAAgBIgBgRQABgNACgGQADgKAHgLQAMgRARgIIAEgCIAIgGQAGgEAGgDQAMgVAYgRQAQgLAXgKIApgQQAmgNAPgDIAEAAIACgBQAPgGAPgBQADgGAFgFQAlglBOgOQAwgJBXgFQCNgHBaADQB/ADBnAWQA2ALAdASQATALANASQAHAIAEAKIANgCQARgCAlALQA3ARAZAMQAjARAXAZQANAFALAKQAHAIAGAJIAJAKQAPATACAZIAAAJIACAGQAJAXgKAaQgJAZgWAOIgMAHIgCAKQAHAGAGAIQAFAGACABIAIAAQAigCAaAYQAZAZAAAiQAAAZgPAVQgOAWgXAJQgRAGgYAAQg2AAgmgYg");
	this.shape.setTransform(76.3,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,152.6,57.2), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,33.2,32.4), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,34.2,33.3), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,189.4,187.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,189.4,187.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,41,40), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.moneta();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-4.3,0.861,0.861,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.ruka2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.1,-0.1,1,1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-1.5,-4.3,74.6,53.1), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,50,31), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,34,37), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.King();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,159,189), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+DcQlwg0j8hhQkAhhgBhaQgCheEPghQEagjGSA0QGbA1ETBtQEPBqgjBfQgiBakuAYQhUAHhcAAQjeAAkIgmg");
	this.shape.setTransform(94,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,188.1,51.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaChQjOgaibhCQifhEgEhEQgGhGCcgaQBBgKBMAAIAhABQBZACBlAQQDNAfCOBDQCIBBAAA/QAAA+iGAaQhHANhYABQhSgBhigMg");
	this.shape.setTransform(35.2,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-14.7,-9.9,99.9,34.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArtLuQk2k3AAm3QAAm2E2k3QE3k2G2AAQG3AAE3E2QE2E3AAG2QAAG3k2E3Qk3E2m3AAQm2AAk3k2g");
	this.shape.setTransform(106,106);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,212,212), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta();
	this.instance.parent = this;
	this.instance.setTransform(-17.3,-16.9,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-16.9,34.7,33.8);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moneta();
	this.instance.parent = this;
	this.instance.setTransform(-17.3,-16.9,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-16.9,34.7,33.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.4,12.6,1,1,0,0,0,74.2,16.4);
	this.instance_1.alpha = 0.602;
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(-2,-2,152,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-10.8,-13.8,171,57.8), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.3,13,1,1,0,0,0,112.7,16.1);
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(-2,-2,229,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-11.4,-13.1,248,57.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.6,15,1,1,0,0,0,68.9,17);
	this.instance_1.alpha = 0.441;
	this.instance_1.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_1.cache(-2,-2,142,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-10.3,-13,163,61), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.4,18.4,0.946,0.946,0,0,0,76.2,28.6);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_1.cache(-2,-2,157,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-10.6,-23.6,178,94.9), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(311.9,105.8,0.208,0.208,0,0,0,46,34.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({regX:46.1,regY:34.4,scaleX:1,scaleY:1,rotation:157.8,x:311.8,alpha:1},5).to({regX:46,regY:34.5,scaleX:0.21,scaleY:0.21,rotation:0,x:311.9,alpha:0},5).wait(1));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(416.3,69.8,0.208,0.208,0,0,0,46,34.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({regX:46.1,regY:34.4,scaleX:1,scaleY:1,rotation:157.8,x:416.2,alpha:1},5).to({regX:46,regY:34.5,scaleX:0.21,scaleY:0.21,rotation:0,x:416.3,alpha:0},5).to({_off:true},1).wait(10));

	// Слой 2 - копия: 2 - копия
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.8,78.8,0.208,0.208,0,0,0,46,34.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:46.1,regY:34.4,scaleX:1,scaleY:1,rotation:157.8,x:204.7,alpha:1},5).to({regX:46,regY:34.5,scaleX:0.21,scaleY:0.21,rotation:0,x:204.8,alpha:0},5).to({_off:true},1).wait(20));

	// Слой 2 - копия: 2
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(268.7,68.9,0.208,0.208,0,0,0,46,34.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({regX:46.1,regY:34.4,scaleX:1,scaleY:1,rotation:157.8,x:268.6,alpha:1},5).to({regX:46,regY:34.5,scaleX:0.21,scaleY:0.21,rotation:0,x:268.7,alpha:0},5).to({_off:true},1).wait(30));

	// Слой 2 - копия
	this.instance_4 = new lib.Символ36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(400.1,105.8,0.208,0.208,0,0,0,46,34.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regX:46.1,regY:34.4,scaleX:1,scaleY:1,rotation:157.8,x:400,alpha:1},5).to({regX:46,regY:34.5,scaleX:0.21,scaleY:0.21,rotation:0,x:400.1,alpha:0},5).to({_off:true},1).wait(40));

	// Слой 2
	this.instance_5 = new lib.Символ36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(220.1,99.5,0.208,0.208,0,0,0,46,34.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:46.1,regY:34.4,scaleX:1,scaleY:1,rotation:157.8,x:220,alpha:1},4).to({regX:46,regY:34.5,scaleX:0.21,scaleY:0.21,rotation:0,x:220.1,alpha:0},5).to({_off:true},1).wait(50));

	// Слой 1
	this.instance_6 = new lib.monetes();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650,280);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(204.1,26.2,1,1,0,0,0,16.6,16.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:470.4},19,cjs.Ease.get(-0.5)).wait(4));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116.6,26.2,1,1,0,0,0,16.6,16.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({y:470.4},19,cjs.Ease.get(-0.5)).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.6,13.7,1,1,0,0,0,16.6,16.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({y:457.9},19,cjs.Ease.get(-0.5)).to({_off:true},4).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(179.1,26.2,1,1,0,0,0,16.6,16.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:470.4},19,cjs.Ease.get(-0.5)).to({_off:true},18).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79.1,26.2,1,1,0,0,0,16.6,16.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:470.4},19,cjs.Ease.get(-0.5)).to({_off:true},11).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_5 = new lib.Символ22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(141.6,26.2,1,1,0,0,0,16.6,16.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({y:470.4},19,cjs.Ease.get(-0.5)).to({_off:true},16).wait(1));

	// Слой 1 - копия: 2
	this.instance_6 = new lib.Символ22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(54.1,26.2,1,1,0,0,0,16.6,16.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({y:470.4},19,cjs.Ease.get(-0.5)).to({_off:true},1).wait(1));

	// Слой 1 - копия
	this.instance_7 = new lib.Символ22();
	this.instance_7.parent = this;
	this.instance_7.setTransform(204.1,3.7,1,1,0,0,0,16.6,16.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:447.9},19,cjs.Ease.get(-0.5)).to({_off:true},1).wait(11));

	// Слой 1
	this.instance_8 = new lib.Символ22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(16.6,16.2,1,1,0,0,0,16.6,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:460.4},19,cjs.Ease.get(-0.5)).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.2,32.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(17.1,16.6,1,1,0,0,0,17.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-3,-1,44,39), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.6,87.3,1,1,0,0,0,47.6,16.5);
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(-17,-12,104,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-35.7,0,123,109.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.1,286.2,1,1,0,0,0,94,25.8);
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 2)];
	this.instance_1.cache(-2,-2,192,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-65.9,0,233,336.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(106,106,1,1,0,0,0,106,106);
	this.instance.alpha = 0.59;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(180, 180, 1)];
	this.instance.cache(-2,-2,216,216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-90,-90,396,396), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(125,210,1,1,0,0,0,106,106);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.37,scaleY:1.37,y:210.1},24).to({scaleX:1,scaleY:1,y:210},25).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82F3A").s().p("Azcf9MAAAg/5MAm5AAAMAAAA/5g");
	this.shape.setTransform(124.5,204.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,0,396,410);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SM2();
	this.instance.parent = this;
	this.instance.setTransform(-345.1,-202.8,1.59,1.59);

	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.4,27.2,1,1,0,0,0,20.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.1,-202.8,690.3,405.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SM2();
	this.instance.parent = this;
	this.instance.setTransform(-345.1,-202.8,1.59,1.59);

	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.4,27.2,1,1,0,0,0,20.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.1,-202.8,690.3,405.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(345.2,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,690.3,405.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(345.2,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,690.3,405.6), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(345.2,202.8,1,1,0,0,0,345.2,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,690.3,405.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_94 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_95 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_96 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_97 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_98 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_99 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_100 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_101 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_102 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_103 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_104 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_105 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_106 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_107 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_108 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_109 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");
	var mask_graphics_302 = new cjs.Graphics().p("EgZiAhUMAAAhCnMAzFAAAMAAABCng");
	var mask_graphics_303 = new cjs.Graphics().p("A4NfkMAAAg/HMAwaAAAMAAAA/Hg");
	var mask_graphics_304 = new cjs.Graphics().p("A29d9MAAAg75MAt7AAAMAAAA75g");
	var mask_graphics_305 = new cjs.Graphics().p("A1zccMAAAg43MArnAAAMAAAA43g");
	var mask_graphics_306 = new cjs.Graphics().p("A0vbEMAAAg2HMApfAAAMAAAA2Hg");
	var mask_graphics_307 = new cjs.Graphics().p("AzxZzMAAAgzlMAnjAAAMAAAAzlg");
	var mask_graphics_308 = new cjs.Graphics().p("Ay5YqMAAAgxTMAlzAAAMAAAAxTg");
	var mask_graphics_309 = new cjs.Graphics().p("AyHXpMAAAgvRMAkPAAAMAAAAvRg");
	var mask_graphics_310 = new cjs.Graphics().p("AxbWvMAAAgtdMAi3AAAMAAAAtdg");
	var mask_graphics_311 = new cjs.Graphics().p("Aw1V9MAAAgr5MAhrAAAMAAAAr5g");
	var mask_graphics_312 = new cjs.Graphics().p("AwUVSMAAAgqkMAgpAAAMAAAAqkg");
	var mask_graphics_313 = new cjs.Graphics().p("Av6UwMAAAgpfIf1AAMAAAApfg");
	var mask_graphics_314 = new cjs.Graphics().p("AvlUVMAAAgopIfLAAMAAAAopg");
	var mask_graphics_315 = new cjs.Graphics().p("AvWUCMAAAgoDIetAAMAAAAoDg");
	var mask_graphics_316 = new cjs.Graphics().p("AvNT2MAAAgnrIebAAMAAAAnrg");
	var mask_graphics_317 = new cjs.Graphics().p("AvKTyMAAAgnjIeVAAMAAAAnjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-8.9,y:151.8}).wait(94).to({graphics:mask_graphics_94,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_95,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_96,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_97,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_98,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_99,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_100,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_101,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_102,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_103,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_104,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_105,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_106,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_107,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_108,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_109,x:-8.9,y:151.8}).wait(193).to({graphics:mask_graphics_302,x:-17.1,y:155.9}).wait(1).to({graphics:mask_graphics_303,x:-16,y:155.3}).wait(1).to({graphics:mask_graphics_304,x:-15,y:154.8}).wait(1).to({graphics:mask_graphics_305,x:-14.1,y:154.4}).wait(1).to({graphics:mask_graphics_306,x:-13.3,y:154}).wait(1).to({graphics:mask_graphics_307,x:-12.5,y:153.6}).wait(1).to({graphics:mask_graphics_308,x:-11.8,y:153.2}).wait(1).to({graphics:mask_graphics_309,x:-11.2,y:152.9}).wait(1).to({graphics:mask_graphics_310,x:-10.7,y:152.7}).wait(1).to({graphics:mask_graphics_311,x:-10.2,y:152.4}).wait(1).to({graphics:mask_graphics_312,x:-9.8,y:152.2}).wait(1).to({graphics:mask_graphics_313,x:-9.4,y:152.1}).wait(1).to({graphics:mask_graphics_314,x:-9.2,y:151.9}).wait(1).to({graphics:mask_graphics_315,x:-9,y:151.8}).wait(1).to({graphics:mask_graphics_316,x:-8.9,y:151.8}).wait(1).to({graphics:mask_graphics_317,x:-8.9,y:151.8}).wait(1));

	// Слой 8
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-24.3,146,1,1,0,0,0,94.7,94);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.1},9,cjs.Ease.get(-1)).to({x:-11.3},10,cjs.Ease.get(1)).to({x:-17.8},5,cjs.Ease.get(-1)).to({x:-24.3},5,cjs.Ease.get(1)).to({x:-17.8},10,cjs.Ease.get(-1)).to({x:-6.3},10,cjs.Ease.get(1)).to({x:-17.8},5,cjs.Ease.get(-1)).to({x:-24.3},5,cjs.Ease.get(1)).to({x:-17.8},10,cjs.Ease.get(-1)).to({x:-11.3},10,cjs.Ease.get(1)).to({x:-17.8},5,cjs.Ease.get(-1)).to({x:-24.3},5,cjs.Ease.get(1)).wait(5).to({regX:94.6,scaleX:0.63,scaleY:0.63,x:19,y:158.6},7,cjs.Ease.get(-1)).to({regX:94.3,scaleX:0.2,scaleY:0.2,x:68.7,y:172.9,alpha:0},8,cjs.Ease.get(1)).wait(193).to({regX:94.7,scaleX:1.68,scaleY:1.68,x:-43,y:146.2},0).to({scaleX:1,scaleY:1,x:-24.3,y:146,alpha:1},15,cjs.Ease.get(1)).wait(1));

	// Слой 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_94 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_95 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_96 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_97 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_98 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_99 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_100 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_101 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_102 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_103 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_104 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_105 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_106 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_107 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_108 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_109 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");
	var mask_1_graphics_302 = new cjs.Graphics().p("AjkWaMAAAgszIHJAAMAAAAszg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AjYVPMAAAgqdIGxAAMAAAAqdg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AjNUJMAAAgoRIGbAAMAAAAoRg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AjDTJMAAAgmRIGHAAMAAAAmRg");
	var mask_1_graphics_306 = new cjs.Graphics().p("Ai5SNMAAAgkZIFzAAMAAAAkZg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AixRXMAAAgitIFjAAMAAAAitg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AipQmMAAAghLIFTAAMAAAAhLg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AiiP5IAA/yIFFAAIAAfyg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AibPTIAA+lIE4AAIAAelg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AiWOxIAA9hIEtAAIAAdhg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AiSOVIAA8pIElAAIAAcpg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AiON9IAA75IEdAAIAAb5g");
	var mask_1_graphics_314 = new cjs.Graphics().p("AiLNsIAA7XIEXAAIAAbXg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AiJNeIAA67IETAAIAAa7g");
	var mask_1_graphics_316 = new cjs.Graphics().p("AiINXIAA6sIERAAIAAasg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AiHNUIAA6nIEPAAIAAang");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:75.7,y:144}).wait(94).to({graphics:mask_1_graphics_94,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_95,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_96,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_97,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_98,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_99,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_100,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_101,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_102,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_103,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_104,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_105,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_106,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_107,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_108,x:75.7,y:144}).wait(1).to({graphics:mask_1_graphics_109,x:75.7,y:144}).wait(193).to({graphics:mask_1_graphics_302,x:125.3,y:142.7}).wait(1).to({graphics:mask_1_graphics_303,x:118.9,y:142.9}).wait(1).to({graphics:mask_1_graphics_304,x:113,y:143}).wait(1).to({graphics:mask_1_graphics_305,x:107.5,y:143.2}).wait(1).to({graphics:mask_1_graphics_306,x:102.4,y:143.3}).wait(1).to({graphics:mask_1_graphics_307,x:97.8,y:143.4}).wait(1).to({graphics:mask_1_graphics_308,x:93.6,y:143.5}).wait(1).to({graphics:mask_1_graphics_309,x:89.8,y:143.6}).wait(1).to({graphics:mask_1_graphics_310,x:86.6,y:143.7}).wait(1).to({graphics:mask_1_graphics_311,x:83.7,y:143.8}).wait(1).to({graphics:mask_1_graphics_312,x:81.3,y:143.8}).wait(1).to({graphics:mask_1_graphics_313,x:79.3,y:143.9}).wait(1).to({graphics:mask_1_graphics_314,x:77.7,y:143.9}).wait(1).to({graphics:mask_1_graphics_315,x:76.6,y:143.9}).wait(1).to({graphics:mask_1_graphics_316,x:76,y:144}).wait(1).to({graphics:mask_1_graphics_317,x:75.7,y:144}).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.7,146,1,1,0,0,0,94.7,94);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:166.9},9,cjs.Ease.get(-1)).to({x:173.7},10,cjs.Ease.get(1)).to({x:167.2},5,cjs.Ease.get(-1)).to({x:160.7},5,cjs.Ease.get(1)).to({x:167.2},10,cjs.Ease.get(-1)).to({x:178.7},10,cjs.Ease.get(1)).to({x:167.2},5,cjs.Ease.get(-1)).to({x:160.7},5,cjs.Ease.get(1)).to({x:167.2},10,cjs.Ease.get(-1)).to({x:173.7},10,cjs.Ease.get(1)).to({x:167.2},5,cjs.Ease.get(-1)).to({x:160.7},5,cjs.Ease.get(1)).wait(5).to({scaleX:0.63,scaleY:0.63,x:134.8,y:158.6},7,cjs.Ease.get(-1)).to({regX:94.9,scaleX:0.2,scaleY:0.2,x:105.2,y:172.9,alpha:0},8,cjs.Ease.get(1)).wait(193).to({regX:94.7,scaleX:1.68,scaleY:1.68,x:268.4,y:146.2},0).to({scaleX:1,scaleY:1,x:160.7,y:146,alpha:1},15,cjs.Ease.get(1)).wait(1));

	// Слой 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_109 = new cjs.Graphics().p("An8EDIAAoGIP5AAIAAIGg");
	var mask_2_graphics_147 = new cjs.Graphics().p("An8EDIAAoGIP5AAIAAIGg");
	var mask_2_graphics_152 = new cjs.Graphics().p("An8P1IAAoIIP5AAIAAIIg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AoUH7IPzhrIA2IEIvzBrg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AonIMIPjjUIBsH8IvjDUg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AozIhIPHk7ICgHuIvHE6g");
	var mask_2_graphics_156 = new cjs.Graphics().p("Ao6I5IOhmeIDUHaIuhGeg");
	var mask_2_graphics_157 = new cjs.Graphics().p("Ao6JTINxn9IEEHCItxH9g");
	var mask_2_graphics_158 = new cjs.Graphics().p("AozJwIM2pWIExGkIs2JWg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AonKPIL0qoIFbGBIr0Kpg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AoUKvIKorzIGBFaIqoL1g");
	var mask_2_graphics_161 = new cjs.Graphics().p("An8LQIJVs2IGkEwIpVM3g");
	var mask_2_graphics_162 = new cjs.Graphics().p("AneLxIH8txIHBEDIn8Nyg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AnSMKIHauDIHLDxInaOFg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AoVMkIG5uVIHTDgIm4OVg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AqTM9IGWulIHbDOImVOmg");
	var mask_2_graphics_166 = new cjs.Graphics().p("AsRNWIFyu0IHiC8IlxO0g");
	var mask_2_graphics_167 = new cjs.Graphics().p("AuPNvIFOvBIHqCpIlOPCg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AwNOHIEqvMIHwCWIkpPOg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AyKOgIEEvXIH2CDIkEPZg");
	var mask_2_graphics_170 = new cjs.Graphics().p("A0HO4IDfvgIH6BwIjePig");
	var mask_2_graphics_171 = new cjs.Graphics().p("A2EPQIC5voIH/BeIi5Ppg");
	var mask_2_graphics_172 = new cjs.Graphics().p("A4APoICTvuIICBKIiTPvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_2_graphics_109,x:39.9,y:176.6}).wait(38).to({graphics:mask_2_graphics_147,x:39.9,y:176.6}).wait(5).to({graphics:mask_2_graphics_152,x:39.9,y:101.3}).wait(1).to({graphics:mask_2_graphics_153,x:35.1,y:102.3}).wait(1).to({graphics:mask_2_graphics_154,x:30.3,y:103.2}).wait(1).to({graphics:mask_2_graphics_155,x:25.5,y:103.8}).wait(1).to({graphics:mask_2_graphics_156,x:20.7,y:104.3}).wait(1).to({graphics:mask_2_graphics_157,x:15.9,y:104.5}).wait(1).to({graphics:mask_2_graphics_158,x:11.1,y:104.4}).wait(1).to({graphics:mask_2_graphics_159,x:6.3,y:104.1}).wait(1).to({graphics:mask_2_graphics_160,x:1.6,y:103.5}).wait(1).to({graphics:mask_2_graphics_161,x:-3.2,y:102.5}).wait(1).to({graphics:mask_2_graphics_162,x:-8,y:101.3}).wait(1).to({graphics:mask_2_graphics_163,x:-34.7,y:102.1}).wait(1).to({graphics:mask_2_graphics_164,x:-53.4,y:102.8}).wait(1).to({graphics:mask_2_graphics_165,x:-66,y:103.6}).wait(1).to({graphics:mask_2_graphics_166,x:-78.6,y:104.2}).wait(1).to({graphics:mask_2_graphics_167,x:-91.2,y:104.9}).wait(1).to({graphics:mask_2_graphics_168,x:-103.8,y:105.5}).wait(1).to({graphics:mask_2_graphics_169,x:-116.3,y:106.1}).wait(1).to({graphics:mask_2_graphics_170,x:-128.8,y:106.6}).wait(1).to({graphics:mask_2_graphics_171,x:-141.3,y:107.1}).wait(1).to({graphics:mask_2_graphics_172,x:-153.7,y:107.5}).wait(146));

	// Слой 6
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-187.9,171.2,4.796,4.796,0,0,0,21,21.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({scaleX:3.03,scaleY:3.03,x:-75.8,y:173.1},7,cjs.Ease.get(-1)).to({regY:21,scaleX:1,scaleY:1,x:37.7,y:177.9},8,cjs.Ease.get(1)).to({rotation:3.6,x:40.4,y:176.7},10,cjs.Ease.get(-1)).to({rotation:0,x:37.7,y:177.9},10,cjs.Ease.get(1)).to({rotation:3.6,x:40.4,y:176.7},11,cjs.Ease.get(-1)).to({regX:21.1,rotation:7.5,x:43,y:175.5},10,cjs.Ease.get(1)).to({regY:21.1,rotation:6.5,x:44.4,y:175.2},2).to({regX:21,rotation:-37.7,x:-14,y:149.6},10).to({regX:21.1,rotation:-74.7,x:-276.9,y:186},10).to({_off:true},1).wait(145));

	// Слой 5
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-379.6,130,4.796,4.796,0,0,0,25,15.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({regY:15.6,scaleX:3.03,scaleY:3.03,x:-196.7,y:169.1},7,cjs.Ease.get(-1)).to({regY:15.5,scaleX:1,scaleY:1,x:-2.3,y:169.4},8,cjs.Ease.get(1)).to({rotation:-1,x:-2.1,y:169.5},10,cjs.Ease.get(-1)).to({rotation:0,x:-2.3,y:169.4},10,cjs.Ease.get(1)).to({rotation:-1,x:-2.1,y:169.5},11,cjs.Ease.get(-1)).to({regX:24.9,regY:15.6,rotation:-2.2,x:-2.3},10,cjs.Ease.get(1)).wait(2).to({rotation:-16.4,x:-42.8,y:160.7},10).to({rotation:-83.4,x:-289.7,y:231.2},10).to({_off:true},1).wait(145));

	// Слой 4
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-298.1,183.2,4.796,4.796,0,0,0,17,18.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({scaleX:3.03,scaleY:3.03,x:-145.5,y:202.4},7,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,scaleY:1,x:14.7,y:180.4},8,cjs.Ease.get(1)).to({regX:16.9,rotation:-7.3,y:179.9},10,cjs.Ease.get(-1)).to({regX:17,rotation:0,y:180.4},10,cjs.Ease.get(1)).to({regX:16.9,rotation:-7.3,y:179.9},11,cjs.Ease.get(-1)).to({regX:17,regY:18.6,rotation:-15,x:14.8,y:179.3},10,cjs.Ease.get(1)).to({regX:16.9,rotation:-20,y:179.4},2).to({rotation:-34.1,x:-23.8,y:166},10).to({rotation:-101.1,x:-277.4,y:215.8},10).to({_off:true},1).wait(145));

	// Слой 3
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-593,19.8,4.796,4.796,0,0,0,79.5,94.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({scaleX:3.03,scaleY:3.03,x:-331.3,y:99.3},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-46.8,y:146.4},8,cjs.Ease.get(1)).wait(43).to({regX:79.4,rotation:-14.2,x:-91.7,y:149.1},10).to({rotation:-81.2,x:-319.4,y:271.7},10).to({_off:true},1).wait(145));

	// Слой 2
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-542.7,617.2,4.796,4.796,0,0,0,39,47.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({scaleX:3.03,scaleY:3.03,x:-299.6,y:476.1},7,cjs.Ease.get(-1)).to({regY:47,scaleX:1,scaleY:1,x:-36.3,y:270.9},8,cjs.Ease.get(1)).wait(43).to({regX:38.9,rotation:-14.2,x:-51,y:267.3},10).to({rotation:-81.2,x:-194.7,y:280.4},10).to({_off:true},1).wait(145));

	// Слой 7
	this.instance_7 = new lib.SM2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-342,-57,1.59,1.59);

	this.instance_8 = new lib.Символ13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.5,173,1,1,0,0,0,20.5,20);

	this.instance_9 = new lib.Символ16();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3.2,145.8,1,1,0,0,0,345.2,202.8);
	this.instance_9._off = true;

	this.instance_10 = new lib.Символ35();
	this.instance_10.parent = this;
	this.instance_10.setTransform(3.1,145.8,1.656,1.656,0,0,0,345.1,202.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_10.cache(-2,-2,694,410);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_9}]},94).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},38).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},130).to({state:[{t:this.instance_10}]},14).to({state:[{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({regY:202.9,scaleX:0.63,scaleY:0.63,x:35.4,y:159.4},7,cjs.Ease.get(-1)).to({regX:345.1,scaleX:0.21,scaleY:0.21,x:72.2,y:174.7,alpha:0},8,cjs.Ease.get(1)).wait(63).to({_off:true},130).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(302).to({_off:false},0).to({regX:345.2,scaleX:1,scaleY:1,x:3.2,alpha:1},14,cjs.Ease.get(1)).wait(2));

	// Слой 14 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_109 = new cjs.Graphics().p("AgXCuIAAlcIAvAAIAAFcg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AgXCuIAAlcIAvAAIAAFcg");
	var mask_3_graphics_152 = new cjs.Graphics().p("AgXCuIAAlcIAvAAIAAFcg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AgXCuIAAlcIAvAAIAAFcg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AgXCuIAAlcIAvAAIAAFcg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_3_graphics_109,x:87.3,y:173.5}).wait(38).to({graphics:mask_3_graphics_147,x:87.3,y:173.5}).wait(5).to({graphics:mask_3_graphics_152,x:87.3,y:173.5}).wait(10).to({graphics:mask_3_graphics_162,x:87.3,y:173.5}).wait(10).to({graphics:mask_3_graphics_172,x:87.3,y:173.5}).wait(146));

	// Слой 13
	this.instance_11 = new lib.Анимация3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(104.3,172.9);
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация4("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(108.3,174.9);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({_off:false},0).to({x:106.3,y:173.9},19,cjs.Ease.get(-1)).to({_off:true,x:108.3,y:174.9},19,cjs.Ease.get(1)).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(128).to({_off:false},19,cjs.Ease.get(1)).to({x:111.5},5).wait(10).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({_off:true},1).wait(145));

	// Слой 16 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_152 = new cjs.Graphics().p("EgQFhBNUAgaAciAFLAhPIAAFZUgGsAllgkTAZsg");
	var mask_4_graphics_153 = new cjs.Graphics().p("EgPUhBLUAgLAcyAE6AhSIgCFZUgG/AlhgkgAZZg");
	var mask_4_graphics_154 = new cjs.Graphics().p("EgOihBKUAf8AdDAEpAhUIgGFZUgHSAlegktAZHg");
	var mask_4_graphics_155 = new cjs.Graphics().p("EgNxhBIUAftAdUAEYAhWIgIFZUgHlAlagk6AY0g");
	var mask_4_graphics_156 = new cjs.Graphics().p("EgM/hBFUAfeAdjAEHAhZIgLFZUgH5AlWglHAYgg");
	var mask_4_graphics_157 = new cjs.Graphics().p("EgMNhBDUAfOAd0AD2AhbIgOFYUgILAlSglUAYOg");
	var mask_4_graphics_158 = new cjs.Graphics().p("EgLchBAUAfAAeEADkAhdIgRFYUgIeAlOglgAX6g");
	var mask_4_graphics_159 = new cjs.Graphics().p("EgKqhA9UAewAeUADTAheIgTFZUgIyAlJglsAXng");
	var mask_4_graphics_160 = new cjs.Graphics().p("EgJ4hA5UAegAejADCAhgIgWFYUgJFAlFgl4AXTg");
	var mask_4_graphics_161 = new cjs.Graphics().p("EgJGhA2UAeQAezACxAhiIgZFYUgJYAlAgmEAXAg");
	var mask_4_graphics_162 = new cjs.Graphics().p("EgIUhAyUAeAAfDACgAhjIgcFYUgJrAk7gmQAWsg");
	var mask_4_graphics_163 = new cjs.Graphics().p("EADehAAUAd4AkfgBqAiRIhNFXUgP5AjmguXAQUg");
	var mask_4_graphics_164 = new cjs.Graphics().p("EAPXg9wUActAqegF+AifIh/FOUgV5AhPg1VAIHg");
	var mask_4_graphics_165 = new cjs.Graphics().p("EguAA6CMBJIh0JUAaWAw1gKZAiKIiwE+UgaCAcSg2DAAAQjFAAjLgGg");
	var mask_4_graphics_166 = new cjs.Graphics().p("Eg0PAy1MBaxhp8UAWsA3TgO2AhRIjeEnUgVvAREgi+AAAQxjAA05kTg");
	var mask_4_graphics_167 = new cjs.Graphics().p("Eg5sAnqMBq8hdDUARqA9qgTQAfxIkKEJQwtJP2LAAUgbEAAAgjQgNwg");
	var mask_4_graphics_168 = new cjs.Graphics().p("Eg+bAZOMB5PhNsUALPBDogXjAdrIkxDkQrXEGtJAAUgh6AAAgtwgbRg");
	var mask_4_graphics_169 = new cjs.Graphics().p("EhC1AILMCFTg8JUADbBI8gboAa/IlUC5QmBBJmXAAUgnYAABg0Cgr1g");
	var mask_4_graphics_170 = new cjs.Graphics().p("EhHZgK2MCOzgowUgFtBNUgfbAXvIlwCJQg6ABg6AAUgsUAABg1zg+eg");
	var mask_4_graphics_171 = new cjs.Graphics().p("EhKuge+MCVdgT5UgQCBQfgi1AT7ImGBVUgtlgF4gu7hL+g");
	var mask_4_graphics_172 = new cjs.Graphics().p("EhMggyJMCZBACDUgbXBSMgl0APmImTAeUgtAgNMgkjhXHg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_4_graphics_152,x:-45.3,y:178.1}).wait(1).to({graphics:mask_4_graphics_153,x:-45.5,y:176.1}).wait(1).to({graphics:mask_4_graphics_154,x:-45.8,y:174}).wait(1).to({graphics:mask_4_graphics_155,x:-46,y:172}).wait(1).to({graphics:mask_4_graphics_156,x:-46.3,y:169.9}).wait(1).to({graphics:mask_4_graphics_157,x:-46.5,y:167.9}).wait(1).to({graphics:mask_4_graphics_158,x:-46.8,y:165.9}).wait(1).to({graphics:mask_4_graphics_159,x:-47,y:163.8}).wait(1).to({graphics:mask_4_graphics_160,x:-47.3,y:161.8}).wait(1).to({graphics:mask_4_graphics_161,x:-47.5,y:159.8}).wait(1).to({graphics:mask_4_graphics_162,x:-47.6,y:157.8}).wait(1).to({graphics:mask_4_graphics_163,x:-47.4,y:113.1}).wait(1).to({graphics:mask_4_graphics_164,x:-44.4,y:64.2}).wait(1).to({graphics:mask_4_graphics_165,x:-37.8,y:12.1}).wait(1).to({graphics:mask_4_graphics_166,x:-26.8,y:-29.6}).wait(1).to({graphics:mask_4_graphics_167,x:-9.9,y:-56.1}).wait(1).to({graphics:mask_4_graphics_168,x:14.8,y:-70.2}).wait(1).to({graphics:mask_4_graphics_169,x:51.2,y:-73.9}).wait(1).to({graphics:mask_4_graphics_170,x:103.6,y:-69}).wait(1).to({graphics:mask_4_graphics_171,x:163.6,y:-58.6}).wait(1).to({graphics:mask_4_graphics_172,x:229.2,y:-53.1}).wait(146));

	// Слой 15 - копия: 2 - копия: 2 - копия: 2
	this.instance_13 = new lib.Символ18();
	this.instance_13.parent = this;
	this.instance_13.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(156).to({_off:false},0).to({regY:16.7,rotation:5.7,x:-70.2,y:279.6},10).to({x:-132.7,y:329.6},6).to({_off:true},1).wait(145));

	// Слой 15 - копия: 2 - копия: 2 - копия
	this.instance_14 = new lib.Символ18();
	this.instance_14.parent = this;
	this.instance_14.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(154).to({_off:false},0).to({regY:16.7,rotation:5.7,x:-31.2,y:266.6},10).to({x:-156.2,y:291.6},8).to({_off:true},1).wait(145));

	// Слой 15 - копия: 2 - копия: 2 - копия: 2
	this.instance_15 = new lib.Символ18();
	this.instance_15.parent = this;
	this.instance_15.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(158).to({_off:false},0).to({regY:16.7,rotation:5.7,x:-70.2,y:71.6},10).to({x:-132.7,y:21.6},4).to({_off:true},1).wait(145));

	// Слой 15 - копия: 2 - копия: 2
	this.instance_16 = new lib.Символ18();
	this.instance_16.parent = this;
	this.instance_16.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(156).to({_off:false},0).to({regY:16.7,rotation:5.7,x:-31.2,y:104.1},10).to({x:-131.2,y:66.6},6).to({_off:true},1).wait(145));

	// Слой 15 - копия: 2 - копия
	this.instance_17 = new lib.Символ18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(157).to({_off:false},0).to({regY:16.7,rotation:5.7,x:1.3,y:175.6},10).to({x:-161.2},5).to({_off:true},1).wait(145));

	// Слой 15 - копия: 2
	this.instance_18 = new lib.Символ18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(153).to({_off:false},0).to({regY:16.7,rotation:5.7,x:7.8,y:234.1},10).to({x:-179.7,y:259.1},9).to({_off:true},1).wait(145));

	// Слой 15 - копия
	this.instance_19 = new lib.Символ18();
	this.instance_19.parent = this;
	this.instance_19.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(152).to({_off:false},0).to({regY:16.7,rotation:5.7,x:20.8,y:110.6},10).to({x:-169.2,y:-14.4},10).to({_off:true},1).wait(145));

	// Слой 15
	this.instance_20 = new lib.Символ18();
	this.instance_20.parent = this;
	this.instance_20.setTransform(117.1,173.7,0.939,0.939,0,0,0,17.1,16.6);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(155).to({_off:false},0).to({regY:16.7,rotation:5.7,x:59.8,y:169.1},10).to({x:-165.2,y:156.6},7).to({_off:true},1).wait(145));

	// Слой 1
	this.instance_21 = new lib.Символ5();
	this.instance_21.parent = this;
	this.instance_21.setTransform(3.2,65.3,4.796,4.796,0,0,0,72.5,157);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(94).to({_off:false},0).to({scaleX:3.03,scaleY:3.03,x:35.7,y:108.1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:72.5,y:157},8,cjs.Ease.get(1)).wait(43).to({rotation:5.7,x:88.5,y:150.6},10).to({rotation:91.2,x:303.5,y:244.8},10).to({_off:true},1).wait(145));

	// Слой 17
	this.instance_22 = new lib.Символ20();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-78.4,-78.8,1,1,0,0,0,16.6,16.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(172).to({_off:false},0).wait(38).to({alpha:0},0).wait(92).to({scaleX:1.27,scaleY:1.27,x:-108,y:-148.8},0).to({_off:true},1).wait(15));

	// Слой 18
	this.instance_23 = new lib.Символ21();
	this.instance_23.parent = this;
	this.instance_23.setTransform(31,449,1,1,0,0,0,325,140);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(172).to({_off:false},0).to({y:369.5},17,cjs.Ease.get(-1)).to({y:288.9},18,cjs.Ease.get(1)).to({y:300.2},9,cjs.Ease.get(1)).to({y:314.1},11,cjs.Ease.get(-1)).wait(70).to({regX:324.9,scaleX:1.27,scaleY:1.27,x:30.9,y:350.6},5).to({_off:true},1).wait(15));

	// Слой 22
	this.instance_24 = new lib.Символ23();
	this.instance_24.parent = this;
	this.instance_24.setTransform(17.2,-265.4,1,1,0,0,0,76.2,35.6);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(207).to({_off:false},0).to({y:4.6},10).wait(80).to({scaleX:1.27,scaleY:1.27,x:13.5,y:-42.8},5).to({_off:true},1).wait(15));

	// Слой 21
	this.instance_25 = new lib.Символ25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(16.9,-195.7,0.913,0.913,0,0,0,68.4,24.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(207).to({_off:false},0).to({y:75.2},10,cjs.Ease.get(-1)).to({x:17,y:78.8},3).to({x:16.9,y:75.2},3).wait(74).to({regX:68.5,scaleX:1.16,scaleY:1.16,x:13.2,y:46.9},5).to({_off:true},1).wait(15));

	// Слой 20
	this.instance_26 = new lib.Символ27();
	this.instance_26.parent = this;
	this.instance_26.setTransform(17.1,-152.9,0.913,0.913,0,0,0,111,22);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(207).to({_off:false},0).to({y:119.8},13,cjs.Ease.get(-1)).to({regX:110.9,regY:22.1,y:122.5},3).to({regX:111,regY:22,y:119.8},3).wait(71).to({regX:110.9,regY:22.1,scaleX:1.16,scaleY:1.16,x:13.3,y:103.7},5).to({_off:true},1).wait(15));

	// Слой 19
	this.instance_27 = new lib.Символ29();
	this.instance_27.parent = this;
	this.instance_27.setTransform(16.6,-111.3,0.913,0.913,0,0,0,72.4,22);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(207).to({_off:false},0).to({y:162.3},16,cjs.Ease.get(-1)).to({y:165.9},3).to({y:162.3},3).wait(68).to({scaleX:1.16,scaleY:1.16,x:12.7,y:157.6},5).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342,-57,690.3,405.6);


// stage content:
(lib.king_sexslot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(176.5,211,1,1,0,0,0,72.5,157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.6,200.6,1,1,0,0,0,124.5,204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,196.1,690.3,410);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blik.png?1516014276988", id:"blik"},
		{src:"images/ch.png?1516014276988", id:"ch"},
		{src:"images/King.png?1516014276988", id:"King"},
		{src:"images/logo.png?1516014276988", id:"logo"},
		{src:"images/moneta.png?1516014276988", id:"moneta"},
		{src:"images/moneta2.png?1516014276988", id:"moneta2"},
		{src:"images/monetes.png?1516014276988", id:"monetes"},
		{src:"images/plecho.png?1516014276988", id:"plecho"},
		{src:"images/ruka1.png?1516014276988", id:"ruka1"},
		{src:"images/ruka2.png?1516014276988", id:"ruka2"},
		{src:"images/SM.png?1516014276988", id:"SM"},
		{src:"images/SM2.png?1516014276988", id:"SM2"},
		{src:"images/text1.png?1516014276988", id:"text1"},
		{src:"images/text2.png?1516014276988", id:"text2"},
		{src:"images/text3.png?1516014276988", id:"text3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;