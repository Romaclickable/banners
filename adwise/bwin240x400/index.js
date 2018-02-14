(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);// helper functions:

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


(lib.txt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-115.8,18).lineTo(-115.8,11.1).lineTo(-129.7,11.1).lineTo(-129.7,18).lineTo(-134.9,18).lineTo(-135.3,6.6).lineTo(-133.5,6.6).curveTo(-132.2,5.4,-131.3,2.5).curveTo(-130.4,-0.4,-130.2,-6.1).lineTo(-129.5,-17.5).lineTo(-113.1,-17.5).lineTo(-113.1,6.6).lineTo(-110.2,6.6).lineTo(-110.8,18).closePath().moveTo(-124.7,-6.1).curveTo(-124.8,-1.7,-125.5,1.5).curveTo(-126.2,4.5,-127.4,6.6).lineTo(-118.7,6.6).lineTo(-118.7,-13.1).lineTo(-124.2,-13.1).closePath().moveTo(12.6,8.6).curveTo(9.8,5.7,9.8,0.8).lineTo(9.8,-0.4).lineTo(7.4,-0.4).lineTo(7.4,11.1).lineTo(1.8,11.1).lineTo(1.8,-17.5).lineTo(7.4,-17.5).lineTo(7.4,-4.9).lineTo(9.8,-4.9).lineTo(9.8,-7.3).curveTo(9.8,-12.2,12.6,-15.1).curveTo(15.2,-18,19.7,-18.1).curveTo(24.3,-18,27.1,-15.1).curveTo(29.8,-12.3,29.8,-7.3).lineTo(29.8,0.8).curveTo(29.8,5.7,27.1,8.6).curveTo(24.3,11.5,19.8,11.5).curveTo(15.2,11.5,12.6,8.6).closePath().moveTo(16.5,-12).curveTo(15.4,-10.4,15.4,-7.4).lineTo(15.4,0.8).curveTo(15.4,3.8,16.5,5.4).curveTo(17.7,7,19.8,7).curveTo(22,7,23.1,5.4).curveTo(24.2,3.8,24.2,0.8).lineTo(24.2,-7.4).curveTo(24.2,-10.4,23.1,-12).curveTo(22,-13.6,19.7,-13.6).curveTo(17.6,-13.6,16.5,-12).closePath().moveTo(-105.4,8.6).curveTo(-108.1,5.7,-108.1,0.8).lineTo(-108.1,-7.3).curveTo(-108.1,-12.3,-105.4,-15.1).curveTo(-102.7,-18,-98.2,-18.1).curveTo(-93.7,-18,-90.9,-15.1).curveTo(-88.2,-12.3,-88.2,-7.3).lineTo(-88.2,0.8).curveTo(-88.2,5.7,-90.9,8.6).curveTo(-93.6,11.5,-98.2,11.5).curveTo(-102.7,11.5,-105.4,8.6).closePath().moveTo(-101.5,-12).curveTo(-102.6,-10.4,-102.6,-7.4).lineTo(-102.6,0.8).curveTo(-102.6,3.8,-101.4,5.4).curveTo(-100.3,7,-98.2,7).curveTo(-96,7,-94.8,5.4).curveTo(-93.7,3.8,-93.7,0.8).lineTo(-93.7,-7.4).curveTo(-93.7,-10.4,-94.8,-12).curveTo(-96,-13.6,-98.2,-13.6).curveTo(-100.3,-13.6,-101.5,-12).closePath().moveTo(129.7,11.1).lineTo(130.2,-8.4).lineTo(130.1,-8.4).lineTo(124.6,11.1).lineTo(120.9,11.1).lineTo(115.5,-8.3).lineTo(115.4,-8.3).lineTo(115.9,11.1).lineTo(110.2,11.1).lineTo(110.2,-17.5).lineTo(117.5,-17.5).lineTo(122.7,3.4).lineTo(122.8,3.4).lineTo(127.9,-17.5).lineTo(135.3,-17.5).lineTo(135.3,11.1).closePath().moveTo(102.4,11.1).lineTo(100.8,5).lineTo(93.3,5).lineTo(91.8,11.1).lineTo(86.1,11.1).lineTo(94.2,-17.5).lineTo(100,-17.5).lineTo(108.1,11.1).closePath().moveTo(94.4,0.5).lineTo(99.7,0.5).lineTo(97.1,-9.7).lineTo(97,-9.7).closePath().moveTo(77.8,11.1).lineTo(77.8,-0.9).lineTo(69,-0.9).lineTo(69,11.1).lineTo(63.3,11.1).lineTo(63.3,-17.5).lineTo(69,-17.5).lineTo(69,-5.3).lineTo(77.8,-5.3).lineTo(77.8,-17.5).lineTo(83.4,-17.5).lineTo(83.4,11.1).closePath().moveTo(39.6,11.1).lineTo(39.6,-13.1).lineTo(33.1,-13.1).lineTo(33.1,-17.5).lineTo(51.6,-17.5).lineTo(51.6,-13.1).lineTo(45.1,-13.1).lineTo(45.1,11.1).closePath().moveTo(-8.1,11.1).lineTo(-8.1,0.6).lineTo(-11.5,0.6).lineTo(-15.9,11.1).lineTo(-21.9,11.1).lineTo(-16.7,-1.5).curveTo(-18.5,-2.7,-19.3,-4.5).curveTo(-20.3,-6.3,-20.3,-8.9).curveTo(-20.3,-13.1,-17.9,-15.3).curveTo(-15.5,-17.6,-11.2,-17.5).lineTo(-2.6,-17.5).lineTo(-2.6,11.1).closePath().moveTo(-13.8,-12).curveTo(-14.6,-10.8,-14.6,-8.4).curveTo(-14.6,-6.3,-13.8,-5).curveTo(-12.9,-3.7,-11.1,-3.7).lineTo(-8.1,-3.7).lineTo(-8.1,-13.1).lineTo(-11.2,-13.1).curveTo(-13,-13.1,-13.8,-12).closePath().moveTo(-41.9,11.1).lineTo(-41.9,-17.5).lineTo(-31.9,-17.5).curveTo(-27.6,-17.6,-25.2,-15.1).curveTo(-22.7,-12.5,-22.7,-8.4).curveTo(-22.7,-4.4,-25.2,-1.7).curveTo(-27.7,0.8,-31.9,0.8).lineTo(-36.3,0.8).lineTo(-36.3,11.1).closePath().moveTo(-36.3,-3.7).lineTo(-31.9,-3.7).curveTo(-30.2,-3.7,-29.2,-5).curveTo(-28.3,-6.4,-28.3,-8.4).curveTo(-28.3,-10.5,-29.2,-11.7).curveTo(-30.2,-13.1,-31.9,-13.1).lineTo(-36.3,-13.1).closePath().moveTo(-61.9,11.1).lineTo(-61.9,-17.5).lineTo(-45,-17.5).lineTo(-45,-13.1).lineTo(-56.3,-13.1).lineTo(-56.3,-6).lineTo(-46.6,-6).lineTo(-46.6,-1.5).lineTo(-56.3,-1.5).lineTo(-56.3,6.6).lineTo(-44.9,6.6).lineTo(-44.9,11.1).closePath().moveTo(-84.4,11.1).lineTo(-84.4,-17.5).lineTo(-75.9,-17.5).curveTo(-71.5,-17.5,-69,-15.6).curveTo(-66.5,-13.7,-66.5,-9.8).curveTo(-66.5,-7.7,-67.4,-6.2).curveTo(-68.3,-4.6,-70.2,-3.8).curveTo(-67.8,-3.2,-66.8,-1.5).curveTo(-65.8,0.4,-65.8,2.6).curveTo(-65.8,6.8,-68,8.9).curveTo(-70.5,11,-74.8,11.1).closePath().moveTo(-78.8,6.6).lineTo(-74.8,6.6).curveTo(-73,6.6,-72.1,5.6).curveTo(-71.3,4.6,-71.3,2.6).curveTo(-71.3,0.7,-72,-0.5).curveTo(-72.7,-1.6,-74.4,-1.6).lineTo(-78.8,-1.6).closePath().moveTo(-78.8,-5.5).lineTo(-75.6,-5.5).curveTo(-73.9,-5.6,-73,-6.5).curveTo(-72.1,-7.5,-72.1,-9.3).curveTo(-72.1,-11.3,-73.1,-12.1).curveTo(-74,-13.1,-75.9,-13.1).lineTo(-78.8,-13.1).closePath();
	this.shape.setTransform(239.7,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt8, new cjs.Rectangle(104.4,92.9,270.5,36.1), null);


