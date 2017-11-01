(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"hacken_atlas_", frames: [[0,0,400,350],[402,0,48,57]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["hacken_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["hacken_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],8,0,-7.9,0).s().p("AhOAZIAAgxICdAAIAAAxg");
	this.shape.setTransform(7.9,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,-0.3,15.9,5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.3,-7.9,-0.3,5.9).s().p("AgcBNIAAiZIA5AAIAACZg");
	this.shape.setTransform(2.9,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.1,-7.7,-0.1,4.5).s().p("AgcBNIAAiZIA5AAIAACZg");
	this.shape_1.setTransform(49.5,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,52.4,15.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.502,1],-22,0,22,0).s().p("AjbAhIAAhBIG3AAIAABBg");
	this.shape.setTransform(22,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,44,6.6), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C5C9").s().p("AAjA+IhAhRIAABRQgRABgHgBIAAh7QAJgCAKACIBABRIAAhRQAHgCASACIAAB7IgKABIgKgBg");
	this.shape.setTransform(194.6,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00C5C9").s().p("AgUA8QgKgDgHgGIgGgIIgEgJQgCgHgCgRIAAhIQAHgCATACIAABMQAAAGABAGQACAFADAEQAEAEAFACQAFACAFAAQAHAAAFgCQAFgCADgEQADgEACgFQACgGAAgGIAAhMQAHgCASACIAABIQgBARgDAHIgEAJIgGAIQgGAGgKADQgJAEgNAAQgLAAgJgEg");
	this.shape_1.setTransform(181.2,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C5C9").s().p("AgBA/QgHgBgGgCQgHgDgFgDQgGgDgEgFIgIgKIgGgLIgEgMIgBgNIABgMIAEgMIAGgLQADgGAFgDIAKgIIAMgHIANgDQAGgCAJAAQAMAAAKADQAJADAHAFIABALQABAJgCACQgKgGgJgDQgJgDgJAAQgKAAgHADQgIADgHAGQgFAGgEAIQgDAIAAAJQAAAKADAIQAEAJAFAGQAHAFAIAEQAHADAKAAQAJAAAIgDIAAgoQAGgBARABIAAA1QgGAEgLADQgMADgMAAQgJAAgGgCg");
	this.shape_2.setTransform(167.7,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C5C9").s().p("AgqA+IAAh7IBUAAQACALgCAJIg7AAIAAAfIA1AAQACAKgCAKIg1AAIAAAgIA7AAQACAKgCAKg");
	this.shape_3.setTransform(156.1,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00C5C9").s().p("AguA+IAAh7IAzAAQAIAAAIACQAHADAFAEQAGAEACAGQADAGAAAHQAAAFgBAFQgBAEgDADQgEAHgIAEQAFABADACIAHAHIAEAJQABAEAAAFQAAAIgDAHQgDAGgFAFQgGAEgIADQgHACgKAAgAgVAqIAYAAQAJAAAFgFQAFgFAAgHQAAgIgFgFQgFgEgJAAIgYAAgAgVgIIAXAAQAIAAAFgFQAEgEAAgIQAAgHgEgEQgFgFgIAAIgXAAg");
	this.shape_4.setTransform(144.9,39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00C5C9").s().p("AgLA+IAAgsIguhPQAHgCATACIAfA4IAgg4QAHgCATACIguBPIAAAsIgOABIgJgBg");
	this.shape_5.setTransform(127.7,39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00C5C9").s().p("Ag2A+IAAh7IAtAAQAHAAAGABQAHABAGADQAGACAFADQAFADAEAFQAFAEADAFIAGAKIADANIABALIgBANIgDAMIgGAKQgDAFgFAEQgEAEgFAEIgLAFIgNAEIgNABgAgdAqIAUAAQAJgBAGgDQAHgCAGgGQAFgFADgHQADgJAAgJQAAgIgDgJQgDgHgFgFQgGgGgHgCQgGgEgJAAIgUAAg");
	this.shape_6.setTransform(114.8,39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00C5C9").s().p("AAkA+IgLgbIgxAAIgLAbQgSACgHgCIAzh7QAJgCAKACIAzB7IgPABIgKgBgAARAOIgRgrIgQArIAhAAg");
	this.shape_7.setTransform(101.1,39.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00C5C9").s().p("AgqA+IAAh7IBUAAQACALgCAJIg7AAIAAAfIA1AAQACAKgCAKIg1AAIAAAgIA7AAQACAKgCAKg");
	this.shape_8.setTransform(89.3,39.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00C5C9").s().p("AAXA+IgdgsIgSAAIAAAsQgSABgHgBIAAh7IAxAAQAJAAAJADQAIADAGAFQAGAGAEAHQACAIAAAIQAAAHgBAFQgCAGgEAEQgCAFgGADQgEAEgHACIAgAvIgRAAIgKAAgAgYgBIAXAAQAEAAAEgCQAEgBADgCQACgDACgEQACgDgBgFQABgEgCgEQgCgEgCgCQgDgDgEgBQgEgCgEAAIgXAAg");
	this.shape_9.setTransform(77.9,39.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C5C9").s().p("AgoA+IAAh7QAHgBASABIAABnIA3AAIABAKIgBAKg");
	this.shape_10.setTransform(66.7,39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C5C9").s().p("AAkA+IgLgbIgxAAIgLAbQgSACgHgCIAzh7QAJgCAKACIAzB7IgPABIgKgBgAARAOIgRgrIgQArIAhAAg");
	this.shape_11.setTransform(54.5,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00C5C9").s().p("AgUA+QgKgCgIgGQgBgCAAgKQAAgKABgBQAKAGAJAEQAKADAIAAQAEAAAEgBIAGgDQAFgEAAgHQAAgEgBgCQgCgEgDgCQgFgDgOgEIgNgFQgGgDgFgDQgFgFgDgFQgDgGAAgJQAAgIADgGQACgIAGgFQAGgFAHgCQAJgEAJAAQAKAAAKADQAIADAHAEQACAWgCACQgKgGgIgDQgJgEgIAAQgHAAgFAEQgFAEAAAGQAAAEABADIAFAEQAEAEAOAEIANAFQAHACAFADQAFAFADAGQADAHAAAJQAAAJgDAHQgEAHgGAFQgGAFgIACQgIADgIAAQgKAAgKgDg");
	this.shape_12.setTransform(247.1,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00C5C9").s().p("AAkA+IgLgbIgxAAIgLAbQgSACgHgCIAzh7QAJgCAKACIAzB7IgPABIgKgBgAARAOIgRgrIgQArIAhAAg");
	this.shape_13.setTransform(235.1,14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00C5C9").s().p("AAeA+IAAg1Ig7AAIAAA1QgSACgHgCIAAh7QAHgBASABIAAAzIA7AAIAAgzQAHgBASABIAAB7IgPABIgKgBg");
	this.shape_14.setTransform(221.4,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00C5C9").s().p("AgqA+IAAh7IBUAAQACALgCAKIg7AAIAAAeIA1AAQACAKgCAJIg1AAIAAAgIA7AAQACALgCAKg");
	this.shape_15.setTransform(205,14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00C5C9").s().p("AgoA+IAAh7QAHgBASABIAABnIA3AAIABAKIgBAKg");
	this.shape_16.setTransform(194.5,14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00C5C9").s().p("AAkA+IgLgbIgxAAIgLAbQgSACgHgCIAzh7QAJgCAKACIAzB7IgPABIgKgBgAARAOIgRgrIgQArIAhAAg");
	this.shape_17.setTransform(182.2,14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00C5C9").s().p("AgUA+QgKgCgIgGQgBgCAAgKQAAgKABgBQAKAGAJAEQAKADAIAAQAEAAAEgBIAGgDQAFgEAAgHQAAgEgBgCQgCgEgDgCQgFgDgOgEIgNgFQgGgDgFgDQgFgFgDgFQgDgGAAgJQAAgIADgGQACgIAGgFQAGgFAHgCQAJgEAJAAQAKAAAKADQAIADAHAEQACAWgCACQgKgGgIgDQgJgEgIAAQgHAAgFAEQgFAEAAAGQAAAEABADIAFAEQAEAEAOAEIANAFQAHACAFADQAFAFADAGQADAHAAAJQAAAJgDAHQgEAHgGAFQgGAFgIACQgIADgIAAQgKAAgKgDg");
	this.shape_18.setTransform(170.1,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00C5C9").s().p("AAjA+IhAhSIAABSQgSACgHgCIAAh7QAKgCAKACIBABSIAAhSQAHgBASABIAAB7IgKABIgKgBg");
	this.shape_19.setTransform(153.5,14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00C5C9").s().p("AgqA+IAAh7IBUAAQACALgCAKIg7AAIAAAeIA1AAQACAKgCAJIg1AAIAAAgIA7AAQACALgCAKg");
	this.shape_20.setTransform(141.6,14.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00C5C9").s().p("AAXA+Igxg8IAAA8QgSACgHgCIAAh7QAHgBASABIAAA5IAvg5IAOgBIAPABIgyA8IA0A/IgPABIgOgBg");
	this.shape_21.setTransform(130,14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00C5C9").s().p("AgNA/QgHgBgGgCQgGgDgFgEIgJgHQgFgFgDgFIgGgLIgEgMIAAgNIAAgMIAEgMIAGgLQADgGAFgEIAJgIIALgFIANgFQAHgBAGAAIAOABIAMAFIALAFIAKAIIAIAKQAEAFACAGQACAGABAGIABAMIgBANQgBAGgCAGQgCAGgEAFIgIAKQgEAEgGADQgEAEgHADQgFACgHABQgHACgHAAQgGAAgHgCgAgPgoQgHADgGAGQgFAGgDAIQgEAIABAJQgBAKAEAIQADAJAFAFQAGAGAHADQAHAEAIgBQAIABAIgEQAHgDAFgGQAGgFADgJQADgIAAgKQAAgJgDgIQgDgIgGgGQgFgGgHgDQgIgDgIAAQgIAAgHADg");
	this.shape_22.setTransform(115.8,14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00C5C9").s().p("AgLA+IAAhnIgkAAQgCgKACgKIBgAAQACAKgCAKIglAAIAABnIgOAAIgJAAg");
	this.shape_23.setTransform(102.8,14.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00C5C9").s().p("AAjA+IhAhSIAABSQgRACgIgCIAAh7QAKgCAKACIBABSIAAhSQAHgBARABIAAB7IgJABIgKgBg");
	this.shape_24.setTransform(85.8,14.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00C5C9").s().p("AgMA+IAAh7QAIgBAQABIAAB7IgOABIgKgBg");
	this.shape_25.setTransform(76.3,14.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00C5C9").s().p("AAkA+IgLgbIgxAAIgLAbQgSACgHgCIAzh7QAJgCAKACIAzB7IgPABIgKgBgAARAOIgRgrIgQArIAhAAg");
	this.shape_26.setTransform(66.8,14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00C5C9").s().p("AgJA+IgdhPIgSBPQgRACgGgCIAdh7QAKgCAKACIAeBUIAfhUQAKgCAKACIAeB7QgRACgHgCIgShPIgdBPIgKABIgJgBg");
	this.shape_27.setTransform(51.4,14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00C5C9").s().p("AgqA+IAAh7IBUAAQACALgCAKIg7AAIAAAeIA1AAQACAKgCAJIg1AAIAAAgIA7AAQACALgCAKg");
	this.shape_28.setTransform(33.1,14.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00C5C9").s().p("AAeA+IAAg1Ig7AAIAAA1QgSACgHgCIAAh7QAHgBASABIAAAzIA7AAIAAgzQAHgBASABIAAB7IgPABIgKgBg");
	this.shape_29.setTransform(20.5,14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00C5C9").s().p("AgMA+IAAhnIgkAAQgBgKABgKIBhAAQABAKgBAKIglAAIAABnIgOAAIgKAAg");
	this.shape_30.setTransform(8,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,255,52.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRA3QgKgCgHgFQgBgCAAgHQAAgHABgBQAJAGAIADQAJADAIAAQADAAAFgBQAEgBADgDQADgCABgDQABgDAAgEQAAgEgCgDQgBgDgDgCQgEgDgPgFIgMgEIgKgFQgEgEgDgFQgDgGAAgHQAAgGACgGQADgGAFgEQAFgFAGgCQAIgDAIAAQAJAAAIADQAIACAGAFQABAPgBACQgIgGgHgDQgJgDgHAAQgEAAgEABQgDABgDACIgEAGQgCACABAEQgBAEACACIAFAFIATAIIALAEQAHADADACQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgGAEgGADQgHACgIAAQgJAAgIgDg");
	this.shape.setTransform(224.2,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIgiAAQgBgHABgIIBVAAQACAIgCAHIgjAAIAABfIgIABIgIgBg");
	this.shape_1.setTransform(214.5,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRA3QgJgCgIgFQAAgCgBgHQABgHAAgBQAJAGAIADQAJADAIAAQADAAAFgBQAEgBADgDQACgCACgDQACgDgBgEQAAgEgBgDQgCgDgDgCQgFgDgOgFIgMgEIgKgFQgEgEgDgFQgDgGAAgHQAAgGACgGQADgGAFgEQAFgFAGgCQAIgDAIAAQAJAAAJADQAHACAGAFQABAPgBACQgIgGgHgDQgJgDgHAAQgEAAgEABQgDABgDACIgEAGQgBACAAAEQAAAEABACIAFAFIATAIIALAEQAHADADACQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgGAEgGADQgIACgHAAQgIAAgJgDg");
	this.shape_2.setTransform(204.7,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjA3IgLgbIgvAAIgLAbQgJACgJgCIAuhtQAGgCAHACIAuBtIgJABIgJgBgAASANIgSgtIgSAtIAkAAg");
	this.shape_3.setTransform(194.1,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA3IAAhtQAIgCAJACIAABtIgJABIgIgBg");
	this.shape_4.setTransform(185.9,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA3QgIgCgIgFQgBgCAAgHQAAgHABgBQAJAGAIADQAJADAHAAQAEAAAFgBQAEgBADgDQADgCABgDQACgDAAgEQgBgEgCgDQgBgDgDgCQgEgDgOgFIgNgEIgKgFQgFgEgCgFQgDgGAAgHQAAgGACgGQADgGAFgEQAFgFAGgCQAIgDAIAAQAJAAAIADQAIACAGAFQABAPgBACQgIgGgIgDQgIgDgHAAQgEAAgEABQgEABgCACIgEAGQgBACgBAEQABAEABACIAFAFIATAIIALAEQAGADAEACQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgGAEgGADQgIACgHAAQgIAAgKgDg");
	this.shape_5.setTransform(178.9,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSA2QgIgDgGgGQgGgFgDgJQgCgGgBgPIAAhBQAIgCAJACIAABEQAAAHACAFQACAGAEAEQADAEAFACQAGACAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgFAAgHIAAhEQAJgCAIACIAABBQgBAPgCAGQgDAJgGAFQgGAGgIADQgIADgLAAQgKAAgIgDg");
	this.shape_6.setTransform(168.3,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeA3IAAgxIg7AAIAAAxQgJACgJgCIAAhtQAJgCAJACIAAAvIA7AAIAAgvQAJgCAJACIAABtIgJABIgJgBg");
	this.shape_7.setTransform(156.3,37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIgiAAQgBgHABgIIBVAAQACAIgCAHIgjAAIAABfIgIABIgIgBg");
	this.shape_8.setTransform(145.2,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvA3IAAhtQAHgCAIACIA/BQIAAhQQAIgCAJACIAABtQgHACgHgCIg/hQIAABQIgJABIgJgBg");
	this.shape_9.setTransform(134.1,37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA3IAAhtIBKAAQACAHgCAHIg5AAIAAAhIA0AAQACAHgCAGIg0AAIAAAjIA5AAQACAHgCAHg");
	this.shape_10.setTransform(123.5,37.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYA3IgbgoIgWAAIAAAoQgJACgJgCIAAhuIAqAAQAJAAAIADQAHADAFAEQAGAFACAHQADAGAAAIQAAAGgCAFQgBAFgDADQgDAFgFADQgFADgGACIAdAqIgJABIgKgBgAgZABIAYAAQAFAAAEgBQAEgBAEgDQADgDABgEQACgEAAgEQAAgFgCgEQgBgDgDgDQgEgDgEgCQgEgBgFAAIgYAAg");
	this.shape_11.setTransform(109.5,37.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA3IAAhtIBKAAQACAHgCAHIg5AAIAAAhIA0AAQABAHgBAGIg0AAIAAAjIA5AAQACAHgCAHg");
	this.shape_12.setTransform(99.3,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoA3IAAhtIArAAQAIAAAGACQAHACAFAEQAEADADAGQACAFAAAGIgBAIIgDAHQgEAHgIADIAIADIAGAGIAEAIIABAIQAAAHgCAGQgDAGgFAEQgFAEgGACQgIACgIAAgAgXApIAaAAQAFAAAEgCQAEgBADgCIAEgGIABgHIgBgIIgEgFIgHgEIgJgBIgaAAgAgXgGIAaAAIAHgBIAGgEQADgCABgDIABgHQAAgEgBgDQgCgDgCgCIgGgEIgIgBIgZAAg");
	this.shape_13.setTransform(89.2,37.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA3IAAgoIgphFQAJgCAJACIAfA1IAfg1QAKgCAJACIgpBFIAAAoIgJABIgIgBg");
	this.shape_14.setTransform(78.1,37.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAA5IgMgEQgGgCgEgDIgJgHIgHgJIgFgKIgDgKIgBgMIABgLIADgKIAFgKIAHgJIAJgHQAEgDAGgCIAMgEIAMgBQALAAAKADQAIADAHAEIABAIIgBAIQgJgGgIgCQgJgDgJAAQgKAAgGADQgJADgFAGQgGAGgEAIQgCAIAAAIQAAAJACAIQAEAIAGAGQAFAGAJADQAGADAKAAQAJAAAJgDQAIgCAJgGIABAIIgBAIQgHAFgIACQgKADgLAAIgMgBg");
	this.shape_15.setTransform(66.3,37.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA3IAAhuIBKAAQACAIgCAHIg4AAIAAAhIAzAAQABAHgBAHIgzAAIAAAwIgJABIgJgBg");
	this.shape_16.setTransform(52.2,37.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLA5IgMgEQgFgCgEgDQgFgDgEgEIgHgJIgFgKIgDgKIgBgMIABgLIADgKIAFgKIAHgJQAEgEAFgDQAEgDAFgCIAMgEIALgBIANABIALAEIAKAFIAIAHIAHAJIAFAKIADAKIABALIgBAMIgDAKIgFAKIgHAJIgIAHIgKAFIgLAEIgNABIgLgBgAgPgnQgHADgGAGQgFAGgDAIQgDAIAAAIQAAAJADAIQADAIAFAGQAGAGAHADQAIADAHAAQAJAAAHgDQAHgDAGgGQAFgGADgIQAEgIAAgJQAAgIgEgIQgDgIgFgGQgGgGgHgDQgHgDgJAAQgHAAgIADg");
	this.shape_17.setTransform(40.2,37.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAuIAAgiIgig4QAHgCAIACIAZArIAagrQAIgCAHACIgiA4IAAAiIgHAAIgGAAg");
	this.shape_18.setTransform(260.8,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAtIAAhOIgdAAQgBgGABgGIBGAAQACAGgCAGIgcAAIAABOIgHABIgGgBg");
	this.shape_19.setTransform(252.1,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAuIAAhaQAGgCAHACIAABaIgHAAIgGAAg");
	this.shape_20.setTransform(246.2,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmAuIAAhaQAGgCAFACIA0BBIAAhBQAHgCAHACIAABaQgFABgGgBIg0hDIAABDIgHAAIgHAAg");
	this.shape_21.setTransform(239.3,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAsQgGgCgFgFQgFgFgDgHQgBgEgBgMIAAg2QAHgCAHACIAAA4QAAAFACAFQABAEADADIAHAFQAFACAEAAQAFAAAFgCIAHgFQADgDABgEQACgFAAgFIAAg4QAHgCAHACIAAA2QgBAMgBAEQgDAHgFAFQgEAFgHACQgHADgJAAQgIAAgHgDg");
	this.shape_22.setTransform(229.5,16.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAsAuIgPhBIgXBBQgGABgFgBIgXhBIgPBBQgHABgHgBIAVhaQAHgCAFACIAYBDIAZhDQAGgCAGACIAVBaIgHAAIgHAAg");
	this.shape_23.setTransform(218.3,16.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAsAuIgPhBIgXBBQgGABgFgBIgXhBIgPBBQgHABgHgBIAVhaQAHgCAFACIAYBDIAZhDQAGgCAGACIAVBaIgHAAIgHAAg");
	this.shape_24.setTransform(205.7,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAvIgJgDIgIgFIgGgGIgGgGIgFgIIgCgJIgBgKIABgIIACgJIAFgIIAGgHIAGgHIAIgEIAJgDIAKgBIAKABIAKADIAHAEIAHAHIAGAHIAEAIIADAJIABAIIgBAKIgDAJIgEAIIgGAGIgHAGIgHAFIgKADIgKABIgKgBgAgMggQgGADgFAFQgEAEgDAHQgCAGAAAHQAAAIACAGQADAHAEAEQAFAGAGACQAGADAGAAQAHAAAGgDQAGgCAEgGQAFgEADgHQACgGAAgIQAAgHgCgGQgDgHgFgEQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_25.setTransform(193.9,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAvIgKgDIgIgFIgIgGIgFgGIgEgIIgDgJIgBgKIABgIIADgJIAEgIIAFgHIAIgHIAIgEIAKgDIAJgBQAJAAAIADQAHACAGADQABACAAAFQAAAGgBABQgHgFgHgCQgHgCgIAAQgHAAgGACQgGADgFAFQgFAEgCAHQgEAHAAAGQAAAIAEAGQACAHAFAEQAFAGAGACQAGADAHAAQAIgBAHgCQAHgCAHgEQABAAAAAGQAAAFgBABQgGAEgHADQgIACgJAAIgJgBg");
	this.shape_26.setTransform(183.2,16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnAuIAAhaIAfAAIALABIAJACIAJAEIAGAGIAFAHIAEAHIADAJIABAIIgBAJIgDAJIgEAHIgFAHIgGAGIgJAEIgJADIgLABgAgYAhIARAAQAHAAAGgCQAGgCAEgFQAFgEACgHQADgFgBgIQABgGgDgHQgCgGgFgEQgEgEgGgDQgGgDgHABIgRAAg");
	this.shape_27.setTransform(170.5,16.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIA9AAQABAFgBAHIgvAAIAAAaIAqAAQACAGgCAFIgqAAIAAAcIAvAAQABAHgBAGg");
	this.shape_28.setTransform(161.6,16.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGAtIAAhOIgdAAQgBgGABgGIBGAAQACAGgCAGIgcAAIAABOIgHABIgGgBg");
	this.shape_29.setTransform(153.3,16.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmAuIAAhaQAGgCAFACIA0BBIAAhBQAHgCAHACIAABaQgFABgGgBIg0hDIAABDIgHAAIgHAAg");
	this.shape_30.setTransform(144.2,16.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIA9AAQABAFgBAHIgvAAIAAAaIAqAAQACAGgCAFIgqAAIAAAcIAvAAQABAHgBAGg");
	this.shape_31.setTransform(135.5,16.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAuIAAhaQAGgCAHACIAABaIgHAAIgGAAg");
	this.shape_32.setTransform(129.4,16.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUAtIgWggIgSAAIAAAgQgIACgHgCIAAhaIAjAAQAHAAAGADQAGACAFAEQAEAEACAFQACAFAAAHIgBAJIgEAGQgDAEgEADIgJAEIAZAiIgIABIgIgBgAgUABIAUAAQADAAAEgBQAEgBACgCQADgCABgEIABgGIgBgHQgBgEgDgCQgCgCgEgBQgEgCgDAAIgUAAg");
	this.shape_33.setTransform(123.4,16.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgJAvIgJgDIgJgFIgGgGIgHgGIgDgIIgDgJIgBgKIABgIIADgJIADgIIAHgHIAGgHIAJgEIAJgDIAJgBIAKABIAKADIAIAEIAHAHIAFAHIAFAIIACAJIABAIIgBAKIgCAJIgFAIIgFAGIgHAGIgIAFIgKADIgKABIgJgBgAgNggQgFADgFAFQgFAEgCAHQgCAGgBAHQABAIACAGQACAHAFAEQAFAGAFACQAHADAGAAQAHAAAGgDQAGgCAEgGQAFgEACgHQADgGAAgIQAAgHgDgGQgCgHgFgEQgEgFgGgDQgGgCgHAAQgGAAgHACg");
	this.shape_34.setTransform(113.2,16.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAuIAAhaQAHgCAIACIAABOIArAAQACAGgCAGg");
	this.shape_35.setTransform(100.9,16.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdAuIgJgYIgnAAIgJAYQgHABgIgBIAmhaQAFgCAGACIAmBaIgIAAIgHAAgAAPALIgPglIgOAlIAdAAg");
	this.shape_36.setTransform(91.9,16.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgmAuIAAhaQAGgCAFACIA0BBIAAhBQAHgCAHACIAABaQgFABgGgBIg0hDIAABDIgHAAIgHAAg");
	this.shape_37.setTransform(82.1,16.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJAvIgJgDIgJgFIgHgGIgGgGIgEgIIgCgJIgBgKIABgIIACgJIAEgIIAGgHIAHgHIAJgEIAJgDIAJgBIAKABIAJADIAJAEIAHAHIAFAHIAFAIIACAJIABAIIgBAKIgCAJIgFAIIgFAGIgHAGIgJAFIgJADIgKABIgJgBgAgNggQgGADgEAFQgFAEgCAHQgCAGgBAHQABAIACAGQACAHAFAEQAEAGAGACQAHADAGAAQAHAAAGgDQAGgCAFgGQAEgEACgHQADgGAAgIQAAgHgDgGQgCgHgEgEQgFgFgGgDQgGgCgHAAQgGAAgHACg");
	this.shape_38.setTransform(71.5,16.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAuIAAhaQAGgCAHACIAABaIgHAAIgGAAg");
	this.shape_39.setTransform(64.1,16.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOAuQgIgDgFgEQgBgBAAgGQAAgFABgCQAGAGAHACQAHADAHAAIAGgCQAEgBACgCQACgBABgCIACgHQAAgDgCgCQgBgCgDgCQgDgDgMgEIgKgDQgFgCgDgDQgEgCgCgFQgCgFAAgFQAAgGACgFQACgEAEgEQAEgDAFgCQAGgDAHAAQAHAAAHADQAGACAGADQABANgBACQgHgFgGgDQgHgCgGAAIgGABIgFACQgDACgBADIgBAEIABAGIAEAEIAPAHIAKADQAFACAEACQAEADACAFQACAFAAAGQAAAGgCAFQgDAFgEADQgEAEgGACQgGABgGABQgHAAgHgCg");
	this.shape_40.setTransform(58.3,16.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOAuQgIgDgFgEQgBgBAAgGQAAgFABgCQAGAGAHACQAHADAHAAIAGgCQAEgBACgCQACgBABgCIACgHQAAgDgCgCQgBgCgDgCQgDgDgMgEIgKgDQgFgCgDgDQgEgCgCgFQgCgFAAgFQAAgGACgFQACgEAEgEQAEgDAFgCQAGgDAHAAQAHAAAHADQAGACAGADQABANgBACQgHgFgGgDQgHgCgGAAIgGABIgFACQgDACgBADIgBAEIABAGIAEAEIAPAHIAKADQAFACAEACQAEADACAFQACAFAAAGQAAAGgCAFQgDAFgEADQgEAEgGACQgGABgGABQgHAAgHgCg");
	this.shape_41.setTransform(50.4,16.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIA9AAQABAFgBAHIgvAAIAAAaIAqAAQACAGgCAFIgqAAIAAAcIAvAAQABAHgBAGg");
	this.shape_42.setTransform(42.8,16.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeAtIAAhaIA9AAQABAGgBAGIgvAAIAAAcIAqAAQACAFgCAGIgqAAIAAAnIgHABIgHgBg");
	this.shape_43.setTransform(34.9,16.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJAvIgJgDIgJgFIgGgGIgHgGIgDgIIgDgJIgBgKIABgIIADgJIADgIIAHgHIAGgHIAJgEIAJgDIAJgBIAKABIAJADIAJAEIAHAHIAFAHIAFAIIACAJIABAIIgBAKIgCAJIgFAIIgFAGIgHAGIgJAFIgJADIgKABIgJgBgAgNggQgFADgFAFQgFAEgCAHQgCAGgBAHQABAIACAGQACAHAFAEQAFAGAFACQAHADAGAAQAHAAAGgDQAGgCAEgGQAFgEACgHQADgGAAgIQAAgHgDgGQgCgHgFgEQgEgFgGgDQgGgCgHAAQgGAAgHACg");
	this.shape_44.setTransform(25.1,16.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAUAtIgWggIgSAAIAAAgQgIACgHgCIAAhaIAjAAQAHAAAGADQAGACAFAEQAEAEACAFQACAFAAAHIgBAJIgEAGQgDAEgEADIgJAEIAZAiIgIABIgIgBgAgUABIAUAAQADAAAEgBQAEgBACgCQADgCABgEIABgGIgBgHQgBgEgDgCQgCgCgEgBQgEgCgDAAIgUAAg");
	this.shape_45.setTransform(15.4,16.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghAtIAAhaIAhAAQAIAAAGADQAHACAEAEQAEAEACAFQACAGAAAGQAAAGgCAGQgCAEgEAEQgEAEgHACQgGADgIAAIgSAAIAAAfIgHABIgIgBgAgSACIASAAIAJgBIAFgDIAEgGIACgHQgBgEgBgDIgEgGQgCgCgDgBQgEgCgFAAIgSAAg");
	this.shape_46.setTransform(6.5,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,6,267.7,43.2), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA0IAAhnIAlAAIALABIALADIAJAFIAIAGIAGAHIAGAJIADAKIABAKIgBALIgDAKIgGAJIgGAHIgIAGIgJAFIgLADIgLABgAgZAiIARAAQAHAAAGgBQAGgDAFgFQAEgEACgHQADgGAAgIQAAgHgDgGQgCgHgEgEQgFgFgGgCQgGgCgHAAIgRAAg");
	this.shape.setTransform(224.9,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA0IAAhnQAFgBAPABIAABWIAuAAIABAJIgBAIg");
	this.shape_1.setTransform(215,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIIgBAKIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_2.setTransform(205.6,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLA1IgKgDIgKgFIgIgGIgGgIQgDgFgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgIIAIgGIAKgFIAKgEIALgBIAMABIAKAEIAKAFIAIAGIAGAIQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAFIgGAIIgIAGIgKAFIgKADIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAHQgDAHAAAHQAAAJADAGQACAHAFAFQAFAFAGACQAGADAGAAQAHAAAGgDQAGgCAFgFQAFgFACgHQADgGAAgJQAAgHgDgHQgCgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(193.9,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXA0IgXhFIgWBFQgIACgJgCIgkhnQAGgBAQABIAWBIIAYhIQAHgBAJABIAXBIIAXhIQAGgBAPABIgkBnIgIABIgJgBg");
	this.shape_4.setTransform(179.4,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAJgCAJIgyAAIAAAYIAtAAQACAJgCAIIgtAAIAAAaIAyAAQACAKgCAIg");
	this.shape_5.setTransform(163.3,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZA0IAAgsIgxAAIAAAsQgPABgGgBIAAhnQAGgBAPABIAAAqIAxAAIAAgqQAGgBAPABIAABnIgNABIgIgBg");
	this.shape_6.setTransform(152.6,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgfAAQgCgJACgIIBQAAQADAIgDAJIgeAAIAABWIgLAAIgIAAg");
	this.shape_7.setTransform(142.2,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeA0Ig2hEIAABEQgPABgGgBIAAhnQAJgBAHABIA2BEIAAhEQAGgBAPABIAABnIgIABIgIgBg");
	this.shape_8.setTransform(127.9,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA0IAAhnQAFgBAOABIAABnIgLABIgIgBg");
	this.shape_9.setTransform(119.9,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRA0QgIgDgHgDQgBgCAAgJQAAgIABgBQAJAFAHADQAIADAHAAIAGgBIAGgDQAEgDAAgGQAAgDgBgDQgBgBgDgCQgEgDgMgEIgKgDIgKgGQgEgDgDgGQgCgFAAgGQAAgHACgFQACgHAFgEQAFgEAGgDQAIgDAHAAQAJAAAIADQAGACAGAEQACASgCACQgIgFgHgDQgHgDgHAAQgGAAgEAEQgEACAAAHIABAEIAEAFQAEACALAEIALAEQAFACAEACQAFAFACAEQADAGAAAIQAAAHgDAGQgCAGgGAEQgFAEgGACQgHACgHAAQgIAAgJgCg");
	this.shape_10.setTransform(109.4,33.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgfAAQgCgJACgIIBQAAQADAIgDAJIgeAAIAABWIgLAAIgIAAg");
	this.shape_11.setTransform(100.3,33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAJgCAJIgyAAIAAAYIAtAAQACAJgCAIIgtAAIAAAaIAyAAQACAKgCAIg");
	this.shape_12.setTransform(91.4,33.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATA0IgpgyIAAAyQgPABgGgBIAAhnQAGgBAPABIAAAwIAngwIAMgBIANABIgqAyIAsA1IgNABIgMgBg");
	this.shape_13.setTransform(81.7,33.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIIgBAKIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_14.setTransform(71.3,33.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeA0IgJgXIgpAAIgJAXQgPABgGgBIAqhnQAIgBAJABIAqBnIgNABIgIgBgAAOAMIgOgkIgNAkIAbAAg");
	this.shape_15.setTransform(60.3,33.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHA0IgZhCIgOBCQgPABgGgBIAZhnQAIgBAJABIAZBHIAahHQAIgBAJABIAZBnQgPABgGgBIgPhCIgYBCIgIABIgHgBg");
	this.shape_16.setTransform(47.3,33.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBA2IgLgEIgJgFIgJgHIgHgIIgEgJIgEgKIgBgLIABgKIAEgKIAEgKIAHgHIAJgHIAJgFIALgDIAMgBQAKAAAJACQAIACAGAFIAAAJQABAIgBABQgJgFgHgCQgIgDgIAAQgHAAgHADQgHACgEAFQgGAFgCAGQgDAIgBAHQABAIADAIQACAGAGAFQAEAFAHADQAHACAHABQAIgBAGgCIAAgiQAGAAAOAAIAAAtQgFAEgJACQgKACgLABIgMgBg");
	this.shape_17.setTransform(261.7,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeA0Ig2hEIAABEQgPABgGgBIAAhnQAIgCAJACIA1BEIAAhEQAGgBAPABIAABnIgIABIgIgBg");
	this.shape_18.setTransform(250.5,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJA0IAAhnQAFgBAOABIAABnIgLAAIgIAAg");
	this.shape_19.setTransform(242.5,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXA0IgXhEIgWBEQgIABgJgBIgkhnQAGgBAQABIAWBIIAYhIQAHgCAJACIAXBIIAXhIQAGgBAPABIgkBnIgIABIgJgBg");
	this.shape_20.setTransform(232.1,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA2IgKgEIgKgFIgIgHIgGgIQgDgEgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgHIAIgHIAKgFIAKgDIALgBIAMABIAKADIAKAFIAIAHIAGAHQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAEIgGAIIgIAHIgKAFIgKAEIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFACgGQADgIAAgIQAAgHgDgIQgCgGgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_21.setTransform(217.6,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIIgBAKIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_22.setTransform(206.6,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAA2IgMgEIgJgFIgJgHIgGgIIgGgJIgCgKIgBgLIABgKIACgKIAGgKIAGgHIAJgHIAJgFIAMgDIALgBQAKAAAJACQAHACAHAFIABAJQAAAIgBABQgJgFgHgCQgIgDgIAAQgIAAgFADQgIACgFAFQgFAFgCAGQgEAIAAAHQAAAIAEAIQACAGAFAFQAFAFAIADQAFACAIABQAHgBAIgCIAAgiQAFAAAOAAIAAAtQgFAEgJACQgKACgLABIgLgBg");
	this.shape_23.setTransform(195.4,12);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgeAAQgDgJADgIIBQAAQACAIgCAJIgfAAIAABWIgLAAIgIAAg");
	this.shape_24.setTransform(181.4,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRA0QgIgCgHgEQgBgDAAgHQAAgJABgBQAJAGAHACQAIADAHAAIAGgBIAGgCQAEgEAAgGQAAgDgBgCQgBgCgDgCQgEgCgMgEIgKgFIgKgEQgEgFgDgEQgCgGAAgHQAAgGACgFQACgGAFgFQAFgEAGgDQAIgDAHABQAJgBAIADQAGACAGAFQACARgCACQgIgFgHgDQgHgDgHAAQgGAAgEADQgEAEAAAFIABAGIAEADQAEADALAEIALADQAFADAEADQAFAEACAFQADAFAAAHQAAAIgDAGQgCAGgGAEQgFAEgGADQgHACgHAAQgIgBgJgCg");
	this.shape_25.setTransform(172.3,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAeA0IgJgXIgpAAIgJAXQgPABgGgBIAqhnQAIgBAJABIAqBnIgNABIgIgBgAAOAMIgOgkIgNAkIAbAAg");
	this.shape_26.setTransform(162.2,12);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAJIgyAAIAAAaIAtAAQACAIgCAJIgtAAIAAArIgMAAIgIAAg");
	this.shape_27.setTransform(152.3,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgfAAQgCgJACgIIBQAAQADAIgDAJIgeAAIAABWIgLAAIgIAAg");
	this.shape_28.setTransform(139,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRA0QgIgCgHgEQgBgDAAgHQAAgJABgBQAJAGAHACQAIADAHAAIAGgBIAGgCQAEgEAAgGQAAgDgBgCQgBgCgDgCQgEgCgMgEIgKgFIgKgEQgEgFgDgEQgCgGAAgHQAAgGACgFQACgGAFgFQAFgEAGgDQAIgDAHABQAJgBAIADQAGACAGAFQACARgCACQgIgFgHgDQgHgDgHAAQgGAAgEADQgEAEAAAFIABAGIAEADQAEADALAEIALADQAFADAEADQAFAEACAFQADAFAAAHQAAAIgDAGQgCAGgGAEQgFAEgGADQgHACgHAAQgIgBgJgCg");
	this.shape_29.setTransform(129.9,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLA2IgKgEIgKgFIgIgHIgGgIQgDgEgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgHIAIgHIAKgFIAKgDIALgBIAMABIAKADIAKAFIAIAHIAGAHQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAEIgGAIIgIAHIgKAFIgKAEIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFACgGQADgIAAgIQAAgHgDgIQgCgGgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_30.setTransform(119.1,12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHA0IgZhCIgOBCQgPABgGgBIAZhnQAIgCAJACIAZBGIAahGQAIgCAJACIAZBnQgPABgGgBIgPhCIgYBCIgIABIgHgBg");
	this.shape_31.setTransform(105.5,12);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_32.setTransform(90.2,12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAZA0IAAgsIgxAAIAAAsQgPABgGgBIAAhnQAGgBAPABIAAArIAxAAIAAgrQAGgBAPABIAABnIgNAAIgIAAg");
	this.shape_33.setTransform(79.6,12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKA0IAAhWIgdAAQgCgJACgIIBQAAQACAIgCAJIgfAAIAABWIgLAAIgJAAg");
	this.shape_34.setTransform(69.1,12);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAJIgyAAIAAAaIAtAAQACAIgCAJIgtAAIAAArIgMAAIgIAAg");
	this.shape_35.setTransform(56.4,12);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLA2IgKgEIgKgFIgIgHIgGgIQgDgEgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgHIAIgHIAKgFIAKgDIALgBIAMABIAKADIAKAFIAIAHIAGAHQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAEIgGAIIgIAHIgKAFIgKAEIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFACgGQADgIAAgIQAAgHgDgIQgCgGgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_36.setTransform(45.3,12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_37.setTransform(31,12);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAeA0Ig2hEIAABEQgPABgGgBIAAhnQAJgCAHACIA2BEIAAhEQAGgBAPABIAABnIgIABIgIgBg");
	this.shape_38.setTransform(20.4,12);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLA2IgKgEIgKgFIgIgHIgGgIQgDgEgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgHIAIgHIAKgFIAKgDIALgBIAMABIAKADIAKAFIAIAHIAGAHQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAEIgGAIIgIAHIgKAFIgKAEIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFACgGQADgIAAgIQAAgHgDgIQgCgGgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_39.setTransform(8.3,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,281,44.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaAtIgvg7IAAA7QgNABgFgBIAAhZQAHgCAHACIAvA7IAAg7QAFgBANABIAABZIgHABIgHgBg");
	this.shape.setTransform(252.4,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAtIAAhZQAFgBAMABIAABZIgKABIgHgBg");
	this.shape_1.setTransform(245.4,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaAuIgIgUIgjAAIgIAUQgOABgFgBIAlhaQAHgCAIACIAlBaIgMAAIgHAAgAANAKIgNgfIgMAfIAZAAg");
	this.shape_2.setTransform(238.5,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAtIAAgmIgrAAIAAAmQgNABgFgBIAAhZQAFgBANABIAAAlIArAAIAAglQAFgBANABIAABZIgLABIgHgBg");
	this.shape_3.setTransform(228.5,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAuIgJgCIgJgFIgHgFIgGgIIgEgIIgDgJIgBgJIABgJIADgJIAEgIIAGgHIAHgFIAJgFIAJgCIALgBQAIAAAIACQAHACAFADIABAJQAAAGgBABQgHgEgHgCQgHgDgGAAQgHAAgFADQgGACgFAEQgEAFgDAGQgCAGAAAGQAAAHACAHQADAFAEAFQAFAEAGACQAFADAHAAQAGAAAHgDQAHgCAHgEQABAAAAAIIgBAIQgFADgHACQgIACgIAAIgLgBg");
	this.shape_4.setTransform(218.4,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAtIgjgsIAAAsQgNABgFgBIAAhaQAFgBANABIAAAqIAigqIALAAIALAAIglAsIAmAuIgLABIgLgBg");
	this.shape_5.setTransform(209.4,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAuIgJgCIgJgFIgHgFIgFgIIgEgIIgDgJIgBgJIABgJIADgJIAEgIIAFgHIAHgFIAJgFIAJgCIAJgBIAKABIAKACIAIAFIAHAFIAGAHIAEAIIACAJIABAJIgBAJIgCAJIgEAIIgGAIIgHAFIgIAFIgKACIgKABIgJgBgAgKgdQgGACgEAEQgEAFgCAGQgCAGAAAGQAAAHACAHQACAFAEAFQAEAEAGACQAFADAFAAQAGAAAGgDQAFgCAEgEQAEgFACgFQADgHAAgHQAAgGgDgGQgCgGgEgFQgEgEgFgCQgGgDgGAAQgFAAgFADg");
	this.shape_6.setTransform(199,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAAhaQAFgBANABIAABLIApAAIAAAHIAAAIg");
	this.shape_7.setTransform(190,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAtIAAhZIAlAAQAGAAAGABQAGACADADQAEADACAFQACAEABAFIgBAHIgEAFQgCAFgHAEQAEAAADACIAFAFIADAGIAAAHQAAAGgBAEQgDAGgEACQgEAEgGACQgFABgHAAgAgQAeIASAAQAHAAAEgDQADgDAAgGQAAgGgDgDQgEgDgHAAIgSAAgAgQgGIARAAQAHAAADgDQADgDAAgFQAAgGgEgEQgDgCgGAAIgRAAg");
	this.shape_8.setTransform(182,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZAtIgug7IAAA7QgNABgFgBIAAhZQAHgCAHACIAvA7IAAg7QAFgBANABIAABZIgHABIgIgBg");
	this.shape_9.setTransform(169.1,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAuIgJgCIgJgFIgHgFIgFgIIgEgIIgDgJIgBgJIABgJIADgJIAEgIIAFgHIAHgFIAJgFIAJgCIAJgBIAKABIAKACIAIAFIAHAFIAGAHIAEAIIACAJIABAJIgBAJIgCAJIgEAIIgGAIIgHAFIgIAFIgKACIgKABIgJgBgAgKgdQgGACgEAEQgEAFgCAGQgCAGAAAGQAAAHACAHQACAFAEAFQAEAEAGACQAFADAFAAQAGAAAGgDQAFgCAEgEQAEgFACgFQADgHAAgHQAAgGgDgGQgCgGgEgFQgEgEgFgCQgGgDgGAAQgFAAgFADg");
	this.shape_10.setTransform(158.5,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAtIAAhZIAgAAIAKAAIAJADIAIAEIAHAFIAGAHIAEAIIADAIIABAJIgBAJIgDAJIgEAIIgGAHIgHAFIgIAEIgJACIgKABgAgVAeIAOAAQAHAAAFgCQAFgBAEgEQAEgFACgFQACgGAAgHQAAgGgCgGQgCgFgEgEQgEgFgFgBQgFgCgHAAIgOAAg");
	this.shape_11.setTransform(145,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIA+AAQABAHgBAIIgsAAIAAAWIAnAAQACAHgCAHIgnAAIAAAXIAsAAQABAIgBAHg");
	this.shape_12.setTransform(136.2,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAtQgIgCgGgDQAAgCgBgHQABgHAAgBQAIAFAHACQAHADAFAAIAGgBIAEgDQAFgDAAgFIgBgEIgEgEIgOgFIgJgFQgFgCgDgBQgFgDgCgFQgCgFAAgFQAAgHACgEQACgGAFgDQADgEAHgCQAFgCAHAAQAHAAAIACQAFACAFADQACAPgCADQgGgGgGgCQgHgDgGAAQgFABgEADQgDACAAAGIABAEIADAEIAOAFIAJAEQAFACAEABQADADADAFQACAFAAAGQAAAHgCAGQgDAFgEAEQgFADgGACQgGABgGAAQgHAAgHgCg");
	this.shape_13.setTransform(128.1,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaAuIgIgUIgjAAIgIAUQgOABgFgBIAlhaQAHgCAIACIAlBaIgMAAIgHAAgAANAKIgNgfIgMAfIAZAAg");
	this.shape_14.setTransform(119.2,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAtIAAhZIAlAAQAGAAAGABQAGACADADQAEADACAFQADAEAAAFIgBAHIgEAFQgCAFgHAEQAEAAADACIAEAFIAEAGIABAHQAAAGgCAEQgDAGgEACQgEAEgFACQgHABgHAAgAgQAeIASAAQAHAAADgDQAEgDAAgGQAAgGgEgDQgDgDgHAAIgSAAgAgQgGIARAAQAHAAADgDQADgDAAgFQAAgGgEgEQgDgCgGAAIgRAAg");
	this.shape_15.setTransform(110.3,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIA+AAQABAHgBAIIgsAAIAAAWIAnAAQACAHgCAHIgnAAIAAAXIAsAAQABAIgBAHg");
	this.shape_16.setTransform(98.8,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAuIgJgCIgJgFIgHgFIgGgIIgEgIIgDgJIgBgJIABgJIADgJIAEgIIAGgHIAHgFIAJgFIAJgCIALgBQAIAAAIACQAHACAFADIABAJQAAAGgBABQgHgEgHgCQgHgDgGAAQgHAAgFADQgGACgFAEQgEAFgDAGQgCAGAAAGQAAAHACAHQADAFAEAFQAFAEAGACQAFADAHAAQAGAAAHgDQAHgCAHgEQABAAAAAIIgBAIQgFADgHACQgIACgIAAIgLgBg");
	this.shape_17.setTransform(89.6,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaAuIgIgUIgjAAIgIAUQgOABgFgBIAlhaQAHgCAIACIAlBaIgMAAIgHAAgAANAKIgNgfIgMAfIAZAAg");
	this.shape_18.setTransform(79.9,15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAuIAAhaQAFgBANABIAABLIAoAAIABAHIgBAIg");
	this.shape_19.setTransform(71.5,15.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAtIAAhaIAiAAQAHAAAGADQAHACAEAEQAEAEADAFQACAGAAAGQAAAHgCAFQgDAFgEAEQgEAEgHACQgGACgHAAIgQAAIAAAfIgLABIgHgBgAgPAAIAPAAIAHgBIAEgDIADgEQACgDAAgEQAAgDgCgDIgDgFIgEgDIgHgBIgPAAg");
	this.shape_20.setTransform(63.3,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAtIAAhLIgbAAQgBgHABgIIBGAAQACAIgCAHIgaAAIAABLIgKABIgHgBg");
	this.shape_21.setTransform(54.7,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIA+AAQABAHgBAIIgsAAIAAAWIAnAAQACAHgCAHIgnAAIAAAXIAsAAQABAIgBAHg");
	this.shape_22.setTransform(47,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQAtIgjgsIAAAsQgNABgFgBIAAhaQAFgBANABIAAAqIAigqIALAAIALAAIglAsIAmAuIgLABIgLgBg");
	this.shape_23.setTransform(38.5,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAtIgVggIgOAAIAAAgQgNABgFgBIAAhaIAkAAQAHAAAGACQAGADAFAEQAEAEACAFQACAGABAGIgBAJIgFAGIgFAHIgIAEIAWAiIgMABIgHgBgAgSgBIASAAIAFgBIAFgCIADgFIABgGIgBgGIgDgFIgFgDIgFgBIgSAAg");
	this.shape_24.setTransform(29.4,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaAuIgIgUIgjAAIgIAUQgOABgFgBIAlhaQAHgCAIACIAlBaIgMAAIgHAAgAANAKIgNgfIgMAfIAZAAg");
	this.shape_25.setTransform(19.7,15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAtIgVg5IgOA5QgMABgFgBIAVhZQAIgCAHACIAWA9IAWg9QAIgCAIACIAVBZQgMABgGgBIgNg5IgVA5IgHABIgGgBg");
	this.shape_26.setTransform(8.4,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKA7IAAgqIgshKQAGgCATACIAdA1IAeg1QAHgCASACIgrBKIAAAqIgNAAIgJAAg");
	this.shape_27.setTransform(250.9,-3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLA6IAAhgIgiAAQgCgKACgKIBbAAQACAKgCAKIgiAAIAABgIgNABIgKgBg");
	this.shape_28.setTransform(239.5,-3.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAhA6Ig8hNIAABNQgRABgHgBIAAh0QAKgBAJABIA8BNIAAhNQAHgBARABIAAB0IgKABIgJgBg");
	this.shape_29.setTransform(227.8,-3.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTA5QgKgDgGgGQgDgDgCgEIgFgJQgCgGgBgQIAAhEQAHgCARACIAABHQAAAHACAFQABAFADADQAEAEAEACQAFACAFAAQAGAAAFgCQAEgCAEgEQADgDABgFQACgFAAgHIAAhHQAHgCARACIAABEQgBAQgCAGIgFAJQgCAEgDADQgGAGgJADQgJADgMAAQgLAAgIgDg");
	this.shape_30.setTransform(215.1,-3.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMA8QgHgBgFgDIgLgGQgFgDgEgEIgHgJIgFgKIgEgMIgBgMIABgMIAEgLIAFgKIAHgJQAEgFAFgDIALgFIAMgEIAMgBIANABIAMAEIALAFQAFADAEAFIAHAJIAFAKIAEALIABAMIgBAMIgEAMIgFAKIgHAJQgEAEgFADIgLAGIgMAEIgNABIgMgBgAgOgmQgHADgFAFQgFAHgDAHQgDAIAAAIQAAAKADAHQADAIAFAFQAFAGAHADQAHADAHAAQAIAAAHgDQAHgDAFgGQAFgFADgIQADgHAAgKQAAgIgDgIQgDgHgFgHQgFgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_31.setTransform(201.8,-3.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgrA6IAAh0IAvAAQAIAAAIADQAGACAFAEQAFAEADAFQADAGgBAHIgBAJIgDAHQgFAGgHAEQAFABADACQAEADACAEQADADABAFIACAJQgBAHgDAGQgCAHgGADQgEAFgIACQgHACgKAAgAgVAnIAYAAQAJAAAEgEQAEgFABgHQgBgIgEgEQgEgDgJAAIgYAAgAgVgIIAXAAQAHAAAFgEQAEgEAAgHQAAgHgFgEQgEgEgHAAIgXAAg");
	this.shape_32.setTransform(189.6,-3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBA8QgHgBgGgDIgKgGQgGgDgEgEQgEgEgDgFIgGgKIgDgMIgBgMIABgMIADgLQACgGAEgEQADgFAEgEQAEgFAGgDIAKgFIANgEIANgBQAMAAAKADQAJACAGAEQABADAAAIQAAAJgBABQgJgFgJgDQgIgDgKAAQgJAAgGADQgIADgFAFQgHAHgCAHQgEAIAAAIQAAAJAEAJQACAHAHAFQAFAGAIADQAGADAJAAQAJAAAIgDIAAglQAGgCAQACIAAAyQgGAEgKACQgMADgMAAIgNgBg");
	this.shape_33.setTransform(172.9,-3.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTA5QgKgDgGgGQgDgDgCgEIgFgJQgCgGgBgQIAAhEQAHgCARACIAABHQAAAHACAFQABAFADADQAEAEAEACQAFACAFAAQAGAAAFgCQAEgCAEgEQADgDABgFQACgFAAgHIAAhHQAHgCARACIAABEQgBAQgCAGIgFAJQgCAEgDADQgGAGgJADQgJADgMAAQgLAAgIgDg");
	this.shape_34.setTransform(160.5,-3.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgrA6IAAh0IAvAAQAIAAAIADQAGACAFAEQAFAEADAFQACAGAAAHIgBAJIgDAHQgEAGgIAEQAEABAEACQAEADACAEQADADABAFIACAJQAAAHgEAGQgCAHgGADQgFAFgHACQgHACgKAAgAgVAnIAYAAQAIAAAFgEQAEgFAAgHQAAgIgEgEQgEgDgKAAIgXAAgAgVgIIAXAAQAHAAAFgEQAEgEAAgHQAAgHgFgEQgEgEgHAAIgXAAg");
	this.shape_35.setTransform(149.2,-3.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLA6IAAhgIgiAAQgCgKACgKIBbAAQACAKgCAKIgiAAIAABgIgNABIgKgBg");
	this.shape_36.setTransform(133.7,-3.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTA6QgKgCgHgEQgBgDAAgJQAAgJABgCQAKAGAIADQAJAEAIAAQAEAAADgCIAGgCQAFgEAAgHQAAgDgBgDIgFgEQgEgDgOgEIgLgFQgHgDgEgDQgFgEgDgFQgDgGAAgJQAAgHADgGQADgGAFgGQAFgEAIgEQAIgCAIAAQAKAAAJACQAHADAHAEQACAVgCACQgKgGgHgDQgJgEgHAAQgHAAgFAEQgEAEAAAHQAAADABACIAFAFQAEACANAFIAMAEIALAGQAFAEADAFQADAHAAAJQAAAIgDAGQgEAIgFAEQgGAEgIADQgHACgIAAQgKAAgJgDg");
	this.shape_37.setTransform(123.5,-3.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVA6IgagpIgSAAIAAApQgRABgGgBIAAh0IAuAAQAIAAAJADQAHADAGAFQAGAFADAHQADAHAAAIQAAAGgCAGIgEAJQgEAEgEAEIgLAFIAeAsIgQABIgKgBgAgXgBIAWAAIAHgBIAHgEIAEgGIABgIIgBgHIgEgGQgDgDgEgBQgDgBgEAAIgWAAg");
	this.shape_38.setTransform(113.2,-3.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLA7IAAh0QAHgCAQACIAAB0IgOAAIgJAAg");
	this.shape_39.setTransform(104.6,-3.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgoA6IAAh0IBQAAQABAKgBAKIg4AAIAAAdIAyAAQACAJgCAKIgyAAIAAAwIgPABIgJgBg");
	this.shape_40.setTransform(97.3,-3.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgoA6IAAh0IBQAAQABAKgBAKIg4AAIAAAdIAyAAQACAJgCAJIgyAAIAAAeIA4AAQABAKgBAJg");
	this.shape_41.setTransform(82.8,-3.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAcA7IAAgyIg3AAIAAAyQgRABgHgBIAAh0QAHgCARACIAAAwIA3AAIAAgwQAHgCARACIAAB0IgOAAIgKAAg");
	this.shape_42.setTransform(70.8,-3.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLA6IAAhgIgiAAQgCgKACgKIBbAAQACAKgCAKIgiAAIAABgIgNABIgKgBg");
	this.shape_43.setTransform(59,-3.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgLA6IAAhgIgiAAQgCgKACgKIBbAAQACAKgCAKIgiAAIAABgIgNABIgKgBg");
	this.shape_44.setTransform(44.1,-3.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgoA6IAAh0IBQAAQABAKgBAKIg4AAIAAAdIAyAAQACAJgCAJIgyAAIAAAeIA4AAQABAKgBAJg");
	this.shape_45.setTransform(34.1,-3.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgoA6IAAh0IBQAAQABAKgBAKIg4AAIAAAdIAyAAQACAJgCAJIgyAAIAAAeIA4AAQABAKgBAJg");
	this.shape_46.setTransform(23.9,-3.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgIA6IgchKIgQBKQgRABgGgBIAbh0QAKgCAKACIAcBQIAdhQQAKgCAKACIAbB0QgQABgHgBIgQhKIgcBKIgJABIgIgBg");
	this.shape_47.setTransform(10.2,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,-17,259.6,42.4), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C5C9").s().p("AgKBBIgdhTIgTBTQgTABgGgBIAeiBQALgCALACIAfBYIAghYQALgCALACIAfCBQgTABgHgBIgShTIgeBTIgLABIgKgBg");
	this.shape.setTransform(197,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00C5C9").s().p("AgsBBIAAiBIBYAAQACALgCALIg+AAIAAAfIA4AAQACALgCAKIg4AAIAAAhIA+AAQACALgCALg");
	this.shape_1.setTransform(182.6,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C5C9").s().p("AgMBBIAAhsIgmAAQgCgKACgLIBlAAQACALgCAKIgmAAIAABsIgPAAIgKAAg");
	this.shape_2.setTransform(170.7,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C5C9").s().p("AgVBBQgLgDgIgFQgBgDAAgJQAAgLABgCQALAHAJADQAKAFAJAAQAEgBAEgBIAHgDQAFgFAAgHQAAgEgCgDQgBgCgDgCQgFgEgPgEIgOgGQgHgDgEgDQgGgFgDgGQgDgGAAgJQAAgJADgGQADgIAFgFQAGgGAJgDQAJgDAJAAQALAAAKADQAIADAIAFQACAWgCACQgLgHgIgCQgKgEgIgBQgIAAgFAFQgFAEAAAHQAAAEABADQACACADACQAFAEAPAEIANAFIAMAHQAGAEADAHQADAHAAAJQAAAJgDAJQgEAGgGAGQgGAFgJADQgIACgJAAQgLAAgKgDg");
	this.shape_3.setTransform(159.3,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00C5C9").s().p("AgMBBIAAguIgwhTQAHgBAUABIAhA7IAhg7QAIgBAUABIgwBTIAAAuIgPABIgKgBg");
	this.shape_4.setTransform(147,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00C5C9").s().p("AgVBBQgLgDgIgFQgBgDAAgJQAAgLABgCQALAHAJADQAKAFAJAAQAEgBAEgBIAHgDQAFgFAAgHQAAgEgCgDQgBgCgDgCQgFgEgPgEIgOgGQgHgDgEgDQgGgFgDgGQgDgGAAgJQAAgJADgGQADgIAFgFQAGgGAJgDQAJgDAJAAQALAAAKADQAIADAIAFQACAWgCACQgLgHgIgCQgKgEgIgBQgIAAgFAFQgFAEAAAHQAAAEABADQACACADACQAFAEAPAEIANAFIAMAHQAGAEADAHQADAHAAAJQAAAJgDAJQgEAGgGAGQgGAFgJADQgIACgJAAQgLAAgKgDg");
	this.shape_5.setTransform(134.7,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00C5C9").s().p("AgOBCQgHAAgGgDIgMgGIgKgJIgIgKIgGgLIgEgOIgBgNIABgNIAEgMIAGgMIAIgKIAKgJIAMgFQAGgEAHgBQAHgBAHAAIAPABQAGABAHAEIAMAFIAKAJIAIAKIAGAMQACAGABAGQACAHAAAGQAAAHgCAGQgBAIgCAGIgGALIgIAKIgKAJIgMAGQgHADgGAAIgPACQgHAAgHgCgAgQgqQgHADgGAHQgGAFgDAJQgDAJAAAJQAAALADAIQADAJAGAFQAGAHAHADQAIADAIABQAJgBAHgDQAIgDAGgHQAGgFADgJQADgIAAgLQAAgJgDgJQgDgJgGgFQgGgHgIgDQgHgEgJAAQgIAAgIAEg");
	this.shape_6.setTransform(121.2,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00C5C9").s().p("AAABCQgHAAgHgDIgMgGIgKgJQgFgEgEgGIgGgLIgEgOIgBgNIABgNIAEgMIAGgMQAEgGAFgEIAKgJIAMgFQAHgEAHgBQAHgBAIAAQAMAAAMADQAJADAIAFQABACAAAKQAAAKgBACQgKgHgKgDQgKgEgJAAQgKAAgIAEQgIADgHAHQgGAFgEAJQgDAJAAAJQAAALADAIQAEAJAGAFQAHAHAIADQAIADAKABQAJgBAKgDQAKgDAKgHQABACAAAKQAAAKgBACQgIAFgJADQgMADgMAAQgIAAgHgCg");
	this.shape_7.setTransform(106.2,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00C5C9").s().p("AgsBBIAAiBIBYAAQACALgCALIg+AAIAAAfIA4AAQACALgCAKIg4AAIAAAhIA+AAQACALgCALg");
	this.shape_8.setTransform(94.2,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00C5C9").s().p("AAlBBIhDhWIAABWQgTABgHgBIAAiBQAKgCAKACIBEBVIAAhVQAHgBASABIAACBIgKABIgKgBg");
	this.shape_9.setTransform(76.1,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C5C9").s().p("AgsBBIAAiBIBYAAQACALgCALIg+AAIAAAfIA4AAQACALgCAKIg4AAIAAAhIA+AAQACALgCALg");
	this.shape_10.setTransform(63.7,14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C5C9").s().p("AAYBBIg0g/IAAA/QgSABgIgBIAAiBQAIgBASABIAAA7IAxg7IAQgBIAPABIg0A/IA3BCIgQABIgPgBg");
	this.shape_11.setTransform(51.6,14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00C5C9").s().p("AAABCQgHAAgHgDIgMgGIgKgJQgFgEgEgGIgGgLIgEgOIgBgNIABgNIAEgMIAGgMQAEgGAFgEIAKgJIAMgFQAHgEAHgBQAHgBAIAAQAMAAAMADQAKADAHAFQABACAAAKQAAAKgBACQgKgHgKgDQgKgEgJAAQgLAAgHAEQgIADgHAHQgHAFgDAJQgEAJABAJQgBALAEAIQADAJAHAFQAHAHAIADQAHADALABQAJgBAKgDQAKgDAKgHQABACAAAKQAAAKgBACQgHAFgKADQgMADgMAAQgIAAgHgCg");
	this.shape_12.setTransform(37.4,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00C5C9").s().p("AAmBBIgMgdIgzAAIgLAdQgUACgHgCIA1iBQAKgCALACIA1CBIgQABIgKgBgAASAPIgSgtIgRAtIAjAAg");
	this.shape_13.setTransform(23.6,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00C5C9").s().p("AAgBBIAAg3Ig+AAIAAA3QgTABgHgBIAAiBQAHgBATABIAAA1IA+AAIAAg1QAHgBASABIAACBIgPABIgKgBg");
	this.shape_14.setTransform(9.3,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,208.3,28), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBA1IgLgDIgJgFIgJgHIgHgHIgEgKIgEgKIgBgLIABgKIAEgKIAEgJIAHgIIAJgHIAJgFIALgEIAMgBQAKAAAJADQAHADAHADIAAAKQABAIgBABQgIgFgIgDQgIgCgIAAQgHAAgHACQgGADgFAFQgGAFgCAGQgDAIAAAHQAAAIADAIQACAGAGAFQAFAFAGADQAHACAHAAQAIAAAGgCIAAgiQAGgBAPABIAAAtQgGADgKADQgKADgKgBIgMgBg");
	this.shape.setTransform(208.8,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeA0Ig2hEIAABEQgPABgGgBIAAhnQAJgBAHABIA2BEIAAhEQAGgBAPABIAABnIgIABIgIgBg");
	this.shape_1.setTransform(197.6,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJA0IAAhnQAFgBAOABIAABnIgLABIgIgBg");
	this.shape_2.setTransform(189.6,31.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA0IgZhCIgOBCQgPABgGgBIAZhnQAIgBAJABIAZBGIAahGQAIgBAJABIAZBnQgPABgGgBIgPhCIgYBCIgIABIgHgBg");
	this.shape_3.setTransform(180,31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA1IgKgDIgKgFIgIgHIgGgHQgDgFgCgFIgDgKIgBgLIABgKIADgKQACgFADgEIAGgIIAIgHIAKgFIAKgEIALgBIAMABIAKAEIAKAFIAIAHIAGAIQADAEACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAFIgGAHIgIAHIgKAFIgKADIgMABIgLgBgAgMgiQgGADgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAGACQAGADAGAAQAHAAAGgDQAGgCAFgFQAFgFACgGQADgIAAgIQAAgHgDgIQgCgGgFgFQgFgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_4.setTransform(166.4,31.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAA1IgLgDIgKgFIgIgHIgHgHIgFgKIgDgKIgBgLIABgKIADgKIAFgJIAHgIIAIgHIAKgFIALgEIAMgBQAKAAAJADQAHADAHADIAAAKQABAIgBABQgJgFgHgDQgIgCgIAAQgIAAgGACQgHADgFAFQgFAFgDAGQgDAIAAAHQAAAIADAIQADAGAFAFQAFAFAHACQAGADAIAAQAIAAAIgDQAHgCAJgFQABABgBAIIAAAKIgOAGQgJADgKgBIgMgBg");
	this.shape_5.setTransform(154.4,31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA0QgIgDgHgDQgBgCAAgJQAAgIABgBQAJAFAHADQAIADAHAAIAGgBIAGgCQAEgEAAgGQAAgDgBgDQgBgCgDgBQgEgDgMgEIgKgDIgKgGQgEgEgDgFQgCgEAAgHQAAgHACgGQACgFAFgFQAFgFAGgCQAIgCAHgBQAJABAIACQAGADAGADQACASgCACQgIgGgHgCQgHgDgHAAQgGAAgEADQgEAEAAAFIABAGIAEADQAEADALAEIALAEQAFACAEACQAFAFACAEQADAGAAAIQAAAHgDAGQgCAGgGAEQgFAEgGADQgHABgHAAQgIABgJgDg");
	this.shape_6.setTransform(140.8,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJA0IAAhnQAFgBAOABIAABnIgLABIgIgBg");
	this.shape_7.setTransform(134.1,31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA0QgIgDgHgDQgBgCAAgJQAAgIABgBQAJAFAHADQAIADAHAAIAGgBIAGgCQAEgEAAgGQAAgDgBgDQgBgCgDgBQgEgDgMgEIgKgDIgKgGQgEgEgDgFQgCgEAAgHQAAgHACgGQACgFAFgFQAFgFAGgCQAIgCAHgBQAJABAIACQAGADAGADQACASgCACQgIgGgHgCQgHgDgHAAQgGAAgEADQgEAEAAAFIABAGIAEADQAEADALAEIALAEQAFACAEACQAFAFACAEQADAGAAAIQAAAHgDAGQgCAGgGAEQgFAEgGADQgHABgHAAQgIABgJgDg");
	this.shape_8.setTransform(123.6,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAJgCAIIgyAAIAAAZIAtAAQACAJgCAIIgtAAIAAAaIAyAAQACAKgCAIg");
	this.shape_9.setTransform(114.9,31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAA1IgLgDIgKgFIgIgHIgHgHIgFgKIgDgKIgBgLIABgKIADgKIAFgJIAHgIIAIgHIAKgFIALgEIAMgBQAKAAAJADQAHADAHADIAAAKQABAIgBABQgJgFgHgDQgIgCgIAAQgIAAgGACQgHADgFAFQgFAFgDAGQgDAIAAAHQAAAIADAIQADAGAFAFQAFAFAHACQAGADAIAAQAIAAAIgDQAHgCAJgFQABABgBAIIAAAKIgOAGQgJADgKgBIgMgBg");
	this.shape_10.setTransform(104.4,31.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA0IAAhnQAFgBAOABIAABnIgLABIgIgBg");
	this.shape_11.setTransform(96.7,31.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA0IgphnQAFgBAQABIAcBIIAdhIQAGgBAQABIgrBnIgIABIgIgBg");
	this.shape_12.setTransform(88.9,31.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIIgBAKIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_13.setTransform(78.6,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAJgCAIIgyAAIAAAZIAtAAQACAJgCAIIgtAAIAAAaIAyAAQACAKgCAIg");
	this.shape_14.setTransform(69,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRA0QgIgDgHgDQgBgCAAgJQAAgIABgBQAJAFAHADQAIADAHAAIAGgBIAGgCQAEgEAAgGQAAgDgBgDQgBgCgDgBQgEgDgMgEIgKgDIgKgGQgEgEgDgFQgCgEAAgHQAAgHACgGQACgFAFgFQAFgFAGgCQAIgCAHgBQAJABAIACQAGADAGADQACASgCACQgIgGgHgCQgHgDgHAAQgGAAgEADQgEAEAAAFIABAGIAEADQAEADALAEIALAEQAFACAEACQAFAFACAEQADAGAAAIQAAAHgDAGQgCAGgGAEQgFAEgGADQgHABgHAAQgIABgJgDg");
	this.shape_15.setTransform(59.7,31.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJA0IAAglIgnhCQAGgBAQABIAaAvIAbgvQAGgBAQABIgmBCIAAAlIgMAAIgIAAg");
	this.shape_16.setTransform(256.6,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgfAAQgCgJACgIIBQAAQADAIgDAJIgeAAIAABWIgLAAIgIAAg");
	this.shape_17.setTransform(246.6,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJA0IAAhnQAFgBAOABIAABnIgLAAIgIAAg");
	this.shape_18.setTransform(239.6,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIQAAAFgBAFIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_19.setTransform(232.6,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAzQgIgDgGgFIgFgHQgCgEgBgEQgCgFgBgOIAAg9QAFgBAQABIAAA/QAAAGABAEIAEAIQADADAFADQAEABAEAAQAFAAAFgBIAHgGIAEgIQABgEAAgGIAAg/QAGgBAPABIAAA9QgBAOgBAFIgEAIIgFAHQgGAFgIADQgIADgKAAQgJAAgIgDg");
	this.shape_20.setTransform(221.7,12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAA2IgLgEIgKgFIgIgHIgHgIIgFgJIgDgKIgBgLIABgKIADgKIAFgKIAHgHIAIgHIAKgFIALgDIAMgBQAKAAAJACQAHACAHAFIAAAJQABAIgBABQgJgFgHgCQgIgDgIAAQgIAAgGADQgHACgFAFQgFAFgDAGQgDAIAAAHQAAAIADAIQADAGAFAFQAFAFAHADQAGACAIAAQAIAAAIgCQAHgDAJgFQABABgBAIIAAAKIgOAGQgJACgKABIgMgBg");
	this.shape_21.setTransform(210.5,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_22.setTransform(200.9,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRA0QgIgCgHgEQgBgDAAgHQAAgJABgBQAJAGAHACQAIADAHAAIAGgBIAGgCQAEgEAAgGQAAgDgBgCQgBgCgDgCQgEgCgMgEIgKgFIgKgEQgEgFgDgEQgCgGAAgHQAAgGACgFQACgGAFgFQAFgEAGgDQAIgDAHABQAJgBAIADQAGACAGAFQACARgCACQgIgFgHgDQgHgDgHAAQgGAAgEADQgEAEAAAFIABAGIAEADQAEADALAEIALADQAFADAEADQAFAEACAFQADAFAAAHQAAAIgDAGQgCAGgGAEQgFAEgGADQgHACgHAAQgIgBgJgCg");
	this.shape_23.setTransform(191.6,12);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIIgBAKIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_24.setTransform(182.4,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_25.setTransform(172.8,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnA0IAAhnIArAAQAHAAAGACQAGACAFAEQAEADACAFQADAFAAAGIgBAIIgDAGQgEAGgHADQAFABADACIAFAGIAEAGIABAJQgBAGgCAGQgCAGgFADQgFAEgGACQgHACgIAAgAgSAjIAVAAQAHAAAEgEQAEgEABgHQgBgGgEgDQgEgEgHAAIgVAAgAgSgHIAUAAQAHAAAEgDQADgEAAgHQAAgGgEgDQgEgDgGAAIgUAAg");
	this.shape_26.setTransform(163.4,12);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJA0IAAglIgnhCQAGgBAQABIAaAvIAbgvQAGgBAQABIgmBCIAAAlIgMAAIgIAAg");
	this.shape_27.setTransform(152.7,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAA2IgLgEIgKgFIgIgHIgHgIIgFgJIgDgKIgBgLIABgKIADgKIAFgKIAHgHIAIgHIAKgFIALgDIAMgBQAKAAAJACQAHACAHAFIAAAJQABAIgBABQgJgFgHgCQgIgDgIAAQgIAAgGADQgHACgFAFQgFAFgDAGQgDAIAAAHQAAAIADAIQADAGAFAFQAFAFAHADQAGACAIAAQAIAAAIgCQAHgDAJgFQABABgBAIIAAAKIgOAGQgJACgKABIgMgBg");
	this.shape_28.setTransform(141.6,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAJIgyAAIAAAaIAtAAQACAIgCAJIgtAAIAAArIgMAAIgIAAg");
	this.shape_29.setTransform(128.2,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLA2IgKgEIgKgFIgIgHIgGgIQgDgEgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgHIAIgHIAKgFIAKgDIALgBIAMABIAKADIAKAFIAIAHIAGAHQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAEIgGAIIgIAHIgKAFIgKAEIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFACgGQADgIAAgIQAAgHgDgIQgCgGgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_30.setTransform(117.1,12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAeA0IgJgXIgpAAIgJAXQgPABgGgBIAqhnQAIgBAJABIAqBnIgNABIgIgBgAAOAMIgOgkIgNAkIAbAAg");
	this.shape_31.setTransform(101.3,12);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AATA0IgYglIgPAAIAAAlQgPABgGgBIAAhnIApAAQAHAAAIACQAHADAFAEQAFAFADAGQACAGAAAIIgBAKIgEAIIgHAHQgFADgFABIAbAoIgOAAIgJAAgAgUgBIATAAQADAAAEgBQADgBACgCQADgCABgDQABgDAAgEQAAgEgBgDQgBgDgDgDQgCgCgDgBIgHgBIgTAAg");
	this.shape_32.setTransform(90.9,12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_33.setTransform(81.3,12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXA0IgXhEIgWBEQgJABgIgBIgkhnQAGgBAPABIAYBIIAWhIQAIgCAIACIAYBIIAXhIQAGgBAPABIgjBnIgJABIgJgBg");
	this.shape_34.setTransform(64.5,12);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_35.setTransform(52.2,12);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdA0Ig1hEIAABEQgPABgGgBIAAhnQAIgCAJACIA1BEIAAhEQAGgBAPABIAABnIgIABIgJgBg");
	this.shape_36.setTransform(41.6,12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAbIAyAAQACAIgCAJg");
	this.shape_37.setTransform(27.8,12);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAZA0IAAgsIgxAAIAAAsQgPABgGgBIAAhnQAGgBAPABIAAArIAxAAIAAgrQAGgBAPABIAABnIgNAAIgIAAg");
	this.shape_38.setTransform(17.2,12);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgfAAQgCgJACgIIBQAAQADAIgDAJIgeAAIAABWIgLAAIgIAAg");
	this.shape_39.setTransform(6.7,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,264.3,42.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Remaining Time of current Bonus                       [??:??:??]
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAuQgCgHACgGIALAAIAAhBIgLAAQgCgHACgGIAYAAIAABbg");
	this.shape.setTransform(120.3,52.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAmQgDgCAAgDQAAgFADgCQACgCAEAAQADAAADACQACACAAAFQAAADgCACQgDADgDAAQgEAAgCgDgAgLALQAAgFACgEQACgCAGgEIAHgHQADgDABgEQAAgEgEgDQgDgCgFAAQgEAAgGACQgFACgGAEQgBAAAAgHIABgIIAKgEQAGgCAHAAQAFAAAGACQAFABADADQADAEABADQACAEAAAEIgBAGIgCAFQgDAEgIAEIgGAGQgBABAAAEIgIABIgHgBg");
	this.shape_1.setTransform(115.7,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAmQgDgCAAgDQAAgFADgCQADgCADAAQADAAACACQADACAAAFQAAADgDACQgCADgDAAQgDAAgDgDgAgKALQAAgFACgEQABgCAGgEIAIgHQACgDAAgEQAAgEgDgDQgDgCgEAAQgFAAgFACQgGACgGAEQgBAAAAgHIABgIIAKgEQAGgCAHAAQAGAAAEACQAFABAEADQADAEACADQABAEAAAEIgBAGIgDAFQgCAEgJAEIgEAGQgCABAAAEIgIABIgGgBg");
	this.shape_2.setTransform(109.9,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAXQgDgCAAgDQAAgFADgCQADgCACAAQAEAAACACQADACAAAFQAAADgDACQgCADgEAAQgCAAgDgDgAgFgKQgDgDAAgDQAAgEADgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_3.setTransform(105.7,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAmQgDgCAAgDQAAgFADgCQADgCADAAQADAAACACQADACAAAFQAAADgDACQgCADgDAAQgDAAgDgDgAgLALQABgFACgEQABgCAGgEIAHgHQAEgDAAgEQgBgEgDgDQgDgCgFAAQgEAAgGACQgFACgGAEQgBAAAAgHQAAgGABgCIAKgEQAHgCAGAAQAGAAAFACQAEABAEADQADAEABADQACAEAAAEIgBAGIgDAFQgCAEgIAEIgGAGQgBABAAAEIgIABIgHgBg");
	this.shape_4.setTransform(101.5,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAmQgDgCAAgDQAAgFADgCQADgCADAAQADAAADACQACACAAAFQAAADgCACQgDADgDAAQgDAAgDgDgAgLALQAAgFACgEQACgCAGgEIAHgHQADgDAAgEQABgEgEgDQgDgCgEAAQgFAAgFACQgGACgGAEQgBAAAAgHIABgIIAKgEQAHgCAGAAQAFAAAFACQAGABADADQADAEACADQABAEAAAEIgBAGIgCAFQgDAEgJAEIgEAGQgCABAAAEIgIABIgHgBg");
	this.shape_5.setTransform(95.7,51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAXQgDgCAAgDQAAgFADgCQADgCACAAQAEAAACACQADACAAAFQAAADgDACQgCADgEAAQgCAAgDgDgAgFgKQgDgDAAgDQAAgEADgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_6.setTransform(91.5,53);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAmQgDgCAAgDQAAgFADgCQADgCADAAQADAAACACQADACAAAFQAAADgDACQgCADgDAAQgDAAgDgDgAgKALQAAgFACgEQABgCAGgEIAIgHQACgDAAgEQAAgEgDgDQgDgCgEAAQgFAAgFACQgGACgGAEQgBAAAAgHIABgIIAKgEQAGgCAHAAQAGAAAEACQAFABAEADQADAEACADQABAEAAAEIgBAGIgDAFQgCAEgJAEIgEAGQgCABAAAEIgIABIgGgBg");
	this.shape_7.setTransform(87.3,51.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAmQgDgCAAgDQAAgFADgCQACgCAEAAQADAAADACQACACAAAFQAAADgCACQgDADgDAAQgEAAgCgDgAgLALQAAgFACgEQACgCAGgEIAHgHQADgDABgEQAAgEgEgDQgDgCgFAAQgEAAgGACQgFACgGAEQgBAAAAgHIABgIIAKgEQAGgCAHAAQAFAAAGACQAFABADADQADAEABADQACAEAAAEIgBAGIgCAFQgDAEgIAEIgGAGQgBABAAAEIgIABIgHgBg");
	this.shape_8.setTransform(81.5,51.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAuIAAhbIAZAAQABAGgBAHIgMAAIAABBIAMAAQABAGgBAHg");
	this.shape_9.setTransform(76.8,52.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgCIAAgFIAAgFIAJAEIAIACIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgGgDQgIgCgDgDIgDgEQgCgDAAgDQAAgEACgDIAEgFIAGgDIAHgBQAFAAAEABQAFABADACQABAKgBABIgIgEIgIgCIgEABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIAGADIAFACQADACABACIABAGQAAAEgCADQgBADgDACIgHADIgHABIgJgBg");
	this.shape_10.setTransform(180.2,38.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAXQgEgBgCgDIgDgGIgBgHIAAgeQAFgBAJABIAAAbQAAAFADACQACADAEAAQADAAAGgFIAAggQAFgBAKABIAAAvQgHABgGgBIgBgGIgHAGQgDACgFAAQgFAAgDgCg");
	this.shape_11.setTransform(174.8,38.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_12.setTransform(168.7,38.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgEAEgEQADgEAFgCQAFgCAFAAQAGAAAFACQAEACAEAEQADAEACAEQACAFAAAEQAAAGgCAEQgCAFgDAEQgEADgEACQgFACgGAAQgFAAgFgCgAgEgMIgEADIgCAEIgBAFIABAFIACAFIAEACIAEABIAFgBIAEgCIACgFIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_13.setTransform(162.5,38.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIAgAAIAKABIAIAEIAFAHIACAIIgBAGIgDAFQgCAEgFACIAFACIAEAFQACACABADIAAAGQAAAFgBAEQgCAEgEADQgDADgFABQgFACgGAAgAgOAaIAQAAQAGAAADgDQADgDAAgEQAAgFgDgDQgDgDgGAAIgQAAgAgOgFIAQAAQAEAAADgDQADgDAAgEQAAgFgDgCQgDgDgFAAIgPAAg");
	this.shape_14.setTransform(155.9,37.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBAgIgEgDIgDgFIgBgHIAAgVIgHAAQgCgGACgGIAHAAIAAgQQAEgBAJABIAAAQIANAAQACAGgCAGIgNAAIAAATIABAEQAAABAAAAQABAAAAABQAAAAABAAQABAAAAAAQADAAAHgFIAAAGIAAAGQgCACgEABQgDACgFAAIgFgBg");
	this.shape_15.setTransform(146.8,37.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_16.setTransform(141.6,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEIgBAGQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_17.setTransform(135.5,38.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAZIAAgvQAGgBAHABIABAIQACgEADgDIAEgCIAFgBQAFAAADACIABAHIgBAIQgFgEgFAAQgEAAgDADQgCACgCAEIAAAbIgJAAIgGAAg");
	this.shape_18.setTransform(130.3,38.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAZIAAgvQAGgBAHABIABAIQADgEACgDIAEgCIAFgBQAFAAADACIABAHIgBAIQgGgEgEAAQgDAAgEADQgCACgCAEIAAAbIgJAAIgGAAg");
	this.shape_19.setTransform(125.5,38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAXQgEgBgCgDIgDgGIgBgHIAAgeQAFgBAJABIAAAbQAAAFADACQACADAEAAQADAAAGgFIAAggQAFgBAKABIAAAvQgHABgGgBIgBgGIgHAGQgDACgFAAQgFAAgDgCg");
	this.shape_20.setTransform(119.8,38.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAYQgFgCgDgDQgEgEgCgFQgCgEAAgGQAAgEACgFQACgFAEgDQADgEAFgCQAFgCAFAAQAFAAAEACQAEABADADIABAFQAAAFgBABQgEgCgEgCQgDgBgEAAIgFABIgEADIgDAEIgBAFIABAGIADAEIAEADIAFABQAEAAADgCQAEAAAEgDQABABAAAEIgBAGQgDADgEABQgEACgFAAQgFAAgFgCg");
	this.shape_21.setTransform(113.9,38.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAoIAAgkIgHAAQgCgFACgGIAHAAIAAgPQAAgEABgEQABgDADgCIAFgDIAGgBQAGAAAGACQABALgBACQgFgDgDAAQgEAAgBACQgCACAAAEIAAAMIANAAQABAGgBAFIgNAAIAAAkIgHAAIgGAAg");
	this.shape_22.setTransform(106,37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgEAEgEQADgEAFgCQAFgCAFAAQAGAAAFACQAEACAEAEQADAEACAEQACAFAAAEQAAAGgCAEQgCAFgDAEQgEADgEACQgFACgGAAQgFAAgFgCgAgEgMIgEADIgCAEIgBAFIABAFIACAFIAEACIAEABIAFgBIAEgCIACgFIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_23.setTransform(100.6,38.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEQAAAFgBABQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_24.setTransform(91.6,38.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZAZIAAgbQAAgFgBgCQgCgDgFAAIgFACIgFADIAAAgQgJABgEgBIAAgbQAAgFgCgCQgCgDgEAAIgGACIgFADIAAAgQgJABgFgBIAAgvQAHgBAFABIABAGIAHgGQAFgCAEAAQAHAAADADQAEACABAEIAIgGQAFgDAEAAQAFAAAEACIAFAEIADAGIABAHIAAAeIgJAAIgGAAg");
	this.shape_25.setTransform(84,38.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAmIAAgvQAEgBAJABIAAAvIgHABIgGgBgAgFgXQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(77.7,37.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAnIAAhAIgXAAQgBgHABgGIA8AAQACAGgCAHIgWAAIAABAIgIAAIgHAAg");
	this.shape_27.setTransform(72.5,37.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAiIgHgDQgCgKACgCQAIAFAIAAQAFAAAEgDIADgDIAAgFIAAgEIgFAEQgEACgFAAQgFAAgEgCQgEgCgDgDQgDgEgCgEIgBgJIABgKQACgFADgDQADgEAEgCQAEgCAFAAQAFAAAEADIAGAFIABgGQAHgBAGABIAAAtQAAAGgCAEQgBAEgEADQgDADgFACQgFACgFAAQgFAAgGgCgAgEgVIgDACIgDAEIgBAGIABAFIADAEIADACIAEABQAGAAAFgEIAAgQQgFgFgGAAIgEABg");
	this.shape_28.setTransform(62.9,39.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_29.setTransform(56.7,38.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAmIAAgvQAEgBAJABIAAAvIgHABIgGgBgAgFgXQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_30.setTransform(52,37.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgIAAIgGAAg");
	this.shape_31.setTransform(47.3,38.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAmIAAgvQAEgBAJABIAAAvIgHABIgGgBgAgFgXQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_32.setTransform(42.7,37.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgEIABgGIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_33.setTransform(38.1,38.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaAZIAAgbQAAgFgCgCQgCgDgFAAIgGACIgEADIAAAgQgIABgFgBIAAgbQAAgFgCgCQgCgDgFAAIgFACIgFADIAAAgQgKABgEgBIAAgvQAHgBAFABIABAGIAIgGQAEgCAFAAQAFAAAEADQADACACAEIAHgGQAGgDAEAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_34.setTransform(30.7,38.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEIgBAGQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_35.setTransform(23,38.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAOAnIgRgbIgMAAIAAAbQgLABgEgBIAAhNIAeAAQAFAAAGACQAFACAEADQAEADACAFQACAFAAAFIgBAIIgDAFIgGAGIgHADIAUAeIgKAAIgHAAgAgPAAIAPAAIAEgBIAEgDIADgEIABgFIgBgFIgDgEQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEgBIgPAAg");
	this.shape_36.setTransform(16.5,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	//    {15M} HKNs are available now Join Hacken and Get [25%] Bonus
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgCIAAgFIAAgFIAJAEIAIACIAEgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgGgDQgIgCgDgDIgDgEQgCgDAAgDQAAgEACgDIAEgFIAGgDIAHgBQAFAAAEABQAFABADACQABAKgBABIgIgEIgIgCIgEABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQABABAAAAQAAABABAAQABABAAAAIAGACIAGADIAFACIAEAEIABAGQAAAEgCADQgBADgDACIgHADIgHABIgJgBg");
	this.shape_37.setTransform(180.2,24.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAXQgEgBgCgDIgDgGIgBgHIAAgeQAFgBAJABIAAAbQAAAFADACQACADAEAAQADAAAGgFIAAggQAFgBAKABIAAAvQgHABgGgBIgBgGIgHAGQgDACgFAAQgFAAgDgCg");
	this.shape_38.setTransform(174.7,24.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_39.setTransform(168.6,24.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgEAEgEQADgEAFgCQAFgCAFAAQAGAAAFACQAEACAEAEQADAEACAEQACAFAAAEQAAAGgCAEQgCAFgDAEQgEADgEACQgFACgGAAQgFAAgFgCgAgEgMIgEADIgCAEIgBAFIABAFIACAFIAEACIAEABIAFgBIAEgCIACgFIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_40.setTransform(162.4,24.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIAfAAIAKACIAIADIAFAHIABAIIAAAGIgCAFQgDAEgGACIAGACIAEAFQACACAAADIABAGQAAAFgBAEQgCAEgDADQgEADgFABQgFACgGAAgAgNAaIAPAAQAFAAADgDQAEgDAAgEQAAgFgEgDQgDgDgFAAIgPAAgAgNgFIAOAAQAFAAADgDQADgDAAgEQAAgFgDgCQgDgDgFAAIgOAAg");
	this.shape_41.setTransform(155.9,23.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAuQgCgHACgGIALAAIAAhBIgLAAQgCgHACgGIAYAAIAABbg");
	this.shape_42.setTransform(147.4,23.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARAoQgDgCgCgDQgDgDgBgEQgBgDAAgFQAAgEABgEQABgDADgDIAFgFQADgBAEAAIAHABIAGAFIADAGIABAIIgBAIIgDAHIgGAFIgHABQgEAAgDgBgAAUALQgCADAAAGQAAAHACACQABADADAAQADAAACgDQACgCAAgHQAAgGgCgDQgCgCgDgBQgDABgBACgAgWAnIAkhNQAFgCAEACIgkBNIgEABIgFgBgAgegBIgGgDIgDgHQgBgEAAgEQAAgFABgEQABgDACgDIAGgEIAHgCQAEAAADACIAGAEQACADABADQABAEAAAFQAAAEgBAEIgDAHIgGADQgDABgEAAIgHgBgAgcgcQgCACAAAHQAAAGACADQACADADgBQADABACgDQACgDAAgGQAAgHgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_43.setTransform(141.1,23.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPAmIgKgFIAAgIQAAgFAAgCQAGAFAGABQAGADAEAAIAFgBIAFgCIADgFIABgEIgBgHIgEgDIgFgDIgGgBIgIACIgIADIAHgtIAkAAQACAGgCAHIgYAAIgDARIAGAAQAFAAAFABQAEACAEADQADADADAEQACAFAAAGQAAAFgCAFQgDAEgDAEQgEAEgGABQgFACgFAAQgHAAgHgCg");
	this.shape_44.setTransform(133.5,23.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaAoIAAgBIATgXIAKgPQAEgFABgDIACgHIgBgFIgDgEIgEgCIgEgBQgEAAgGACQgFACgFAEQgBgBABgOQADgCAGgCQAGgCAGAAQAGAAAFACQAFACAEADIAFAIQABAFAAAEIgBAJIgFAJIgIALIgLANIAaAAQACAHgCAGg");
	this.shape_45.setTransform(127,23);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMAuIAAhbIAZAAQABAGgBAHIgMAAIAABBIAMAAQABAGgBAHg");
	this.shape_46.setTransform(122.1,23.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAgIgEgDIgDgFIgBgHIAAgVIgHAAQgCgGACgGIAHAAIAAgQQAEgBAJABIAAAQIANAAQACAGgCAGIgNAAIAAATIABAEQAAABAAAAQABAAAAABQAAAAABAAQABAAAAAAQADAAAHgFIAAAGIAAAGQgCACgEABQgDACgFAAIgFgBg");
	this.shape_47.setTransform(115.2,23.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEQAAAFgBABQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_48.setTransform(110,24.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAAAoIgIgDIgIgDIgGgFIgFgGIgEgHIgCgIIgBgIIABgHIACgIIAEgHIAFgGIAGgFIAIgDIAIgDIAJgBQAHAAAHACIAKAEIABAIQAAAGgBABQgGgEgGgCQgGgCgFAAQgGAAgFACQgFACgEAEQgEAEgBAFQgDAFAAAFQAAAGADAFQABAGAEADQAEAEAFACQAFACAGAAQAFAAAFgCIAAgZIAPAAIAAAhQgEADgHACQgIACgHAAIgJgBg");
	this.shape_49.setTransform(102.7,23.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMAmQgEgCgDgDQgDgEgBgFQgCgEAAgGQAAgFACgFQABgEADgDQADgEAEgCQAEgCAFAAQAFAAAEADQADABACADIAAgjQAFgBAKABIAABNQgGABgHgBIgBgGIgGAGQgEACgFAAQgFAAgEgCgAgEACIgDACQgCACgBADIgBAFIABAGQABACACACIADADIAEABQAGAAAFgFIAAgRQgFgFgGAAIgEABg");
	this.shape_50.setTransform(92.5,23.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_51.setTransform(86.3,24.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgEIABgGIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_52.setTransform(80.3,24.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgIAAIgGAAg");
	this.shape_53.setTransform(71.6,24.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEIgBAGQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_54.setTransform(65.6,24.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAIAnIgRgXIAAAXQgJABgFgBIAAhNQAFgBAJABIAAAyIARgUQAEgBAMABIgUAWIAUAZIgKAAIgGAAg");
	this.shape_55.setTransform(59.8,23.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgFAYQgFgCgEgDQgDgEgCgFQgCgEAAgGQAAgEACgFQACgFADgDQAEgEAFgCQAFgCAFAAQAFAAAEACQAEABADADIABAFQAAAFgBABQgDgCgFgCQgDgBgEAAIgFABIgEADIgDAEIgBAFIABAGIADAEIAEADIAFABQAEAAADgCQAFAAADgDQABABAAAEIgBAGQgDADgEABQgEACgFAAQgFAAgFgCg");
	this.shape_56.setTransform(53.8,24.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgEIABgGIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_57.setTransform(48.1,24.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AATAnIAAghIglAAIAAAhQgLABgEgBIAAhNQAEgBALABIAAAgIAlAAIAAggQAEgBALABIAABNIgJAAIgGAAg");
	this.shape_58.setTransform(41,23.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgIAAIgGAAg");
	this.shape_59.setTransform(30.7,24.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGAmIAAgvQAFgBAIABIAAAvIgHABIgGgBgAgGgXQgCgCAAgEQAAgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDACgEAAQgDAAgDgCg");
	this.shape_60.setTransform(26.1,23.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgEAEgEQADgEAFgCQAFgCAFAAQAGAAAFACQAEACAEAEQADAEACAEQACAFAAAEQAAAGgCAEQgCAFgDAEQgEADgEACQgFACgGAAQgFAAgFgCgAgEgMIgEADIgCAEIgBAFIABAFIACAFIAEACIAEABIAFgBIAEgCIACgFIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_61.setTransform(21.3,24.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKAnIgGgDIgBgGIABgHQAFADAFAAQAEAAACgCIACgEIABgFIAAg2QADgBAMABIAAA3QAAAGgCAEQgBAFgDADQgCADgFABQgEACgDAAIgIgBg");
	this.shape_62.setTransform(15.4,23.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AALAYIgLgdIgKAdQgGABgGgBIgSgvQAEgBALABIAJAcIALgcQAFgBAGABIALAcIAJgcQAEgBALABIgTAvIgFABIgGgBg");
	this.shape_63.setTransform(171.2,10.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAYQgFgCgDgDQgEgEgCgFQgBgEAAgGQAAgEABgFQACgEAEgEQADgEAFgCQAFgCAFAAQAGAAAFACQAEACAEAEQADAEACAEQACAFAAAEQAAAGgCAEQgCAFgDAEQgEADgEACQgFACgGAAQgFAAgFgCgAgEgMIgEADIgCAEIgBAFIABAFIACAFIAEACIAEABIAFgBIAEgCIACgFIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_64.setTransform(163.5,10.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAKAZIAAgbQAAgFgDgCQgCgDgEAAIgFACIgEADIAAAgQgKABgFgBIAAgvQAHgBAGABIABAGIAHgGQADgCAFAAQAFAAADACIAGAEIADAGIABAHIAAAeIgJAAIgFAAg");
	this.shape_65.setTransform(157.3,10.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgEQgBgFAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEIgBAGQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_66.setTransform(148.4,10.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAnIAAhNQAFgBAIABIAABNIgHAAIgGAAg");
	this.shape_67.setTransform(144.1,8.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgFAmIgHgGIgBAGQgGABgGgBIAAhNQAEgBAKABIAAAjIAGgEQAEgDAEAAQAFAAAFACQAEACADAEQADADABAEQACAFAAAFQAAAGgCAEQgBAFgDAEQgDADgEACQgFACgFAAQgEAAgEgCgAgGACIgFAEIAAARIAFADQADACADAAIAFgBIADgDQACgCABgCIABgGIgBgFQgBgDgCgCIgDgCIgFgBQgDAAgDABg");
	this.shape_68.setTransform(139.5,8.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgDIABgHIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_69.setTransform(133.2,10.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGAnIAAhNQAEgBAJABIAABNIgHAAIgGAAg");
	this.shape_70.setTransform(129.1,8.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGAmIAAgvQAFgBAIABIAAAvIgHABIgGgBgAgFgXQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_71.setTransform(126,8.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgDIABgHIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_72.setTransform(121.4,10.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFAYIgVgvQAEgBAKABIAMAcIAMgcQAFgBAKABIgVAvIgGABIgFgBg");
	this.shape_73.setTransform(115.6,10.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgDIABgHIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_74.setTransform(109.5,10.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgDQgEgEgCgEQgBgFAAgGQAAgEABgFQACgFAEgDQADgEAFgCQAFgCAEAAIAHABIAFACQAFACADAFQADAEAAAFQABAEgBAEIghAAIABAFIADAEIAFACIAEABIAIgCQAEAAAEgDQABABAAAEIgBAGQgDADgEABQgFACgFAAQgFAAgGgCgAALgFQAAgEgDgDQgCgCgEAAQgEAAgDACQgDADAAAEIATAAIAAAAg");
	this.shape_75.setTransform(100.9,10.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgSAZIAAgvQAHgBAFABIACAIQACgEADgDIAEgCIAFgBQAGAAADACIAAAHIAAAIQgGgEgFAAQgDAAgEADQgDACgCAEIAAAbIgIAAIgGAAg");
	this.shape_76.setTransform(95.7,10.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLAZQgEgBgCgCQgCgCgBgDQgCgDAAgDIABgHIAEgEQACgCAEgBIAHgBIAHABQADACACABIAAgEQAAgFgCgCQgDgCgFgBIgIACIgHADQgBgBABgKIAHgEIAKgBQAGAAAEABQAEACADADIAEAHQACAFAAAFIAAAaQgHABgGgBIgBgFQgCADgEACQgDACgFAAIgGgBgAgGAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAQADAAAGgEIAAgEQgGgDgDgBQgDAAgCACg");
	this.shape_77.setTransform(90.2,10.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgCIAAgFIAAgFIAJAEIAIACIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgGgDQgIgCgDgDIgDgEQgCgDAAgDQAAgEACgCIAEgGIAGgDIAHgBQAFAAAEABQAFABADACQABAKgBABIgIgEIgIgBIgEAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIAGADIAFACQADACABACIABAGQAAAEgCADQgBADgDACIgHADIgHABIgJgBg");
	this.shape_78.setTransform(82.1,10.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAWAnIgogzIAAAzQgLABgEgBIAAhNQAGgBAGABIAoAzIAAgzQAEgBALABIAABNIgGAAIgGAAg");
	this.shape_79.setTransform(75.4,8.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAOAnIgegmIAAAmQgMABgEgBIAAhNQAEgBAMABIAAAkIAdgkIAJAAIAJAAIgfAmIAhAnIgKABIgJgBg");
	this.shape_80.setTransform(67.5,8.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AATAnIAAghIglAAIAAAhQgLABgEgBIAAhNQAEgBALABIAAAgIAlAAIAAggQAEgBALABIAABNIgJAAIgGAAg");
	this.shape_81.setTransform(58.9,8.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPAuQAEgIAEgMIACgPQABgEACgDIAFgEIgFgDQgCgDgBgEIgCgPQgBgFgHgPQAFgBAJABIAEAKIACAJQAEANAAAFIABAEIAGAEIAAABIgGAEIgBAEQgCALgCAHQgEAMgCAHIgIAAIgGAAg");
	this.shape_82.setTransform(49.7,9.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAkAnIgMgxIgSAxQgGABgFgBIgSgxIgLAxQgLABgFgBIAThNQAGgBAHABIASA1IATg1QAHgBAGABIATBNIgJAAIgGAAg");
	this.shape_83.setTransform(42.2,8.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgOAmIgKgFIgCgIQAAgFACgCQAGAFAFABQAGADAEAAIAGgBIADgCIADgFIACgEIgCgHIgDgDIgFgDIgGgBIgIACIgHADIAGgtIAlAAQABAGgBAHIgZAAIgDARIAFAAQAGAAAFABQAEACAEADQADADACAEQACAFAAAGQAAAFgCAFQgBAEgFAEQgEAEgFABQgFACgGAAQgGAAgGgCg");
	this.shape_84.setTransform(33.7,8.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AABAnIAAg7IgQALIAAgHIAAgIIAUgOQAFgBAGABIAABNIgJAAIgGAAg");
	this.shape_85.setTransform(27.8,8.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AADAuIgFgKIgCgJQgCgHgCgLQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgEIAAgBIAGgEQAAAAABgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAEgSIACgJIAFgKQAEgBAJABIgIAUIgCAPQAAAEgDADIgFADIAFAEQADADAAAEIACAPQAEAMAEAIIgIAAIgFAAg");
	this.shape_86.setTransform(23.8,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(10.4,-0.8,174.5,61.2), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXA0IgXhEIgWBEQgIABgJgBIgkhnQAGgBAQABIAWBIIAYhIQAHgCAJACIAXBIIAXhIQAGgBAPABIgkBnIgIABIgJgBg");
	this.shape.setTransform(116.9,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA2IgKgEIgKgFIgIgGIgGgJQgDgEgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgIIAIgGIAKgFIAKgDIALgBIAMABIAKADIAKAFIAIAGIAGAIQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAEIgGAJIgIAGIgKAFIgKAEIgMABIgLgBgAgMghQgGACgFAFQgFAFgCAHQgDAHAAAHQAAAJADAGQACAHAFAFQAFAFAGACQAGADAGAAQAHAAAGgDQAGgCAFgFQAFgFACgHQADgGAAgJQAAgHgDgHQgCgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(102.4,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeA0Ig2hEIAABEQgPABgGgBIAAhnQAJgCAHACIA2BEIAAhEQAGgBAPABIAABnIgIABIgIgBg");
	this.shape_2.setTransform(90.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeA0Ig2hEIAABEQgPABgGgBIAAhnQAJgCAHACIA2BEIAAhEQAGgBAPABIAABnIgIABIgIgBg");
	this.shape_3.setTransform(75.1,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA0IgpgyIAAAyQgPABgGgBIAAhnQAGgBAPABIAAAvIAngvIAMgBIANABIgqAyIAsA1IgNABIgMgBg");
	this.shape_4.setTransform(64.4,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZA0IAAgsIgxAAIAAAsQgPABgGgBIAAhnQAGgBAPABIAAArIAxAAIAAgrQAGgBAPABIAABnIgNABIgIgBg");
	this.shape_5.setTransform(53,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA0IAAhWIgeAAQgDgJADgIIBQAAQACAIgCAJIgfAAIAABWIgLAAIgIAAg");
	this.shape_6.setTransform(38.8,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAIgCAKIgyAAIAAAZIAtAAQACAIgCAIIgtAAIAAAaIAyAAQACAJgCAJg");
	this.shape_7.setTransform(29.9,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAA2IgMgEIgKgFIgIgGIgGgJIgGgJIgCgKIgBgLIABgKIACgKIAGgKIAGgIIAIgGIAKgFIAMgDIALgBQAKAAAJADQAHABAHAFIABAJQAAAIgBABQgIgFgIgCQgIgDgIAAQgIAAgFADQgHACgGAFQgFAFgDAHQgDAHAAAHQAAAJADAGQADAHAFAFQAGAFAHADQAFACAIABQAHgBAIgCIAAghQAFgBAPABIAAAsQgGADgKADQgJADgLAAIgLgBg");
	this.shape_8.setTransform(19.2,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXA0IgXhEIgWBEQgIACgJgCIgkhnQAGgBAQABIAWBIIAYhIQAHgCAJACIAXBIIAXhIQAGgBAPABIgkBnIgIABIgJgBg");
	this.shape_9.setTransform(116.9,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA1IgKgDIgKgFIgIgGIgGgIQgDgFgCgFIgDgKIgBgLIABgKIADgKQACgFADgFIAGgIIAIgGIAKgFIAKgDIALgCIAMACIAKADIAKAFIAIAGIAGAIQADAFACAFQACAFABAFIABAKIgBALQgBAFgCAFQgCAFgDAFIgGAIIgIAGIgKAFIgKADIgMACIgLgCgAgMghQgGACgFAFQgFAFgCAHQgDAHAAAHQAAAJADAGQACAHAFAFQAFAFAGACQAGADAGAAQAHAAAGgDQAGgCAFgFQAFgFACgHQADgGAAgJQAAgHgDgHQgCgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(102.4,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA0IAAgsIgxAAIAAAsQgPABgGgBIAAhnQAGgBAPABIAAAqIAxAAIAAgqQAGgBAPABIAABnIgNABIgIgBg");
	this.shape_11.setTransform(53,21.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA0IAAhnIBGAAQACAJgCAJIgyAAIAAAYIAtAAQACAJgCAIIgtAAIAAAaIAyAAQACAJgCAJg");
	this.shape_12.setTransform(29.9,21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAA1IgMgDIgKgFIgIgGIgGgIIgGgKIgCgKIgBgLIABgKIACgKIAGgKIAGgIIAIgGIAKgFIAMgDIALgCQAKABAJADQAHABAHAEIABAKQAAAIgBABQgIgFgIgCQgIgDgIAAQgIAAgFADQgHACgGAFQgFAFgDAHQgDAHAAAHQAAAJADAGQADAHAFAFQAGAFAHADQAFADAIAAQAHAAAIgDIAAghQAFgBAPABIAAAsQgGAEgKACQgJADgLAAIgLgCg");
	this.shape_13.setTransform(19.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{y:20.4}},{t:this.shape_5},{t:this.shape_4,p:{y:20.4}},{t:this.shape_3,p:{y:20.4}},{t:this.shape_2,p:{y:20.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_6,p:{y:21.2}},{t:this.shape_11},{t:this.shape_4,p:{y:21.2}},{t:this.shape_3,p:{y:21.2}},{t:this.shape_2,p:{y:21.2}},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	// Слой 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00C5C9").s().p("AoaDFQhBgBgvguQguguAAhBIAAhNQAAhBAugvQAvgtBBgBIQ1AAQBBABAuAtQAvAvAABBIAABNQAABBgvAuQguAuhBABg");
	this.shape_14.setTransform(69.7,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFAB16").s().p("AoaDFQhBgBgvguQguguAAhBIAAhNQAAhBAuguQAvguBBAAIQ1AAQBBAAAuAuQAvAuAABBIAABNQAABBgvAuQguAuhBABg");
	this.shape_15.setTransform(69.7,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.4,39.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(56,236,239,0)","#38ECEF","#00C5C9","rgba(56,236,239,0.976)","rgba(56,236,239,0)"],[0.008,0.306,0.51,0.714,1],-100.4,-82.4,168.9,40.8).ss(3,1,1).p("A2OyVMAsdAAAMAAAAkr");
	this.shape.setTransform(142.3,117.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-1.5,-1.5,287.6,237.7), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADKDeIAAjQImaAAIAADQIggAAIAAm7IAfAAIAADEIGbAAIAAgPIgBAAIAAgiIABAAIAAiSIAnAAIAAG6g");
	mask.setTransform(24,22.2);

	// Слой 3
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(23.7,55.7,1,1,0,0,0,26.2,7.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.3},9).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,22.1,1,1,0,0,0,7.9,2.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:62.5},9).wait(1));

	// Слой 1
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,57);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(22,3.3,1,1,0,0,0,22,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,44,6.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(124.5,-236.2,1,1,0,0,0,127.5,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).to({y:-99.2},5,cjs.Ease.get(-1)).to({y:37.8},5,cjs.Ease.get(1)).wait(40).to({y:277.8},5).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(473.9,49.4,1,1,0,0,0,133.8,21.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({x:299.4},5,cjs.Ease.get(-1)).to({x:124.9},5,cjs.Ease.get(1)).wait(35).to({y:339.4},5).to({_off:true},1).wait(55));

	// Слой 4
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.5,-257,1,1,0,0,0,140.5,22.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({y:-120.5},5,cjs.Ease.get(-1)).to({y:16},5,cjs.Ease.get(1)).wait(40).to({y:256},5).to({_off:true},1).wait(55));

	// Слой 3
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(124.8,-243.3,1,1,0,0,0,129.8,18.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({y:-97.3},5,cjs.Ease.get(-1)).to({y:48.7},5,cjs.Ease.get(1)).wait(40).to({y:258.7},5).to({_off:true},1).wait(110));

	// Слой 2
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(444.8,56.6,1,1,0,0,0,104.2,14);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:284.8},5,cjs.Ease.get(-1)).to({x:124.8},5,cjs.Ease.get(1)).wait(35).to({y:328.6},5).to({_off:true},1).wait(165));

	// Слой 1
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(124.1,-248.8,1,1,0,0,0,132.1,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-131},4,cjs.Ease.get(-1)).to({y:16.2},5,cjs.Ease.get(1)).wait(40).to({y:256.2},5).to({_off:true},1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-270,264.3,42.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(69.7,19.7,1,1,0,0,0,69.7,19.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,139.4,40.1), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwvPvIAAgBIgIAAIAA/cIAfAAIAAe+MAhQAAAIAAAfg");
	var mask_graphics_174 = new cjs.Graphics().p("AwvPvIAAgBIgIAAIAA/cIAfAAIAAe+MAhQAAAIAAAfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:104.1,y:137.3}).wait(174).to({graphics:mask_graphics_174,x:104.1,y:137.3}).wait(46));

	// Слой 5
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,265.7,1,1,90,0,0,22,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-30.3},9).wait(46).to({y:265.7},0).to({y:-30.3},9).wait(46).to({y:265.7},0).to({y:-30.3},9).wait(46).to({y:265.7},0).to({y:-30.3},9).wait(46));

	// Слой 4
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.1,236.3,1,1,180,0,0,22,3.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:315.3},9).wait(46).to({x:-35.1},0).to({x:315.3},9).wait(46).to({x:-35.1},0).to({x:315.3},9).wait(46).to({x:-35.1},0).to({x:315.3},9).wait(46));

	// Слой 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(139.8,119.1,1,1,180,0,0,142.3,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(220));

	// Слой 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AQZPwIAA+/MghQAAAIAAgfMAhnAAAIAAABIAIAAIAAfdg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AQZPwIAA+/MghQAAAIAAgfMAhnAAAIAAABIAIAAIAAfdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:175,y:101.4}).wait(174).to({graphics:mask_1_graphics_174,x:175,y:101.4}).wait(46));

	// Слой 5
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(281.4,-29,1,1,-90,0,0,22,3.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:283.3,y:269.9},9).wait(46).to({x:281.4,y:-29},0).to({x:283.3,y:269.9},9).wait(46).to({x:281.4,y:-29},0).to({x:283.3,y:269.9},9).wait(46).to({x:281.4,y:-29},0).to({x:283.3,y:269.9},9).wait(46));

	// Слой 4
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(314,0.5,1,1,0,0,0,22,3.3);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-35},9).wait(46).to({x:314},0).to({x:-35},9).wait(46).to({x:314},0).to({x:-35},9).wait(46).to({x:314},0).to({x:-35},9).wait(46));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(139.1,119.6,1,1,0,0,0,142.3,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,0.3,288.3,238.2);


// stage content:
(lib.hacken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.logo.gotoAndPlay(1);
		   
			
			
			
			
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.logo.gotoAndPlay(10);
		    
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(213.2,213.1,1,1,0,0,0,69.7,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.4,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// header text
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(183.7,49.3,1,1,0,0,0,101.5,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// logo
	this.logo = new lib.Символ16();
	this.logo.parent = this;
	this.logo.setTransform(48,42.5,1,1,0,0,0,24,28.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// line
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.1,123.9,1,1,0,0,0,142.3,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-10,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.6,-48.7,393.1,467.9);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hacken_atlas_.png?1509537838660", id:"hacken_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;