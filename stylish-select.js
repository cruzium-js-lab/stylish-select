/**
 * Stylish Select
 * @version 0.1.6
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
		selectClass: undefined,
		wrapperClass: 'stylish-select'
	};
	Object.assign(settings, opts);

	this.init = function() {
		if (elem.tagName.toLowerCase() != 'select' || elem.hasAttribute('multiple') || elem.classList.contains(settings.hiddenClass)) {
			return;
		}
		
		// hide the select dropdown
		elem.classList.add(settings.hiddenClass);
		if (settings.selectClass) {
			elem.classList.add(settings.selectClass);
		}
		elem.setAttribute('aria-hidden', 'hidden');

		// wrapper for select dropdown and other elements
		var wrapper = document.createElement('div');
		wrapper.classList.add(settings.wrapperClass);
		elem.parentNode.insertBefore(wrapper, elem);
		wrapper.appendChild(elem);

		// placeholder to display the selected value
		var placeholder = document.createElement('input');
		placeholder.setAttribute('type', 'text');
		placeholder.required = elem.required;
		placeholder.readonly = placeholder.disabled = true;
		placeholder.classList.add('form-control', settings.placeholderClass);
		if (elem.classList.contains('form-control-sm')) {
			placeholder.classList.add('form-control-sm');
		}
		if (elem.getAttribute('aria-label')) {
			placeholder.setAttribute('aria-label', elem.getAttribute('aria-label'));
		}
		if (elem.getAttribute('aria-labelledby')) {
			placeholder.setAttribute('aria-labelledby', elem.getAttribute('aria-labelledby'));
		}
		wrapper.appendChild(placeholder);

		// dropdown arrow
		var arrow = document.createElement('span');
		arrow.classList.add(settings.arrowClass);
		wrapper.appendChild(arrow);

		// update placeholder and bind event
		this.refresh();
		elem.addEventListener('change', function(e) {
			this.refresh();
		}.bind(this));
		if (elem.getAttribute('form')) {
			var form = document.getElementById(elem.getAttribute('form'));
		} else {
			var form = elem.closest('form');
		}
		if (form) {
			form.addEventListener('reset', function(e) {
				setTimeout(function() {
					this.refresh();
				}.bind(this));
			}.bind(this));
		}
		if (window.MutationObserver) {
			new MutationObserver(function(mutations, observer) {
				if (elem.querySelector('option[value="' + cachedValue + '"]')) {
					elem.value = cachedValue;
				} else {
					elem.selectedIndex = 0;
					this.refresh();
				}
			}.bind(this)).observe(elem, {
				childList: true
			});
		}

		// assign this to the select dropdown
		elem.stylishSelect = this;
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
		placeholder.value = label;
		if (elem.querySelector('option[value=""]')) {
			placeholder.placeholder = elem.querySelector('option[value=""]').textContent.trim();
		}
	};

	this.init();
};
