# Stylish Select

## Dependencies

This plugin requires no dependencies.

## Usage

*Include CSS and JS files*
```HTML
<link rel="stylesheet" type="text/css" href="https://cdn.cruzium.info/stylish-select/latest/stylish-select.min.css" />
<script type="text/javascript" src="https://cdn.cruzium.info/stylish-select/latest/stylish-select.min.js"></script>
```
or use
```HTML
<script type="text/javascript" src="https://cdn.cruzium.info/stylish-select/latest/jquery.stylishselect.min.js"></script>
```
if opt for jQuery syntax.

*HTML Markup*
```HTML
<select name="foo" id="foo">
	<option value="">Please select</option>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
```
In short, just use it like a normal select dropdown.

*Vanilla JS*
```JS
var instance = new StylishSelect(document.getElementById('foo'));
```

*jQuery*
```JS
$('#foo').stylishSelect();
```

## Options

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>arrowClass</td>
			<td>string</td>
			<td>'stylish-select-caret'</td>
			<td>The plugin ships with classes `stylish-select-arrow` and `stylish-select-caret` for a choice of arrow and caret respectively.</td>
		</tr>
		<tr>
			<td>hiddenClass</td>
			<td>string</td>
			<td>'stylish-select-hidden'</td>
			<td></td>
		</tr>
		<tr>
			<td>placeholderClass</td>
			<td>string</td>
			<td>'stylish-select-placeholder'</td>
			<td></td>
		</tr>
		<tr>
			<td>selectClass</td>
			<td>string</td>
			<td>undefined</td>
			<td></td>
		</tr>
		<tr>
			<td>wrapperClass</td>
			<td>string</td>
			<td>'stylish-select'</td>
			<td></td>
		</tr>
	</tbody>
</table>

## Methods

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>Return</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>refresh</td>
			<td>Refresh the placeholder element to reflect the latest value.</td>
			<td>void</td>
		</tr>
	</tbody>
</table>

## Limitations

1. In order to make the plugin works correctly, each `<option>` MUST contain a `value` attribute.
2. Multiple select (i.e. `<select multiple>`) is currently not supported.
