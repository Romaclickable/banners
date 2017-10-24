(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,400);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,75);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,75);


(lib.drak = function() {
	this.initialize(img.drak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,529,320);


(lib.for_text = function() {
	this.initialize(img.for_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,155);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,112);


(lib.luch = function() {
	this.initialize(img.luch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,18);


(lib.telka = function() {
	this.initialize(img.telka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,288);


(lib.telka2 = function() {
	this.initialize(img.telka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,461,259);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,49);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,45);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,52);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,40);// helper functions:

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


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF6600","rgba(255,204,0,0.698)","rgba(255,255,51,0)"],[0.09,0.639,1],0,0,0,0,0,29.1).s().p("AjJDKQhThUAAh2QAAh1BThUQBUhTB1AAQB3AABTBTQBTBUAAB1QAAB2hTBUQhTBTh3AAQh1AAhUhTg");
	this.shape.setTransform(28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,57.1,57.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CC33FF","rgba(102,0,255,0.8)","rgba(102,0,255,0)"],[0,0.537,1],0,0,0,0,0,34.5).s().p("AjeDvQhdhiAAiNQAAiLBdhjQBchjCCAAQCDAABcBjQBdBjAACLQAACNhdBiQhcBjiDAAQiCAAhchjg");
	this.shape.setTransform(31.6,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,63.2,67.6), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,461,259), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,51,0)","#FFCC33","rgba(255,255,51,0)"],[0.004,0.502,1],-32.7,0,32.8,0).s().p("AlHKJIAA0RIKPAAIAAURg");
	this.shape.setTransform(32.8,64.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,65.6,129.9), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,695.7,371), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBrIAAjVIA1AAIAABMIAgAAQAQAAAOAFQANAFAJAKQAKAJAFAMQAFAMAAAPQAAAPgFANQgFAMgKAJQgKAKgNAFQgNAFgQAAgAgZA8IAdAAQAJAAAHgGQAGgHAAgJQAAgJgGgGQgHgGgJAAIgdAAg");
	this.shape.setTransform(105.6,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBrIAAimIg1AAIAAgvICdAAIAAAvIg1AAIAACmg");
	this.shape_1.setTransform(86.8,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBrIgKggIhBAAIgKAgIg3AAIBOjVIAnAAIBODVgAATAfIgRg4IgTA4IAkAAg");
	this.shape_2.setTransform(68.3,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhOBrIAAjVIBUAAQAQAAANAFQANAFAKAKQAKAJAFAMQAGANAAAPQAAAPgGAMQgFAMgKAJQgJAJgOAFQgNAGgQAAIgfAAIAABMgAgZgQIAdAAQAJAAAHgGQAGgGAAgJQAAgJgGgHQgHgGgJAAIgdAAg");
	this.shape_3.setTransform(49.7,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBrIAAjVICJAAIAAAvIhUAAIAACmg");
	this.shape_4.setTransform(32,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBrIAAh0IhEB0IguAAIAAjVIA1AAIAABzIBEhzIAuAAIAADVg");
	this.shape_5.setTransform(12.5,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AhOBrIAAjVIA1AAIAABMIAgAAQAQAAAOAFQANAFAJAKQAKAJAFAMQAFAMAAAPQAAAPgFANQgFAMgKAJQgKAKgNAFQgNAFgQAAgAgZA8IAdAAQAJAAAHgGQAGgHAAgJQAAgJgGgGQgHgGgJAAIgdAAg");
	this.shape_6.setTransform(105.6,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgZBrIAAimIg1AAIAAgvICdAAIAAAvIg1AAIAACmg");
	this.shape_7.setTransform(86.8,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AArBrIgKggIhBAAIgKAgIg3AAIBOjVIAnAAIBODVgAATAfIgRg4IgTA4IAkAAg");
	this.shape_8.setTransform(68.3,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AhOBrIAAjVIBUAAQAQAAANAFQANAFAKAKQAKAJAFAMQAGANAAAPQAAAPgGAMQgFAMgKAJQgJAJgOAFQgNAGgQAAIgfAAIAABMgAgZgQIAdAAQAJAAAHgGQAGgGAAgJQAAgJgGgHQgHgGgJAAIgdAAg");
	this.shape_9.setTransform(49.7,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AhEBrIAAjVICJAAIAAAvIhUAAIAACmg");
	this.shape_10.setTransform(32,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAfBrIAAh0IhEB0IguAAIAAjVIA1AAIAABzIBEhzIAuAAIAADVg");
	this.shape_11.setTransform(12.5,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,116.6,43.4), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text4();
	this.instance.parent = this;
	this.instance.setTransform(0,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,23,342,40), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,17,289,52), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFCC","#FFFF66"],[0,1],0,0,0,0,0,167).s().p("AySMKQnklCAAnIQAAnHHklCQHllDKtAAQKuAAHkFDQHlFCAAHHQAAHInlFCQnkFDquAAQqtAAnllDg");
	this.shape.setTransform(165.5,110.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,331.1,220.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.luch();
	this.instance.parent = this;
	this.instance.setTransform(0,155);

	this.instance_1 = new lib.luch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,791,173), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,345,45), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,347,49), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(116.9,129.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,233.8,259.6), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.358,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,1018.5,155), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(170.8,111.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,341.6,222.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,204,0,0)","#FFCC00","rgba(255,204,0,0)"],[0,0.471,1],-15,0,15,0).s().p("AiVFxIAArhIErAAIAALhg");
	this.shape.setTransform(15,36.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,30.1,73.7), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,106.2,71.2), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF3300","#FF9900"],[0,1],0,0,0,0,0,4.6).s().p("AgCAcQgPgBgJgIQgIgIAAgLQAAgLAIgIQAJgIALAAQAKAAAIAIQAIAIAKANQAKAOgOAGQgMAGgNAAIgDAAg");
	this.shape.setTransform(3.5,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF3300","#FF9900"],[0,1],0,0,0,0,0,2.1).s().p("AgKAMQgIgBADgHQACgHAGgEQAGgFAEgBQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgNgCg");
	this.shape_1.setTransform(41.9,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,43.6,6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnUarQgmgCg5gKQhegQiLggIjog3QkXg+i9AEQiPAJhHgBQh8AAhRgnQhegsg/hgQhDhlANhcQAEgiASgnQAKgYAZgsQAcgwAPgYQAagmAbgZQAagWALgMQATgVACgVQACgSgKgVQgHgOgQgVQheh9gwg7QhShjhMhGQhshjiBhJQhagyhfgjIABmwQB0AnBRAgQCBAzBjA6QDGBzC/DLQCGCQC5D8QAGhLAuhEQAlg2A3gmIgEgGQgUgNgRgTQgbgegehCQghhJgTgbQgJgNgSgVIgcgiQgMgQgbgxQgXgpgTgWQgNgOgdgZQgegZgNgPIgHgIQgNgEgQgEIhLgQQhegYglgzQgagkgIhJQgKhegIgZQgJgdgUgfQgNgVgagjIgjguQgVgZgTgRQgNgLgkgaQgggXgQgRIgCgCIgHgDQhRgih/hmQhPhAg5gnQgBiGAEhSQAHh4AAg9IgBhDQCfBKCNBpIBeBHQA4AoAuAUQApATBKATQBXAXAdAKQBGAZBGAvQBIAjA+A1QBDA5AwBHQgCg1ABgpQADhGANg1QgDgMgBgMQgEgrAPgqQAMgjAXgdQACgjADgYQAKhVAag+QA7iICThLQCLhHCeAKQEEAREfDjQCABlBIBgQBZB4AiCWQAjCVgcCTQA5gEA4gsQAqghAwg+QA7hMAYgYQAzg0A1gSQA2gSA8APQA6AOAsAnQAOhXBOhNQA3g2Bpg/IEWioQCchkBoheQBFg/AQgMQAzgnAwgMQAvgNAyAMQAqAKAhAZQAigXAkgVIN5AAIADAWIgRAIQgKAGgQAPQgRAPgJAFIgZAMQgQAHgIAGQgGAEgGAGQhUAdhAAZQi1BFiMBNQleC+ivEQQhrCmgrDBIgVBsQgNA/gRAqQgXA3gjAnQgoArgyAPQglALhXgEQhRgDgoAQQg+Aag2BlIgtBQQgbAugcAaQgjAfgtAPQguAOgugHQgugHgngcQgogcgUgqQg+h6B0i+QAthIA0g6QgtANgrAAIhBgFQgngDgZAFQgaAGgcARQgRAKggAZQg8AtgnAWQg5Ahg1AJQhHANhXgZQg8gShcgtQhEgigkgaQg2gogYgvQghhEAUiGQANhVACgUQAFg8gKgsQgRhPhGhIQgtgvhghEQhRg4gtgYQhKgnhCgGQgXgCgRADQAQAYAJAcQANArgGAuQgHAugZAmQgOAVgTARQgJAkgVAeIgKANIgFFbQgCBxgSBCQgaBhhBAsQgSAMgUAJQAxA6AhAzQBaCIAQCGQAIBBgLA1QBjADBgAWQB1AcBqA2QAkATBFApQBGAqAkASQAdAPCsBIQB8A0BEAzQBSA+A3BZQA3BaARBlQAMBDgKA6QgLBDglAtQgiAqg0ATQg0ATgzgKQg1gKgpgkQgqgkgRgzQgFgOgLg7QgJgtgOgYQgWglgwgaQgagOhBgXQh/gthpg7Ih1hFQhGgpgygWQiLg7huAeQARAPATAUQBNBRAkBFIAKAXIAQAQQBBA0BWAzQAUAMC9BmQB/BFBMA4QBiBIAmBHQAZAuAEAyQAEA1gWArQgVAogrAcQgnAZgyAKQgeAFgkAAIgcAAgA3/P8Qg1BAgMAiIERAKIgjgpQgkghgUggQgLgQgHgSQgVgggTgjQgKAogxA7gAPOscQgSAUgVAiQgXAmgNATQgfAwglArQAqgPAsgGIAbgEQAPgEAKgHQANgJAIgSQAFgMAFgXQAXhaAZhNQgyAkgYAbg");
	this.shape.setTransform(266.9,170.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,533.8,341.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,626.2).s().p("Eg1GAa4MAAAg1vMBqNAAAMAAAA1vg");
	this.shape.setTransform(339.9,172);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,679.8,344), null);


(lib.shape6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC00","rgba(255,102,0,0)"],[0,1],0,0,0,0,0,7.8).s().p("AgyAUQgVgJAAgLQAAgKAVgJQAWgHAcgBQAeABAVAHQAVAJAAAKQAAALgVAJQgVAHgeABQgcgBgWgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2.7,14.4,5.5);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,57.1,57.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(31.6,33.8,1,1,0,0,0,31.6,33.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,63.2,67.6), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(32.9,65.1,1,1,15,0,0,32.8,65);
	this.instance.alpha = 0.602;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-15.6,-6.2,96.9,142.4), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(109.2,31,1,1,0,0,0,58.2,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:32},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.btn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.84,0.84);

	this.instance_2 = new lib.btn2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.1,63);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuOE4IiklCICdktIcnAAICiE3IibE4g");
	var mask_graphics_49 = new cjs.Graphics().p("AuOE4IiklCICdktIcnAAICiE3IibE4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:110.5,y:66.6}).wait(49).to({graphics:mask_graphics_49,x:110.5,y:66.6}).wait(31));

	// Слой 5
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-69.8,68.2,1,1,0,0,0,32.8,64.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:111.4},24,cjs.Ease.get(-1)).to({x:302.2},25,cjs.Ease.get(1)).wait(31));

	// btn1.png
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.5,66.5,1,1,0,0,0,107.5,31.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,35,215.1,64);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(89.7,141.2,1,1,0,0,0,28.5,28.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.23},11,cjs.Ease.get(-1)).to({alpha:0.5},13,cjs.Ease.get(1)).to({alpha:0.262},12,cjs.Ease.get(-1)).to({alpha:0},13,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.telka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.4,0.945,0.945);

	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.8,129.8,1,1,0,0,0,116.9,129.8);
	this.instance_2.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_2.cache(-2,-2,238,264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,311.9,281.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(165.5,110,1,1,0,0,0,165.5,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,331.1,220.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(165.5,110,1,1,0,0,0,165.5,110);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,331.1,220.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(156,135.5,1,1,0,0,0,156,136.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:134.3},19,cjs.Ease.get(-1)).to({y:133},20,cjs.Ease.get(1)).to({y:134.2},20,cjs.Ease.get(-1)).to({y:135.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.3,311.9,281.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(170.8,111.4,1,1,0,0,0,170.8,111.4);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,346,227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-5,-5,355,236), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(352.9,174.6,1.038,1.038,0,0,0,347.8,185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:313.9},149).to({x:352.9},150).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-17.9,721.9,385);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(15,36.9,1,1,0,0,0,15,36.9);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,30.1,73.7), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYFOIgEgIIgDgHQgEgJgDgUIAAgFIAAgBIgMgJQgMgMgCgRQgCgQAHgQQADgFADAAIADABIgCgSIABgGIAAgBIgCgBIAAgEIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgLgCgEgEIgFgEIgBAAQgBgGgBgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgBAFIAAAEIgMgGIgEgIIAAgBIAAAAQAFgQgKgOIgBgDIAAgDIgEgLIgCgEQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIABASIgBABQAAADADAEIADAGQACAEgBAGIgBABIgFAAIgDABQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAIAAABQgCACgGAAIgLAAQgFABgCgCIgCgBIAAABQgCADgFAAQgHAAgOgCIgEgBQgBgCAAgDIAAgIIABgEIAAgCIgBgCIgMgUIgBAAIAAgBIgBgCIgCgDIgBgBIAAAGIAAASQACAKAFAGIAEAFQACADgCADQgBABgFABIgaAAIgMADIgKABIgEABIgDABIgBAAQgFADgEAAQgDAAgCgCQgDgDACgDIABgBIADgDIATgNIAGgFIAEgEIADgFIAFgLIACgCIABgPIgBgeQgBgDACgCQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIAKgBIACgDIAEgCIgBgCIABAAIgDgKIg1AAQgJABgDgDQgEgCAAgGQABgGAEgCQADgCAKgBIASgDQANgDADgIIAAgFIgBg6IAAgDIgDgDIgEgCQgEgCAAgFIgDgDQgCgFADgCIAFgBIAPAAQAEg+ARguQAYg/A6gdQAcASAFAUIAAgCQAcgJAcgCIAAgEIgHgDQgFgDgEgFIgDgHIgCgEIAAgBIgBgHIAAgFIAAgBIADgIQACgKAKgGIADgCIABAAIABgDIACgCIAAAAIACgCIABAAIAAgBIABAAIABAAIABAAIABABIABAAIABABIAAABIAAAAIAAABIABAAIAAADIAHACQALAGACAOIAAADQAEAJgGAKIgBAEQgFANgMACIAAAAIAAADIADAAQAhAAAZAQQAGAEADAEQABgUAtglQAnAfAgA+QAaAxABBIIAGACIAGADIAGAEQAGAIADALIACAVQABAbgIAOQgCAEgGAHQgFAFgJAGIgHAFIgBATIAUgBIASABIAFAAIACABIABADQABAEgBAEIgBADIgCABIgCABQgCABgHgCQgHgDgHAEIABAZIgBAHQgCAEgEgBIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgEIgGgJIgCgBIgFgCIgDgHIgBgCIgBABIgEAOIgFAKIgGANIgBABIAAABIgBADQgCAEgFAFQgLAKgBAHQAAABgBAAQgBAAAAAAQgBAAAAgBQgBAAgBAAIgBAAIgGAAIgIACIgBAAQgFgBgCgCIgEgDQgDgCgDABIgCADIgDAEIgEABIgYgCIgGAAQgGgEgCABIgCACIgBAAQgEABAAACQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQABACACACIACABIAAAAIAPAIIgCABIAEADIABACIADAHQAEAIAAALQACAOgDAQIgDAQQgGASgPAMQgPAMgSAFIgIAAQgJAAgEAEIgBAGIgFAOIgIAMIgDAFIgCABQgDAAgCgDgAANDHIgLAoIgCAYIACgBQAMgCAGgCQAJgFAEgIIACgHQACgIgBgPIgCgJQgEgLgKgDIgDgBIgEAAgAguDdQgCABgBADIgBAFIABAMQABAEADACQACABAEgBQACgDAAgDIgBgDIgBgGIgBgIQgBgEgDAAIgCAAgABrBxQgEAAgBADIgBADIAAAQQAAABAAAAQAAABAAABQABAAAAABQAAAAAAAAIABACIAHgCIABAAIABgBIAAgFIgBgRQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgBAAgAifB5IAGAMIAAACIABACIABADIAAgBQAAgCADgDQAAAAABgBQAAgBAAAAQABgBAAAAQgBgBAAAAIAAgBIgDAAIAAAAQAEgBAAgFIACg1QAAgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEACIgSALIgCACIgDADQgBAEACAEIAPAYIADAJIgEgFIADAFgABlA4QgBACABAFIAAAFIAAAJIABAFQABADADAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIABgEIAAgRIgBgFIgEgCIAIgBIAAAAIgPAAIAAABIAAABIAFAAgAjGA8IAAAPIAEgEIABgBIgFgMgADSgRIAAAAIAAACIABgBIAAgCIgBAAIAAABgAHDD4IgCgEQgPhCAEhDIgBgCIgDgCIgEgCIgFgDIgFgFIgGgGIgHgJIgGALIgEAKIgCAKIgEAaQgCAcACAOQAAAIgCACQgBACgDABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIgBgEQgCgBAAgFIAAgNIAAgfIABgYIAGgkIADgMIgCgBIgGgGIg0hPIgCgDIgDgFIgKgOQgNgTgWgmIAAAzQADAXAIARQAIAPALAHQAIAFAQADQAFABACACQACACAAAFQAAAHgEACIgFABIhXgEQgJgBgDgCQgGgEADgGQABgCAGgDIAGgIIACgBIADgIIgBgIIgBgYQABgzgBg0QAAgIABgEIgIgGIgGgIIgFgJQgCgEACgFQACgFAEgDQAEgCAKAAIAPgBQAKgBAGADQAEADAGAIIAYAiQAJALAEAJQAEAIAEAPIAGAYIAMAdIgBgJQgCgLAAgGIgBgEIgBgDIgFgLIgBgDQAAgDACgBQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAEACIAGAFIAFAEIAYAaIgChGIgBgOIgBgBIgNgFQgHgDgCgDIgBgBQgLgDgBgLQAAgMALgDIAIgBIAxAAQAEgBADABIAEgBQAJgBAEADQAEADAAAFQAAAFgEADIgCABIgDAGQgGAMgBAGQgDAMAAAZIAABkIALgQIAGgHIAFgGQADgEADAAQAFgCABAEQABADgDAEIgNAQIAAADIgDAGQgFAHgEAJIABAGIABAHQAEARAGANIAUgdQAVgeADgSQADgKABgCQACgDAEgDIATgRQAEgEADABQADABgBAFQAAACgDADIgBADQgeBAgIBGQgCAVAGAKIAHAJQAEAHgEAEQgDADgFgBQgGAAgKgGQgEARgCARIgEArIgCAdQAAAFgCACIgDACIgBAAIgCAAgADuCfQgagIgYgCQgGgBgFABQgHAAgBgBQgCgCAAgEIABgFQACgDAGgDIACgGQACgKAAgPQgBgFADgDQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAEAEQAGAGAHALIADAGIAGAHIAMAJQAQAJAFAEQAFAFgBADQgBADgEABgAoIBoQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIAAAAQgCgCABgGQABgYAOgaIAFgIIAYgSIAOgLIAFgDIABAAIAAidIgEgCQgKgFgBgGIAAgBIgCgBIgDgHIAAAAIgBgBIAAAAIAAgBIgBgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIABAAIABgBIAAgBIABAAIABgBIABAAIABgBIABAAIABAAIACAAIAAgBIABABIABAAIA/AAQAfgBAQACIAgAHIAVAGQAXAJAQAVQAQAVAEAaQACAGgCAEQgBADgEABIgCABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgDAAgCgEQgDgEgDgHIgIgJIgMgLIgDgCQALAIAMAVQALAUADAMQAKAigSAfQgSAegiANQgQAGgbACIgtAFQgkAGg+AkQgIAEgFAAQgEAAgCgCgAmYgTIABAAQADACAAAIIgBAHIAAAGIAAAGIAEAAIAJgBQAVgBAYgEIAIgDIAJgEIAAgBIAJgJIAJgLQAEgGADgJIAAgCIABgFIACgIIABgKQABgVgIgRIgCgGIgCgCQgEgEAAgFQABgDACgCIgCAAIgOgGQgUgKgMgDQgTgEgOAGIgGADIAAAAIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAAAIAAABIgBABIAAABIAAAAIgBABIAAABIgBAAIgBABIgBABIgBAAIgCABIgwAnIABAAIAagRIAHgDIABgBQADgDAEgBIACAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAg");
	mask.setTransform(52.9,33.8);

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(-23.3,32.5,1,1,0,0,0,15,36.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:52.7},19,cjs.Ease.get(-1)).to({x:132.7},20,cjs.Ease.get(1)).wait(51));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.1,35.6,1,1,0,0,0,53.1,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.2,71.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(53.1,35.6,1,1,0,0,0,53.1,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-38.3,-4.4,144.5,75.7), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(53.1,35.6,1,1,0,0,0,53.1,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-107.2,0,107.2,0).s().p("AwvZIMAAAgyPMAhfAAAMAAAAyPg");
	this.shape.setTransform(20.8,140.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-86.4,-20.6,214.4,321.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(22.4,3,1,1,0,0,0,21.8,3);
	this.instance.shadow = new cjs.Shadow("rgba(255,51,0,1)",0,0,5);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,48,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-7.4,-8,63,25), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(230,94.1,1,1,0,0,0,22.2,2.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.699},49).wait(20).to({alpha:0},50).wait(1));

	// Слой 1
	this.instance_1 = new lib.drak();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,529,320);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(266.9,170.8,1,1,0,0,0,266.9,170.8);
	this.instance.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance.cache(-2,-2,538,346);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-15,-15,567,375), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(170,84.3,1,1,0,0,0,31.6,33.8);
	this.instance.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.52},12,cjs.Ease.get(-1)).to({alpha:0.898},12,cjs.Ease.get(1)).to({alpha:0.535},12,cjs.Ease.get(-1)).to({alpha:0.141},13,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(230.5,129.5,1,1,0,0,0,230.5,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,461,259);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(185,154.1,0.954,0.954,0,0,0,230.5,129.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:230.4,y:153},24,cjs.Ease.get(-1)).to({regX:230.5,regY:129.5,y:151.8},25,cjs.Ease.get(1)).to({regX:230.4,regY:129.6,y:153},25,cjs.Ease.get(-1)).to({regX:230.5,y:154.1},25,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172.7,161.1,1.097,1.097,0,0,0,170.8,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:111.4,y:160},24,cjs.Ease.get(-1)).to({y:158.9},25,cjs.Ease.get(1)).to({y:160},25,cjs.Ease.get(-1)).to({regY:111.5,y:161.1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,30.4,440,262.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(264.5,160,1,1,0,0,0,264.5,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:260.6},74,cjs.Ease.get(-1)).to({x:256.5},75,cjs.Ease.get(1)).to({x:260.5},75,cjs.Ease.get(-1)).to({x:264.5},75,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.7,168.2,1,1,0,0,0,266.9,170.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:254.8},74,cjs.Ease.get(-1)).to({x:250.7},75,cjs.Ease.get(1)).to({x:254.7},75,cjs.Ease.get(-1)).to({x:258.7},75,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-17.6,567,374);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(339.9,172,1,1,0,0,0,339.9,172);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,679.8,344), null);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite7, new cjs.Rectangle(-7.2,-2.7,14.4,5.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(381.8,22.2,0.058,0.058,0,0,0,165.6,110.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regX:167.6,regY:108.4,scaleX:2.69,scaleY:2.69,x:386.3,y:17.8,alpha:1},4,cjs.Ease.get(-1)).to({regX:165.6,regY:107.8,scaleX:3.11,scaleY:3.11,x:381.8,y:14.1,alpha:0},5,cjs.Ease.get(1)).wait(165).to({regY:110.4,scaleX:0.06,scaleY:0.06,y:22.2},0).to({regX:167.6,regY:108.4,scaleX:2.69,scaleY:2.69,x:386.3,y:17.8,alpha:1},4,cjs.Ease.get(-1)).to({regX:165.6,regY:107.8,scaleX:3.11,scaleY:3.11,x:381.8,y:14.1,alpha:0},5,cjs.Ease.get(1)).wait(1).to({_off:true},1).wait(155));

	// telka
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1364,63.1,1,1,0,0,0,156,136.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(20).to({x:1008.2},7,cjs.Ease.get(-1)).to({x:601.5},8,cjs.Ease.get(1)).wait(115).to({y:388.1},12).to({_off:true},1).wait(168));

	// TEXT
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1033.5,56.5,1,1,0,0,0,173.5,24.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(5).to({x:678.3},7,cjs.Ease.get(-1)).to({x:272.3},8,cjs.Ease.get(1)).wait(130).to({x:-455.2},10).wait(2).to({_off:true},1).wait(168));

	// text2
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1282.5,104.5,1,1,0,0,0,172.5,22.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(5).to({x:927.3},7,cjs.Ease.get(-1)).to({x:273.8},8,cjs.Ease.get(1)).wait(130).to({x:272.5},0).to({x:-140},10).wait(2).to({_off:true},1).wait(168));

	// Слой 9
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(998.5,49,1,1,0,0,0,144.5,26);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(204).to({_off:false},0).wait(5).to({x:648.5},7,cjs.Ease.get(-1)).to({x:248.5},8,cjs.Ease.get(1)).wait(10).to({regX:144.6,regY:26.1,scaleX:1.19,scaleY:1.19,x:248.7,y:49.2},10,cjs.Ease.get(-1)).to({regX:144.5,regY:26,scaleX:1,scaleY:1,x:248.5,y:49},10,cjs.Ease.get(1)).wait(95).to({x:-601.5},10).wait(1));

	// Слой 8
	this.instance_5 = new lib.Символ32();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1135,93,1,1,0,0,0,171,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(204).to({_off:false},0).wait(5).to({x:785},7,cjs.Ease.get(-1)).to({x:275},8,cjs.Ease.get(1)).wait(20).to({regX:171.1,scaleX:1.15,scaleY:1.15,x:275.2},10,cjs.Ease.get(-1)).to({regX:171,scaleX:1,scaleY:1,x:275},10,cjs.Ease.get(1)).wait(85).to({x:-305},10).wait(1));

	// Слой 4
	this.instance_6 = new lib.Символ33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(971.5,73.5,1,1,0,0,0,107.5,31.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(204).to({_off:false},0).wait(20).to({x:571.5},10).wait(115).to({y:723.5},10).wait(1));

	// Слой 6
	this.instance_7 = new lib.Символ4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1295.5,32.5,1,1,0,0,0,230.5,129.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(204).to({_off:false},0).wait(20).to({x:582.5},10).wait(115).to({y:512.5},10).wait(1));

	// Слой 2
	this.instance_8 = new lib.Символ27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1172.5,77.5,1,1,0,0,0,395.5,86.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({x:397.5},10).wait(140).to({y:440},15).wait(10).to({x:1172.5,y:77.5},0).to({x:392.5},10).wait(135).to({y:447.5},10).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1269.3,77,1,1.04,0,16,0,509.2,77);
	this.instance_9.alpha = 0.648;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({x:481.8},5).wait(145).to({y:439.5},15).wait(10).to({x:1269.3,y:77},0).to({x:469.3},5).wait(140).to({y:447},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:40.1},4).to({scaleX:1,scaleY:1,rotation:80.2},4).to({scaleX:1,scaleY:1,rotation:180},10).to({scaleX:1,scaleY:1,rotation:189.8},1).to({scaleX:1,scaleY:1,rotation:229.9},4).to({scaleX:1,scaleY:1,rotation:360},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2.7,14.4,5.5);


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
p.nominalBounds = new cjs.Rectangle(-1269.5,-549.2,1296.1,634.6);


