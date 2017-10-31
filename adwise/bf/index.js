(function (lib, img, cjs, ss, an) {

Object.keys(img).forEach(function(key){
    (lib[key] = function() {
    this.initialize(img[key]);
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,img[key].width,img[key].height);
});

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


(lib.white_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("AroDHIBkmNIVtAAIhkGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white_bg, new cjs.Rectangle(-74.5,-19.8,149,39.7), null);


(lib.time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" 20 : 15", "500 16px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(-2,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.time, new cjs.Rectangle(-86.5,-12.6,169,25.3), null);


(lib.red_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366FF").s().p("AroDHIBkmNIVtAAIhkGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_bg, new cjs.Rectangle(-74.5,-19.8,149,39.7), null);


(lib.name_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("  Команда 2", "500 18px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 173;
	this.text.parent = this;
	this.text.setTransform(0,-9.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.name_2, new cjs.Rectangle(-88.4,-11.9,177,39), null);


(lib.name_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("  Команда 1", "500 18px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 173;
	this.text.parent = this;
	this.text.setTransform(0.5,62.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.name_1, new cjs.Rectangle(-87.9,60.3,177,39), null);


(lib.lll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logologo();
	this.instance.parent = this;
	this.instance.setTransform(-150,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lll, new cjs.Rectangle(-150,-24,300,47), null);


(lib.koeff_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("18.123  ", "500 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(15,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.koeff_2, new cjs.Rectangle(-39,-13.4,108,26.8), null);


(lib.koeff_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("18.123 ", "500 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(15,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.koeff_1, new cjs.Rectangle(-39,-13.4,108,26.8), null);


(lib.cur_draw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" 18.123", "500 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(15,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.cur_draw, new cjs.Rectangle(-39,-13.4,108,26.8), null);


(lib.cur_date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" 30 октября", "500 16px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(0,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.cur_date, new cjs.Rectangle(-84.5,-21.2,169,34.5), null);


(lib.tm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// txt
	this.text = new cjs.Text("TM:", "700 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 44;
	this.text.alpha = 0.70588235;
	this.text.parent = this;
	this.text.setTransform(-42.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

	// draw
	this.cur_draw = new lib.cur_draw();
	this.cur_draw.parent = this;
	this.cur_draw.setTransform(-0.2,19);

	this.timeline.addTween(cjs.Tween.get(this.cur_draw).to({alpha:0},4).wait(10).to({alpha:1},5).wait(1));

	// Layer 4
	this.instance = new lib.white_bg();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1},9,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-0.3,149,56.5);


(lib.team2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 2
	this.text = new cjs.Text("P2:", "700 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 32;
	this.text.alpha = 0.70588235;
	this.text.parent = this;
	this.text.setTransform(-39,67.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

	// koeff
	this.koeff = new lib.koeff_2();
	this.koeff.parent = this;
	this.koeff.setTransform(-1,79.5);

	this.timeline.addTween(cjs.Tween.get(this.koeff).to({alpha:0},4).wait(10).to({alpha:1},5).wait(1));

	// Layer 5
	this.instance = new lib.red_bg();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1},9,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1));

	// name
	this.name = new lib.name_2();
	this.name.parent = this;
	this.name.setTransform(0,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.name).to({y:17.9,alpha:0},9,cjs.Ease.get(-1)).to({y:-2.1,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-14,177,114);


(lib.team1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.parent._change();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 2
	this.text = new cjs.Text("P1:", "700 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 32;
	this.text.alpha = 0.70588235;
	this.text.parent = this;
	this.text.setTransform(-41.5,67.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

	// koeff
	this.koeff = new lib.koeff_1();
	this.koeff.parent = this;
	this.koeff.setTransform(0.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.koeff).to({alpha:0},4,cjs.Ease.get(-1)).wait(10).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.instance = new lib.red_bg();
	this.instance.parent = this;
	this.instance.setTransform(0.5,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1},9,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1));

	// name
	this.name = new lib.name_1();
	this.name.parent = this;
	this.name.setTransform(0,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.name).to({y:-65.5,alpha:0},9,cjs.Ease.get(-1)).to({y:-75.5,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-15.2,177,115.3);


(lib.tb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// txt
	this.text = new cjs.Text("TB:", "700 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 32;
	this.text.alpha = 0.70588235;
	this.text.parent = this;
	this.text.setTransform(-40.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

	// draw
	this.cur_draw = new lib.cur_draw();
	this.cur_draw.parent = this;
	this.cur_draw.setTransform(-0.2,19);

	this.timeline.addTween(cjs.Tween.get(this.cur_draw).to({alpha:0},4).wait(10).to({alpha:1},5).wait(1));

	// Layer 4
	this.instance = new lib.white_bg();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1},9,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-0.3,149,39.7);


(lib.draw_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// txt
	this.text = new cjs.Text("X:", "700 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 32;
	this.text.alpha = 0.70588235;
	this.text.parent = this;
	this.text.setTransform(-40.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

	// draw
	this.cur_draw = new lib.cur_draw();
	this.cur_draw.parent = this;
	this.cur_draw.setTransform(-0.2,19);

	this.timeline.addTween(cjs.Tween.get(this.cur_draw).to({alpha:0},4).wait(10).to({alpha:1},5).wait(1));

	// Layer 4
	this.instance = new lib.white_bg();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1},9,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-0.3,149,39.7);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// time
	this.time = new lib.time();
	this.time.parent = this;
	this.time.setTransform(0,11.6);

	this.timeline.addTween(cjs.Tween.get(this.time).to({y:7.6,alpha:0},4,cjs.Ease.get(-1)).wait(10).to({y:11.6,alpha:1},5,cjs.Ease.get(1)).wait(1));

	// date
	this.date = new lib.cur_date();
	this.date.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.date).to({y:4,alpha:0},4,cjs.Ease.get(-1)).wait(10).to({y:0,alpha:1},5,cjs.Ease.get(1)).wait(1));

	// bg
	this.instance = new lib.white_bg();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0.1,1.214,1.214);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1,y:0.2},9,cjs.Ease.get(-1)).to({scaleY:1.21,y:0.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,-24,180.9,48.3);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		var t1 = _this.team1,
			t2 = _this.team2,
			d = _this.draw_x,
			dt = _this.date,
			tm = _this.tm,
			tb = _this.tb;
			
		this._change = function(){
			f = bc_options.feed_output;
			
			t1.name.text.text = f.team_1.name;
			t1.koeff.text.text = f.team_1.win;
			
			t2.name.text.text = f.team_2.name;
			t2.koeff.text.text = f.team_2.win;
			
			d.cur_draw.text.text = f.game.draw;
			tb.cur_draw.text.text = f.game.tb;
			tm.cur_draw.text.text = f.game.tm;
			
			dt.date.text.text = f.game.date.day + ' ' + f.game.date.month;
			dt.time.text.text = f.game.date.time;
		};
		this._change();
		
		bc_options.feed_change.top = function(){
			t1.play();
			t2.play();
			d.play();
			dt.play();
			tb.play();
			tm.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bet_logo
	this.instance = new lib.lll();
	this.instance.parent = this;
	this.instance.setTransform(300.2,42.6,0.8,0.8,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tm
	this.tm = new lib.tm();
	this.tm.parent = this;
	this.tm.setTransform(502.5,240.5);

	this.timeline.addTween(cjs.Tween.get(this.tm).wait(1));

	// tb
	this.tb = new lib.tb();
	this.tb.parent = this;
	this.tb.setTransform(99.5,240.5);

	this.timeline.addTween(cjs.Tween.get(this.tb).wait(1));

	// draw_x
	this.draw_x = new lib.draw_x();
	this.draw_x.parent = this;
	this.draw_x.setTransform(301,240);

	this.timeline.addTween(cjs.Tween.get(this.draw_x).wait(1));

	// date
	this.date = new lib.date();
	this.date.parent = this;
	this.date.setTransform(310.2,112.8);

	this.timeline.addTween(cjs.Tween.get(this.date).wait(1));

	// team2
	this.team2 = new lib.team2();
	this.team2.parent = this;
	this.team2.setTransform(502,116.1);

	this.timeline.addTween(cjs.Tween.get(this.team2).wait(1));

	// team1
	this.team1 = new lib.team1();
	this.team1.parent = this;
	this.team1.setTransform(98.5,116);

	this.timeline.addTween(cjs.Tween.get(this.team1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310.6,173.3,580,273.3);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;