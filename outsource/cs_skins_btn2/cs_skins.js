(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ak = function() {
	this.initialize(img.ak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,109);


(lib.atfingertips = function() {
	this.initialize(img.atfingertips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,32);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,258);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,69);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,69);


(lib.CS_GOSkins = function() {
	this.initialize(img.CS_GOSkins);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,37);


(lib.Fog = function() {
	this.initialize(img.Fog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,129);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,52);


(lib.Group = function() {
	this.initialize(img.Group);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,280);


(lib.kamni = function() {
	this.initialize(img.kamni);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,39);


(lib.logo_big = function() {
	this.initialize(img.logo_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,44);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,29);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,194);// helper functions:

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


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,492.9,251.9), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.CS_GOSkins();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,146,37), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.atfingertips();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,146,32), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0)","#FFCC00","rgba(255,255,204,0)"],[0,0.482,1],-27.3,-4.6,27.2,4.7).s().p("ABKGPInFhNQgtgHAMgdIEZqXQAMgdAuAHIHFBNQAtAIgMAdIkZKXQgJAXgeAAQgJAAgKgCg");
	this.shape.setTransform(26.6,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-15,0,83.1,80.2), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.62,0.6);

	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1,0.62,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,41.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0066FF","#3399FF"],[0,1],-48.2,51.1,34.6,-62.3).s().p("AsDFAIAArvIV/AAICINfg");
	this.shape.setTransform(77.2,43.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,154.4,86.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fog();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,393,129), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fog();
	this.instance.parent = this;
	this.instance.setTransform(393,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,393,129), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fog();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,393,129), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-84,0,84,0).s().p("AtHU4MAAAgpvIaPAAMAAAApvg");
	this.shape.setTransform(99.3,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,-5,459,267.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,22,29), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,94,194), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,30,44), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ak();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,137,109), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,31,52), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kamni();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,249,39), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(739.4,125.9,1,1,0,0,0,246.5,125.9);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(246.5,125.9,1,1,0,0,0,246.5,125.9);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,985.8,251.9), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(246.5,125.9,1,1,0,0,0,246.5,125.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:173.9,y:145.4,alpha:0.469},49).to({x:99.8,y:125.9,alpha:1},50).to({x:25.8,y:151.9,alpha:0.461},50).to({x:-48.3,y:138.9,alpha:1},50).to({x:-246.2,y:125.9},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,985.8,251.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CS_GO Skins.png
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(71,7.5,1,1,0,0,0,73,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.6,scaleX:0.94,scaleY:0.94,y:7.7},11,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88,x:71.1,y:7.6},13,cjs.Ease.get(1)).to({regY:18.7,scaleX:0.94,scaleY:0.94,y:7.7},12,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,scaleY:1,x:71,y:7.5},13,cjs.Ease.get(1)).wait(1));

	// at fingertips.png
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,52,1,1,0,0,0,73,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06,x:71.1,y:49.1},11,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:71,y:45.6},13,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:71.1,y:48.7},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:71,y:52},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-11,146,79);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(26.3,40.1,1,1,0,0,0,26.3,40.1);
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-17,-2,87,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-20,-5,97,94), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap6DXQgeAAAAgeIAAlxQAAgeAeAAIT1AAQAeAAAAAeIAAFxQAAAegeAAg");
	mask.setTransform(66.5,21.5);

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-30.3,19.2,1,1,0,0,0,26.3,40.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:82.8},29,cjs.Ease.get(-1)).to({x:199.7},30,cjs.Ease.get(1)).wait(21));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.5,21.5,1,1,0,0,0,66.5,21.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,43);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(66.5,21.5,1,1,0,0,0,66.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18.1},14,cjs.Ease.get(-1)).to({y:14.5},15,cjs.Ease.get(1)).wait(1).to({y:17.9},14,cjs.Ease.get(-1)).to({y:20.5},7,cjs.Ease.get(1)).to({y:21.5},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-25.9,209.6,93);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_big();
	this.instance.parent = this;
	this.instance.setTransform(4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.8,24.6,1,1,0,0,0,77.2,43.2);
	this.instance_1.alpha = 0.289;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-22.4,-22.6,172,103), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(929.5,64.5,1,1,0,0,0,196.5,64.5);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(536.5,64.5,1,1,0,0,0,196.5,64.5);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(196.5,64.5,1,1,0,0,0,196.5,64.5);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,1126,129), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(196.5,64.5,1,1,0,0,0,196.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.1},49).to({x:-536.3},150).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1126,129);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kamni.png
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(165.5,182.5,1,1,0,0,0,124.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// golova.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(170.5,17.1,1,1,0,0,0,15.5,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1.1,y:17.2},19,cjs.Ease.get(-1)).to({rotation:-2.5,x:170.6},20,cjs.Ease.get(1)).to({regX:15.6,rotation:-1.1},20,cjs.Ease.get(-1)).to({regX:15.5,rotation:0,x:170.5,y:17.1},20,cjs.Ease.get(1)).wait(1));

	// ak.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.8,48.8,1,1,0,0,0,126.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1.8,y:48.6},14,cjs.Ease.get(-1)).to({regY:23.9,rotation:3.7,y:48.2},15,cjs.Ease.get(1)).to({regX:126.9,rotation:1.8,x:210.9,y:48.6},15,cjs.Ease.get(-1)).to({regX:126.8,regY:23.8,rotation:0,x:210.8,y:48.8},15,cjs.Ease.get(1)).wait(21));

	// plecho.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(197.4,19.7,1,1,0,0,0,5.4,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:19.4},14,cjs.Ease.get(-1)).to({y:19.1},15,cjs.Ease.get(1)).to({y:19.4},15,cjs.Ease.get(-1)).to({y:19.7},15,cjs.Ease.get(1)).wait(21));

	// telo.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(162,107,1,1,0,0,0,47,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:106.7},14,cjs.Ease.get(-1)).to({y:106.4},15,cjs.Ease.get(1)).to({y:106.7},15,cjs.Ease.get(-1)).to({y:107},15,cjs.Ease.get(1)).wait(21));

	// ruka.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(135,74.1,1,1,0,0,0,11,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:11.1,rotation:7.1,x:135.1,y:73.8},14,cjs.Ease.get(-1)).to({rotation:15,y:73.5},15,cjs.Ease.get(1)).to({rotation:7.3,x:135.2,y:73.8},15,cjs.Ease.get(-1)).to({regX:11,rotation:0,x:135,y:74.1},15,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41,-23,249,227);


// stage content:
(lib.cs_skins = function(mode,startPosition,loop) {
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

	// btn
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(225.5,219.5,1,1,0,0,0,66.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85,118.5,1,1,0,0,0,73,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.5,31.1,1.138,1.138,0,0,0,56.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// fog
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(197.5,199.5,1,1,0,0,0,196.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tip
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.7,146,1,1,0,0,0,124.5,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// iskry
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(244.5,124.9,1,1,0,0,0,246.5,125.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(212.7,126,1,1,0,0,0,229.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129.3,105.9,1147.7,285.2);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ak.png?1504772672485", id:"ak"},
		{src:"images/atfingertips.png?1504772672485", id:"atfingertips"},
		{src:"images/bg.jpg?1504772672485", id:"bg"},
		{src:"images/btn1.jpg?1504772672485", id:"btn1"},
		{src:"images/btn2.jpg?1504772672485", id:"btn2"},
		{src:"images/CS_GOSkins.png?1504772672485", id:"CS_GOSkins"},
		{src:"images/Fog.png?1504772672485", id:"Fog"},
		{src:"images/golova.png?1504772672485", id:"golova"},
		{src:"images/Group.png?1504772672485", id:"Group"},
		{src:"images/kamni.png?1504772672485", id:"kamni"},
		{src:"images/logo_big.png?1504772672485", id:"logo_big"},
		{src:"images/plecho.png?1504772672485", id:"plecho"},
		{src:"images/ruka.png?1504772672485", id:"ruka"},
		{src:"images/telo.png?1504772672485", id:"telo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;