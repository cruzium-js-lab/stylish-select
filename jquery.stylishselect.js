/**
 * Stylish Select
 * @version 0.1.3
 * @author Tony Leung <tony.leung@cruzium.com>
 * @copyright Copyright (c) 2025 Cruzium Digital
 * @license https://opensource.org/license/gpl-3-0/ GPL-3.0-only
 */

'use strict';

window.StylishSelect = window.StylishSelect || function(elem, opts) {
	var settings = {
		arrowClass: 'stylish-select-caret',
		hiddenClass: 'stylish-select-hidden',
		placeholderClass: 'stylish-select-placeholder',
		selectClass: null,
		wrapperClass: 'stylish-select'
	};
	Object.assign(settings, opts);

	this.init = function() {
		if (elem.classList.contains(settings.hiddenClass) || elem.hasAttribute('multiple')) {
			return;
		}
		
		// hide the select dropdown
		elem.classList.add(settings.hiddenClass, settings.selectClass);
		elem.setAttribute('aria-hidden', 'hidden');

		// wrapper for select dropdown and other elements
		var wrapper = document.createElement('div');
		wrapper.classList.add(settings.wrapperClass);
		elem.parentNode.insertBefore(wrapper, elem);
		wrapper.appendChild(elem);

		// placeholder to display the selected value
		var placeholder = document.createElement('input');
		placeholder.setAttribute('type', 'text');
		placeholder.setAttribute('aria-label', elem.getAttribute('aria-label'));
		placeholder.setAttribute('aria-labelledby', elem.getAttribute('aria-labelledby'));
		placeholder.required = elem.required;
		placeholder.readonly = placeholder.disabled = true;
		placeholder.classList.add('form-control', settings.placeholderClass);
		wrapper.appendChild(placeholder);
		if (elem.classList.contains('form-control-sm')) {
			placeholder.classList.add('form-control-sm');
		}

		// dropdown arrow
		var arrow = document.createElement('span');
		arrow.classList.add(settings.arrowClass);
		wrapper.appendChild(arrow);

		// update placeholder and bind event
		this.refresh();
		elem.addEventListener('change', function(e) {
			this.refresh();
		}.bind(this));
		elem.closest('form').addEventListener('reset', function(e) {
			setTimeout(function() {
				this.refresh();
			}.bind(this));
		}.bind(this));
	};

	this.refresh = function() {
		if (!elem.classList.contains(settings.hiddenClass)) {
			this.init();
		}
		if (elem.value == '') {
			var label = '';
		} else {
			var label = elem.querySelector('option[value="' + elem.value + '"]').textContent.trim();
		}
		var placeholder = elem.parentNode.querySelector('.' + settings.placeholderClass);
		placeholder.placeholder = elem.querySelector('option[value=""]').textContent.trim();
		placeholder.value = label;
	};

	this.init();
};

(function($) {
	$.fn.stylishSelect = function(args) {
		$(this).each(function() {
			args = args || 'init';
			if (args.constructor == Object) {
				$(this).data('stylish-select', new StylishSelect(this, args));
			} else {
				var instance = $(this).data('stylish-select') || new StylishSelect(this);
				instance[args] !== undefined && instance[args]();
			}
		});
		return(this);
	};
})(jQuery);
