/**
 * jQuery Stylish Select
 * @version 0.1.2.2
 * @author Tony Leung <tony.leung@cruzium.com>
 * @copyright Copyright (c) 2025 Cruzium Digital
 * @license https://opensource.org/license/gpl-3-0/ GPL-3.0-only
 */

'use strict';

(function($) {
	$.fn.stylishSelect = function(opts) {
		var config = {
			arrowClass: 'stylish-select-caret',
			hiddenClass: 'stylish-select-hidden',
			placeholderClass: 'stylish-select-placeholder',
			selectClass: null,
			wrapperClass: 'stylish-select'
		};

		var api = {
			init: function($elem) {
				if ($elem.hasClass(config.hiddenClass) || $elem.is('[multiple]')) {
					return;
				}

				// hide the select dropdown
				$elem.addClass(config.hiddenClass).addClass(config.selectClass).attr({
					'aria-hidden': 'hidden'
				});

				// wrapper for select dropdown and other elements
				var $wrapper = $(document.createElement('div')).addClass(config.wrapperClass).insertAfter($elem);

				// placeholder to display the selected value
				var $placeholder = $(document.createElement('input')).attr({
					type: 'text',
					name: $elem.attr('name'),
					placeholder: $elem.find('option[value=""]').text().trim(),
					'aria-label': $elem.attr('aria-label'),
					'aria-labelledby': $elem.attr('aria-labelledby')
				}).prop({
					required: $elem.prop('required'),
					readonly: true,
					disabled: true
				}).addClass('form-control ' + config.placeholderClass).appendTo($wrapper);
				if ($elem.hasClass('form-control-sm')) {
					$placeholder.addClass('form-control-sm');
				}

				// dropdown arrow
				$(document.createElement('span')).addClass(config.arrowClass).appendTo($wrapper);

				// update placeholder and bind event
				$elem.prependTo($wrapper);
				api.refresh($elem);
				$elem.on('change', function() {
					api.refresh($elem);
				}).closest('form').on('reset', function() {
					setTimeout(function() {
						api.refresh($elem);
					});
				});
			},
			refresh: function($elem) {
				if (!$elem.hasClass(config.hiddenClass)) {
					api.init($elem);
				}
				if ($elem.val() == '') {
					var label = '';
				} else {
					var label = $elem.find('option[value="' + $elem.val() + '"]').text().trim();
				}
				$elem.siblings('.' + config.placeholderClass).attr({
					placeholder: $elem.find('option[value=""]').text().trim()
				}).val(label);
			}
		};

		$(this).each(function() {
			opts = opts || 'init';
			if (opts.constructor == Object) {
				$.extend(true, config, opts);
				api.init($(this));
			} else if (api[opts] !== undefined) {
				api[opts]($(this));
			}
		});

		return(this);
	};
})(jQuery);