(lib.txt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-48.6,12.1).curveTo(-51.3,9.3,-51.3,4.3).lineTo(-51.3,-4.3).curveTo(-51.3,-9.3,-48.7,-12).curveTo(-46.1,-14.8,-41.8,-14.8).curveTo(-37.2,-14.8,-34.9,-12.3).curveTo(-32.5,-9.9,-32.5,-5.1).lineTo(-32.5,-5).lineTo(-37.9,-5).curveTo(-37.8,-7.8,-38.7,-9.1).curveTo(-39.5,-10.3,-41.8,-10.3).curveTo(-43.6,-10.3,-44.7,-8.8).curveTo(-45.7,-7.4,-45.7,-4.4).lineTo(-45.7,4.3).curveTo(-45.7,7.3,-44.5,8.8).curveTo(-43.6,10.3,-41.5,10.3).curveTo(-39.4,10.3,-38.6,9.1).curveTo(-37.8,8,-37.9,5.1).lineTo(-32.5,5.1).lineTo(-32.5,5.3).curveTo(-32.4,10,-34.6,12.4).curveTo(-37,14.8,-41.5,14.8).curveTo(-45.9,14.8,-48.6,12.1).closePath().moveTo(-108,12).curveTo(-110.7,9.1,-110.7,4).lineTo(-110.7,-4).curveTo(-110.7,-9.1,-108,-11.9).curveTo(-105.3,-14.8,-100.7,-14.8).curveTo(-96.2,-14.8,-93.4,-11.9).curveTo(-90.7,-9.1,-90.7,-4).lineTo(-90.7,4).curveTo(-90.7,9.1,-93.4,12).curveTo(-96.1,14.8,-100.7,14.8).curveTo(-105.3,14.8,-108,12).closePath().moveTo(-104,-8.7).curveTo(-105.1,-7.2,-105.1,-4.1).lineTo(-105.1,4).curveTo(-105.1,7.2,-104,8.7).curveTo(-102.9,10.3,-100.7,10.3).curveTo(-98.5,10.3,-97.3,8.7).curveTo(-96.2,7.2,-96.2,4).lineTo(-96.2,-4.1).curveTo(-96.2,-7.2,-97.3,-8.7).curveTo(-98.5,-10.3,-100.7,-10.3).curveTo(-102.9,-10.3,-104,-8.7).closePath().moveTo(117.1,14.4).lineTo(117.1,-14.4).lineTo(134.1,-14.4).lineTo(134.1,-9.9).lineTo(122.8,-9.9).lineTo(122.8,-2.7).lineTo(132.4,-2.7).lineTo(132.4,1.8).lineTo(122.8,1.8).lineTo(122.8,9.9).lineTo(134.1,9.9).lineTo(134.1,14.4).closePath().moveTo(92.5,14.4).lineTo(92.5,-14.4).lineTo(102.5,-14.4).curveTo(106.9,-14.4,109.4,-11.9).curveTo(111.8,-9.3,111.8,-5.2).curveTo(111.8,-1,109.4,1.5).curveTo(106.8,4,102.5,4).lineTo(98.2,4).lineTo(98.2,14.4).closePath().moveTo(98.2,-0.4).lineTo(102.5,-0.4).curveTo(104.3,-0.4,105.3,-1.7).curveTo(106.2,-3.1,106.2,-5.1).curveTo(106.2,-7.2,105.3,-8.5).curveTo(104.3,-9.9,102.5,-9.9).lineTo(98.2,-9.9).closePath().moveTo(80.9,14.4).lineTo(80.9,-3.5).lineTo(80.8,-3.5).lineTo(71.9,14.4).lineTo(66.4,14.4).lineTo(66.4,-14.4).lineTo(71.9,-14.4).lineTo(71.9,3.4).lineTo(72.1,3.5).lineTo(80.9,-14.4).lineTo(86.5,-14.4).lineTo(86.5,14.4).closePath().moveTo(55,14.4).lineTo(55.6,-5.2).lineTo(55.5,-5.2).lineTo(50,14.4).lineTo(46.2,14.4).lineTo(40.7,-5).lineTo(40.6,-5).lineTo(41.2,14.4).lineTo(35.6,14.4).lineTo(35.6,-14.4).lineTo(42.9,-14.4).lineTo(48,6.7).lineTo(48.2,6.7).lineTo(53.3,-14.4).lineTo(60.7,-14.4).lineTo(60.7,14.4).closePath().moveTo(13.6,14.4).lineTo(14.1,-5.2).lineTo(14,-5.2).lineTo(8.5,14.4).lineTo(4.7,14.4).lineTo(-0.8,-5).lineTo(-0.9,-5).lineTo(-0.3,14.4).lineTo(-5.9,14.4).lineTo(-5.9,-14.4).lineTo(1.4,-14.4).lineTo(6.5,6.7).lineTo(6.7,6.7).lineTo(11.8,-14.4).lineTo(19.1,-14.4).lineTo(19.1,14.4).closePath().moveTo(-27.4,14.4).lineTo(-27.4,-14.4).lineTo(-10.4,-14.4).lineTo(-10.4,-9.9).lineTo(-21.8,-9.9).lineTo(-21.8,-2.7).lineTo(-12.1,-2.7).lineTo(-12.1,1.8).lineTo(-21.8,1.8).lineTo(-21.8,9.9).lineTo(-10.4,9.9).lineTo(-10.4,14.4).closePath().moveTo(-74.7,14.4).lineTo(-74.7,-14.4).lineTo(-66.2,-14.4).curveTo(-61.8,-14.4,-59.3,-12.4).curveTo(-56.8,-10.4,-56.8,-6.5).curveTo(-56.8,-4.5,-57.7,-2.9).curveTo(-58.6,-1.3,-60.4,-0.5).curveTo(-58.1,0.1,-57,1.8).curveTo(-56,3.6,-56,6).curveTo(-56,10.1,-58.4,12.2).curveTo(-60.7,14.4,-65.1,14.4).closePath().moveTo(-69.1,9.9).lineTo(-65.1,9.9).curveTo(-63.3,9.9,-62.4,8.9).curveTo(-61.6,7.9,-61.5,6).curveTo(-61.6,3.9,-62.3,2.8).curveTo(-63.1,1.7,-64.8,1.7).lineTo(-69.1,1.7).closePath().moveTo(-69.1,-2.2).lineTo(-65.9,-2.2).curveTo(-64.2,-2.3,-63.3,-3.2).curveTo(-62.4,-4.2,-62.4,-6).curveTo(-62.4,-8,-63.3,-9).curveTo(-64.3,-9.9,-66.2,-9.9).lineTo(-69.1,-9.9).closePath().moveTo(-134.2,14.4).lineTo(-134.2,-14.4).lineTo(-125.6,-14.4).curveTo(-121.3,-14.4,-118.8,-12.4).curveTo(-116.2,-10.4,-116.2,-6.5).curveTo(-116.2,-4.5,-117.2,-2.9).curveTo(-118.1,-1.3,-119.9,-0.5).curveTo(-117.6,0.1,-116.5,1.8).curveTo(-115.4,3.6,-115.4,6).curveTo(-115.4,10.1,-117.8,12.2).curveTo(-120.1,14.4,-124.6,14.4).closePath().moveTo(-128.5,9.9).lineTo(-124.6,9.9).curveTo(-122.8,9.9,-121.9,8.9).curveTo(-121,7.9,-121,6).curveTo(-121,3.9,-121.8,2.8).curveTo(-122.5,1.7,-124.2,1.7).lineTo(-128.5,1.7).closePath().moveTo(-128.5,-2.2).lineTo(-125.4,-2.2).curveTo(-123.7,-2.3,-122.8,-3.2).curveTo(-121.8,-4.2,-121.8,-6).curveTo(-121.9,-8,-122.8,-9).curveTo(-123.8,-9.9,-125.6,-9.9).lineTo(-128.5,-9.9).closePath();
	this.shape.setTransform(240.9,64.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt7, new cjs.Rectangle(106.8,49.9,268.3,29.7), null);


