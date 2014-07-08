/* jQuery Orin Lightbox
 * Copyright : Anam Ahmed
 * Url : http://anam.co/
 * License : MPL (Mozilla Public License)
 * Disclaimer : Webkit only feature, don't expect too much from non webkit browsers, if it 
 * destroys your house or kill your cat, I'm not responsible.
 */
(function($){$.fn.extend({
	'orin': function(userargs){
		//console.log(userargs);
		// set variables or use defaults
		var effectname   = userargs.effect || 'blur';
		var effectrate   = userargs.rate || '5px';
		var effectamount = userargs.amount || 1;
		//lightbox div, if not available, create it
		var lightboxdiv = userargs.lightboxdiv || '#orin-wrapper';
		if($(lightboxdiv).length<1){
			var divname = lightboxdiv.slice(1,lightboxdiv.length);
			$('body').append('<div id="'+divname+'"></div>');
		}
		// now get the lightbox div element
		//user abul hoile amar e kam sara lagbo
		var target = $(lightboxdiv);
		target.addClass('orinjs-overlay');
		target.append('<img id="orinjs-canvas" src="">');
		target.append('<p id ="orinjs-text"><span></span></p>');
		target.append('<div id="orinjs-closebutton"></div>');
		var theimage=$('#orinjs-canvas');
		var thetext=$('#orinjs-text');
		$('#orinjs-closebutton').click(function(){
			target.hide(10);
			theimage.attr('src',"");
			thetext.find('span').html("");
			$('body').removeClass('orinjs-active');
		});
		switch(effectname){
					case 'blur':
					$('body').addClass('orinjs-blur');
					break;
					case 'grayscale':
					$('body').addClass('orinjs-grayscale');
					break;
					case 'sepia':
					$('body').addClass('orinjs-sepia');
					break;
					case 'invert':
					$('body').addClass('orinjs-invert');
					break;
					case 'huerotate':
					$('body').addClass('orinjs-hue-rotate');
					break;
					default:
					$('body').addClass('orinjs-blur'); //blur, if the coder sends some
				}
		// make the thing look clickable
		$(this).css('cursor','pointer');
		//per element function		
		$(this).each(function(){
			$(this).click(function(){
				console.log(this);
				var theimagepath=$(this).attr('data-image');
				console.log(theimagepath);
				theimage.attr('src',theimagepath);
				thetext.find('span').html($(this).attr('data-text'));
				target.show(10);
				// the effect magic
				$('body').addClass('orinjs-active');
			});
			
	});
	}
});})(jQuery);