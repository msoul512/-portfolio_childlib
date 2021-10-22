/*a href='#' 삭제*/
$(document).ready(function() {
	$('a[href="#"]').click(function(ignore) {
		ignore.preventDefault();
	});
});

/*풀 메뉴 SCRIPT*/
$(function(){
	var gnbA = $("#gnb>li");
	var sub = $("#gnb>li>ul");
	var headerMin = $("#headerBox").height();//30px
	var headerMax = sub.innerHeight() + headerMin;	

	var state = false; //참-거짓설정변수
	var speed = 150;
	gnbA.mouseenter(function(){
		if(!state){ 
			$("#headerBox").stop().animate({height:headerMax},speed,function(){
				sub.stop().fadeIn(speed);
			});
			state = true;
		}
		$(this).addClass("on"); 
		$(this).find(sub).addClass("on");
	});
	gnbA.mouseleave(function(){
		$(this).removeClass("on");
		$(this).find(sub).removeClass("on");
	});   	
	$("#headerMenu").mouseleave(function(){
		sub.stop().fadeOut(speed,function(){
			$("#headerBox").stop().animate({height:headerMin},speed);            
		});
		state = false;
	});
	$("#gnb li a").focus(function(){
		$("#headerBox").stop().animate({height:headerMax},speed);
		sub.stop().fadeIn(speed);
	}).blur(function(){
		$("#headerBox").stop().animate({height:headerMin},speed);
		sub.stop().fadeOut(speed);		  
	});	
});

/*메뉴 롤 SCRIPT*/
$(function(){
	var rollHeader =150;
	$(window).scroll(function() {
	var scroll = getCurrentScroll();
		if ( scroll >= rollHeader ) {
			$('#fullmenu').addClass('roll');
		}
		else {
		$('#fullmenu').removeClass('roll');
		}	
	});
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
	}
});

/*서브 카테고리 SCRIPT*/
(function(global, $) {

	var pluginName = 'accordion';

	function Accordion($selector, options) {
		this.$selector = $selector;
		this.config = $.extend({}, this._defaults, options || {});
		this.detect = {
			children: this.$selector.find(this.config.descendant.ul + ', ' + this.config.descendant.div),
			clickTarget: '.' + this.$selector.attr('class') + ' ' + this.config.eventTarget
		};
		this._init();
	}

	Accordion.prototype = {
		'_defaults': {
			descendant: {
				ul: 'ul',
				div: 'li > div'
			},
			dataValue: 'accordiated',
			className: 'active',
			eventTarget: 'a'
		},
		'_init': function() {
			if (!this.$selector.length) return;
			this._menuInit();
			this._initEvent();
		},
		'_menuInit': function() {
			var _self = this;
			if (this.$selector.data(this.config.dataValue)) return false;
			$.each(this.detect.children, function() {
				var $this = $(this);
				_self.$selector.data(_self.config.dataValue, true);
				$this.hide();
			});
		},
		'_initEvent': function() {
			$(document).on('click.acc.ck', this.detect.clickTarget, $.proxy(this._activate, this));
			this._hashCheck();
		},
		'_activate': function(e) {
			var $this = $(e.target);
			$this
				.parent('li')
				.toggleClass(this.config.className)
				.siblings()
				.removeClass(this.config.className)
				.children(this.config.descendant.ul + ', ' + this.config.descendant.div)
				.slideUp('fast');
			this._effect($this);
		},
		'_effect': function(el, effect) {
			$(el)
				.siblings(this.config.descendant.ul + ', ' + this.config.descendant.div)[(effect || 'slideToggle')](!effect ? 'fast' : null);
		},
		'_hashCheck': function() {
			var hash = (location.hash) ? this.$selector.find('a[href="' + location.hash + '"]')[0] : '';
			if (hash) {
				this._effect(hash, 'toggle');
				if (this.$selector) {
					$(hash).parents('ul').show();
				}
			}
		}
	};

	$.fn[pluginName] = $.fn[pluginName] || function(options) {
		var $this = this; 
		return $.each($this, function(idx, el) {
			var $selector = $this.eq(idx);
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Accordion($selector, options))
			}
			return $selector;
		})
	};

})(window, window.jQuery);

$(function() {
	$('.accordion').accordion();
});