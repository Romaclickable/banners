(function (lib, img, cjs, ss, an) {

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


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("THE MAIN TOKEN SALE HAS\n          ALREADY BEGUN", "bold 14px 'Font'", "#00C5C9");
	this.text.lineHeight = 19;
	this.text.parent = this;
	this.text.setTransform(-113.1,-34,1.192,1.192);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6, new cjs.Rectangle(-115.5,-36.4,223.5,52.9), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PROFESSIONAL \nORIENTED COMMUNITY OF \nCYBER ENTHUSIASTS", "bold 16px 'Font'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.parent = this;
	this.text.setTransform(-273.1,-164.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-380.5,-166.6,214.9,65.6), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ONE OF THE MOST \nFAST GROWING MARKETS \nIN THE WORLD", "bold 16px 'Font'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 277;
	this.text.parent = this;
	this.text.setTransform(0,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-140.5,-25.2,281,65.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("MEET THE FIRST \nBUG BOUNTY MARKETPLACE \nBASED ON BLOKCHAIN", "bold 14px 'Font'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.parent = this;
	this.text.setTransform(10.4,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-89.4,-21.2,199.6,61.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("HACKEN ECOSYSTEM", "bold 18px 'Font'", "#00C5C9");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-0.8,-15);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-94.8,-17,188,34), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("THE NEW ERA OF CYBERSECURITY\nSERVICES IS COMING", "bold 14px 'Font'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.parent = this;
	this.text.setTransform(0,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-115.8,-21.2,231.6,42.4), null);


(lib.light_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0FFFF").s().p("AgGAOIgBgDQgCgFAAgGQAAgHADgGQADgGADAAQADAAACAEIACACQADAGAAAHQAAAIgDAGQgDAGgEAAQgDAAgDgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_in, new cjs.Rectangle(-1,-2,2,4), null);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t6
	this.instance = new lib.t6();
	this.instance.parent = this;
	this.instance.setTransform(-4,-50);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).to({y:10,alpha:1},6,cjs.Ease.get(1)).wait(43).to({regX:-0.1,regY:0.1,scaleX:0.76,scaleY:0.76,x:-4.1,y:15.1},3,cjs.Ease.get(1)).to({scaleX:1.13,scaleY:1.13,x:-4,y:10.1,alpha:0},7,cjs.Ease.get(-1)).wait(1));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,10,1.619,1.619,0,0,0,-273.1,-123.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(138).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},46).to({y:40,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(54));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-7,1.495,1.495);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14},42).to({regY:-0.1,scaleX:1.21,scaleY:1.21,y:-7.1},2,cjs.Ease.get(1)).to({scaleX:0.58,scaleY:0.58,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(113));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-28,1,1,0,0,0,18.4,9.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({y:-8,alpha:1},9,cjs.Ease.get(1)).wait(31).to({y:-38,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,69);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-5,y:31,alpha:1},10,cjs.Ease.get(1)).wait(29).to({y:39},9,cjs.Ease.get(1)).wait(31).to({y:89,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4.1,-45);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-5.1,y:-15,alpha:1},10,cjs.Ease.get(1)).wait(29).to({scaleX:0.71,scaleY:0.71,x:-4.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-66.2,231.6,152.2);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l
	this.instance = new lib.light_in();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.5,3);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-3,-4,6,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-3.5,-8,10,20), null);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var w = lib.properties.width,
			h = lib.properties.height,
			g = params.gutter / 2,
			d = function(i){
				return i * 200;
			},
			_this = this;
		
		[].forEach.call([
		
			{
				n : 'yl',
				sp : {
					x : g,
					y : h - g
				},
				ep : {
					x : g,
					y : -g
				}
			},
			
			{
				n : 'yr',
				sp : {
					x : w - g,
					y : g
				},
				ep : {
					x : w - g,
					y : h + g
				}
			},
			
			{
				n : 'xt',
				sp : {
					x : w - g,
					y : g
				},
				ep : {
					x : -g,
					y : g
				}
			},
			
			{
				n : 'xb',
				sp : {
					x : g,
					y : h - g
				},
				ep : {
					x : w + g,
					y : h - g
				}
			},
		
		], function(e, i, a){
			
			_this[e.n].alpha = 0;
			_this[e.n].x = a[i].sp.x;
			_this[e.n].y = a[i].sp.y;
			
			cjs.Tween.get(_this[e.n], {loop:true}).wait(d(i)).to({alpha : 1}, 100).to({x : a[i].ep.x, y : a[i].ep.y, alpha : 1}, 1000, cjs.Ease.quadInOut);
			
			
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// lights
	this.xb = new lib.light();
	this.xb.parent = this;
	this.xb.setTransform(117,229,1,1,90);

	this.xt = new lib.light();
	this.xt.parent = this;
	this.xt.setTransform(82.6,229,1,1,90);

	this.yr = new lib.light();
	this.yr.parent = this;
	this.yr.setTransform(48.3,229);

	this.yl = new lib.light();
	this.yl.parent = this;
	this.yl.setTransform(14,229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.yl},{t:this.yr},{t:this.xt},{t:this.xb}]}).wait(1));

	// txt
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(147.1,143,0.91,0.91,0,0,0,-3.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.5,200.4,241.6,165.7);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;