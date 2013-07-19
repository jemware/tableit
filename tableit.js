// tableit.js: Simple responsive tables
// MIT license http://www.opensource.org/licenses/mit-license.php/
// Based on method developed by Chris Coyier http://css-tricks.com/responsive-data-tables/
// @author Joshua McGrath http://designjem.com

 (function( $ ){

  $.fn.tableit = function(options) {

    var settings = $.extend( {
      firstRowHeading: false
    }, options);

    return this.each(function() {
    	var t = $(this);
    	if(settings.firstRowHeading == true){
    		t.find('tr:not(:first)').each(function(){
    			$(this).children('td').each(function(index){
    				var heading = t.find('tr:first').children('td:eq('+index+')').text();
    				// console.log('Heading:' + heading);
    				$(this).attr('data-title',heading);
    			});
    		});
    	}
    	else{
    		t.find('tr').each(function(){
    			$(this).children('td').each(function(index){
    				var heading = t.find('tr:first').children('td:eq('+index+')').text();
    				// console.log('Heading:' + heading);
    				$(this).attr('data-title',heading);
    			});
    		});
    	}
    });

  };

})( jQuery );