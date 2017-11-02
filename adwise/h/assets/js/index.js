(function(){
    
    var getEL = function(selector){
        return {
            ID : function(obj){
                Object.keys(obj).forEach(function(key){
                   document.getElementById(selector).style[key] = obj[key];
                });  
            },
            
            CLASS : function(obj){
                Object.keys(obj).forEach(function(key){
                    [].forEach.call(document.querySelectorAll(selector), function(element){
                       element.style[key] = obj[key];
                    }) ;
                }); 
            },
            
            DOM : function(callback){
                var s = document.querySelectorAll(selector);
                [].forEach.call(s, callback);
            }
        }
    },
    
        p = window.devicePixelRatio === 1 ? 2 : window.devicePixelRatio,
        stage, 
        fps = lib.properties.fps, 
        now, delta, Run,
        then = new Date().getTime(), 
        interval = 1000/fps, 
        
        _RAF = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  window.ieRequestAnimationFrame     ||
                  function( callback ){
                    window.setTimeout(callback, 1000 / fps);
                  };
        })();
    
    [].forEach.call([
        
        {
            i : 'box',
            p : {
                "width" : lib.properties.width + 'px',
                "height" : lib.properties.height + 'px'
            }
        },
        
        {
            i : 'frame',
            p : {
                "width" : lib.properties.width - params.gutter + 'px',
                "height" : lib.properties.height - params.gutter + 'px',
                "top" : params.gutter / 2 + 'px',
                "left" : params.gutter / 2 + 'px'
            }
        }
        
    ], function(item){
        "i" in item ? getEL(item.i).ID(item.p) : getEL(item.c).CLASS(item.p);
    });
    
    getEL('canvas').DOM(function(e){
        stage = new createjs.Stage(e);
        stage.addChild(new lib.animation());
        stage.scaleX = stage.scaleY = p;
        e.width = lib.properties.width * p;
        e.height = lib.properties.height * p;
        
        createjs.Ticker.setFPS(fps);
    });
    
    content_data.bonus.enable ? (function(){
        getEL('#bonus-txt > div').DOM(function(e){
            e.innerHTML += '<span class="b-txt">' + content_data.bonus.content + '</span>';
        });
    })() : false;
    
    content_data.timer.enable ? (function(){
        getEL('#bonus-txt > div').DOM(function(e){
            e.innerHTML += '<span class="b-txt">Remaining Time of current Bonus</span><div>'
            + '<span class="timer-count">[ </span>'
            + '<span id="hours" class="timer-count"></span><span class="timer-count"> : </span>'
            + '<span id="minutes" class="timer-count"></span><span class="timer-count"> : </span>'
            + '<span id="seconds" class="timer-count"></span><span class="timer-count"> ]</span></div>';
        });
        
        var _h = document.querySelector('#hours'),
            _m = document.querySelector('#minutes'),
            _s = document.querySelector('#seconds'),
            th = content_data.timer.count.hours,
            tm = content_data.timer.count.minutes - 1,
            _start = 59;
        
        _h.innerHTML = th < 10 ? '0' + th : th;
        _m.innerHTML = tm < 10 ? '0' + tm : tm;
        _s.innerHTML = _start;
        
        var start_timer = setInterval(function(){
            _start === 1 ? (function(){
                th === 0 && tm === 0 ? (function(){
                    _start--;
                    _s.innerHTML = _start < 10 ? '0' + _start : _start;
                    clearInterval(start_timer);
                })() : (function(){
                     _start = 59;
                    _s.innerHTML = _start;
                    tm === 0 ? (function(){
                        tm = 59; th--;
                        _h.innerHTML = th < 10 ? '0' + th : th;
                        _m.innerHTML = tm;
                    })() : (function(){
                        tm--; _m.innerHTML = tm < 10 ? '0' + tm : tm;
                    })();
                })();
            })() : (function(){
                _start--;
                _s.innerHTML = _start < 10 ? '0' + _start : _start;
            })();
       }, 1000);
    })() : false;
    
    createjs.Ticker.setFPS(fps);

    (Run = function() {
        now = new Date().getTime();
        delta = now - then;
        delta > interval ? (function(){
            then = now - (delta % interval);
            stage.update();
        })() : false;
        _RAF(Run);
    })();
    
    window.onload = function(){
            getEL('#box').DOM(function(e){
                e.classList.toggle('show');
            });

            setTimeout(function(){
                getEL('#frame > div').DOM(function(e){
                   e.classList.toggle('show-' + e.getAttribute('data-vector')); 
                });
            },200);
        }
})();