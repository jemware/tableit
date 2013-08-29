tableit
=======

This plugin provides a more automated version of Chris Coyier’s [responsive table solution](http://css-tricks.com/responsive-data-tables/). It finds your table headers for you and inserts them into `data-title` attributes.

##Installation

1. Include tableit.js and table.css in your page.
2. Initialize tableit: `$('table').tableit();`
3. Keep being successful and handsome.

##Options

###firstRowHeading

Default: false

Let’s be honest, somedays you just can’t be semantic. Maybe your client uses a WYSIWYG to make their tables and it doesn’t have table headers. This option allows you to treat the first row in your table as the header row.

Example:

	$('table').tableit({
		firstRowHeading: true
	});

###evenOdd

Default: true

Set whether or not to add odd classes to odd <tr>s.

Example:

	$('table').tableit({
		evenOdd: true
	});

###headingMaxCharacters

Default: null

Sometimes your table headings are really long. I udnerstand, you’re trying to be descriptive! However, this means the heading will likely overflow into the your data. To mitigate this issue, you can set a heading character limit. If this limit is exceeded, a class 'double' is added to the offending <td> which you can use to increase the element’s height as necessary.

Example:

	$('table').tableit({
		headingMaxCharacters: 20
	});

##Demo

Click here for a [demo](https://dl.dropboxusercontent.com/u/179213368/sites/tableit/demo.html).

##Browser Compatibility

The plugin should work in all modern browsers, but I will be doing more extensive testing for older versions of Chrome, Firefox, Safari, and the Android browsers.

As for IE: the plugin should work fine in IE9-10 but there is no support for anything below 9 currently.