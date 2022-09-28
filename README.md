# sariku.js

Manages your canvas animation goodies for you

## Why?

Because every time i start a new thing, i write the same code over and over again. So let's make a library that does that for me

## How?

Just include the sariku.js file in your project (after your own code)

## Wtf does it even do?

Make a canvas html object, with the canvas id, optionally, you can also give it parameter="" for which options are fullscreen (makes the canvas the size of the screen), or square (makes the canvas a big ass square)

After this it also creates a ctx variable that you can start referencing in your code without needing to do canvas.getContext("2d")

Optionally if you define a frame function, it will call that every frame. Add a dt parameter and it will also give you delta time :D

## Ok, but why would i add this?

Good question... anyways;
There's plenty of other features that come with it.

### Useful general case use functions

Functions like Remap, Clamp, getRandom...

Very simple and small functions that are useful very often (idk why they don't come with js tbh)

### Other classes

Vector2, Vector3 (in the works lol), audio handling classes...

Apart from just holding values they come with functions in them for easy use (normiziling vector, get lenght of vector etc)

## **Spend less time coding repetitive code, and get straight into building your next project!**

### Wow you are really selling this aren't you?

## Nah it's completly free!

<iframe src="docs/getLength/index.html"></iframe>
