(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,444);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,102);


(lib.render = function() {
	this.initialize(img.render);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);// helper functions:

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


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.566,0.566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,86,57.7), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj6BkIAAgfIhoAAIAAAfIgjAAIAAg7QAOgCAFgJQAJgLADgeIAKhVIB3AAIAACGIAOAAIAAA+gAlDgJQgDAfgRAQIBOAAIAAhnIgzAAgAgVAwQgZgYAAglQAAgmAZgYQAXgYAmAAQAmAAAZAYQAYAYAAAmQAAAlgYAYQgZAYgmAAQgmAAgXgYgAADg0QgNAPAAAYQAAAXANAPQAPAQAWAAQAXAAAOgQQANgPAAgXQAAgYgNgPQgOgQgXAAQgWAAgPAQgAoqAwQgZgYABglQgBgmAZgYQAZgYAmAAQAlAAAZAYQAZAYgBAmQABAlgZAYQgZAYglAAQgmAAgZgYgAoRg0QgNAPAAAYQAAAXANAPQAPAQAXAAQAWAAAPgQQANgPAAgXQAAgYgNgPQgPgQgWAAQgXAAgPAQgAJ8BFIAAilIB2AAIAAAfIhSAAIAAAjIBQAAIAAAeIhQAAIAAAmIBSAAIAAAfgAHrBFIAAilIB2AAIAAAfIhTAAIAAAjIBRAAIAAAeIhRAAIAAAmIBTAAIAAAfgAGmBFIAAhFIhPAAIAABFIgjAAIAAilIAjAAIAABBIBPAAIAAhBIAkAAIAAClgACYBFIAAilIB6AAIAAAfIhXAAIAAAdIAsAAQAZAAAPAQQAPAPAAAVQAAAXgPAPQgPAPgZAAgAC7AmIAnAAQAKAAAHgGQAHgGAAgKQAAgKgHgGQgHgEgKAAIgnAAgAjCBFIAAilIBOAAQAaAAAQAPQAOAPAAAXQAAAXgOAPQgQAPgaAAIgqAAIAAA7gAiegUIAlAAQALAAAHgGQAHgHAAgKQAAgKgHgGQgHgGgLAAIglAAgAp/BFIAAiGIhPAAIAACGIgjAAIAAilICWAAIAAClg");
	this.shape.setTransform(97.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5AD12").s().p("AugDoQgyAAAAgyIAAlrQAAgyAyAAIdBAAQAyAAAAAyIAAFrQAAAygyAAg");
	this.shape_1.setTransform(97.9,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,195.9,46.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj6BkIAAgfIhoAAIAAAfIgkAAIAAg7QAPgCAFgJQAJgLADgeIAKhVIB3AAIAACGIAOAAIAAA+gAlDgJQgDAfgRAQIBOAAIAAhnIgzAAgAgVAwQgZgYAAglQAAgmAZgYQAXgYAmAAQAmAAAZAYQAYAYAAAmQAAAlgYAYQgZAYgmAAQgmAAgXgYgAADg0QgNAPAAAYQAAAXANAPQAPAQAWAAQAWAAAPgQQANgPAAgXQAAgYgNgPQgOgQgXAAQgWAAgPAQgAoqAwQgZgYABglQgBgmAZgYQAZgYAmAAQAlAAAZAYQAYAYAAAmQAAAlgYAYQgZAYglAAQgmAAgZgYgAoQg0QgOAPAAAYQAAAXAOAPQAOAQAXAAQAWAAAPgQQANgPAAgXQAAgYgNgPQgPgQgWAAQgXAAgOAQgAJ8BFIAAilIB2AAIAAAfIhSAAIAAAjIBQAAIAAAeIhQAAIAAAmIBSAAIAAAfgAHrBFIAAilIB2AAIAAAfIhTAAIAAAjIBRAAIAAAeIhRAAIAAAmIBTAAIAAAfgAGmBFIAAhFIhOAAIAABFIgkAAIAAilIAkAAIAABBIBOAAIAAhBIAkAAIAAClgACYBFIAAilIB6AAIAAAfIhXAAIAAAdIArAAQAaAAAQAQQAOAPAAAVQAAAXgOAPQgQAPgaAAgAC7AmIAnAAQAKAAAHgGQAHgGAAgKQAAgKgHgGQgHgEgKAAIgnAAgAjCBFIAAilIBOAAQAaAAAPAPQAPAPAAAXQAAAXgPAPQgPAPgaAAIgqAAIAAA7gAiegUIAlAAQALAAAHgGQAHgHAAgKQAAgKgHgGQgHgGgLAAIglAAgAp/BFIAAiGIhOAAIAACGIgkAAIAAilICWAAIAAClg");
	this.shape.setTransform(96.7,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A52A3A").s().p("AugDpQgyAAAAgzIAAlrQAAgzAyAAIdBAAQAyAAAAAzIAAFrQAAAzgyAAg");
	this.shape_1.setTransform(97,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-0.9,0.9,195.9,46.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.render();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,300,450), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,475.6).s().p("EgWBAgnMAAAhBNMAsDAAAMAAABBNg");
	this.shape.setTransform(141,208.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,282,417.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#962A34").s().p("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");
	this.shape.setTransform(86.7,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,173.4,17.7), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB414").s().p("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");
	this.shape.setTransform(86.7,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,173.4,17.7), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A52A3A").s().p("AIwA5IAAgSIgvAAIAAASIgcAAIAAgpQAGgCAEgEQAEgFACgMIAFgvIBKAAIAABEIAJAAIAAArgAIRgEQgCAKgHAIIAfAAIAAgrIgTAAgABvA5IAAgSIgvAAIAAASIgdAAIAAgpQAIgCADgEQAEgFACgMIAGgvIBJAAIAABEIAJAAIAAAXIAhhbIAkAAIAjBdIggAAIgEgLIgiAAIgDALIgfAAIAAASgABQgEQgCAKgHAIIAgAAIAAgrIgUAAgADIADIgJgdIgJAdIASAAgAJgAbQgPgNgBgVQABgVAPgOQAOgOAWAAQAXAAAOAOQAPAOAAAVQAAAVgPANQgOAOgXAAQgWAAgOgOgAJ0gYQgHAHAAAKQAAAJAHAHQAGAHAKAAQAKAAAHgHQAGgHAAgJQAAgKgGgHQgHgHgKAAQgKAAgGAHgAgwAbQgPgNAAgVQAAgWAPgNQAPgOAWAAQAeAAAMAcIgYALQgDgFgEgEQgFgFgGAAQgKAAgGAHQgHAHAAAKQAAAJAHAHQAGAHAKAAQAGAAAFgEQAEgEADgGIAYALQgFAMgJAHQgMAJgQAAQgWAAgPgOgAkhAQQANAAADgXIAGgvIBKAAIAABdIgdAAIAAhEIgUAAIgCAZQgDAZgOALQgKAJgSAAgAl1AbQgPgNAAgVQAAgWAPgNQAPgOAWAAQAfAAAMAcIgYALQgDgFgFgEQgFgFgGAAQgKAAgGAHQgHAHAAAKQAAAJAHAHQAGAHAKAAQAGAAAFgEQAFgEADgGIAYALQgFAMgJAHQgMAJgRAAQgWAAgPgOgAnhAbQgQgNABgVQgBgVAQgOQAOgOAWAAQAXAAAOAOQAPAOAAAVQAAAVgPANQgOAOgXAAQgWAAgOgOgAnNgYQgHAHAAAKQAAAJAHAHQAGAHAKAAQALAAAFgHQAHgHAAgJQAAgKgHgHQgFgHgLAAQgKAAgGAHgAqvAiQgIgHABgKQgBgKAIgHQAGgGAMAAQALAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgLAAQgMAAgGgHgAqlARQAAAJAIAAQAIAAAAgJQAAgJgIAAQgIAAAAAJgAs8AaQgKgNAAgUQAAgUAKgOQALgPAVAAQATAAAMAPQAKAOAAAUQAAAUgKANQgMAPgTAAQgVAAgLgPgAsqgHQABAXANAAQANAAgBgXQABgXgNAAQgNAAgBAXgAuTAjQgNgHAAgOQAAgHAGgHQAEgFAIgDQgQgHAAgPQAAgNANgHQALgGARAAQAQAAALAGQANAHAAANQAAAPgRAHQAIADAGAFQAEAHAAAHQAAAOgMAHQgMAGgRAAQgSAAgMgGgAt+AGQgEACgBADQABADADACQADACAHAAQAFAAAEgCQADgCAAgDQAAgDgDgCIgJgDIgJADgAuBgaQAAACAEACIAIADIAIgDQADgCAAgCQAAgGgLAAQgMAAAAAGgAOAAnIgEgLIghAAIgEALIggAAIAjhdIAjAAIAjBdgAN1ADIgKgdIgJAdIATAAgAMWAnIAAg3IgVA3IgNAAIgVg3IAAA3IgdAAIAAhdIAnAAIARAtIARgtIAnAAIAABdgAGZAnIAAg0IgjA0IgbAAIAAhdIAcAAIAAAyIAhgyIAeAAIAABdgAEvAnIAAgeQgLACgHAAQgTAAgJgKQgJgIAAgRIAAgeIAdAAIAAAeQgBALANAAQAJAAAFgCIAAgnIAdAAIAABdgAiyAnIAAhdIBIAAIAAAZIgsAAIAAAJIArAAIAAAYIgrAAIAAAKIAsAAIAAAZgAoXAnIAAhEIgiAAIAABEIgcAAIAAhdIBbAAIAABdgArdAnIA8hdIAOAAIg9BdgArmgPQgHgHAAgKQAAgKAHgHQAGgHAMAAQALAAAIAHQAGAHAAAKQAAAKgGAHQgIAHgLAAQgMAAgGgHgArcggQAAAJAIAAQAIAAAAgJQAAgJgIAAQgIAAAAAJg");
	this.shape.setTransform(92.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,185.7,11.4), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANmBAQgUgTAAgdQAAgdAUgSQAUgTAfAAQApAAARAmIgiAOQgCgHgHgFQgHgGgIAAQgOAAgJAKQgJAIAAAOQAAANAJAJQAJAKAOAAQAIAAAHgGQAHgFACgIIAiAPQgHAQgMAKQgRAMgWAAQgfAAgUgSgADOBAQgTgTgBgdQABgdATgSQAVgTAeAAQAqAAAQAmIghAOQgDgHgGgFQgIgGgIAAQgOAAgJAKQgIAIAAAOQAAANAIAJQAJAKAOAAQAIAAAIgGQAGgFADgIIAhAPQgGAQgNAKQgQAMgXAAQgeAAgVgSgABGBJQgJgJAAgOQAAgOAJgJQAKgKAQAAQAPAAAKAKQAJAJAAAOQAAAOgJAJQgKAJgPAAQgQAAgKgJgABVAyQAAAMALAAQALAAAAgMQAAgMgLAAQgLAAAAAMgAh3A+QgPgSAAgcQAAgbAPgTQAPgUAcAAQAbAAAPAUQAOATAAAbQAAAcgOASQgPAUgbAAQgcAAgPgUgAheAQQgBAgATAAQASAAAAggQAAgfgSAAQgTAAABAfgAtIAwQASAAAEggIAIhAIBkAAIAACAIgnAAIAAheIgaAAIgEAhQgFAjgRAPQgOANgZAAgAMmBQIgFgPIgvAAIgEAPIgsAAIAwiAIAwAAIAwCAgAMWAfIgMgpIgNApIAZAAgAKVBQIAAgpQgPADgKAAQgaAAgNgOQgNgNAAgWIAAgpIAoAAIAAApQAAAPASAAQAKAAAJgDIAAg1IAmAAIAACAgAIPBQIAAhJIgvBJIgmAAIAAiAIAoAAIAABEIAshEIAoAAIAACAgAFIBQIAAiAIBiAAIAAAiIg7AAIAAANIA5AAIAAAhIg5AAIAAAOIA7AAIAAAigAAIBQIBSiAIATAAIhSCAgAj2BQIAAgfQArgfALgIQAKgJAAgGQAAgFgFgDQgEgCgGAAQgTAAgPANIgVgaQAUgWAiAAQAZAAAPANQAPAMAAAUQAAAMgJAMQgJAMgWAPIApAAIAAAigAlhBQIAAhJIgvBJIglAAIAAiAIAnAAIAABEIAshEIAoAAIAACAgAoNBQIAAheIgjAAIAAgiIBsAAIAAAiIgiAAIAABegApcBQIgEgPIgvAAIgEAPIgsAAIAviAIAyAAIAuCAgAprAfIgMgpIgNApIAZAAgAt9BQIAAheIguAAIAABeIgnAAIAAiAIB7AAIAACAgAgDAFQgJgIAAgOQAAgOAJgJQAJgKAPAAQAQAAAJAKQAKAJAAAOQAAAOgKAIQgJAJgQAAQgPAAgJgJgAAKgRQAAAMALAAQAMAAAAgMQAAgMgMAAQgLAAAAAMgAHXhFIAOgMQAHAKAMAAQANAAAGgKIAPAMQgNARgVAAQgVAAgMgRg");
	this.shape.setTransform(97.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,195.8,16.5), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGCcKQkkkeAAmyQAAm5EkkkQEtkqHpAAQHoAAExEqQEqEkAAG5QAAGykqEeQkxEnnoAAQnpAAktkngAM7Q6QAAFwFdAAQFjAAAAlwQAAmAljAAQldAAAAGAgA42foMAolg/gIJSAAMgomA/ggA+zlcQknkeAAmzQAAm4EnkkQExkoHlAAQHsAAE0EoQEqEkAAG4QAAGzkqEeQk0EqnsAAQnlAAkxkqgA3wwtQAAF0FTAAQFgAAAAl0QAAl/lgAAQlTAAAAF/g");
	this.shape.setTransform(226.7,209.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,453.5,419.5), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(43,28.9,1,1,0,0,0,43,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({regY:28.8,scaleX:1.24,scaleY:1.24,x:43.1,y:36.8},10).wait(110).to({regY:28.9,scaleX:1,scaleY:1,x:43,y:28.9},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,57.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(97.9,23.2,1,1,0,0,0,97.9,23.2);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97,24.3,1,1,0,0,0,97.9,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0.9,195.9,46.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(97.9,23.2,1,1,0,0,0,97.9,23.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({x:-278.4},10,cjs.Ease.get(-1)).wait(10).to({scaleX:1.14,scaleY:1.14},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(10).to({x:-276.9,y:264.4},10,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0.9,195.9,46.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(150,225,1,1,0,0,0,150,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:354.8},59,cjs.Ease.get(1)).wait(130).to({y:225},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(141,208.7,1,1,0,0,0,141,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.94,0.94);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,282,417.4), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(93.4,39.5,1.051,1.051,0,0,0,92.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-4.3,33.5,195.3,12), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(226.7,209.8,1,1,0,0,0,226.7,209.8);
	this.instance.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,453.5,419.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(226.7,209.8,1,1,0,0,0,226.7,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,453.5,419.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 - копия
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(86.7,8.8,1,1,0,0,0,86.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.527},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Слой_1
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.7,8.8,1,1,0,0,0,86.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.4,17.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(141.3,209.8,1,1,0,0,0,226.7,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},20).to({alpha:1},20).to({alpha:0.5},20).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,0,453.5,419.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-103.8,192.5,1,1,0,0,0,97.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({x:226.2},10,cjs.Ease.get(1)).wait(100).to({x:506.2},10,cjs.Ease.get(-1)).wait(6));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(566.8,183.6,1,1,0,0,0,97.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({x:231.1},10,cjs.Ease.get(1)).wait(100).to({x:-64.2},10,cjs.Ease.get(-1)).wait(6));

	// Символ 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(226.4,481,1,1,0,0,0,86.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({y:378},10).wait(100).to({y:468},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.7,184.3,861.5,305.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(22.8,30,1,1,0,0,0,23.6,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205));

	// Слой_1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141,47.9,1,0.23,0,0,0,141,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({regY:208.6,scaleY:0.99,y:207.2},10,cjs.Ease.get(-1)).wait(115).to({regY:208.7,scaleY:0.23,y:47.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.3,-0.8,453.5,419.5);


// stage content:
(lib.mnhtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(119,46.9,1,1,0,0,0,43,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.3,200.8,1,1,0,0,0,226.7,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BTN
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(456,301,0.894,0.894,0,0,0,97.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.4,201.6,1,1,0,0,0,141,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// render
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,180,1,1,0,0,0,150,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.2,155,861.5,525.9);
// library properties:
lib.properties = {
	id: 'E3015F6AC1C844449C48F5C6E59B4AA8',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1518182362192", id:"bg"},
		{src:"images/logo.png?1518182362192", id:"logo"},
		{src:"images/render.jpg?1518182362192", id:"render"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E3015F6AC1C844449C48F5C6E59B4AA8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;