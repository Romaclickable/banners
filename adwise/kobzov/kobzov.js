(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,671,400);


(lib.flash = function() {
	this.initialize(img.flash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,227);


(lib.flower = function() {
	this.initialize(img.flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,61);


(lib.jaket = function() {
	this.initialize(img.jaket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,52);


(lib.kanat = function() {
	this.initialize(img.kanat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,684,71);


(lib.koleso = function() {
	this.initialize(img.koleso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,83);


(lib.lev1 = function() {
	this.initialize(img.lev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,61);


(lib.lev2 = function() {
	this.initialize(img.lev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,34);


(lib.lev = function() {
	this.initialize(img.lev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,40);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,107);


(lib.prav1 = function() {
	this.initialize(img.prav1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,67);


(lib.prav = function() {
	this.initialize(img.prav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,52);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,95);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,104);


(lib.ruka_flower = function() {
	this.initialize(img.ruka_flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,154);


(lib.shtory = function() {
	this.initialize(img.shtory);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.tablo = function() {
	this.initialize(img.tablo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,117);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,186);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,48);// helper functions:

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


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,239,227), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,49,0,-49).s().p("EAyoAH+MhltAAAIgKAAIAAv7IAKAAMBltAAAIAoAAIAAP7g");
	this.shape.setTransform(338,306);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,369.4).s().p("Egy2AbRIAAjIMBltAAAIAADIgEgy2AINMAAAgjdMBltAAAMAAAAjdg");
	this.shape_1.setTransform(336.5,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,671,400), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower();
	this.instance.parent = this;
	this.instance.setTransform(75,-2,0.74,0.74);

	this.instance_1 = new lib.flower();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,-2,0.74,0.74);

	this.instance_2 = new lib.flower();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-2,0.74,0.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,-2,121.7,45.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_flower();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,98.6,124.4), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,246.9,36.3), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,57.5,59.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,37.2,54), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.koleso();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,72.6,73.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,72.6,30.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,31.9,35.4), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,59.3,164.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,53.1,59.3), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,33.7,46), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jaket();
	this.instance.parent = this;
	this.instance.setTransform(-2,2,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-2,2,38.1,46), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,25.7,92.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqkBBIgKgBIgEgBIgGgCIgGgCIgFgDIgEgCIgDgCIgEgDIgCgCIgDgDIgCgCIgCgDIgCgCIgCgDIgBgCIgBgDIgCgCIgBgDIgBgCIAAgCIgBgDIgBgCIAAgDIgBgCIAAgDIAAgCIAAgDIgBgCIABgCIAAgCIAAgCIAAgDIABgCIAAgDIABgCIABgDIAAgCIABgDIABgCIACgDIABgCIABgDIACgCIACgCIACgDIACgCIADgDIACgCIAEgDIADgCIAEgDIAFgCIAGgDIAGgBIAEgBIAKAAIAAgBIVKAAIAKABIAEABIAFABIAHADIAFACIADADIAEACIADADIADACIACADIADACIACADIABACIACACIABADIABACIACADIABACIABADIAAACIABADIABACIABADIAAACIABADIAAACIAAACIAAACIAAACIAAADIAAACIgBADIAAACIgBADIgBACIgBADIAAACIgBACIgBADIgCACIgBADIgBACIgCADIgBACIgCADIgDACIgCADIgDACIgDADIgEACIgDACIgFADIgHACIgFACIgEABIgKABI1KAAg");
	this.shape.setTransform(74.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,148.4,13), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBMQgJgDgGgGQgHgGgDgIQgEgJAAgLIAAhBQAAgKAEgKQADgIAHgGQAGgGAJgDQAIgDAJAAQAKAAAIADQAJADAGAGQAHAGADAIQAEAKAAAKIAABBQAAALgEAJQgDAIgHAGQgGAGgJADQgIADgKAAQgJAAgIgDgAgNgvQgFAGAAAKIAABAQAAAJAFAGQAGAFAHAAQAIAAAFgFQAGgGAAgJIAAhAQAAgKgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape.setTransform(4.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,9.5,15.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRBMQgJgDgGgGQgHgGgDgIQgEgJAAgLIAAhBQAAgKAEgKQADgIAHgGQAGgGAJgDQAIgDAJAAQAKAAAIADQAJADAGAGQAHAGADAIQAEAKAAAKIAABBQAAALgEAJQgDAIgHAGQgGAGgJADQgIADgKAAQgJAAgIgDgAgNgvQgFAGAAAKIAABAQAAAJAFAGQAGAFAHAAQAIAAAFgFQAGgGAAgJIAAhAQAAgKgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape.setTransform(4.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,9.5,15.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,8.6).s().p("AgSBGQgXgFgQgQQgQgQgCgYQgDgXANgRQADgEAEgDQAJgKAQgHQAOgHAQgFIAQgEQAMAAALAEIAEADIACABQAOAHAIANQASAZgGAgQgGAYgNAMQgLALgUAHQgNAEgNAAQgJAAgJgCg");
	this.shape.setTransform(70.2,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],2.6,0,0,2.6,0,16).s().p("AheBLQgOgJgIgPQgIgOAAgRQgBgQAIgOQAFgJAHgGQAEgFAGgEQAMgHASgFIACAAIAdgGQAOgDAogOQAigMAVgDIASgBQgHAEgGAFQgLAMgFAQQgEARAEAQQAHAdAgAUQALAGAMAEIgTAFIgPAEIgzAOIgiAIQgfAJgUABIgHABQgZAAgSgLg");
	this.shape_1.setTransform(58.9,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,16.6).s().p("AhaBMQgUgBgOgIQgNgHgJgNQgJgNgBgPQgCgQAGgOQAGgPAMgJQATgRAxgGIBxgOQAegFATACQAcADAQAPQAPAOACAWQADAWgLASQgGAKgJAJQgPANgYAIQgXAIguADIg7AEIgVACIgcAAIgIAAg");
	this.shape_2.setTransform(68.3,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,21.4).s().p("AjCBHQgPgSACgYQABgZAQgPQAQgRArgKIBagYQgEAEgCADQgOASADAYQADAXAQAQQAPAPAYAGQAVAEAXgHQAUgGALgLQAMgMAGgXQAGgigRgYQgJgNgNgHIgCgBQAYgHAQgCIANgBIAUACIAVACQAaAIARAVQASAZgHAZQgGAXgeAPQgUALgkAHQheAUhLAXQgyANgXAAQgrAAgXgbg");
	this.shape_3.setTransform(68.5,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,10.3).s().p("AgeBDQgMgEgLgGQgggUgHgeQgEgPAEgRQAFgQALgMQAGgFAHgEQAdgQAzAMIACABIAIACQAvANAOAaQALAUgGAXQgGAXgTAOQgWAQgkAAQgWAAgSgFg");
	this.shape_4.setTransform(74.6,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],2.5,0,0,2.5,0,40).s().p("AkpBvQgYgOgRgZQgbgsAAg/QAAg4AbgWQARgOAXABQAWAAARAOQAQAMAHAVQAIAVgEAVQASgJAagFQAQgDAegDIB5gLQgJAIgFAJIgJAOIgGAIIgCABQgSAEgLAIQgHADgEAFIgGABQgqAAgVACQgkAEgTAQQgUARABAeQAAAdAUARQAGAGAIAEQgVAJgWAAQgbAAgagQgAEAhCIg7gDIgIgCQAAgJgDgJQBAgJA1gLQAYgFAKAAQAQgCANADIgIAHIgRARQgKAJgKAEQgTAKgeAAIgQAAg");
	this.shape_5.setTransform(57.6,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,39.6).s().p("AlaCPQgIgEgGgGQgUgRgBgdQAAgeAUgRQATgRAkgEQAUgCAqAAIAHgBQgHAHgFAIQgIAPABARQAAAQAIAPQAIAPAOAIQAUAMAegBQAUgBAggJIAigJQgEAGgFAFQgRAQgnAGQg8AKhAABIgKAAQgkAAgVgKgAgEBhIgSAEQgJgCgIgDIAPgEIATgGQARAGAXAAQAkAAAWgRQATgNAGgYQAGgYgLgSQgOgbgvgNIA7ADQApADAYgNQAJgEAKgJIASgRIAIgHIASgTQAZgbAIgFQARgMAUgBQAWgCARAJQASAKAJASQAKATgEAUQgCAOgKAPQgHAJgOAQQg4A6gpAbQg9Aog+gCIgMgBIgVgCIgUgCIgNAAQgJABgYAEIgMACQgLgEgKAAgAi+gMIAJgOQAGgJAJgIQAcgbA5gUQAygQAcAHQAUAEAOAQQAGAHADAIQAEAJAAAJIgCAAQgzgMgdAQIgSABQgVADgiALQgpAOgOAEIgdAFIAFgIg");
	this.shape_6.setTransform(72.1,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,70.4).s().p("An1B9QgpgDgbgFQglgHgcgNQgggQgTgZQgWgdAGgdQAEgRANgOQAOgNARgDQARgEAWAGIAmAOQA0ATBCAEQAvADBJgFQCsgMCrgmICygqQBogVBNgBQAxgBA9AIQAlAEBIAMQAvAIAXALQAoAUAIAhQAGAVgKAVQgKAWgTAKQgSAIgYgBQgRgBgbgGIhggUQg3gKgrgBQhBgChTAPQgfAGhfAWQAJgIAGgKQALgTgDgVQgCgXgPgOQgQgPgcgCQgTgCgeAEIhxAPQgxAGgTAQQgMAKgGAOQgGAPACAPQABAPAJANQAJANANAIQAOAHAUACIAkgBIAVgBQhPAPhFAJQhuAOhkAAQguAAgsgDg");
	this.shape_7.setTransform(70.3,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,140.7,62.9), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-29.4,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-29.4,57.1,58.9);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-29.4,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-29.4,57.1,58.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(119.5,113.5,1,1,0,0,0,119.5,113.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,239,227), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28.5,29.5);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.1,58.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(49.2,62.1,1,1,0,0,0,49.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:61.4},14,cjs.Ease.get(-1)).to({y:59.7},15,cjs.Ease.get(1)).to({y:61.3},15,cjs.Ease.get(-1)).to({y:62.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.6,124.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(28.7,29.7,1,1,0,0,0,28.7,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,59.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(9,50.3,1,1,0,0,0,28.7,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[9,50.3,8.5,48.9,6.7,48,4.4,46.9,-10.2,50.3,-24.8,53.7,-68.4,63.4,-106.5,70.9,-134.4,71.2,-142.1,71.3,-147.6,70.7,-154.8,70.1,-160.6,68.2,-167.2,66.2,-172.5,62.5,-178.2,58.5,-181.6,53.1,-187.6,43.5,-186.6,28,-185.7,17.1,-180.8,12.2,-177.8,9.1,-172.7,7.5,-169,6.3,-163.1,5.8,-129.3,2.7,-89.2,12.1,-60.3,19,-17.7,35.5,-3.6,40.9,3.8,45.1,8,47.4,14,51.6,22.7,57.7,23.9,58.5,69.5,88,143.7,87.3,159.4,87.2,172.3,85.7,187.4,84.1,200.4,80.6,208,78.5,212.9,76,219.4,72.6,223,67.8,228.4,60.6,228.6,49,228.8,37.2,223.9,28.9,219,20.6,208.8,15.5,200.3,11.2,188.7,9.4,174.4,7.1,157.8,8.1,143.9,8.9,127.1,12.2,116.5,14.2,103.3,17.4,96.1,19.1,79.6,23.4,53,30.4,26.3,37.4,23.2,38.2,20.4,40,17.6,41.9,19.1,43.9,19.5,44.3,19.9,44.7]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,20.6,57.5,59.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(74.2,6.5,1,1,0,0,0,74.2,6.5);
	this.instance.filters = [new cjs.BlurFilter(23, 23, 1)];
	this.instance.cache(-2,-2,152,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-12,-12,176,40), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBhIAAgeIhDAAIAAAeIgcAAIAAg4IAMAAQAGgKACgKQACgJACgaIAAgkIBVAAIAABbIAOAAIAAA4gAhPgIQAAAQgCAMQgDAMgEAJIAkAAIAAhBIgbAAgAnTBBQgJgEgGgHQgIgHgDgLQgDgKAAgSQAAgRADgJQADgLAIgHQAGgIAJgEQAKgDALAAQALAAAKADQAJAEAHAIQAHAHADALQADAJAAARQAAASgDAKQgDALgHAHQgHAHgJAEQgKAEgLAAQgLAAgKgEgAnKgVQgEADgCAFIgCANIAAAKIABAPIADAKQADADAEACQAEACAFAAQAHAAAFgDQAEgDACgFQADgHAAgQIgBgLIgCgLQgDgEgDgEQgFgDgHAAQgHABgFADgAAcBCQgHgDgFgFQgGgEgCgHQgDgGAAgJQAAgIADgGQACgHAGgEQAFgFAHgCQAIgBAJAAIAcAAIAAgGQAAgLgFgEQgFgEgMAAQgIAAgFACQgEABgGAHIgSgTQAIgIAHgEIAMgDIAPgBQAMAAAKACQAKAEAGAEQAGAFAEAJQADAHAAALIAABMIgdAAIAAgKQgHAGgFADQgHACgKAAQgKAAgHgCgAAmAVQgFADAAAHQAAAGAFAEQAEADAKABQALgBAFgEQAFgFAAgLIAAgGIgXAAQgIgBgEAEgAjfBCQgIgDgFgFQgFgEgDgHQgDgGAAgJQAAgIADgGQADgHAFgEQAFgFAIgCQAHgBAKAAIAcAAIAAgGQAAgLgGgEQgFgEgMAAQgIAAgEACQgFABgFAHIgTgTQAJgIAHgEIALgDIAPgBQANAAAJACQAKAEAGAEQAHAFADAJQADAHAAALIAABMIgdAAIAAgKQgHAGgFADQgHACgKAAQgJAAgHgCgAjWAVQgEADAAAHQAAAGAEAEQAFADAJABQAMgBAFgEQAFgFAAgLIAAgGIgYAAQgHgBgFAEgAJMBDIAAghIAiAAIAAAhgAHVBDIAAhHIgqBHIgeAAIAAh1IAeAAIAABFIAqhFIAdAAIAAB1gAFPBDIAAhHIgpBHIgeAAIAAh1IAeAAIAABFIAphFIAeAAIAAB1gADKBDIAAgvIgmAAIAAAvIgeAAIAAh1IAeAAIAAAsIAmAAIAAgsIAeAAIAAB1gAktBDIAAhbIglAAIAABbIgeAAIAAh1IBhAAIAAB1gAopBDIAAhbIgmAAIAABbIgeAAIAAh1IBiAAIAAB1gAJMAGIAAggIAiAAIAAAggAGzhAQgHgDgFgDQgFgDgDgHQgEgGAAgKIAWAAQAAAIAFADQADAEAGAAQAHAAAEgEQAEgDAAgIIAWAAQAAAKgDAGQgDAHgGADQgFADgGADQgGABgIAAQgGAAgGgBg");
	this.shape.setTransform(51.4,38.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(128.2,37.1,1,1,0,0,0,4.7,7.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.3,37.2,1,1,0,0,0,4.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},4).to({alpha:1},5).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.2,39,1,1,0,0,0,74.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,20.5,176,41);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(17,35,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.5,89.7,1,1,0,0,0,70.3,31.4);
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(-2,-2,145,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.shtory();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,661.5,378), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(158.1,44.2,0.971,0.971,0,0,0,123.5,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:123.6,scaleX:1.08,scaleY:1.08,rotation:-0.7,x:158.3,y:44},14).to({regX:123.5,scaleX:0.97,scaleY:0.97,rotation:0,x:158.1,y:44.2},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.tablo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.5,88.6);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(179.3,24.9,1,1,0,0,0,17.3,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.5,x:179.4},4,cjs.Ease.get(-1)).to({rotation:15,x:179.3},5,cjs.Ease.get(1)).to({rotation:7.3},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).to({rotation:-7.3,x:179.4},5,cjs.Ease.get(-1)).to({rotation:-15,x:179.3},5,cjs.Ease.get(1)).to({regX:17.4,rotation:-7.3,x:179.4},5,cjs.Ease.get(-1)).to({regX:17.3,rotation:0,x:179.3},5,cjs.Ease.get(1)).wait(1));

	// jaket.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177,98,1,1,0,0,0,19,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// prav.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187,96.2,1,1,0,0,0,9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15,x:187.1},4).to({regX:9.1,rotation:21.2,x:187.2},5).to({scaleX:1,scaleY:1,rotation:18.1,x:187.1},1).to({scaleX:1,scaleY:1,rotation:6.2,x:187.2},4).to({regY:13.4,rotation:-17.8,y:96.3},5).to({regX:9.2,regY:13.5,rotation:-44.5,x:187.3,y:96.4},5).to({regX:9.1,rotation:-53.3},5).to({regY:13.6,rotation:-40.1,y:96.5},5).to({regX:9,regY:13.2,rotation:0,x:187,y:96.2},5).wait(1));

	// prav-1.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(198.3,130.3,1,1,0,0,0,38.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:38.4,regY:8.4,rotation:-15,x:191.9,y:132.6},4).to({rotation:-30,x:191,y:135.8},5).to({regY:8.5,rotation:-39.5,x:198.9,y:134.1},5).to({regY:8.6,rotation:-30.8,x:209.3,y:122.9},5).to({regX:38.5,regY:8.7,rotation:-20.5,x:215.2,y:114.9},5).to({rotation:-14.7,x:214.3,y:106.3},5).to({regX:38.6,rotation:3.4,x:209,y:115.4},5).to({regX:38.3,regY:8.3,rotation:0,x:198.3,y:130.3},5).wait(1));

	// telo.png
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(191.7,56.3,1,1,0,0,0,29.7,82.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// lev.png
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(200.4,88,1,1,0,0,0,6.4,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:7.1,rotation:-15,x:200.5,y:88.1},4).to({rotation:0,x:200.4},5).to({regX:6.5,regY:7.2,rotation:8.9,x:200.5,y:88.2},5).to({rotation:23.9,y:88.3},5).to({rotation:31.4},5).to({regX:6.6,rotation:16.4,x:200.6},5).to({regX:6.7,rotation:4.2,x:200.7,y:88.9},5).to({regX:6.4,regY:7,rotation:0,x:200.4,y:88},5).wait(1));

	// lev-2.png
	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(213.8,24.1,1,1,0,0,0,5.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:7.3,y:24.2},4,cjs.Ease.get(-1)).to({rotation:15,y:24.1},5,cjs.Ease.get(1)).to({regY:8.2,rotation:6.5},5,cjs.Ease.get(-1)).to({regY:8.1,rotation:0},5,cjs.Ease.get(1)).to({rotation:-6.8},5,cjs.Ease.get(-1)).to({regX:5.7,rotation:-15,y:24},5,cjs.Ease.get(1)).to({regX:5.8,rotation:-8.3,x:213.9},5,cjs.Ease.get(-1)).to({rotation:0,x:213.8,y:24.1},5,cjs.Ease.get(1)).wait(1));

	// koleso.png
	this.instance_7 = new lib.Символ18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(196.2,169.7,1,1,0,0,0,36.2,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:360},39).wait(1));

	// lev-1.png
	this.instance_8 = new lib.Символ19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(218.9,117.6,1,1,0,0,0,28.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:29,rotation:15,x:222.6,y:111.3},4).to({rotation:22.5,x:215.9,y:115.9},5).to({regX:29.1,rotation:16.5,x:212.3,y:120.9},5).to({regY:4.7,rotation:11.8,x:202.1,y:136.2},5).to({rotation:-3.2,x:202,y:137.6},5).to({rotation:-18.2,x:206.1,y:130.8},5).to({regX:29.2,rotation:-9,x:217.4,y:121.4},5).to({regX:28.9,regY:4.6,rotation:0,x:218.9,y:117.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156,-26,124.6,232.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(179.3,24.9,1,1,0,0,0,17.3,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.5,x:179.4},4,cjs.Ease.get(-1)).to({rotation:15,x:179.3},5,cjs.Ease.get(1)).to({rotation:7.3},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).to({rotation:-7.3,x:179.4},5,cjs.Ease.get(-1)).to({rotation:-15,x:179.3},5,cjs.Ease.get(1)).to({regX:17.4,rotation:-7.3,x:179.4},5,cjs.Ease.get(-1)).to({regX:17.3,rotation:0,x:179.3},5,cjs.Ease.get(1)).wait(1));

	// jaket.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177,98,1,1,0,0,0,19,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// prav.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187,96.2,1,1,0,0,0,9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:9.1,regY:13.6,rotation:-40.1,x:187.3,y:96.5},5).to({regY:13.5,rotation:-53.3,y:96.4},5).to({regX:9.2,rotation:-44.5},5).to({regX:9.1,regY:13.4,rotation:-17.8,x:187.2,y:96.3},5).to({regY:13.2,rotation:6.2,y:96.2},5).to({scaleX:1,scaleY:1,rotation:18.1,x:187.1},4).to({scaleX:1,scaleY:1,rotation:21.2,x:187.2},1).to({regX:9,rotation:15,x:187.1},5).to({rotation:0,x:187},4).wait(1));

	// prav-1.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(198.3,130.3,1,1,0,0,0,38.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:38.6,regY:8.7,rotation:3.4,x:209,y:115.4},5).to({regX:38.5,rotation:-14.7,x:214.3,y:106.3},5).to({rotation:-20.5,x:215.2,y:114.9},5).to({regX:38.4,regY:8.6,rotation:-30.8,x:209.3,y:122.9},5).to({regY:8.5,rotation:-39.5,x:198.9,y:134.1},5).to({regY:8.4,rotation:-30,x:191,y:135.8},5).to({rotation:-15,x:191.9,y:132.6},5).to({regX:38.3,regY:8.3,rotation:0,x:198.3,y:130.3},4).wait(1));

	// telo.png
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(191.7,56.3,1,1,0,0,0,29.7,82.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// lev.png
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(200.4,88,1,1,0,0,0,6.4,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:6.7,regY:7.2,rotation:4.2,x:200.7,y:88.9},5).to({regX:6.6,rotation:16.4,x:200.6,y:88.3},5).to({regX:6.5,rotation:31.4,x:200.5},5).to({rotation:23.9},5).to({rotation:8.9,y:88.2},5).to({regX:6.4,regY:7.1,rotation:0,x:200.4,y:88.1},5).to({rotation:-15,x:200.5},5).to({regY:7,rotation:0,x:200.4,y:88},4).wait(1));

	// lev-2.png
	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(213.8,24.1,1,1,0,0,0,5.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:7.3,y:24.2},4,cjs.Ease.get(-1)).to({rotation:15,y:24.1},5,cjs.Ease.get(1)).to({regY:8.2,rotation:6.5},5,cjs.Ease.get(-1)).to({regY:8.1,rotation:0},5,cjs.Ease.get(1)).to({rotation:-6.8},5,cjs.Ease.get(-1)).to({regX:5.7,rotation:-15,y:24},5,cjs.Ease.get(1)).to({regX:5.8,rotation:-8.3,x:213.9},5,cjs.Ease.get(-1)).to({rotation:0,x:213.8,y:24.1},5,cjs.Ease.get(1)).wait(1));

	// koleso.png
	this.instance_7 = new lib.Символ18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(196.2,169.7,1,1,0,0,0,36.2,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:360},39).wait(1));

	// lev-1.png
	this.instance_8 = new lib.Символ19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(218.9,117.6,1,1,0,0,0,28.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:29.2,regY:4.7,rotation:-9,x:217.4,y:121.4},5).to({regX:29.1,rotation:-18.2,x:206.1,y:130.8},5).to({rotation:-3.2,x:202,y:137.6},5).to({rotation:11.8,x:202.1,y:136.2},5).to({regY:4.6,rotation:16.5,x:212.3,y:120.9},5).to({regX:29,rotation:22.5,x:215.9,y:115.9},5).to({rotation:15,x:222.6,y:111.3},5).to({regX:28.9,rotation:0,x:218.9,y:117.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156,-26,124.6,232.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 - копия: 2 - копия
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(226.2,70.7,0.682,0.682,0,0,0,119.5,113.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({regY:113.4,rotation:88.9,x:226.4,alpha:1},9).to({alpha:0},5).wait(1));

	// Слой 5 - копия: 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(418.1,74.6,0.682,0.682,0,0,0,119.5,113.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({regY:113.4,rotation:88.9,x:418.3,alpha:1},9).to({alpha:0},5).to({_off:true},1).wait(20));

	// Слой 5 - копия
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(323.5,72.3,0.816,0.816,0,0,0,119.5,113.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({rotation:88.9,x:323.6,alpha:1},9).to({alpha:0},5).to({_off:true},1).wait(40));

	// Слой 5
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(276.1,69.9,0.816,0.816,0,0,0,119.5,113.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:88.9,x:276.2,alpha:1},9).to({alpha:0},5).to({_off:true},1).wait(59));

	// Слой 2
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(335.5,200,1,1,0,0,0,335.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.8,671,422.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-108.9,203.7,0.938,0.938,0,0,0,191.2,206.7);

	this.instance_1 = new lib.Символ2копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(411.6,204.2,0.938,0.938,0,0,0,191.2,206.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:206.8,guide:{path:[-108.8,203.8,20.3,226,149.6,226.3]}},39,cjs.Ease.get(-1)).to({regY:206.7,guide:{path:[149.7,226.3,280.5,226.5,411.7,204.3]}},40,cjs.Ease.get(1)).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},1).to({regX:191.3,regY:206.8,guide:{path:[411.7,204.3,284.4,225.9,157.5,226.3]}},39,cjs.Ease.get(-1)).to({regX:191.2,regY:206.7,guide:{path:[157.4,226.3,24.2,226.7,-108.8,203.8]}},40,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.kanat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-196.9,169.4,1,1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.9,-14.6,685.9,255);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(358.7,204.7,1.077,1.077,0,0,0,335.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:314.6},100).to({x:358.7},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-35.3,722.9,455.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(37.5,29.7,1,1,0,0,0,28.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[37.5,29.7,33.2,31.2,31.6,31.6,30,32.1,20,33.7,9.9,35.3,-25.7,42.6,-57,49,-75.5,49.5,-88.9,50,-97.5,47,-103,45.1,-107.2,41.7,-111.9,38.1,-114.2,33.3,-116.1,29.2,-116.7,23.8,-117.1,19.7,-116.7,13.8,-115.9,1.5,-112.7,-5.5,-108.6,-14.7,-99.2,-20.9,-90.6,-26.7,-79.8,-28.4,-70.3,-30,-59,-28.7,-50.1,-27.6,-38.4,-24.5,-8.5,-16.6,19.2,-2.2,29.6,3.1,36.2,8.2,39.6,10.7,44.1,14.8,46.7,17.1,51.8,21.7,74.3,41.6,99,49.1,112.5,53.2,126.2,53.4,140.4,53.5,153.2,49.4,163.8,45.9,170.1,40.4,175.7,35.6,180.6,26.8,185.3,18.2,186.1,11.7,186.5,7.4,185.6,3.6,184.6,-0.6,182,-3.6,178,-8.4,170.3,-10.1,164.8,-11.3,155.9,-11.1,145.9,-10.9,139.8,-10.3,130.9,-9.5,123.9,-7.4,118.5,-5.8,111.4,-2.5,103.3,1.4,99.2,3.3,79.9,12.6,67.8,16.6,57.7,20,53.9,20.6]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,0.3,57.1,58.9);


(lib.Символ29 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(19.8,-20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,59.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(0);
	}
	this.frame_4 = function() {
		this.stop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.kursor1 = new lib.Символ25();
	this.kursor1.parent = this;
	this.kursor1.setTransform(49.2,62.1,1,1,0,0,0,49.2,62.1);
	this.kursor1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.kursor1).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.6,124.4);


(lib.Символ27 = function(mode,startPosition,loop) {
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
	this.kursor2 = new lib.Символ25();
	this.kursor2.parent = this;
	this.kursor2.setTransform(49.2,62.1,1,1,0,0,0,49.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.6,124.4);


(lib.Символ32 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(19.5,29.2,1,1,0,0,0,28.5,29.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.1,58.9);


// stage content:
(lib.kobzov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		} 
		
		stage.canvas.style.cursor = "none";
		this.kursor1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor1.x = stage.mouseX/window.devicePixelRatio;
			
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
		    
			this.kursor1.gotoAndPlay(1);
			this.kursor2.gotoAndPlay(1);
			this.pricel.gotoAndPlay(1);
			this.pricel2.gotoAndPlay(1);
			
		    
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		   
			this.kursor1.gotoAndPlay(5);
			this.kursor2.gotoAndPlay(5);
			this.pricel.gotoAndPlay(5);
			this.pricel2.gotoAndPlay(5);
			
		  
		}
		
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel2.x = stage.mouseX/window.devicePixelRatio;
			this.pricel2.y = stage.mouseY/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(111.7,271.9,1,1,0,0,0,89.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kursor2
	this.kursor2 = new lib.Символ27();
	this.kursor2.parent = this;
	this.kursor2.setTransform(396.2,251.1,1,1,0,0,0,49.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// kursor
	this.kursor1 = new lib.Символ28();
	this.kursor1.parent = this;
	this.kursor1.setTransform(396.2,251.1,1,1,0,0,0,49.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.kursor1).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ32();
	this.pricel2.parent = this;
	this.pricel2.setTransform(323,155.4,1,1,0,0,0,28.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel
	this.pricel = new lib.Символ29();
	this.pricel.parent = this;
	this.pricel.setTransform(323,145,1,1,0,0,0,28.7,19.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// tablo
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(495.8,37.3,1,1,0,0,0,158.2,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// flower
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(535.3,282.6,1,1,0,0,0,23.3,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shtory
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(323.8,160,1,1,0,0,0,330.8,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tip
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(257.3,169.9,1,1,0,0,0,86.3,109);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg
	this.instance_5 = new lib.Символ34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320.5,150,1,1,0,0,0,335.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294.1,67.2,731.1,455.5);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1509118077631", id:"bg"},
		{src:"images/flash.png?1509118077631", id:"flash"},
		{src:"images/flower.png?1509118077631", id:"flower"},
		{src:"images/jaket.png?1509118077631", id:"jaket"},
		{src:"images/kanat.png?1509118077631", id:"kanat"},
		{src:"images/koleso.png?1509118077631", id:"koleso"},
		{src:"images/lev1.png?1509118077631", id:"lev1"},
		{src:"images/lev2.png?1509118077631", id:"lev2"},
		{src:"images/lev.png?1509118077631", id:"lev"},
		{src:"images/logo.png?1509118077631", id:"logo"},
		{src:"images/prav1.png?1509118077631", id:"prav1"},
		{src:"images/prav.png?1509118077631", id:"prav"},
		{src:"images/pricel.png?1509118077631", id:"pricel"},
		{src:"images/ruka.png?1509118077631", id:"ruka"},
		{src:"images/ruka_flower.png?1509118077631", id:"ruka_flower"},
		{src:"images/shtory.png?1509118077631", id:"shtory"},
		{src:"images/tablo.png?1509118077631", id:"tablo"},
		{src:"images/telo.png?1509118077631", id:"telo"},
		{src:"images/text2.png?1509118077631", id:"text2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;