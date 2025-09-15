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

| Name | Type | Default | Description |
|------|------|---------|-------------|
| arrowClass | *string* | `'stylish-select-caret'` | The plugin ships with classes `stylish-select-arrow` and `stylish-select-caret` for a choice of arrow and caret respectively. |
| hiddenClass | *string* | `'stylish-select-hidden'` |  |
| placeholderClass | *string* | `'stylish-select-placeholder'` |  |
| selectClass | *string* | `undefined` |  |
| wrapperClass | *string* | `'stylish-select'` |  |

## Methods

### `refresh()`: *void*

Refresh the placeholder element to reflect the latest value.

## Limitations

1. In order to make the plugin works correctly, each `<option>` MUST contain a `value` attribute.
2. Multiple select (i.e. `<select multiple>`) is currently not supported.
