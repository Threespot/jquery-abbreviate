(function($){
	
	/*
	 * Function: jquery-abbreviate
	 * Abbreviates a jQuery collection, hiding or showing n elements. Provides a DOM element that, when clicked, will reveal the abbreviated elements.
	 *
	 * Parameters:
	 *     n - If positive, indicates the number of items shown. If negative, the number hidden. (required)
	 *     options - Plugin options (all optional).
	 *     options.text - The innerText of the returned link. {#} is replaced with the number of hidden elements.
	 * 
	 * Returns:
	 *     jQuery <a> element that, when clicked, will reveal the abbreviated elements. Needs to be inserted into the DOM. If the number of the items in the collection is fewer than n, returns an empty jQuery collection
	 * 
	 * Example:
	 *     > var $list = $('#items');
	 *     > $list.children('li').abbreviate(3).insertAfter($list);
	 * 
	 * Author:
	 *     Chuck Harmston chuck@chuckharmston.com
	 * 
	 * Version:
	 *     0.1
	 */
	function abbreviate(n, options){
		var settings = $.extend({
			'text': 'View {#} More Headlines'
		}, options);
		var $hidden = $(this).slice(n).hide();
		return $hidden.length ? $('<a></a>', {
			'href': '#',
			'class': 'abbreviate',
			'click': function(evt){
				evt.preventDefault();
				$hidden.show();
				$(this).remove();
			},
			'text': settings['text'].replace('{#}', $hidden.length)
		}) : $();
	};
	
})(jQuery);