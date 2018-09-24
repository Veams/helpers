[//]: # ({{#wrapWith "content-section"}})

[//]: #     ({{#wrapWith "grid-row"}})
[//]: #         ({{#wrapWith "grid-col" colClasses="is-col-tablet-l-8"}})

# Veams Helpers

A simple helpers library categorized in: 
 
 - Array
 - Browser
 - Detection
 - Function
 - Object
 - Operator
 - String
 - Utility
 
 **TypeScript is supported as well!**
 
-------------------
 
## Installation

### NPM

``` bash 
npm install @veams/helpers --save
```

### Yarn 

``` bash 
yarn add @veams/helpers
```

## Usage

Just import the helper you need: 

``` js
import transitionEnd from '@veams/helpers/lib/detection/transition-end';
```

or the whole library 

``` js
import * as helpers from '@veams/helpers';
```
-------------------

## Helpers in Detail

### Array Helpers

#### `forEach(array, callback, scope)`

* @param {Array} array - array of objects
* @param {function} callback - callback function
* @param {string} scope - scope of function

Simple forEach method which can be used to iterate over an array.

#### `indexOf(array, item)`

* @param {Array} array - array in which we search for
* @param {Object} item - item which will be searched

Find index of a specific item in an array.

### Browser Helpers

#### `checkElementInContext(elem, context)`

* @param {Object} elem - Element, which will be checked.
* @param {Object} context - Context element, in which our element could persists.

Check if element is in a specific context and return state as boolean.

#### `getParamFromUrl(url, param)`

* @param {String} url - given url
* @param {String} param - parameter (name)

Get value of parameter for given url.

#### `querySelectorArray(sel, _context_)`

* @param {String} elem - Required: selector
* @param {Object} [context] - Optional: context

Get dom elements in an array in a specific context. If context is not provided it uses document as context.

#### `updateUrl(url, params)`

* @param {String} url - url on which parameters should be added / updated
* @param {Object} params - parameters (name/value)

Add/Update multiple parameters for given url and returns a resulting URL string.

### Detection Helpers

#### `animationEndEvent()`

Detect animationend event.

#### `detectSwipe(el, threshold)`

* @param {Object} el - element to detect swipes on
* @param {Number} threshold - threshold for swipe (in px)

Detect swipe gestures.

#### `isInViewport(elem, useBounds)`

* @param {Object} elem - Object, which we want to check
* @param {boolean} useBounds - if true, whole element must be visible

Check if element is in viewport.

#### `isTouch()`

Touch detection helper which returns a boolean.

#### `isOffscreen(elem)`

* @param {Node} elem - Element to check

Returns a number, if element is offscreen -1 for top, 1 for bottom, 0 otherwise.

#### transitionEndEvent()

Detect transition end event.

### Function Helpers

#### `methodExtend(to, from, methodName)`

* @param {Object} to - view which will be extended.
* @param {Object} from - methods which comes from mixin.
* @param {String} methodName - function name.

Helper method to extend an already existing method.

#### `mixin(from, _methods_ = ['initialize', 'render'])`

* @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our class
* @param {Array} [methods] - Array of method names which will be extended.

Merge method functions. As second paramater you can provide an array of method names which will be extended.

### Object Helpers

#### `extend(a, b)`

* @param {Object} a - object which will be extended.
* @param {Object} b - object which extending a.

Simple extend method to extend the properties of the object `a` with `b`. It overrides existing values of `a`.

#### `defaults(a, b)`

* @param {Object} a - object which will be extended.
* @param {Object} b - object which extending a.

Simple extend method to extend the properties of the object `a` with `b`. It keeps existing values of `a`.

### Operator Helpers

#### `throttle(func, wait, immediate)`

* @param {function} func - Function which will be executed.
* @param {number} wait - number to wait in milliseconds.
* @param {boolean} immediate - execute function immediately.

Throttle method for resize events and more.

### String Helpers

#### `capitalizeFirstLetter(str)`

* @param {String} str - String where first char is upper cased

Capitalize first character in string. 

#### `hyphenate(str)`

* @param {String} str - String 

String which will be hyphenated by replacing white space and lower case the characters.

#### `toCamelCase(str)`

* @param {String} str - String which will be camelcased

CamelCase strings by replacing hyphens, white space and points.

### Utility Helpers

#### `makeId(segments = 1)`

* @param {Number} [segments=1] - number of segments of generated id (segments consist of 10 digits, separated by '-').

Generates numeric id and returns a string.

#### `regExp(str)` 

* @param {string} regEx - Regular Expression

Return a new RegExp.

-------------------

That's it, have fun!

[//]: #         ({{/wrapWith}})
[//]: #     ({{/wrapWith}})

[//]: # ({{/wrapWith}})