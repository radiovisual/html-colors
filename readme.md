# html-colors [![Build Status](https://travis-ci.org/radiovisual/html-colors.svg?branch=master)](https://travis-ci.org/radiovisual/html-colors)

> Get a list of all the HTML and CSS color names and their hex values.

The color list is just a [JSON file](html-colors.json) and can be used wherever.

## Install

```
$ npm install --save html-colors
```

## Usage

```js
const htmlColors = require('html-colors');

// Get an object with all color names and hex values
htmlColors.all();
//=> {lightgreen: '#90EE90', mediumpurple: '#9370DB',...}

// Get an array of all the color names
htmlColors.names();
//=> ['lightgreen', 'mediumpurple', 'darkviolet', ...]

// Get the hex color from a color name
htmlColors.hex('pink');
//=> '#FFC0CB'

// Get a random HTML color name
htmlColors.random();
//=> 'antiquewhite'

```


## API

### .all()

Get an object with all the HTML color names and their HEX values.

```js
htmlColors.all();
//=> {lightgreen: '#90EE90', mediumpurple: '#9370DB',...}
```

### .names()

Get an array with all the HTML color names.

```js
htmlColors.names();
//=> ['lightgreen', 'mediumpurple', 'darkviolet', ...]
```

### .hex(colorname)

Get the hexadecimal color code from a color name.

Input Type: `string`<br/>

```js
htmlColors.hex('hotpink');
//=> '#FF69B4'
```

### .random()

Get a random HTML color name string.

```js
htmlColors.random();
//=> 'peachpuff'
```
## Contributions

Please feel free to open an issue or send a pull request. Contributions are always
welcome.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
