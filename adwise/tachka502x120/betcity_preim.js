(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,432);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,246);


(lib.bt = function() {
	this.initialize(img.bt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,116);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,43);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,236);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,28);


(lib.st1 = function() {
	this.initialize(img.st1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.st2 = function() {
	this.initialize(img.st2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.st3 = function() {
	this.initialize(img.st3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.tv = function() {
	this.initialize(img.tv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,170);


(lib.tv1 = function() {
	this.initialize(img.tv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.tv2 = function() {
	this.initialize(img.tv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.tv3 = function() {
	this.initialize(img.tv3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.tv4 = function() {
	this.initialize(img.tv4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);// helper functions:

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
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,788,432), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,297,116), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shad();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.437,1.437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,237.1,40.3), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,230,130), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,230,130), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,230,130), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,230,130), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.st1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,135,182), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.st2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,135,182), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.st3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,135,182), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shad();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.467,0.467);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,77.1,13.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,75,75), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhnBoQgrgrgBg9QABg8ArgrQArgrA8gBQA9ABArArQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsg");
	this.shape.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,29.5,29.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("As5ATIAAglIZyAAIAAAlg");
	this.shape.setTransform(82.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,165.1,3.9), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiJAAIETAA");
	this.shape.setTransform(13.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1,-1,29.6,2), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABTAAIilAA");
	this.shape.setTransform(8.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-1,-1,18.7,2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBuQgOgHgMgLQgIgIgEgJQgFgIgCgLQgCgOAAgqIAAgfQAAgPACgJQACgLAFgJQAEgIAIgIQAMgMAOgGQAPgGAQAAQAPAAAOAFQANAEAKAJQALAJAHAMQAGANADAQIgZAAQgCgLgFgIQgEgJgHgGQgHgGgJgDQgJgDgLAAQgKAAgKAEQgLAEgHAIQgGAFgDAGQgDAHgBAIQgDAcAAAXQAAAoADALQABAJADAGQADAGAGAGQAHAIALAEQAKAEAKAAQALAAAJgDQAJgDAHgHQAHgGAFgIQAFgJACgKIAYAAQgCAQgHANQgHAMgLAJQgKAJgNAEQgOAFgPAAQgQAAgPgGg");
	this.shape.setTransform(181.4,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6CNIAAi5IhzC5IgYAAIAAjjIAZAAIAAC5IBzi5IAWAAIAADjgAgRhmQgJgDgFgEQgHgFgDgIQgEgIgBgKIAVAAQABALAGAGQAHAGALAAQAMAAAGgGQAIgGAAgLIAVAAQgBAKgDAIQgEAIgGAFQgGAEgJADQgIACgKAAQgJAAgIgCg");
	this.shape_1.setTransform(159.6,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGByIAAjjICNAAIAAAWIh0AAIAABQIBiAAIAAAVIhiAAIAABSIB0AAIAAAWg");
	this.shape_2.setTransform(139.3,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLB3IAAgeQgfgDgMgEQgJgDgIgFIgNgKQgFgGgEgIQgEgHgEgJQgDgLgCgbQAAgPAFgYQADgJAFgHQAEgHAGgGQAGgGAHgEQAIgEAIgDQAMgFAfgCIAAgWIAYAAIAAAWQAQAAAaAHQAJADAHAEQAIAEAGAGQAGAGAEAHQAEAHADAJQAFAYAAAPQgCAbgDALQgDAJgEAHQgEAIgGAGQgGAFgHAFQgIAFgIADQgaAHgRAAIAAAegAANBEQATAAAOgFQANgFAJgKQAHgJAEgNQAEgNAAgQQAAgRgEgNQgDgOgIgIQgIgKgNgFQgPgFgTgBgAgthGQgNAFgJAKQgHAIgEAOQgEANAAARQABAQADANQADANAJAJQAIAKANAFQAOAFAUAAIAAiQQgUABgOAFg");
	this.shape_3.setTransform(116.5,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNByIAAjjIBVAAQAPAAANAFQANAFAJAIQAKAKAFAMQAEAMABAPQgBAPgEANQgFAMgKAIQgJAIgNAGQgNAEgPAAIg8AAIAABegAg0AAIA5AAQALAAAKgDQAIgEAGgFQAHgHADgIQADgIABgLQgBgKgDgJQgDgIgHgGQgGgGgIgDQgKgDgLAAIg5AAg");
	this.shape_4.setTransform(94.9,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGByIAAjjICNAAIAAAWIh0AAIAABQIBiAAIAAAVIhiAAIAABSIB0AAIAAAWg");
	this.shape_5.setTransform(75,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLByIAAjNIhCAAIAAgWICbAAIAAAWIhCAAIAADNg");
	this.shape_6.setTransform(55.9,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2ByIAAhoIhrAAIAABoIgYAAIAAjjIAYAAIAABmIBrAAIAAhmIAYAAIAADjg");
	this.shape_7.setTransform(36,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5ByIAAi5IhzC5IgWAAIAAjjIAYAAIAAC5IByi5IAYAAIAADjg");
	this.shape_8.setTransform(13.5,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,193.6,44.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AAhCQIAAh8IhIB8IgxAAIAAjjIA4AAIAAB7IBIh7IAxAAIAADjgAgRhgQgKgDgIgFQgIgGgFgJQgFgKAAgOIAlAAQABAJAFAFQAFADAFAAQAIAAAEgDQAFgFAAgJIAmAAQABAOgGAKQgFAJgIAGQgIAFgKADQgIACgLAAQgJAAgIgCg");
	this.shape.setTransform(147.2,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("ABCByIAAjjIA5AAIAADjgAh6ByIAAjjIA5AAIAABRIAkAAQAQAAAOAGQANAFALAKQAJAKAGAMQAFAOABAQQgBAPgFAOQgGAOgJAJQgLAKgNAFQgOAGgQAAgAhBBAIAfAAQALAAAGgHQAIgHAAgJQAAgKgIgGQgGgHgLAAIgfAAg");
	this.shape_1.setTransform(121.5,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAeByIAAhaIg7AAIAABaIg4AAIAAjjIA4AAIAABYIA7AAIAAhYIA4AAIAADjg");
	this.shape_2.setTransform(96,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AhUByIAAjjICaAAIAAAyIhiAAIAAAfIAlAAQARAAAPAGQAOAFAKAKQAKAKAFAMQAFAOAAAQQAAAPgFAOQgFAOgKAJQgKAKgOAFQgOAGgSAAgAgcA/IAiAAQALAAAGgGQAGgHAAgJQAAgLgGgFQgGgHgLAAIgiAAg");
	this.shape_3.setTransform(75.1,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgJgIgFgLQgEgJgCgLQgDgOgBgdIAAgPIABgdQACgNACgJQADgJAEgIQAFgHAHgHIANgMIAPgIQAKgEAYgCQANAAAWAGIAQAIIANAMQAGAGAEAHQAFAHACAIQAGAZAAARIAAAcQAAAdgDAOQgDALgEAJQgFAKgIAIIgNALIgPAIQgXAHgNAAQgYgCgKgFgAgMg/QgFADgEAFQgFAGgCAMQgCALAAARIAAAPQAAAWACALQACALAFAFQAEAFAFADQAGADAGAAQAHAAAGgDQAGgDAEgFQAEgFACgLQACgLAAgWIAAgPQAAgRgCgLQgCgMgEgGQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_4.setTransform(54.1,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("AA3CJIAAguIhtAAIAAAuIg2AAIAAhgIAXAAQAFgQAFgRQAEgRADgTQAEgaABhJIAAgJICSAAIAACxIAaAAIAABggAgIhPQgCAwgEAUQgIAjgHARIA4AAIAAh/IgjAAg");
	this.shape_5.setTransform(32.4,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AhEByIAAgyIATAAQAMAAAHgIQAEgFADgJIhIibIA7AAIAnBfIAkhfIA5AAIhQC7QgLAUgHAHQgHAHgJACQgJAEgKAAg");
	this.shape_6.setTransform(11.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,160.6,44.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5ByIAAi5IhzC5IgWAAIAAjjIAYAAIAAC5IByi5IAYAAIAADjg");
	this.shape.setTransform(201.7,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6ByIAAi5IhzC5IgYAAIAAjjIAZAAIAAC5IBzi5IAWAAIAADjg");
	this.shape_1.setTransform(178.8,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABECNIAAg3IifAAIAAjiIAZAAIAADNIBqAAIAAjNIAZAAIAADNIAbAAIAABMg");
	this.shape_2.setTransform(156.9,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3ByIAAheIg3AAIgyBeIgcAAIA0hhQgLgDgJgGQgJgFgHgIQgGgIgDgLQgEgKAAgMQAAgPAFgMQAFgNAKgJQAJgIANgFQANgFAQAAIBTAAIAADjgAgWhZQgJAEgHAFQgGAHgDAIQgDAJAAAKQAAALADAIQADAIAGAHQAHAFAJAEQAJADALAAIA5AAIAAhbIg5AAQgLAAgJACg");
	this.shape_3.setTransform(133.2,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABBByIAAjNIhMAAIAABOQgCArgDAQQgGAegGAKQgEAIgFAFQgGAFgGADQgMAHgRAAIgLAAIAAgWIAGAAQALABAJgFQAJgFAGgMQAGgNAEgWQACgPABgpIAAhdIB9AAIAADjg");
	this.shape_4.setTransform(111.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBuQgOgHgMgLQgIgIgEgJQgFgIgCgLQgCgOAAgqIAAgfQAAgPACgJQACgLAFgJQAEgIAIgIQAMgMAOgGQAPgGAQAAQAPAAAOAFQANAEAKAJQALAJAHAMQAGANADAQIgZAAQgCgLgFgIQgEgJgHgGQgHgGgJgDQgJgDgLAAQgKAAgKAEQgLAEgHAIQgGAFgDAGQgDAHgBAIQgDAcAAAXQAAAoADALQABAJADAGQADAGAGAGQAHAIALAEQAKAEAKAAQALAAAJgDQAJgDAHgHQAHgGAFgIQAFgJACgKIAYAAQgCAQgHANQgHAMgLAJQgKAJgNAEQgOAFgPAAQgQAAgPgGg");
	this.shape_5.setTransform(91.8,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2ByIAAhoIhrAAIAABoIgYAAIAAjjIAYAAIAABmIBrAAIAAhmIAYAAIAADjg");
	this.shape_6.setTransform(70.3,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABEByIgSg0IhjAAIgSA0IgaAAIBUjjIATAAIBUDjgAArAqIgqh4IgqB4IBUAAg");
	this.shape_7.setTransform(49.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNByIAAjjIBVAAQAPAAANAFQANAFAJAIQAKAKAEAMQAFAMABAPQgBAPgFANQgEAMgKAIQgJAIgNAGQgNAEgPAAIg8AAIAABegAg0AAIA5AAQALAAAKgDQAIgEAGgFQAHgHADgIQADgIABgLQgBgKgDgJQgDgIgHgGQgGgGgIgDQgKgDgLAAIg5AAg");
	this.shape_8.setTransform(30.6,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLByIAAjNIhCAAIAAgWICbAAIAAAWIhCAAIAADNg");
	this.shape_9.setTransform(10.8,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,215.4,44.9), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AhMByIAAjjICZAAIAAAyIhiAAIAAAmIBUAAIAAAxIhUAAIAAAoIBiAAIAAAyg");
	this.shape.setTransform(206.6,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("ABDByIAAjjIA4AAIAADjgAh5ByIAAjjIA4AAIAABRIAkAAQAQAAANAGQAOAFALAKQAKAKAFAMQAGAOgBAQQABAPgGAOQgFAOgKAJQgLAKgOAFQgNAGgQAAgAhBBAIAfAAQALAAAGgHQAIgHgBgJQABgKgIgGQgGgHgLAAIgfAAg");
	this.shape_1.setTransform(182,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAeByIAAhaIg7AAIAABaIg4AAIAAjjIA4AAIAABYIA7AAIAAhYIA4AAIAADjg");
	this.shape_2.setTransform(156.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AhUByIAAjjIBdAAQARAAANAFQAOAEAJAIQAKAJAFAMQAFALAAAPQAAAQgGAKQgGAMgNAJQAPAJAGALQAHAMAAARQAAAPgFANQgFAMgJAJQgKAJgNAEQgNAFgQAAgAgcA/IAlAAQAJAAAGgEQAFgGAAgJQAAgKgFgFQgGgGgJABIglAAgAgcgaIAiAAQAJAAAGgEQAFgGAAgIQAAgJgFgEQgGgGgJAAIgiAAg");
	this.shape_3.setTransform(135.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AAhByIAAh7IhIB7IgxAAIAAjjIA4AAIAAB7IBIh7IAxAAIAADjg");
	this.shape_4.setTransform(113.6,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("AgbByIAAixIg4AAIAAgyICnAAIAAAyIg4AAIAACxg");
	this.shape_5.setTransform(93.1,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AhTByIAAjjIBZAAQARAAAPAGQANAFALAKQAKAKAGANQAGANAAARQAAAPgGAOQgFAMgLAKQgKAKgOAFQgPAGgRAAIghAAIAABRgAgbgRIAfAAQAKAAAHgGQAHgHAAgJQAAgKgHgHQgHgGgKgBIgfAAg");
	this.shape_6.setTransform(74.4,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgJgIgFgLQgEgJgCgLQgDgOgBgdIAAgPIABgdQACgNACgJQADgJAEgIQAFgHAHgHIANgMIAPgIQAKgEAYgCQANAAAWAGIAQAIIANAMQAGAGAEAHQAFAHACAIQAGAZAAARIAAAcQAAAdgDAOQgDALgEAJQgFAKgIAIIgNALIgPAIQgXAHgNAAQgYgCgKgFgAgMg/QgFADgEAFQgFAGgCAMQgCALAAARIAAAPQAAAWACALQACALAFAFQAEAFAFADQAGADAGAAQAHAAAGgDQAGgDAEgFQAEgFACgLQACgLAAgWIAAgPQAAgRgCgLQgCgMgEgGQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_7.setTransform(53.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("AAeByIAAixIg7AAIAACxIg4AAIAAjjICrAAIAADjg");
	this.shape_8.setTransform(32.3,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF66").s().p("AgSByIgRgFQgPgGgMgNQgJgIgFgLQgFgKgCgMQgDgQAAghIABgYIACgYQACgMAFgKQAFgLAJgIQAMgNAPgGIARgFIASgCQAQAAAOAFQAPAEALAJQAMAKAHANQAIAPAEASIg6AAQgCgLgHgGQgHgHgNAAQgGAAgGADQgFACgDAEQgFAGgCAKQgCAMAAAcQAAAcACANQACAJAFAGQADAEAFADQAGADAGAAQANAAAHgIQAHgFACgMIA6AAQgEATgIAOQgHAOgMAJQgLAKgPAEQgOAFgQAAg");
	this.shape_9.setTransform(12.2,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,218.2,44.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRByIAAjjIAYAAIAADjgAhoByIAAjjIAYAAIAABeIA9AAQAQAAAMAFQANAEAJAKQAKAIAFALQAFANAAAPQAAAPgFAMQgFAMgKAKQgJAIgNAFQgMAFgQAAgAhQBcIA7AAQALABAJgEQAIgDAGgFQAHgGADgJQADgIAAgLQAAgLgDgIQgDgJgHgFQgGgGgIgDQgJgDgLgBIg7AAg");
	this.shape.setTransform(254,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLByIAAjNIhCAAIAAgWICbAAIAAAWIhCAAIAADNg");
	this.shape_1.setTransform(231.4,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2ByIAAhoIhrAAIAABoIgYAAIAAjjIAYAAIAABmIBrAAIAAhmIAYAAIAADjg");
	this.shape_2.setTransform(211.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGByIAAjjICNAAIAAAWIh0AAIAABQIBiAAIAAAVIhiAAIAABSIB0AAIAAAWg");
	this.shape_3.setTransform(191.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA6ByIAAi5Ih0C5IgWAAIAAjjIAYAAIAAC5IByi5IAYAAIAADjg");
	this.shape_4.setTransform(169.8,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABECNIAAg3IifAAIAAjiIAZAAIAADNIBqAAIAAjNIAZAAIAADNIAbAAIAABMg");
	this.shape_5.setTransform(147.8,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6ByIAAi5IhzC5IgYAAIAAjjIAZAAIAAC5IBzi5IAWAAIAADjg");
	this.shape_6.setTransform(123.9,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLB3IAAgeQgfgDgMgEQgJgDgHgFIgOgKQgGgGgEgIQgDgHgEgJQgDgLgCgbQAAgPAFgYQAEgJAEgHQAEgHAGgGQAGgGAHgEQAIgEAJgDQALgFAfgCIAAgWIAYAAIAAAWQAQAAAaAHQAJADAIAEQAHAEAFAGQAGAGAEAHQAFAHADAJQAFAYAAAPQgBAbgEALQgDAJgEAHQgFAIgFAGQgFAFgIAFQgIAFgIADQgbAHgQAAIAAAegAANBEQATAAAOgFQAOgFAHgKQAJgJADgNQAEgNAAgQQAAgRgEgNQgDgOgIgIQgIgKgNgFQgPgFgTgBgAgthGQgOAFgIAKQgIAIgDAOQgDANgBARQAAAQAEANQAEANAHAJQAJAKAOAFQANAFAUAAIAAiQQgUABgOAFg");
	this.shape_7.setTransform(100,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLB3IAAgeQgfgDgMgEQgJgDgIgFIgMgKQgGgGgFgIQgEgHgCgJQgEgLgCgbQAAgPAGgYQADgJAEgHQAEgHAGgGQAGgGAHgEQAHgEAKgDQAMgFAegCIAAgWIAXAAIAAAWQARAAAaAHQAJADAIAEQAHAEAFAGQAHAGADAHQAFAHACAJQAGAYAAAPQgCAbgDALQgDAJgEAHQgEAIgGAGQgGAFgHAFQgHAFgKADQgZAHgSAAIAAAegAAMBEQAUAAAOgFQAOgFAHgKQAIgJAFgNQADgNAAgQQAAgRgDgNQgEgOgIgIQgIgKgOgFQgNgFgVgBgAgthGQgNAFgJAKQgIAIgEAOQgCANAAARQgBAQAEANQAEANAHAJQAJAKAOAFQAOAFATAAIAAiQQgUABgOAFg");
	this.shape_8.setTransform(75.1,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBvQgNgEgKgJQgLgJgHgMQgHgNgCgQIAYAAQACAKAFAJQAFAIAHAHQAHAGAJADQAJADAKAAQALAAAKgEQAKgEAIgIQAKgKADgOQADgNAAgfIhVAAIAAgVIBVAAQAAgdgDgNQgDgOgKgKQgIgIgKgEQgKgFgLAAQgKAAgJAEQgJADgHAGQgHAGgFAJQgFAIgCALIgYAAQACgQAHgNQAHgMALgJQAKgJANgEQANgFAPAAQAQAAAPAGQAPAGAMAMQAIAIAEAIQAFAJACALIACAYIAAAfQAAAqgCAOQgCALgFAIQgEAJgIAIQgMALgPAHQgPAGgQAAQgPAAgNgFg");
	this.shape_9.setTransform(52.3,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBuQgPgGgLgMQgIgIgFgJQgEgIgCgMQgDgPAAgoIAAgRQAAgZADgPQADgKAEgIQAFgJAHgHQALgMAPgGQAPgGAQAAQARAAAPAGQAPAGALAMQAHAHAFAJQAEAJACAKQAEAPAAAaIAAAPQgBAogCAPQgDAMgEAIQgEAJgIAIQgMAMgOAGQgPAGgRAAQgQAAgPgGgAgUhZQgLAEgIAIQgFAGgEAHQgDAIgCAJQgCAMAAAdIAAAWQAAAWADAMQACAJADAGQADAHAFAGQAIAHAKAFQALAEAKAAQALAAAKgEQAKgFAIgHQAGgGADgIQADgHACgJQACgMAAgZIAAgWQAAgZgCgNQgCgIgDgHQgDgHgGgGQgIgIgKgEQgKgEgLAAQgKAAgKAEg");
	this.shape_10.setTransform(31.9,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAwByIhnh1IAAB1IgZAAIAAjjIAZAAIAABsIBghsIAfAAIhjBsIBsB3g");
	this.shape_11.setTransform(13.5,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,270,44.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AhMByIAAjjICaAAIAAAyIhiAAIAAAmIBTAAIAAAxIhTAAIAAAoIBiAAIAAAyg");
	this.shape.setTransform(145.2,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AAhByIAAh7IhIB7IgxAAIAAjjIA4AAIAAB7IBIh7IAxAAIAADjg");
	this.shape_1.setTransform(123.9,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAdByIhDh3IAAB3Ig4AAIAAjjIA4AAIAABsIA9hsIBAAAIhDBqIBKB5g");
	this.shape_2.setTransform(103.6,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgJgIgFgLQgEgJgCgLQgDgOgBgdIAAgPIABgdQACgNACgJQADgJAEgIQAFgHAHgHIANgMIAPgIQAKgEAYgCQANAAAWAGIAQAIIANAMQAGAGAEAHQAFAHACAIQAGAZAAARIAAAcQAAAdgDAOQgDALgEAJQgFAKgIAIIgNALIgPAIQgXAHgNAAQgYgCgKgFgAgMg/QgFADgEAFQgFAGgCAMQgCALAAARIAAAPQAAAWACALQACALAFAFQAEAFAFADQAGADAGAAQAHAAAGgDQAGgDAEgFQAEgFACgLQACgLAAgWIAAgPQAAgRgCgLQgCgMgEgGQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_3.setTransform(81.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AgSByIgRgFQgPgGgMgNQgJgIgFgLQgFgKgCgMQgDgQAAghIABgYIACgYQACgMAFgKQAFgLAJgIQAMgNAPgGIARgFIASgCQAQAAAOAFQAPAEALAJQAMAKAHANQAIAPAEASIg6AAQgCgLgHgGQgHgHgNAAQgGAAgGADQgFACgDAEQgFAGgCAKQgCAMAAAcQAAAcACANQACAJAFAGQADAEAFADQAGADAGAAQANAAAHgIQAHgFACgMIA6AAQgEATgIAOQgHAOgMAJQgLAKgPAEQgOAFgQAAg");
	this.shape_4.setTransform(62.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("ABCByIAAjjIA5AAIAADjgAh6ByIAAjjIA5AAIAABRIAkAAQAQAAANAGQAOAFALAKQAKAKAFAMQAFAOAAAQQAAAPgFAOQgFAOgKAJQgLAKgOAFQgNAGgQAAgAhBBAIAfAAQALAAAGgHQAIgHAAgJQAAgKgIgGQgGgHgLAAIgfAAg");
	this.shape_5.setTransform(37.4,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AhUByIAAjjIBdAAQARAAANAFQAOAEAJAIQAKAJAFAMQAFALAAAPQAAAQgGAKQgGAMgNAJQAPAJAGALQAHAMAAARQAAAPgFANQgFAMgJAJQgKAJgNAEQgNAFgQAAgAgcA/IAlAAQAJAAAGgEQAFgGAAgJQAAgKgFgFQgGgGgJABIglAAgAgcgaIAiAAQAJAAAGgEQAFgGAAgIQAAgJgFgEQgGgGgJAAIgiAAg");
	this.shape_6.setTransform(12.8,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,156.8,44.9), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNByIAAjjIBVAAQAOAAANAFQAMAEAJAHQAJAJAFAKQAFAMAAANQAAAMgFALQgEAJgIAJQgFAFgMAFQANAFAHAGQAJAJAEAKQAEAKAAAOQAAAOgEAMQgFALgJAJQgJAHgMAEQgNAFgQAAgAg1BcIA9AAQALAAAIgDQAIgCAHgGQAGgGADgHQADgIAAgJQAAgKgDgIQgDgHgGgGQgGgFgJgEQgIgDgLABIg9AAgAg1gMIA7AAQAKAAAIgDQAJgCAFgGQAGgFADgHQADgHAAgKQAAgJgDgIQgDgHgGgEQgFgGgJgDQgIgCgKAAIg7AAg");
	this.shape.setTransform(262.1,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLByIAAjNIhCAAIAAgWICbAAIAAAWIhCAAIAADNg");
	this.shape_1.setTransform(242.2,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBuQgOgHgMgLQgIgIgEgJQgFgIgCgLQgCgOAAgqIAAgfQAAgPACgJQACgLAFgJQAEgIAIgIQAMgMAOgGQAPgGAQAAQAPAAAOAFQANAEAKAJQALAJAHAMQAGANADAQIgZAAQgCgLgFgIQgEgJgHgGQgHgGgJgDQgJgDgLAAQgKAAgKAEQgLAEgHAIQgGAFgDAGQgDAHgBAIQgDAcAAAXQAAAoADALQABAJADAGQADAGAGAGQAHAIALAEQAKAEAKAAQALAAAJgDQAJgDAHgHQAHgGAFgIQAFgJACgKIAYAAQgCAQgHANQgHAMgLAJQgKAJgNAEQgOAFgPAAQgQAAgPgGg");
	this.shape_2.setTransform(223.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABMCNIAAg3IiXAAIAAA3IgYAAIAAhMIAUAAQAIgNAFgNQAFgOAEgQQADgPACgSIACgoIAAhMIB7AAIAADNIAbAAIAABMgAgbgxQgCAqgEATQgDAOgFAOQgEANgHAMIBlAAIAAi4IhMAAg");
	this.shape_3.setTransform(201.8,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGByIAAjjICNAAIAAAWIh0AAIAABQIBiAAIAAAVIhiAAIAABSIB0AAIAAAWg");
	this.shape_4.setTransform(182.1,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhMByIAAjjIBTAAQAQAAANAFQANAFAKAIQAIAKAFAMQAGAMAAAPQAAAPgGANQgFAMgIAIQgKAIgNAGQgNAEgQAAIg7AAIAABegAg0AAIA5AAQALAAAJgDQAJgEAHgFQAGgHADgIQADgIAAgLQAAgKgDgJQgDgIgGgGQgHgGgJgDQgJgDgLAAIg5AAg");
	this.shape_5.setTransform(162.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBuQgOgHgMgLQgIgIgEgJQgFgIgCgLQgCgOAAgqIAAgfQAAgPACgJQACgLAFgJQAEgIAIgIQAMgMAOgGQAPgGAQAAQAPAAAOAFQANAEAKAJQALAJAHAMQAGANADAQIgZAAQgCgLgFgIQgEgJgHgGQgHgGgJgDQgJgDgLAAQgKAAgKAEQgLAEgHAIQgGAFgDAGQgDAHgBAIQgDAcAAAXQAAAoADALQABAJADAGQADAGAGAGQAHAIALAEQAKAEAKAAQALAAAJgDQAJgDAHgHQAHgGAFgIQAFgJACgKIAYAAQgCAQgHANQgHAMgLAJQgKAJgNAEQgOAFgPAAQgQAAgPgGg");
	this.shape_6.setTransform(141.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABMCNIAAg3IiXAAIAAA3IgYAAIAAhMIAUAAQAIgNAFgNQAFgOAEgQQADgPACgSIACgoIAAhMIB7AAIAADNIAbAAIAABMgAgbgxQgCAqgEATQgDAOgFAOQgEANgHAMIBlAAIAAi4IhMAAg");
	this.shape_7.setTransform(104,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBuQgPgGgLgMQgIgIgFgJQgEgIgCgMQgDgPAAgoIAAgRQAAgZADgPQADgKAEgIQAFgJAHgHQALgMAPgGQAPgGAQAAQARAAAPAGQAPAGALAMQAHAHAFAJQAEAJACAKQAEAPAAAaIAAAPQgBAogCAPQgDAMgEAIQgEAJgIAIQgMAMgOAGQgPAGgRAAQgQAAgPgGgAgUhZQgLAEgIAIQgFAGgEAHQgDAIgCAJQgCAMAAAdIAAAWQAAAWADAMQACAJADAGQADAHAFAGQAIAHAKAFQALAEAKAAQALAAAKgEQAKgFAIgHQAGgGADgIQADgHACgJQACgMAAgZIAAgWQAAgZgCgNQgCgIgDgHQgDgHgGgGQgIgIgKgEQgKgEgLAAQgKAAgKAEg");
	this.shape_8.setTransform(82.7,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhNByIAAjjIBVAAQAOAAANAFQAMAEAJAHQAJAJAFAKQAFAMAAANQAAAMgFALQgEAJgIAJQgFAFgMAFQANAFAHAGQAJAJAEAKQAEAKAAAOQAAAOgEAMQgFALgJAJQgJAHgMAEQgNAFgQAAgAg1BcIA9AAQALAAAIgDQAIgCAHgGQAGgGADgHQADgIAAgJQAAgKgDgIQgDgHgGgGQgGgFgJgEQgIgDgLABIg9AAgAg1gMIA7AAQAKAAAIgDQAJgCAFgGQAGgFADgHQADgHAAgKQAAgJgDgIQgDgHgGgEQgFgGgJgDQgIgCgKAAIg7AAg");
	this.shape_9.setTransform(62.1,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABRByIAAjjIAYAAIAADjgAhoByIAAjjIAYAAIAABeIA9AAQAQAAAMAFQANAEAJAKQAKAIAFALQAFANAAAPQAAAPgFAMQgFAMgKAKQgJAIgNAFQgMAFgQAAgAhQBcIA7AAQALABAJgEQAIgDAGgFQAHgGADgJQADgIAAgLQAAgLgDgIQgDgJgHgFQgGgGgIgDQgJgDgLgBIg7AAg");
	this.shape_10.setTransform(37.2,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNByIAAjjIBVAAQAOAAANAFQAMAEAJAHQAJAJAFAKQAFAMAAANQAAAMgFALQgEAJgIAJQgFAFgMAFQANAFAHAGQAJAJAEAKQAEAKAAAOQAAAOgEAMQgFALgJAJQgJAHgMAEQgNAFgQAAgAg1BcIA9AAQALAAAIgDQAIgCAHgGQAGgGADgHQADgIAAgJQAAgKgDgIQgDgHgGgGQgGgFgJgEQgIgDgLABIg9AAgAg1gMIA7AAQAKAAAIgDQAJgCAFgGQAGgFADgHQADgHAAgKQAAgJgDgIQgDgHgGgEQgFgGgJgDQgIgCgKAAIg7AAg");
	this.shape_11.setTransform(13.1,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,274.5,44.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AAhCQIAAh8IhIB8IgxAAIAAjjIA4AAIAAB7IBIh7IAxAAIAADjgAgRhgQgKgDgIgFQgIgGgFgJQgFgKAAgOIAlAAQABAJAFAFQAFADAFAAQAIAAAEgDQAFgFABgJIAlAAQAAAOgFAKQgEAJgJAGQgHAFgLADQgJACgKAAQgJAAgIgCg");
	this.shape.setTransform(211.9,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("ABCByIAAjjIA4AAIAADjgAh6ByIAAjjIA4AAIAABRIAkAAQARAAAOAGQAOAFAKAKQAJAKAGAMQAFAOABAQQgBAPgFAOQgGAOgJAJQgLAKgNAFQgOAGgRAAgAhCBAIAgAAQALAAAHgHQAGgHABgJQgBgKgGgGQgHgHgLAAIggAAg");
	this.shape_1.setTransform(186.2,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAeByIAAhaIg7AAIAABaIg4AAIAAjjIA4AAIAABYIA7AAIAAhYIA4AAIAADjg");
	this.shape_2.setTransform(160.7,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AAeByIAAhaIg7AAIAABaIg4AAIAAjjIA4AAIAABYIA7AAIAAhYIA4AAIAADjg");
	this.shape_3.setTransform(139,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AhMByIAAjjICZAAIAAAyIhiAAIAAAmIBUAAIAAAxIhUAAIAAAoIBiAAIAAAyg");
	this.shape_4.setTransform(118.7,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("AhUByIAAjjIBdAAQARAAANAFQAOAEAJAIQAKAJAFAMQAFALAAAPQAAAQgGAKQgGAMgNAJQAPAJAGALQAHAMAAARQAAAPgFANQgFAMgJAJQgKAJgNAEQgNAFgQAAgAgcA/IAlAAQAJAAAGgEQAFgGAAgJQAAgKgFgFQgGgGgJABIglAAgAgcgaIAiAAQAJAAAGgEQAFgGAAgIQAAgJgFgEQgGgGgJAAIgiAAg");
	this.shape_5.setTransform(98.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgJgIgFgLQgEgJgCgLQgDgOgBgdIAAgPIABgdQACgNACgJQADgJAEgIQAFgHAHgHIANgMIAPgIQAKgEAYgCQANAAAWAGIAQAIIANAMQAGAGAEAHQAFAHACAIQAGAZAAARIAAAcQAAAdgDAOQgDALgEAJQgFAKgIAIIgNALIgPAIQgXAHgNAAQgYgCgKgFgAgMg/QgFADgEAFQgFAGgCAMQgCALAAARIAAAPQAAAWACALQACALAFAFQAEAFAFADQAGADAGAAQAHAAAGgDQAGgDAEgFQAEgFACgLQACgLAAgWIAAgPQAAgRgCgLQgCgMgEgGQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_6.setTransform(77.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("AAeByIAAhaIg7AAIAABaIg4AAIAAjjIA4AAIAABYIA7AAIAAhYIA4AAIAADjg");
	this.shape_7.setTransform(56.5,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("AhJByIAAjjICSAAIAAAyIhaAAIAACxg");
	this.shape_8.setTransform(37.5,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF66").s().p("AAyByIAAhtIggA4IgjAAIggg4IAABtIg4AAIAAjjIA3AAIAyBlIAzhlIA3AAIAADjg");
	this.shape_9.setTransform(14.9,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,225.3,44.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,229,43), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.basket();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.shad();
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.5,235.7,0.344,0.486);

	this.instance_2 = new lib.shad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42,236,0.344,0.486);

	this.instance_3 = new lib.shad();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.5,225,1.638,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-18.5,0,270.3,253), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(148.5,58,1.069,1.069,0,0,0,148.5,58);
	this.instance.alpha = 0.621;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.bt();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.07,scaleY:1.07,x:-10.2,y:-4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,116);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(148.5,58,1,1,0,0,0,148.5,58);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97},19,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94},20,cjs.Ease.get(1)).to({regY:58.1,scaleX:0.97,scaleY:0.97,y:58.1},20,cjs.Ease.get(-1)).to({regY:58,scaleX:1,scaleY:1,y:58},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4,317.5,124);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxsJ6IAAzzMAjZAAAIAATzg");
	mask.setTransform(118.6,69.4);

	// tv4.jpg
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(121));

	// tv3.jpg
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(88));

	// tv2.jpg
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(60));

	// tv1.jpg
	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(30));

	// Слой 8
	this.instance_4 = new lib.Символ34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.9,70.4,1,1,0,0,0,115,65);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).wait(39));

	// Слой 1
	this.instance_5 = new lib.tv();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,170);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqPrcIMlizIH6X/IsLEgg");
	mask.setTransform(352.9,164.3);

	// st3.png
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(353,164.1,1,1,0,0,0,67.5,91);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:256.1,y:194.9},14,cjs.Ease.get(-1)).wait(91).to({scaleX:1,scaleY:1,x:444,y:133.5},0).to({x:353,y:164.1},10,cjs.Ease.get(1)).wait(1));

	// st2.png
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(353,164.1,1,1,0,0,0,67.5,91);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(36).to({scaleX:1.1,scaleY:1.1,x:256.1,y:194.9},14,cjs.Ease.get(-1)).to({_off:true},1).wait(65));

	// st1.png
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(353,164.1,1,1,0,0,0,67.5,91);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).wait(33).to({scaleX:1.1,scaleY:1.1,x:256.1,y:194.9},14,cjs.Ease.get(-1)).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(-96.6,189.3,1,1,0,0,0,177.7,243.3);

	this.instance_1 = new lib.phone();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-274.3,-54,429.4,290), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(165.8,14.8,1,1,0,0,0,14.8,14.8);

	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,14.8,1,1,0,0,0,82.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,180.5,29.5), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-221.4,342.4,1,1,0,0,0,112.7,22.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:355.4,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:342.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(370));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-196.9,407.4,1,1,0,0,0,137.2,22.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:394.4,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:407.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(360));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-255.7,342.4,1,1,0,0,0,78.4,22.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({y:355.4,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:342.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(241));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-199.2,404.8,1,1,0,0,0,134.9,22.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({y:391.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:404.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(241));

	// Символ 12
	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-225.1,342.4,1,1,0,0,0,109,22.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(237).to({_off:false},0).to({y:355.4,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:342.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(123));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-226.4,404.8,1,1,0,0,0,107.7,22.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(247).to({_off:false},0).to({y:391.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:404.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(123));

	// Символ 14
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-253.8,343.7,1,1,0,0,0,80.3,22.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(356).to({_off:false},0).to({y:356.7,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:343.7,alpha:0},10,cjs.Ease.get(-1)).wait(15));

	// Символ 15
	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-237.3,407.4,1,1,0,0,0,96.8,22.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(366).to({_off:false},0).to({y:394.4,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:407.4,alpha:0},10,cjs.Ease.get(-1)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.1,320,225.3,44.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(148.5,58,1,1,0,0,0,148.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,297,116), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(118.5,68.5,1,1,0,0,0,118.5,85);

	this.instance_1 = new lib.shad();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.8,139.4,1.379,0.864);

	this.instance_2 = new lib.shad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-43.3,137,1.961,0.864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-43.3,-16.5,323.6,180.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(51.5,112,0.807,0.807,0,0,0,77.5,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:117.9,rotation:-8.3,y:88.7},16,cjs.Ease.get(-1)).to({regY:118,rotation:-15,y:70},13,cjs.Ease.get(1)).to({rotation:-7.3,y:91.5},18,cjs.Ease.get(-1)).to({rotation:0,y:112},17,cjs.Ease.get(1)).wait(1));

	// shad
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.1,233.1,0.807,0.807,0,0,0,118.5,20.2);
	this.instance_1.alpha = 0.57;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.65,scaleY:0.65,alpha:0.422},16,cjs.Ease.get(-1)).to({regX:118.4,regY:20.1,scaleX:0.52,scaleY:0.52,y:233,alpha:0.301},13,cjs.Ease.get(1)).to({regX:118.5,scaleX:0.67,scaleY:0.67,alpha:0.441},18,cjs.Ease.get(-1)).to({regY:20.2,scaleX:0.81,scaleY:0.81,y:233.1,alpha:0.57},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.4,-26.8,395.2,276.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(312.4,142.8,0.793,0.793,0,0,0,394.1,216);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:306},49,cjs.Ease.get(-0.99)).to({x:299.4},51,cjs.Ease.get(1)).to({x:305.8},49,cjs.Ease.get(-0.99)).to({x:312.4},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28.4,624.6,342.4);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(0.1,128.7,1,1,0,0,0,13.8,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.8,119,1,1,0,0,0,8.3,0);

	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.8,110.4,1,1,0,0,0,8.3,0);

	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.8,102,1,1,0,0,0,8.3,0);

	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,84.4,1,1,0,0,0,13.8,0);

	this.instance_5 = new lib.Символ17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.8,93.4,1,1,0,0,0,8.3,0);

	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(4.8,74.7,1,1,0,0,0,8.3,0);

	this.instance_7 = new lib.Символ17();
	this.instance_7.parent = this;
	this.instance_7.setTransform(4.8,66.1,1,1,0,0,0,8.3,0);

	this.instance_8 = new lib.Символ17();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4.8,57.7,1,1,0,0,0,8.3,0);

	this.instance_9 = new lib.Символ18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.1,40.1,1,1,0,0,0,13.8,0);

	this.instance_10 = new lib.Символ17();
	this.instance_10.parent = this;
	this.instance_10.setTransform(4.8,49.1,1,1,0,0,0,8.3,0);

	this.instance_11 = new lib.Символ17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(4.8,30.2,1,1,0,0,0,8.3,0);

	this.instance_12 = new lib.Символ17();
	this.instance_12.parent = this;
	this.instance_12.setTransform(4.8,21.6,1,1,0,0,0,8.3,0);

	this.instance_13 = new lib.Символ17();
	this.instance_13.parent = this;
	this.instance_13.setTransform(4.8,13.2,1,1,0,0,0,8.3,0);

	this.instance_14 = new lib.Символ18();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0.1,-4.4,1,1,0,0,0,13.8,0);

	this.instance_15 = new lib.Символ17();
	this.instance_15.parent = this;
	this.instance_15.setTransform(4.8,4.6,1,1,0,0,0,8.3,0);

	this.instance_16 = new lib.Символ17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(4.8,-14,1,1,0,0,0,8.3,0);

	this.instance_17 = new lib.Символ17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(4.8,-22.6,1,1,0,0,0,8.3,0);

	this.instance_18 = new lib.Символ17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(4.8,-30.9,1,1,0,0,0,8.3,0);

	this.instance_19 = new lib.Символ18();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0.1,-48.5,1,1,0,0,0,13.8,0);

	this.instance_20 = new lib.Символ17();
	this.instance_20.parent = this;
	this.instance_20.setTransform(4.8,-39.5,1,1,0,0,0,8.3,0);

	this.instance_21 = new lib.Символ17();
	this.instance_21.parent = this;
	this.instance_21.setTransform(4.8,-57.7,1,1,0,0,0,8.3,0);

	this.instance_22 = new lib.Символ17();
	this.instance_22.parent = this;
	this.instance_22.setTransform(4.8,-66.3,1,1,0,0,0,8.3,0);

	this.instance_23 = new lib.Символ17();
	this.instance_23.parent = this;
	this.instance_23.setTransform(4.8,-74.6,1,1,0,0,0,8.3,0);

	this.instance_24 = new lib.Символ18();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0.1,-92.2,1,1,0,0,0,13.8,0);

	this.instance_25 = new lib.Символ17();
	this.instance_25.parent = this;
	this.instance_25.setTransform(4.8,-83.2,1,1,0,0,0,8.3,0);

	this.instance_26 = new lib.Символ17();
	this.instance_26.parent = this;
	this.instance_26.setTransform(4.8,-101.5,1,1,0,0,0,8.3,0);

	this.instance_27 = new lib.Символ17();
	this.instance_27.parent = this;
	this.instance_27.setTransform(4.8,-110.1,1,1,0,0,0,8.3,0);

	this.instance_28 = new lib.Символ17();
	this.instance_28.parent = this;
	this.instance_28.setTransform(4.8,-118.4,1,1,0,0,0,8.3,0);

	this.instance_29 = new lib.Символ18();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0.1,-136,1,1,0,0,0,13.8,0);

	this.instance_30 = new lib.Символ17();
	this.instance_30.parent = this;
	this.instance_30.setTransform(4.8,-127,1,1,0,0,0,8.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAVRMAAAgqh");
	this.shape.setTransform(13.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-137,29.6,274.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(15.5,-110,0.92,1.014,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:37.6,scaleY:0.79,x:14.9,y:79.3},8,cjs.Ease.get(-1)).to({regY:37.5,scaleY:1.01,x:15.5,y:-110},12,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.8,-110.1,0.92,0.92,0,0,0,90.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:71.2,y:79.1},8,cjs.Ease.get(-1)).to({x:71.8,y:-110.1},12,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.3,-16,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.8,107.1,0.92,0.92,0,0,0,38.5,6.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.44,scaleY:1.44,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92,alpha:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-148,174.5,261.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(568.3,137.3,1,1.034,0,-14.7,0,122,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:0.5,x:898.2},19,cjs.Ease.get(1)).to({x:961.2},80).to({scaleY:1.02,skewX:-11.5,x:2296},20,cjs.Ease.get(-1)).wait(361));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(901,192.5,0.935,0.935,0,0,0,37.6,37.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(80).to({alpha:0},20,cjs.Ease.get(-1)).wait(242));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(937.6,160.8,1.131,1.131,0,0,0,118.5,85);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(238).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(80).to({regX:0,regY:0,x:803.6,y:64.7,alpha:0},20,cjs.Ease.get(-1)).wait(123));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(959.3,159,1.03,1.03,0,0,0,77.6,118);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(357).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(80).to({alpha:0},20,cjs.Ease.get(-1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.9,14.3,318.4,253);


// stage content:
(lib.betcity_preim = function(mode,startPosition,loop) {
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

	// bt.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(431.9,95.5,0.512,0.512,0,0,0,148.8,58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(426.6,20,0.581,0.581,0,0,0,114.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ball.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(543,-94.5,0.822,0.822,0,0,0,137.2,204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// tv.png
	this.instance_3 = new lib.Символ38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-103.2,74.8,0.436,0.436,0,0,0,505.3,171.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// back.jpg
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(350.1,123.1,1,1,0,0,0,394,216);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108,-61.3,723.7,342.4);
// library properties:
lib.properties = {
	width: 502,
	height: 120,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1512742894584", id:"back"},
		{src:"images/ball.png?1512742894584", id:"ball"},
		{src:"images/basket.png?1512742894584", id:"basket"},
		{src:"images/bt.png?1512742894584", id:"bt"},
		{src:"images/logo.png?1512742894584", id:"logo"},
		{src:"images/phone.png?1512742894584", id:"phone"},
		{src:"images/shad.png?1512742894584", id:"shad"},
		{src:"images/st1.png?1512742894584", id:"st1"},
		{src:"images/st2.png?1512742894584", id:"st2"},
		{src:"images/st3.png?1512742894584", id:"st3"},
		{src:"images/tv.png?1512742894584", id:"tv"},
		{src:"images/tv1.jpg?1512742894584", id:"tv1"},
		{src:"images/tv2.jpg?1512742894584", id:"tv2"},
		{src:"images/tv3.jpg?1512742894584", id:"tv3"},
		{src:"images/tv4.jpg?1512742894584", id:"tv4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;