<h2>jfAccordion</h2>

<p>jfAccordion is a jQuery accordion.</p>

<p>Library dependencies:</p>

<ul>
	<li>jQuery</li>
</ul>

<h3>Plugin Initialization Example</h3>

<p>You can change all the default options using the code below.</p>

<pre>

	// HTML
	&lt;div class="accordian"&gt;
		&lt;div class="heading"&gt;Headline 1&lt;/div&gt;
		&lt;div class="content-area"&gt;The is the content for accordion 1&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="accordian"&gt;
		&lt;div class="heading"&gt;Headline 2&lt;/div&gt;
		&lt;div class="content-area"&gt;The is the content for accordion 2&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="accordian"&gt;
		&lt;div class="heading"&gt;Headline 3&lt;/div&gt;
		&lt;div class="content-area"&gt;The is the content for accordion 3&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="accordian"&gt;
		&lt;div class="heading"&gt;Headline 4&lt;/div&gt;
		&lt;div class="content-area"&gt;The is the content for accordion 4&lt;/div&gt;
	&lt;/div&gt;

	// Javascript
	$(".accordian").jfAccordion({
		closeOtherAccordians: false, // Close other accordians when opening an accordian
		animationSpeed: 300, // Animation transition speed
		animationDelay: 0, // How long to wait before animating
	});
</pre>

<p>You can also just use all of the default options above by not passing in an object.</p>

<pre>
	$(".accordian").jfAccordion();
</pre>