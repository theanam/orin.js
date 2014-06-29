#jQuery Orin.js
***********
A tiny jQuery lightbox plugin with cool effects. (Currently the magic works only on webkit browsers)

###So, what does it actually do? 

well, it's like an ordinary lightbox, but it can create pretty awesome effects on the background.


###how to try
here's the simple way, documentation coming soon.

Include jQuery and the two files in your document:

	<link rel="stylesheet" href="jquery.orin.css">
	<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>	
	<script src="jquery.orin.js" type="text/javascript"></script>


for example, let's assume you want lightbox in your `div` elements with class `lbox`


sample markup:

	<div class="lbox" data-image="a.jpg" data-text="first image details">
	Click to open first image
	</div>
	<div class="lbox" data-image="b.jpg" data-text="Second image details">
	 Click to open second image
	</div>

note that `data-image` and `data-text` attribute? yeah the `data-image` is the path of the image to display, and the `data-text` is the text to show below it

add these javascript codes just before the closing `</body>` tag,

	<script type="text/javascript" charset="utf-8">
		$('.lbox').orin({
			'effect':'blur' //effect name , other options are grayscale,invert,sepia,hue-rotate
		});
	</script>

This is a temporary readme, bugs are welcome

 


