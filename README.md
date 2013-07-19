tableit
=======

This plugin provides a more automated version of Chris Coyier’s [responsive table solution](http://css-tricks.com/responsive-data-tables/). It finds your table headers for you and inserts them into `data-title` attributes.

##Installation

1. Include tableit.js and table.css in your page.
2. Initialize tableit: `$('table').tableit();`
3. Keep being successful and handsome.

##Option(s)

Right now there is only one option, but I may update this in the future.

###firstRowHeading

Default: false

Let’s be honest, somedays you just can’t be semantic. Maybe your client uses a WYSIWYG to make their tables and it doesn’t have table headers. This option allows you to treat the first row in your table as the header row.

Example:

	$('table').tableit({
		firstRowHeading: true
	});