(lib.txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFCC00").beginStroke().moveTo(66,20.9).curveTo(61.3,15.9,61.2,7.1).lineTo(61.2,-7).curveTo(61.3,-15.8,66,-20.7).curveTo(70.8,-25.8,78.7,-25.8).curveTo(86.6,-25.8,91.4,-20.7).curveTo(96.3,-15.8,96.2,-7).lineTo(96.2,7.1).curveTo(96.2,15.9,91.5,20.9).curveTo(86.7,25.8,78.8,25.8).curveTo(70.8,25.8,66,20.9).closePath().moveTo(72.9,-15.2).curveTo(71,-12.5,71,-7.1).lineTo(71,7.1).curveTo(71,12.6,72.9,15.3).curveTo(75,18,78.8,18).curveTo(82.5,18,84.5,15.3).curveTo(86.5,12.6,86.5,7.1).lineTo(86.5,-7.1).curveTo(86.5,-12.5,84.5,-15.2).curveTo(82.5,-17.9,78.7,-17.9).curveTo(74.8,-17.9,72.9,-15.2).closePath().moveTo(-14.3,20.9).curveTo(-19.1,15.9,-19.1,7.1).lineTo(-19.1,-7).curveTo(-19.1,-15.8,-14.3,-20.7).curveTo(-9.5,-25.8,-1.6,-25.8).curveTo(6.3,-25.8,11.1,-20.7).curveTo(15.9,-15.8,15.9,-7).lineTo(15.9,7.1).curveTo(15.9,15.9,11.2,20.9).curveTo(6.3,25.8,-1.6,25.8).curveTo(-9.5,25.8,-14.3,20.9).closePath().moveTo(-7.5,-15.2).curveTo(-9.3,-12.5,-9.4,-7.1).lineTo(-9.4,7.1).curveTo(-9.4,12.6,-7.4,15.3).curveTo(-5.4,18,-1.6,18).curveTo(2.2,18,4.1,15.3).curveTo(6.1,12.6,6.1,7.1).lineTo(6.1,-7.1).curveTo(6.1,-12.5,4.1,-15.2).curveTo(2.2,-17.9,-1.6,-17.9).curveTo(-5.5,-17.9,-7.5,-15.2).closePath().moveTo(103.1,25.1).lineTo(103.1,-25).lineTo(117.9,-25).curveTo(125.7,-25,130,-21.6).curveTo(134.4,-18.2,134.4,-11.3).curveTo(134.4,-7.8,132.8,-5).curveTo(131.2,-2.2,128.1,-0.8).curveTo(132,0.1,133.9,3.2).curveTo(135.7,6.3,135.7,10.4).curveTo(135.8,17.6,131.7,21.4).curveTo(127.5,25.1,119.9,25.1).closePath().moveTo(113,17.3).lineTo(119.9,17.3).curveTo(122.9,17.3,124.5,15.6).curveTo(126,13.8,126,10.4).curveTo(126,6.8,124.7,4.9).curveTo(123.4,3,120.5,3).lineTo(113,3).closePath().moveTo(113,-3.9).lineTo(118.4,-3.9).curveTo(121.4,-3.9,122.9,-5.6).curveTo(124.5,-7.3,124.6,-10.4).curveTo(124.6,-14,122.9,-15.6).curveTo(121.2,-17.2,117.9,-17.2).lineTo(113,-17.2).closePath().moveTo(46.8,25.1).lineTo(36.9,4.2).lineTo(32.6,4.2).lineTo(32.6,25.1).lineTo(22.8,25.1).lineTo(22.8,-25).lineTo(32.6,-25).lineTo(32.6,-4.7).lineTo(35.8,-4.7).lineTo(45.6,-25).lineTo(57.5,-25).lineTo(43.9,-2.1).lineTo(58.7,25.1).closePath().moveTo(-58.2,25.1).lineTo(-58.2,-25).lineTo(-40.9,-25).curveTo(-33.3,-25,-29,-20.6).curveTo(-24.7,-16.1,-24.7,-9).curveTo(-24.7,-1.8,-29,2.7).curveTo(-33.3,7.1,-40.9,7.1).lineTo(-48.4,7.1).lineTo(-48.4,25.1).closePath().moveTo(-48.4,-0.7).lineTo(-40.9,-0.7).curveTo(-37.7,-0.7,-36.1,-3.1).curveTo(-34.4,-5.4,-34.4,-8.9).curveTo(-34.4,-12.5,-36,-14.9).curveTo(-37.7,-17.2,-40.9,-17.2).lineTo(-48.4,-17.2).closePath().moveTo(-92.6,25.1).lineTo(-92.6,-25).lineTo(-64.4,-25).lineTo(-64.4,-17.2).lineTo(-82.8,-17.2).lineTo(-82.8,25.1).closePath().moveTo(-110.4,25.1).lineTo(-110.4,-6).lineTo(-110.7,-6.1).lineTo(-126,25.1).lineTo(-135.7,25.1).lineTo(-135.7,-25).lineTo(-126,-25).lineTo(-126,6.1).lineTo(-125.7,6.1).lineTo(-110.4,-25).lineTo(-100.7,-25).lineTo(-100.7,25.1).closePath();
	this.shape.setTransform(241.1,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt6, new cjs.Rectangle(105.4,-15.1,271.5,51.6), null);


(lib.txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFCC00").beginStroke().moveTo(113.2,19.1).curveTo(109.6,14.3,109.6,5).lineTo(109.6,-5).curveTo(109.6,-14.3,113.2,-19).curveTo(116.9,-23.9,123.1,-23.9).curveTo(129.4,-23.9,133,-19).curveTo(136.7,-14.3,136.7,-5).lineTo(136.7,5).curveTo(136.7,14.3,133.1,19.1).curveTo(129.4,23.9,123.2,23.8).curveTo(116.9,23.9,113.2,19.1).closePath().moveTo(123.3,16.4).curveTo(125.4,16.6,126.5,14).curveTo(127.7,11.5,127.7,5.7).lineTo(127.7,-5.8).curveTo(127.7,-11.4,126.5,-14).curveTo(125.3,-16.6,123.2,-16.4).lineTo(123,-16.4).curveTo(120.9,-16.6,119.7,-14).curveTo(118.6,-11.4,118.6,-5.8).lineTo(118.6,5.7).curveTo(118.6,11.4,119.8,14).curveTo(120.9,16.6,123.1,16.4).closePath().moveTo(82,19.1).curveTo(78.3,14.3,78.3,5).lineTo(78.3,-5).curveTo(78.3,-14.3,82,-19).curveTo(85.6,-23.9,91.9,-23.9).curveTo(98.1,-23.9,101.8,-19).curveTo(105.5,-14.3,105.5,-5).lineTo(105.5,5).curveTo(105.5,14.3,101.8,19.1).curveTo(98.1,23.9,91.9,23.8).curveTo(85.7,23.9,82,19.1).closePath().moveTo(92,16.4).curveTo(94.1,16.6,95.2,14).curveTo(96.4,11.5,96.4,5.7).lineTo(96.4,-5.8).curveTo(96.4,-11.4,95.2,-14).curveTo(94,-16.6,92,-16.4).lineTo(91.7,-16.4).curveTo(89.6,-16.6,88.5,-14).curveTo(87.3,-11.4,87.3,-5.8).lineTo(87.3,5.7).curveTo(87.3,11.4,88.5,14).curveTo(89.7,16.6,91.8,16.4).closePath().moveTo(50.7,19.1).curveTo(47,14.3,47,5).lineTo(47,-5).curveTo(47,-14.3,50.7,-19).curveTo(54.4,-23.9,60.6,-23.9).curveTo(66.8,-23.9,70.5,-19).curveTo(74.2,-14.3,74.2,-5).lineTo(74.2,5).curveTo(74.2,14.3,70.5,19.1).curveTo(66.8,23.9,60.7,23.8).curveTo(54.4,23.9,50.7,19.1).closePath().moveTo(60.8,16.4).curveTo(62.8,16.6,64,14).curveTo(65.1,11.5,65.1,5.7).lineTo(65.1,-5.8).curveTo(65.1,-11.4,64,-14).curveTo(62.8,-16.6,60.7,-16.4).lineTo(60.5,-16.4).curveTo(58.4,-16.6,57.2,-14).curveTo(56.1,-11.4,56.1,-5.8).lineTo(56.1,5.7).curveTo(56.1,11.4,57.3,14).curveTo(58.4,16.6,60.5,16.4).closePath().moveTo(6.2,19.1).curveTo(2.6,14.3,2.6,5).lineTo(2.6,-5).curveTo(2.6,-14.3,6.2,-19).curveTo(9.9,-23.9,16.1,-23.9).curveTo(22.3,-23.9,26,-19).curveTo(29.7,-14.3,29.7,-5).lineTo(29.7,5).curveTo(29.7,14.3,26.1,19.1).curveTo(22.3,23.9,16.2,23.8).curveTo(9.9,23.9,6.2,19.1).closePath().moveTo(16.3,16.4).curveTo(18.3,16.6,19.5,14).curveTo(20.6,11.5,20.6,5.7).lineTo(20.6,-5.8).curveTo(20.6,-11.4,19.5,-14).curveTo(18.3,-16.6,16.2,-16.4).lineTo(16,-16.4).curveTo(13.9,-16.6,12.7,-14).curveTo(11.6,-11.4,11.6,-5.8).lineTo(11.6,5.7).curveTo(11.6,11.4,12.8,14).curveTo(13.9,16.6,16.1,16.4).closePath().moveTo(-25,19.1).curveTo(-28.7,14.3,-28.7,5).lineTo(-28.7,-5).curveTo(-28.7,-14.3,-25,-19).curveTo(-21.4,-23.9,-15.2,-23.9).curveTo(-8.9,-23.9,-5.3,-19).curveTo(-1.5,-14.3,-1.5,-5).lineTo(-1.5,5).curveTo(-1.5,14.3,-5.2,19.1).curveTo(-8.9,23.9,-15.1,23.8).curveTo(-21.3,23.9,-25,19.1).closePath().moveTo(-15,16.4).curveTo(-12.9,16.6,-11.8,14).curveTo(-10.6,11.5,-10.6,5.7).lineTo(-10.6,-5.8).curveTo(-10.6,-11.4,-11.8,-14).curveTo(-13,-16.6,-15,-16.4).lineTo(-15.3,-16.4).curveTo(-17.4,-16.6,-18.5,-14).curveTo(-19.7,-11.4,-19.7,-5.8).lineTo(-19.7,5.7).curveTo(-19.7,11.4,-18.5,14).curveTo(-17.3,16.6,-15.2,16.4).closePath().moveTo(-56.3,19.1).curveTo(-60,14.3,-60,5).lineTo(-60,-5).curveTo(-60,-14.3,-56.3,-19).curveTo(-52.6,-23.9,-46.4,-23.9).curveTo(-40.2,-23.9,-36.5,-19).curveTo(-32.8,-14.3,-32.8,-5).lineTo(-32.8,5).curveTo(-32.8,14.3,-36.5,19.1).curveTo(-40.2,23.9,-46.4,23.8).curveTo(-52.6,23.9,-56.3,19.1).closePath().moveTo(-46.3,16.4).curveTo(-44.2,16.6,-43,14).curveTo(-41.9,11.5,-41.9,5.7).lineTo(-41.9,-5.8).curveTo(-41.9,-11.4,-43,-14).curveTo(-44.2,-16.6,-46.3,-16.4).lineTo(-46.5,-16.4).curveTo(-48.7,-16.6,-49.8,-14).curveTo(-51,-11.4,-51,-5.8).lineTo(-51,5.7).curveTo(-51,11.4,-49.8,14).curveTo(-48.6,16.6,-46.5,16.4).closePath().moveTo(-100.6,20.3).curveTo(-104.6,16.8,-104.5,10.7).lineTo(-104.5,10.5).lineTo(-95.7,10).curveTo(-95.7,13.1,-94.4,14.9).curveTo(-93.1,16.6,-91,16.6).curveTo(-88.6,16.6,-87.6,14.4).curveTo(-86.5,12,-86.5,8.4).curveTo(-86.5,4.3,-87.7,1.9).curveTo(-88.9,-0.5,-91.4,-0.6).curveTo(-93.3,-0.6,-94.3,0.5).curveTo(-95.3,1.5,-95.7,3.2).lineTo(-103.8,2.7).lineTo(-101.5,-23.2).lineTo(-78.8,-23.2).lineTo(-78.8,-15.8).lineTo(-94.1,-15.8).lineTo(-95.1,-4.9).curveTo(-94.1,-5.8,-92.5,-6.5).curveTo(-91.1,-7.1,-89.5,-7.2).curveTo(-83.7,-7.3,-80.5,-3.2).curveTo(-77.5,0.9,-77.5,8.3).curveTo(-77.5,14.9,-81,19.4).curveTo(-84.5,23.8,-91,23.8).curveTo(-96.6,23.9,-100.6,20.3).closePath().moveTo(-136.1,23.2).lineTo(-136.1,17).lineTo(-123.4,1).curveTo(-120.9,-2.5,-119.8,-5.2).curveTo(-118.7,-7.9,-118.7,-10).curveTo(-118.7,-13,-119.9,-14.9).curveTo(-121,-16.6,-123.2,-16.7).curveTo(-125.4,-16.7,-126.6,-14.4).curveTo(-127.8,-12.2,-127.8,-8.7).lineTo(-136.7,-8.7).lineTo(-136.7,-8.8).curveTo(-136.8,-15.1,-133.1,-19.5).curveTo(-129.4,-23.9,-123.2,-23.9).curveTo(-116.8,-23.9,-113.3,-20.2).curveTo(-109.7,-16.5,-109.7,-10.1).curveTo(-109.7,-5.9,-111.6,-2.2).curveTo(-113.6,1.4,-118.3,7.3).lineTo(-124.4,16).lineTo(-108.7,16).lineTo(-108.7,23.2).closePath();
	this.shape.setTransform(241.3,-52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt5, new cjs.Rectangle(79.1,-75.8,323.9,143.5), null);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(13.6,12.1).curveTo(10.9,9.4,10.9,4.4).lineTo(10.9,-4.3).curveTo(10.9,-9.3,13.5,-12).curveTo(16.1,-14.8,20.4,-14.8).curveTo(25,-14.8,27.3,-12.4).curveTo(29.7,-9.9,29.8,-5.1).lineTo(29.7,-4.9).lineTo(24.3,-4.9).curveTo(24.4,-7.9,23.5,-9).curveTo(22.6,-10.3,20.4,-10.3).curveTo(18.5,-10.3,17.5,-8.9).curveTo(16.5,-7.4,16.5,-4.4).lineTo(16.5,4.4).curveTo(16.5,7.4,17.6,8.9).curveTo(18.6,10.4,20.7,10.4).curveTo(22.7,10.4,23.6,9.1).curveTo(24.4,8,24.3,5.1).lineTo(29.7,5.1).lineTo(29.8,5.3).curveTo(29.8,10,27.5,12.5).curveTo(25.2,14.8,20.7,14.8).curveTo(16.3,14.8,13.6,12.1).closePath().moveTo(-8,12.1).curveTo(-10.7,9.4,-10.7,4.4).lineTo(-10.7,-4.3).curveTo(-10.7,-9.3,-8.1,-12).curveTo(-5.5,-14.8,-1.2,-14.8).curveTo(3.4,-14.8,5.8,-12.4).curveTo(8.1,-9.9,8.2,-5.1).lineTo(8.1,-4.9).lineTo(2.7,-4.9).curveTo(2.8,-7.9,2,-9).curveTo(1.1,-10.3,-1.2,-10.3).curveTo(-3.1,-10.3,-4.1,-8.9).curveTo(-5.1,-7.4,-5.1,-4.4).lineTo(-5.1,4.4).curveTo(-5.1,7.4,-4,8.9).curveTo(-2.9,10.4,-0.9,10.4).curveTo(1.2,10.4,2,9.1).curveTo(2.8,8,2.7,5.1).lineTo(8.1,5.1).lineTo(8.2,5.3).curveTo(8.2,10,5.9,12.5).curveTo(3.6,14.8,-0.9,14.8).curveTo(-5.3,14.8,-8,12.1).closePath().moveTo(-31,12).curveTo(-33.7,9.1,-33.7,4.1).lineTo(-33.7,-4).curveTo(-33.7,-9.1,-31,-11.9).curveTo(-28.3,-14.8,-23.7,-14.8).curveTo(-19.2,-14.8,-16.4,-11.9).curveTo(-13.6,-9.1,-13.6,-4).lineTo(-13.6,4.1).curveTo(-13.6,9.1,-16.4,12).curveTo(-19.1,14.8,-23.7,14.8).curveTo(-28.3,14.8,-31,12).closePath().moveTo(-27.1,-8.8).curveTo(-28.2,-7.2,-28.2,-4.1).lineTo(-28.2,4.1).curveTo(-28.2,7.2,-27,8.8).curveTo(-25.9,10.3,-23.7,10.4).curveTo(-21.5,10.3,-20.4,8.8).curveTo(-19.2,7.2,-19.2,4.1).lineTo(-19.2,-4.1).curveTo(-19.2,-7.2,-20.4,-8.8).curveTo(-21.5,-10.3,-23.7,-10.3).curveTo(-25.9,-10.3,-27.1,-8.8).closePath().moveTo(81.8,14.4).lineTo(81.8,9.3).lineTo(87.4,9.3).lineTo(87.4,14.4).closePath().moveTo(71.8,14.4).lineTo(71.8,-3.5).lineTo(71.7,-3.5).lineTo(62.8,14.4).lineTo(57.2,14.4).lineTo(57.2,-14.4).lineTo(62.8,-14.4).lineTo(62.8,3.5).lineTo(63,3.5).lineTo(71.8,-14.4).lineTo(77.4,-14.4).lineTo(77.4,14.4).closePath().moveTo(47.5,14.4).lineTo(47.5,-3.5).lineTo(47.4,-3.5).lineTo(38.6,14.4).lineTo(33,14.4).lineTo(33,-14.4).lineTo(38.6,-14.4).lineTo(38.6,3.5).lineTo(38.7,3.5).lineTo(47.5,-14.4).lineTo(53.1,-14.4).lineTo(53.1,14.4).closePath().moveTo(-56,14.4).lineTo(-56,-14.4).lineTo(-46,-14.4).curveTo(-41.7,-14.4,-39.2,-11.8).curveTo(-36.7,-9.3,-36.7,-5.2).curveTo(-36.7,-1,-39.2,1.5).curveTo(-41.7,4.1,-46,4.1).lineTo(-50.4,4.1).lineTo(-50.4,14.4).closePath().moveTo(-50.4,-0.4).lineTo(-46,-0.4).curveTo(-44.2,-0.4,-43.2,-1.8).curveTo(-42.3,-3.1,-42.3,-5.1).curveTo(-42.3,-7.2,-43.2,-8.5).curveTo(-44.2,-9.9,-46,-9.9).lineTo(-50.4,-9.9).closePath().moveTo(-87.4,14.4).lineTo(-87.4,-14.4).lineTo(-78.9,-14.4).curveTo(-74.4,-14.4,-71.9,-12.5).curveTo(-69.5,-10.4,-69.5,-6.5).curveTo(-69.5,-4.5,-70.3,-2.9).curveTo(-71.3,-1.3,-73.1,-0.4).curveTo(-70.8,-0,-69.7,1.8).curveTo(-68.6,3.6,-68.6,6).curveTo(-68.6,10.2,-71,12.3).curveTo(-73.4,14.4,-77.8,14.4).closePath().moveTo(-81.8,9.9).lineTo(-77.8,9.9).curveTo(-76,9.9,-75.1,9).curveTo(-74.2,7.9,-74.2,6).curveTo(-74.2,4,-75,2.8).curveTo(-75.7,1.7,-77.4,1.7).lineTo(-81.8,1.7).closePath().moveTo(-81.8,-2.2).lineTo(-78.6,-2.2).curveTo(-76.9,-2.3,-76,-3.3).curveTo(-75.1,-4.2,-75.1,-6).curveTo(-75.1,-8.1,-76,-9).curveTo(-77,-9.9,-78.9,-9.9).lineTo(-81.8,-9.9).closePath().moveTo(81.8,4.4).lineTo(81.8,-14.4).lineTo(87.4,-14.4).lineTo(87.4,4.4).closePath();
	this.shape.setTransform(-49.8,329.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(-137.2,315.1,174.9,29.6), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-33,14.6).lineTo(-33.9,14.5).lineTo(-34,10).lineTo(-33.4,10.1).lineTo(-32.7,10.2).curveTo(-31.4,10.1,-30.8,9.5).curveTo(-30.1,8.7,-29.7,7.2).lineTo(-29.5,6.3).lineTo(-38,-14.6).lineTo(-31.9,-14.6).lineTo(-27.3,-1.5).lineTo(-27.3,-1.2).lineTo(-27.2,-1.2).lineTo(-23,-14.6).lineTo(-17.2,-14.6).lineTo(-25.2,8.7).curveTo(-26.4,11.5,-27.9,13.1).curveTo(-29.4,14.6,-32.1,14.6).lineTo(-33,14.6).closePath().moveTo(21,14.2).lineTo(21,-14.6).lineTo(38,-14.6).lineTo(38,-10.1).lineTo(26.6,-10.1).lineTo(26.6,-3).lineTo(36.3,-3).lineTo(36.3,1.5).lineTo(26.6,1.5).lineTo(26.6,9.7).lineTo(38,9.7).lineTo(38,14.2).closePath().moveTo(11.6,14.2).lineTo(6.9,2.3).lineTo(4.2,2.3).lineTo(4.2,14.2).lineTo(-1.5,14.2).lineTo(-1.5,2.3).lineTo(-4.4,2.3).lineTo(-9.2,14.2).lineTo(-16.2,14.2).lineTo(-8.8,-1.6).lineTo(-15.9,-14.6).lineTo(-8.9,-14.6).lineTo(-3.9,-2.9).lineTo(-1.5,-2.9).lineTo(-1.5,-14.6).lineTo(4.2,-14.6).lineTo(4.2,-2.9).lineTo(6.5,-2.9).lineTo(11.3,-14.6).lineTo(18.2,-14.6).lineTo(11.3,-1.7).lineTo(18.6,14.2).closePath();
	this.shape.setTransform(-187,330.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(-225,315.5,75.9,29.2), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFCC00").beginStroke().moveTo(-93.9,21.6).lineTo(-95.1,21.5).lineTo(-95.3,14.9).lineTo(-94.5,15).lineTo(-93.4,15).curveTo(-91.5,15,-90.5,14).curveTo(-89.6,12.9,-89.1,10.7).lineTo(-88.6,9.3).lineTo(-101.2,-21.6).lineTo(-92.3,-21.6).lineTo(-85.6,-2.3).lineTo(-85.5,-1.9).lineTo(-85.2,-1.9).lineTo(-79.2,-21.6).lineTo(-70.5,-21.6).lineTo(-82.4,12.7).curveTo(-84.1,17,-86.3,19.3).curveTo(-88.5,21.6,-92.5,21.6).lineTo(-93.9,21.6).closePath().moveTo(102.6,21).lineTo(102.6,-21.6).lineTo(117.5,-21.6).curveTo(123.9,-21.6,127.6,-17.9).curveTo(131.2,-14.1,131.2,-7.9).curveTo(131.2,-1.8,127.6,2).curveTo(123.9,5.7,117.5,5.7).lineTo(111,5.7).lineTo(111,21).closePath().moveTo(111,-0.9).lineTo(117.5,-0.9).curveTo(120.1,-0.9,121.5,-2.9).curveTo(123,-4.9,123,-7.9).curveTo(123,-11,121.6,-13).curveTo(120.2,-15,117.5,-15).lineTo(111,-15).closePath().moveTo(73.1,21).lineTo(73.1,-21.6).lineTo(98.3,-21.6).lineTo(98.3,-15).lineTo(81.5,-15).lineTo(81.5,-4.3).lineTo(95.8,-4.3).lineTo(95.8,2.3).lineTo(81.5,2.3).lineTo(81.5,14.4).lineTo(98.3,14.4).lineTo(98.3,21).closePath().moveTo(60.2,21).lineTo(51.8,3.3).lineTo(48.2,3.3).lineTo(48.2,21).lineTo(39.8,21).lineTo(39.8,-21.6).lineTo(48.2,-21.6).lineTo(48.2,-4.3).lineTo(50.9,-4.3).lineTo(59.2,-21.6).lineTo(69.4,-21.6).lineTo(57.8,-2.1).lineTo(70.4,21).closePath().moveTo(10.3,21).lineTo(10.3,-21.6).lineTo(35.4,-21.6).lineTo(35.4,-15).lineTo(18.6,-15).lineTo(18.6,-4.3).lineTo(32.9,-4.3).lineTo(32.9,2.3).lineTo(18.6,2.3).lineTo(18.6,14.4).lineTo(35.5,14.4).lineTo(35.5,21).closePath().moveTo(-4.3,21).lineTo(-4.3,8.6).lineTo(-3.7,-7.9).lineTo(-3.8,-8).lineTo(-12,21).lineTo(-17.5,21).lineTo(-25.6,-7.7).lineTo(-25.7,-7.7).lineTo(-25,8.6).lineTo(-25,21).lineTo(-33.3,21).lineTo(-33.3,-21.6).lineTo(-22.5,-21.6).lineTo(-14.8,9.7).lineTo(-14.7,9.7).lineTo(-6.9,-21.6).lineTo(4,-21.6).lineTo(4,21).closePath().moveTo(-46,21).lineTo(-54.4,3.3).lineTo(-58.1,3.3).lineTo(-58.1,21).lineTo(-66.4,21).lineTo(-66.4,-21.6).lineTo(-58.1,-21.6).lineTo(-58.1,-4.3).lineTo(-55.4,-4.3).lineTo(-47.1,-21.6).lineTo(-36.9,-21.6).lineTo(-48.4,-2.1).lineTo(-35.8,21).closePath().moveTo(-131.2,21).lineTo(-131.2,-21.6).lineTo(-107.3,-21.6).lineTo(-107.3,-15).lineTo(-122.9,-15).lineTo(-122.9,-5.9).lineTo(-117.5,-5.9).curveTo(-111.1,-5.9,-107.3,-2.3).curveTo(-103.5,1.4,-103.5,7.4).curveTo(-103.5,13.5,-107.3,17.3).curveTo(-111.1,21,-117.5,21).closePath().moveTo(-122.9,14.4).lineTo(-117.5,14.4).curveTo(-114.9,14.4,-113.4,12.4).curveTo(-111.8,10.4,-111.9,7.3).curveTo(-111.8,4.4,-113.4,2.6).curveTo(-114.9,0.7,-117.5,0.7).lineTo(-122.9,0.7).closePath();
	this.shape.setTransform(-94.1,265.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-225.4,243.6,262.5,43.3), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFCC00").beginStroke().moveTo(-0.6,23.1).lineTo(-0.6,15.8).lineTo(-15,15.8).lineTo(-15,23.1).lineTo(-20.5,23.1).lineTo(-20.8,11.2).lineTo(-18.9,11.2).curveTo(-17.6,10,-16.6,7).curveTo(-15.7,3.9,-15.5,-2).lineTo(-14.8,-14).lineTo(2.3,-14).lineTo(2.3,11.2).lineTo(5.3,11.2).lineTo(4.7,23.1).closePath().moveTo(-9.7,-2).curveTo(-9.9,2.6,-10.7,5.8).curveTo(-11.4,9,-12.7,11.2).lineTo(-3.6,11.2).lineTo(-3.6,-9.4).lineTo(-9.2,-9.4).closePath().moveTo(126.9,15.8).lineTo(126.9,-2.8).lineTo(126.8,-2.8).lineTo(117.7,15.8).lineTo(111.8,15.8).lineTo(111.8,-14).lineTo(117.7,-14).lineTo(117.7,4.5).lineTo(117.8,4.5).lineTo(126.9,-14).lineTo(132.8,-14).lineTo(132.8,15.8).closePath().moveTo(101.7,15.8).lineTo(101.7,-14).lineTo(107.5,-14).lineTo(107.5,15.8).closePath().moveTo(80.5,15.8).lineTo(80.5,-14).lineTo(86.3,-14).lineTo(86.3,-3).lineTo(90,-3).curveTo(94.5,-3.1,97.2,-0.5).curveTo(99.9,2.1,99.9,6.2).curveTo(99.9,10.5,97.2,13.2).curveTo(94.5,15.8,90,15.8).closePath().moveTo(86.3,11.2).lineTo(90,11.2).curveTo(92,11.2,93,9.7).curveTo(94.1,8.3,94.1,6.2).curveTo(94.1,4.2,93,2.9).curveTo(92,1.6,90,1.6).lineTo(86.3,1.6).closePath().moveTo(70.1,15.8).lineTo(70.1,3.4).lineTo(60.9,3.4).lineTo(60.9,15.8).lineTo(55,15.8).lineTo(55,-14).lineTo(60.9,-14).lineTo(60.9,-1.2).lineTo(70.1,-1.2).lineTo(70.1,-14).lineTo(75.9,-14).lineTo(75.9,15.8).closePath().moveTo(31.3,15.8).lineTo(31.3,-14).lineTo(41.6,-14).curveTo(46.1,-14,48.7,-11.4).curveTo(51.3,-8.7,51.2,-4.5).curveTo(51.3,-0.2,48.7,2.5).curveTo(46.1,5.1,41.6,5.1).lineTo(37.1,5.1).lineTo(37.1,15.8).closePath().moveTo(37.1,0.4).lineTo(41.6,0.4).curveTo(43.5,0.4,44.5,-1).curveTo(45.5,-2.3,45.5,-4.5).curveTo(45.5,-6.6,44.5,-8).curveTo(43.5,-9.4,41.6,-9.4).lineTo(37.1,-9.4).closePath().moveTo(23.1,15.8).lineTo(21.5,9.4).lineTo(13.6,9.4).lineTo(12,15.8).lineTo(6.2,15.8).lineTo(14.5,-14).lineTo(20.6,-14).lineTo(29,15.8).closePath().moveTo(14.8,4.7).lineTo(20.3,4.7).lineTo(17.6,-5.8).lineTo(17.5,-5.8).closePath().moveTo(-29.4,15.8).lineTo(-29.4,3.4).lineTo(-38.7,3.4).lineTo(-38.7,15.8).lineTo(-44.5,15.8).lineTo(-44.5,-14).lineTo(-38.7,-14).lineTo(-38.7,-1.2).lineTo(-29.4,-1.2).lineTo(-29.4,-14).lineTo(-23.5,-14).lineTo(-23.5,15.8).closePath().moveTo(-65.1,15.8).lineTo(-65.1,-14).lineTo(-47.6,-14).lineTo(-47.6,-9.4).lineTo(-59.3,-9.4).lineTo(-59.3,-1.9).lineTo(-49.3,-1.9).lineTo(-49.3,2.7).lineTo(-59.3,2.7).lineTo(-59.3,11.2).lineTo(-47.5,11.2).lineTo(-47.5,15.8).closePath().moveTo(-85.3,15.8).lineTo(-85.3,-14).lineTo(-68.5,-14).lineTo(-68.5,-9.4).lineTo(-79.4,-9.4).lineTo(-79.4,15.8).closePath().moveTo(-106,15.8).lineTo(-106,-14).lineTo(-88.3,-14).lineTo(-88.3,-9.4).lineTo(-100.1,-9.4).lineTo(-100.1,-1.9).lineTo(-90.1,-1.9).lineTo(-90.1,2.7).lineTo(-100.1,2.7).lineTo(-100.1,11.2).lineTo(-88.3,11.2).lineTo(-88.3,15.8).closePath().moveTo(-116.3,15.8).lineTo(-116.3,-9.4).lineTo(-122.5,-9.4).lineTo(-122.5,-0.7).curveTo(-122.5,8.2,-124.6,11.9).curveTo(-126.9,15.8,-131.4,15.8).lineTo(-132.7,15.8).lineTo(-132.7,11.2).lineTo(-132.1,11.2).curveTo(-129.7,10.9,-129,8.6).curveTo(-128.2,6.1,-128.3,-0.7).lineTo(-128.4,-14).lineTo(-110.5,-14).lineTo(-110.5,15.8).closePath().moveTo(117.6,-18.7).curveTo(115.8,-20.3,115.9,-23).lineTo(116,-23.1).lineTo(120.2,-23.1).curveTo(120.2,-22,120.7,-21.3).curveTo(121.2,-20.6,122.3,-20.6).curveTo(123.3,-20.6,123.9,-21.3).curveTo(124.3,-22,124.3,-23.1).lineTo(128.6,-23.1).lineTo(128.7,-23).curveTo(128.7,-20.4,127,-18.7).curveTo(125.3,-17,122.3,-17.1).curveTo(119.3,-17.1,117.6,-18.7).closePath();
	this.shape.setTransform(-95.8,211.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-268,181,338.3,132), null);


(lib.logo_colour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-138.3,40.3).curveTo(-137.5,39.2,-136.6,36.3).curveTo(-135.8,33.9,-135.3,31.7).lineTo(-123.2,-18.2).curveTo(-119.2,-35.2,-119.7,-42).lineTo(-94.7,-45.1).curveTo(-94.6,-41.9,-94.8,-39.7).curveTo(-96,-27.7,-99.6,-16.4).curveTo(-93.2,-19.7,-86.1,-19.6).curveTo(-74.1,-19.6,-69,-11.9).curveTo(-63.6,-3.8,-67.3,11.2).curveTo(-69.5,20,-74.4,27.3).curveTo(-79.9,35.4,-87.6,40).curveTo(-92.2,42.7,-97.2,43.9).curveTo(-101.9,45.1,-107.9,45.1).lineTo(-109.6,45.1).curveTo(-124.4,45.1,-138.3,40.3).closePath().moveTo(-103.8,0.1).lineTo(-110.3,27.4).curveTo(-107.7,29,-104.7,28.9).curveTo(-100.2,28.9,-97.3,24.9).curveTo(-94.5,21,-92.4,12.3).curveTo(-90.3,3.5,-91.5,0.1).curveTo(-92.5,-2.9,-96.8,-2.9).curveTo(-100.9,-2.8,-103.8,0.1).closePath().moveTo(103.4,43.5).lineTo(112.6,5.9).curveTo(114.6,-1.8,108.9,-1.8).curveTo(106.5,-1.8,103.9,-0.2).curveTo(101.3,1.4,99.5,4).lineTo(89.8,43.5).lineTo(65.9,43.5).lineTo(75.4,4.8).curveTo(77,-2.1,77.5,-6.9).curveTo(78.1,-12.2,77.5,-16.4).lineTo(98.6,-19).curveTo(99.4,-16.2,99.6,-13.1).curveTo(103.6,-16.2,110.8,-17.8).curveTo(117.7,-19.4,123.3,-18.8).curveTo(132.7,-17.9,136.3,-11.7).curveTo(139.5,-6.1,137.5,2.7).lineTo(127.3,43.5).closePath().moveTo(30,43.5).lineTo(44.7,-16.2).lineTo(69.1,-18.7).lineTo(53.9,43.5).closePath().moveTo(-55.6,43.5).lineTo(-60.4,-15.9).lineTo(-36.7,-18.9).lineTo(-38.7,18.4).lineTo(-20.8,-18.1).lineTo(0.7,-18.1).lineTo(0.9,18.1).curveTo(4,9.6,8.3,-0.6).lineTo(15.9,-18).lineTo(15.9,-18.1).lineTo(39.8,-18.1).lineTo(4.4,43.5).lineTo(-17.2,43.5).lineTo(-17.4,7.7).curveTo(-18.8,11.5,-34.6,43.5).closePath();
	this.shape.setTransform(138.3,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFCC00").beginStroke().moveTo(23.9,10.6).curveTo(23.6,10,23.5,9.2).curveTo(22.3,10.2,20.8,11).curveTo(19.4,11.8,17.5,11.8).curveTo(15.1,11.8,13.8,10.6).curveTo(12.4,9.5,12.4,7.6).lineTo(12.8,4.3).lineTo(15.6,-9).lineTo(21.2,-10.1).lineTo(18.1,4.9).lineTo(18,6.1).curveTo(18,6.7,18.4,7.2).curveTo(18.8,7.7,19.3,7.7).curveTo(19.9,7.7,20.6,7.4).curveTo(21.2,7.2,21.8,6.7).lineTo(22.9,5.7).lineTo(23.8,4.6).lineTo(26.6,-8.9).lineTo(32.1,-10).lineTo(28.7,5.9).curveTo(28.6,7.1,28.6,8.1).curveTo(28.8,9.5,29.2,10.1).lineTo(24.5,12).curveTo(24.1,11.3,23.9,10.6).closePath().moveTo(-28.3,7.9).curveTo(-32.1,4.5,-32.1,-0.3).curveTo(-32.1,-5.1,-28.2,-8.5).curveTo(-24.3,-11.9,-18.9,-11.9).curveTo(-13.5,-11.9,-9.8,-8.5).curveTo(-6.1,-5.1,-6.1,-0.3).curveTo(-6.1,4.5,-10,7.9).curveTo(-13.8,11.3,-19.2,11.3).curveTo(-24.5,11.3,-28.3,7.9).closePath().moveTo(-2.9,11.3).lineTo(-0,-2.4).curveTo(0.4,-4.4,0.4,-5.8).curveTo(0.3,-7.3,0.1,-8.2).lineTo(5.1,-10.2).curveTo(5.3,-9.9,5.5,-8.7).curveTo(5.7,-7.6,5.6,-6.8).curveTo(6.8,-8.1,8.4,-9.2).curveTo(9.9,-10,11.4,-10).lineTo(12.3,-9.9).lineTo(13.2,-9.5).lineTo(10.9,-4.8).curveTo(10.3,-5.1,9.3,-5.1).curveTo(8.5,-5.2,7.6,-4.6).curveTo(6.7,-4.1,5.4,-2.3).lineTo(2.5,11.3).closePath();
	this.shape_1.setTransform(217.4,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(51,51,51,0)").beginStroke().moveTo(-165.5,72.5).lineTo(-165.5,-72.5).lineTo(165.5,-72.5).lineTo(165.5,72.5).closePath();
	this.shape_2.setTransform(138.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_colour, new cjs.Rectangle(-27,-27,331,145), null);


(lib.lights_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-16.5,108).lineTo(-16.5,-108).lineTo(16.5,-108).lineTo(16.5,108).closePath();
	this.shape.setTransform(16.5,108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lights_mc, new cjs.Rectangle(0,0,33,216), null);


(lib.btn_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(-485,45).lineTo(-485,-45).lineTo(485,-45).lineTo(485,45).closePath();
	this.shape.setTransform(150,300,0.309,6.667);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn_bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00AA00").beginStroke().moveTo(-96,25).curveTo(-108,25,-108,13).lineTo(-108,-13).curveTo(-108,-25,-96,-25).lineTo(96,-25).curveTo(108,-25,108,-13).lineTo(108,13).curveTo(108,25,96,25).closePath();
	this.shape.setTransform(108,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg_2, new cjs.Rectangle(0,0,216,50), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFCC00").beginStroke().moveTo(-96,25).curveTo(-108,25,-108,13).lineTo(-108,-13).curveTo(-108,-25,-96,-25).lineTo(96,-25).curveTo(108,-25,108,-13).lineTo(108,13).curveTo(108,25,96,25).closePath();
	this.shape.setTransform(108,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(0,0,216,50), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-178,300).lineTo(-178,-300).lineTo(178,-300).lineTo(178,300).closePath();
	this.shape.setTransform(150.1,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(-27.9,0,356,600), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(0,0,450,900), null);


(lib.btn_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(45.4,11.6).lineTo(45.4,7.1).lineTo(33.8,7.1).lineTo(33.8,-11.3).lineTo(37.4,-11.3).lineTo(37.4,4.3).lineTo(43.1,4.3).lineTo(43.1,-11.3).lineTo(46.7,-11.3).lineTo(46.7,4.3).lineTo(49,4.3).lineTo(48.7,11.6).closePath().moveTo(-20.3,5.6).curveTo(-22.1,3.9,-22,0.7).lineTo(-22,-4.8).curveTo(-22,-8.1,-20.4,-9.8).curveTo(-18.8,-11.6,-15.9,-11.6).curveTo(-13,-11.6,-11.5,-10.1).curveTo(-10,-8.5,-10,-5.4).lineTo(-10,-5.3).lineTo(-13.5,-5.3).curveTo(-13.4,-7.1,-13.9,-7.9).curveTo(-14.6,-8.7,-15.9,-8.7).curveTo(-17.2,-8.7,-17.9,-7.7).curveTo(-18.5,-6.8,-18.5,-4.9).lineTo(-18.5,0.7).curveTo(-18.5,2.7,-17.8,3.6).curveTo(-17.1,4.5,-15.7,4.5).curveTo(-14.5,4.5,-13.9,3.8).curveTo(-13.5,3,-13.5,1.2).lineTo(-10,1.2).lineTo(-10,1.3).curveTo(-10,4.3,-11.4,5.9).curveTo(-12.9,7.4,-15.7,7.4).curveTo(-18.6,7.4,-20.3,5.6).closePath().moveTo(73.5,7.1).lineTo(73.5,0.4).lineTo(71.4,0.4).lineTo(68.6,7.1).lineTo(64.7,7.1).lineTo(68.1,-0.9).curveTo(66.9,-1.7,66.3,-2.9).curveTo(65.7,-4.1,65.7,-5.6).curveTo(65.7,-8.4,67.2,-9.9).curveTo(68.8,-11.3,71.6,-11.3).lineTo(77.2,-11.3).lineTo(77.2,7.1).closePath().moveTo(69.9,-7.7).curveTo(69.3,-6.9,69.3,-5.5).curveTo(69.3,-4.1,69.9,-3.2).curveTo(70.5,-2.3,71.7,-2.3).lineTo(73.5,-2.3).lineTo(73.5,-8.4).lineTo(71.6,-8.4).curveTo(70.5,-8.4,69.9,-7.7).closePath().moveTo(60.2,7.1).lineTo(60.2,-4.4).lineTo(60.1,-4.4).lineTo(54.5,7.1).lineTo(50.9,7.1).lineTo(50.9,-11.3).lineTo(54.5,-11.3).lineTo(54.5,0.1).lineTo(54.6,0.1).lineTo(60.2,-11.3).lineTo(63.8,-11.3).lineTo(63.8,7.1).closePath().moveTo(28.8,7.1).lineTo(27.8,3.2).lineTo(23,3.2).lineTo(22,7.1).lineTo(18.3,7.1).lineTo(23.5,-11.3).lineTo(27.3,-11.3).lineTo(32.4,7.1).closePath().moveTo(23.7,0.3).lineTo(27.1,0.3).lineTo(25.4,-6.2).lineTo(25.3,-6.2).closePath().moveTo(4.8,7.1).lineTo(4.8,-11.3).lineTo(11.2,-11.3).curveTo(14,-11.3,15.6,-9.7).curveTo(17.2,-8,17.2,-5.4).curveTo(17.2,-2.7,15.6,-1.1).curveTo(14,0.5,11.2,0.5).lineTo(8.4,0.5).lineTo(8.4,7.1).closePath().moveTo(8.4,-2.3).lineTo(11.2,-2.3).curveTo(12.4,-2.3,13,-3.2).curveTo(13.6,-4.1,13.6,-5.4).curveTo(13.6,-6.7,13,-7.6).curveTo(12.4,-8.4,11.2,-8.4).lineTo(8.4,-8.4).closePath().moveTo(-4.7,7.1).lineTo(-4.7,-8.4).lineTo(-8.9,-8.4).lineTo(-8.9,-11.3).lineTo(3.1,-11.3).lineTo(3.1,-8.4).lineTo(-1.1,-8.4).lineTo(-1.1,7.1).closePath().moveTo(-28,7.1).lineTo(-28,-4.4).lineTo(-28.1,-4.4).lineTo(-33.7,7.1).lineTo(-37.3,7.1).lineTo(-37.3,-11.3).lineTo(-33.7,-11.3).lineTo(-33.7,0.1).lineTo(-33.6,0.1).lineTo(-28,-11.3).lineTo(-24.4,-11.3).lineTo(-24.4,7.1).closePath().moveTo(-49.7,7.1).lineTo(-49.7,-11.3).lineTo(-39.2,-11.3).lineTo(-39.2,-8.4).lineTo(-46,-8.4).lineTo(-46,7.1).closePath().moveTo(-62.4,7.1).lineTo(-62.4,-11.3).lineTo(-51.6,-11.3).lineTo(-51.6,-8.4).lineTo(-58.8,-8.4).lineTo(-58.8,-3.8).lineTo(-52.6,-3.8).lineTo(-52.6,-1).lineTo(-58.8,-1).lineTo(-58.8,4.3).lineTo(-51.6,4.3).lineTo(-51.6,7.1).closePath().moveTo(-77.1,7.1).lineTo(-77.1,-11.3).lineTo(-70.7,-11.3).curveTo(-68,-11.3,-66.3,-9.7).curveTo(-64.8,-8,-64.8,-5.4).curveTo(-64.8,-2.7,-66.3,-1.1).curveTo(-68,0.5,-70.7,0.5).lineTo(-73.5,0.5).lineTo(-73.5,7.1).closePath().moveTo(-73.5,-2.3).lineTo(-70.7,-2.3).curveTo(-69.6,-2.3,-68.9,-3.2).curveTo(-68.4,-4.1,-68.4,-5.4).curveTo(-68.4,-6.7,-68.9,-7.6).curveTo(-69.6,-8.4,-70.7,-8.4).lineTo(-73.5,-8.4).closePath();
	this.shape.setTransform(109.2,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-96,25).curveTo(-108,25,-108,13).lineTo(-108,-13).curveTo(-108,-25,-96,-25).lineTo(96,-25).curveTo(108,-25,108,-13).lineTo(108,13).curveTo(108,25,96,25).closePath();
	mask.setTransform(108,25);

	// Layer_4
	this.instance = new lib.lights_mc();
	this.instance.parent = this;
	this.instance.setTransform(-30.8,33,1,1,12.7,0,0,16.4,108);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:241.2},14,cjs.Ease.get(0.91)).wait(67));

	// bg
	this.instance_1 = new lib.btn_bg_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108,25.5,1,1,0,0,0,108,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,50);


(lib.btn_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(45.4,11.6).lineTo(45.4,7.1).lineTo(33.8,7.1).lineTo(33.8,-11.3).lineTo(37.4,-11.3).lineTo(37.4,4.3).lineTo(43.1,4.3).lineTo(43.1,-11.3).lineTo(46.7,-11.3).lineTo(46.7,4.3).lineTo(49,4.3).lineTo(48.7,11.6).closePath().moveTo(-20.3,5.6).curveTo(-22.1,3.9,-22,0.7).lineTo(-22,-4.8).curveTo(-22,-8.1,-20.4,-9.8).curveTo(-18.8,-11.6,-15.9,-11.6).curveTo(-13,-11.6,-11.5,-10.1).curveTo(-10,-8.5,-10,-5.4).lineTo(-10,-5.3).lineTo(-13.5,-5.3).curveTo(-13.4,-7.1,-13.9,-7.9).curveTo(-14.6,-8.7,-15.9,-8.7).curveTo(-17.2,-8.7,-17.9,-7.7).curveTo(-18.5,-6.8,-18.5,-4.9).lineTo(-18.5,0.7).curveTo(-18.5,2.7,-17.8,3.6).curveTo(-17.1,4.5,-15.7,4.5).curveTo(-14.5,4.5,-13.9,3.8).curveTo(-13.5,3,-13.5,1.2).lineTo(-10,1.2).lineTo(-10,1.3).curveTo(-10,4.3,-11.4,5.9).curveTo(-12.9,7.4,-15.7,7.4).curveTo(-18.6,7.4,-20.3,5.6).closePath().moveTo(73.5,7.1).lineTo(73.5,0.4).lineTo(71.4,0.4).lineTo(68.6,7.1).lineTo(64.7,7.1).lineTo(68.1,-0.9).curveTo(66.9,-1.7,66.3,-2.9).curveTo(65.7,-4.1,65.7,-5.6).curveTo(65.7,-8.4,67.2,-9.9).curveTo(68.8,-11.3,71.6,-11.3).lineTo(77.2,-11.3).lineTo(77.2,7.1).closePath().moveTo(69.9,-7.7).curveTo(69.3,-6.9,69.3,-5.5).curveTo(69.3,-4.1,69.9,-3.2).curveTo(70.5,-2.3,71.7,-2.3).lineTo(73.5,-2.3).lineTo(73.5,-8.4).lineTo(71.6,-8.4).curveTo(70.5,-8.4,69.9,-7.7).closePath().moveTo(60.2,7.1).lineTo(60.2,-4.4).lineTo(60.1,-4.4).lineTo(54.5,7.1).lineTo(50.9,7.1).lineTo(50.9,-11.3).lineTo(54.5,-11.3).lineTo(54.5,0.1).lineTo(54.6,0.1).lineTo(60.2,-11.3).lineTo(63.8,-11.3).lineTo(63.8,7.1).closePath().moveTo(28.8,7.1).lineTo(27.8,3.2).lineTo(23,3.2).lineTo(22,7.1).lineTo(18.3,7.1).lineTo(23.5,-11.3).lineTo(27.3,-11.3).lineTo(32.4,7.1).closePath().moveTo(23.7,0.3).lineTo(27.1,0.3).lineTo(25.4,-6.2).lineTo(25.3,-6.2).closePath().moveTo(4.8,7.1).lineTo(4.8,-11.3).lineTo(11.2,-11.3).curveTo(14,-11.3,15.6,-9.7).curveTo(17.2,-8,17.2,-5.4).curveTo(17.2,-2.7,15.6,-1.1).curveTo(14,0.5,11.2,0.5).lineTo(8.4,0.5).lineTo(8.4,7.1).closePath().moveTo(8.4,-2.3).lineTo(11.2,-2.3).curveTo(12.4,-2.3,13,-3.2).curveTo(13.6,-4.1,13.6,-5.4).curveTo(13.6,-6.7,13,-7.6).curveTo(12.4,-8.4,11.2,-8.4).lineTo(8.4,-8.4).closePath().moveTo(-4.7,7.1).lineTo(-4.7,-8.4).lineTo(-8.9,-8.4).lineTo(-8.9,-11.3).lineTo(3.1,-11.3).lineTo(3.1,-8.4).lineTo(-1.1,-8.4).lineTo(-1.1,7.1).closePath().moveTo(-28,7.1).lineTo(-28,-4.4).lineTo(-28.1,-4.4).lineTo(-33.7,7.1).lineTo(-37.3,7.1).lineTo(-37.3,-11.3).lineTo(-33.7,-11.3).lineTo(-33.7,0.1).lineTo(-33.6,0.1).lineTo(-28,-11.3).lineTo(-24.4,-11.3).lineTo(-24.4,7.1).closePath().moveTo(-49.7,7.1).lineTo(-49.7,-11.3).lineTo(-39.2,-11.3).lineTo(-39.2,-8.4).lineTo(-46,-8.4).lineTo(-46,7.1).closePath().moveTo(-62.4,7.1).lineTo(-62.4,-11.3).lineTo(-51.6,-11.3).lineTo(-51.6,-8.4).lineTo(-58.8,-8.4).lineTo(-58.8,-3.8).lineTo(-52.6,-3.8).lineTo(-52.6,-1).lineTo(-58.8,-1).lineTo(-58.8,4.3).lineTo(-51.6,4.3).lineTo(-51.6,7.1).closePath().moveTo(-77.1,7.1).lineTo(-77.1,-11.3).lineTo(-70.7,-11.3).curveTo(-68,-11.3,-66.3,-9.7).curveTo(-64.8,-8,-64.8,-5.4).curveTo(-64.8,-2.7,-66.3,-1.1).curveTo(-68,0.5,-70.7,0.5).lineTo(-73.5,0.5).lineTo(-73.5,7.1).closePath().moveTo(-73.5,-2.3).lineTo(-70.7,-2.3).curveTo(-69.6,-2.3,-68.9,-3.2).curveTo(-68.4,-4.1,-68.4,-5.4).curveTo(-68.4,-6.7,-68.9,-7.6).curveTo(-69.6,-8.4,-70.7,-8.4).lineTo(-73.5,-8.4).closePath();
	this.shape.setTransform(109.2,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-96,25).curveTo(-108,25,-108,13).lineTo(-108,-13).curveTo(-108,-25,-96,-25).lineTo(96,-25).curveTo(108,-25,108,-13).lineTo(108,13).curveTo(108,25,96,25).closePath();
	mask.setTransform(108,25);

	// Layer_4
	this.instance = new lib.lights_mc();
	this.instance.parent = this;
	this.instance.setTransform(-30.8,33,1,1,12.7,0,0,16.4,108);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:241.2},15,cjs.Ease.get(0.91)).wait(66));

	// bg
	this.instance_1 = new lib.btn_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108,25.5,1,1,0,0,0,108,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,50);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_normal();
	this.instance.parent = this;
	this.instance.setTransform(108,25.5,1,1,0,0,0,108,25.5);

	this.instance_1 = new lib.btn_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108,25.4,1,1,0,0,0,108,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,50);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(396));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-120,-200).lineTo(120,-200).lineTo(120,200).lineTo(-120,200).closePath();
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(396));

	// black
	this.instance = new lib.black();
	this.instance.parent = this;
	this.instance.setTransform(485,45,1,1,0,0,0,485,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},12,cjs.Ease.get(1)).wait(371).to({alpha:1},12,cjs.Ease.get(1)).wait(1));

	// btn
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.5,340,0.036,0.036,0,0,0,110.2,27.9);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({regX:108,regY:25.6,scaleX:0.99,scaleY:0.99},10,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9},4,cjs.Ease.get(1)).to({_off:true},334).wait(1));

	// btn_full
	this.instance_2 = new lib.btn_full();
	this.instance_2.parent = this;
	this.instance_2.setTransform(464,36,1,1,0,0,0,485,45);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btn_full(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},395).wait(1));

	// logo
	this.instance_3 = new lib.logo_colour();
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.4,160.7,0.051,0.055,0,0,0,144.8,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:138.5,regY:46.3,scaleX:0.81,scaleY:0.81},8,cjs.Ease.get(-1)).to({regX:138.3,regY:46.2,scaleX:0.76,scaleY:0.76,y:156.7},4,cjs.Ease.get(1)).wait(7).to({regX:138.4,regY:46.3,y:152.8},7).to({regX:138.3,regY:46.2,y:54.7},8,cjs.Ease.get(1)).to({_off:true},361).wait(1));

	// Layer_10
	this.instance_4 = new lib.txt4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(431.8,79.1,0.771,0.771,0,0,0,309.2,24.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.txt8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(172.2,257.4,0.771,0.771,0,0,0,309.1,24.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({y:24.8,alpha:1},10,cjs.Ease.get(1)).wait(46).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(287));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).to({y:203.4,alpha:1},10,cjs.Ease.get(1)).to({_off:true},261).wait(1));

	// Layer_9
	this.instance_6 = new lib.txt3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(431.8,79.1,0.771,0.771,0,0,0,309.2,24.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.txt7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(172.2,257.4,0.771,0.771,0,0,0,309.1,24.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({y:24.8,alpha:1},10,cjs.Ease.get(1)).wait(52).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(287));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({y:203.4,alpha:1},10,cjs.Ease.get(1)).to({_off:true},266).wait(1));

	// Layer_8
	this.instance_8 = new lib.txt2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(431.8,79.1,0.771,0.771,0,0,0,309.2,24.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.txt6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(172.2,257.4,0.771,0.771,0,0,0,309.1,24.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).to({y:24.8,alpha:1},10,cjs.Ease.get(1)).wait(57).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(287));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114).to({_off:false},0).to({y:203.4,alpha:1},10,cjs.Ease.get(1)).to({_off:true},271).wait(1));

	// Layer_7
	this.instance_10 = new lib.txt1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(431.8,79.1,0.771,0.771,0,0,0,309.2,24.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.txt5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(172.2,257.4,0.771,0.771,0,0,0,309.1,24.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({y:24.8,alpha:1},10,cjs.Ease.get(1)).wait(62).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(287));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({_off:false},0).to({y:203.4,alpha:1},10,cjs.Ease.get(1)).to({_off:true},276).wait(1));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-119.1,208).lineTo(-119.1,-208).lineTo(119.1,-208).lineTo(119.1,208).closePath();
	mask.setTransform(120.9,197.2);

	// Layer_17
	this.instance_12 = new lib.black();
	this.instance_12.parent = this;
	this.instance_12.setTransform(353.2,20.4,0.693,0.693,0,0,0,485,45);
	this.instance_12.alpha = 0.301;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(396));

	// bg
	this.instance_13 = new lib.bg_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120.4,196.3,0.563,0.563,0,0,0,223.8,447.9);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:224,regY:448,scaleX:0.69,scaleY:0.69,x:122.3,y:198.6},395).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.1,189.2,890.6,610.8);
// library properties:
lib.properties = {
	id: 'E0A45109D73EFE4796D026E26A1699A9',
	width: 240,
	height: 400,
	fps: 33,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1518623283867", id:"bg"}
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
an.compositions['E0A45109D73EFE4796D026E26A1699A9'] = {
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