// stage content:
(lib.dragonknight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-66,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(575.1,49.6,1,1,0,0,0,53.1,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// drak
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(261.5,159,1,1,0,0,0,264.5,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadow
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(322,151.1,1,1,0,0,0,339.9,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// частицы - хтмл
	this.instance_4 = new lib.sprite9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(947.8,34.9,0.722,0.722,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// частицы - хтмл
	this.instance_5 = new lib.sprite9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(787.8,-135.1,0.722,0.722,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(327.4,150.5,1,1,0,0,0,338.4,180.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(191.1,-44.2,1095.9,628.2);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1508852632312", id:"bg"},
		{src:"images/btn1.png?1508852632312", id:"btn1"},
		{src:"images/btn2.png?1508852632312", id:"btn2"},
		{src:"images/drak.png?1508852632312", id:"drak"},
		{src:"images/for_text.png?1508852632312", id:"for_text"},
		{src:"images/logo.png?1508852632312", id:"logo"},
		{src:"images/luch.png?1508852632312", id:"luch"},
		{src:"images/telka.png?1508852632312", id:"telka"},
		{src:"images/telka2.png?1508852632312", id:"telka2"},
		{src:"images/text1.png?1508852632312", id:"text1"},
		{src:"images/text2.png?1508852632312", id:"text2"},
		{src:"images/text3.png?1508852632312", id:"text3"},
		{src:"images/text4.png?1508852632312", id:"text4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;