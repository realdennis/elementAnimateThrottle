# element animate throttle

This library is an plugin for HTML element animate, it will provide a `animateThrottle` method, and you can call it everytime, it will auto `throttle` by previous animation finish.

## Why use this?

Since we could apply the same keyframe again and agian, but it you don't want to see the bounce of the animation occurs, we should check the animation state is `running` or `pause`, or you need to implement a `throttle` function to prevent the animate bounce.

## Installation

```sh
$ yarn add element-animate-throttle
```
## Usage
The `elementAnimateThrottle` function will plug the `animateThrottle` method in element you passed in, it will not influence all element prototype.

```javascript
import elementAnimateThrottle from 'element-animate-throttle';

const el = document.querySelector('div#target');
elementAnimateThrottle(el);

el.animateThrottle([/*keyframe*/],{/*options*/}); // sane as the el.animate

```

## Apply all element (If you really want)

```javascript
import elementAnimateThrottle from 'element-animate-throttle';

elementAnimateThrottle(Element.prototype);

const el = document.querySelector("div#render"); 
// Even it render after you call elementAnimateThrottle
// el will inherit from Element.prototype

el.animateThrottle([/*keyframe*/],{/*options*/});
```

## License
MIT © 2019 realdennis